import React, { memo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {baseURLServer } from '../config';
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingScreen from "../components/LoadingScreen";
import Filter from "../components/Filter";
import { setSortOption, setComputerInfo, setProducts } from '../redux/GridSlice';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComputers } from '../utils/ComputerApi';

const GridPage = memo(() => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const sortOption = useSelector(state=>state.gridPageState.sortOption);
    const computerInfo = useSelector(state=>state.gridPageState.computerInfo);
    const products = useSelector(state=>state.gridPageState.products);
    const dispatch = useDispatch();

    function setTheSortOption(option){
        dispatch(setSortOption(option));
    }
    function setTheComputerInfo(info){
        dispatch(setComputerInfo(info));
    }
    useEffect(()=>{
        const type = queryParams.get("type");
        const tier = queryParams.get("tier");
        const os = queryParams.get("os");
        dispatch(setComputerInfo({ type: type, tier: tier, os: os }));
    },[])

    useEffect(() => {
        console.log("setting info ",computerInfo)
        const fetchComps = async () =>{
            const result = await fetchComputers(computerInfo.type,computerInfo.tier,computerInfo.os) ;
            dispatch(setProducts(result));
        }
        fetchComps();
    }, [computerInfo]);



    return (
        <div>
            <Header />
            <Filter setSortOption={setTheSortOption} setComputerInfo={setTheComputerInfo}/>
            {products &&
                <ProductGrid products={products} computerInfo={computerInfo} sortOption={sortOption} />
            }
            {!products &&
                <LoadingScreen />
            }
            <Footer />
        </div>
    )
})

export default GridPage