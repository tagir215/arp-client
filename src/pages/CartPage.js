import React, { memo, useEffect, useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import { baseURLServer } from '../config';
import { setCookie } from '../utils/CookieHelper';
import LoadingScreen from '../components/LoadingScreen';

const CartPage = memo(() => {

    const [data, setData] = useState(null);
    async function fetchData(){
        const url = baseURLServer + '/api/v1/cart/view';
        const cookie = setCookie();
        const requestOptions = {
            credentials: 'include', 
            headers: {
                'Accept': 'application/json, text/plain, */*',
            },
        };
        try{
            const response = await fetch(`${url}?cookie=${cookie}`,requestOptions)
            const data = await response.json();
            setData(data);
        }catch(error){
            console.log("error loading cart items: ",error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div>
        <Header/>
        {data && 
            <Cart products={data}/>
        }
        {!data && 
            <LoadingScreen/> 
        }
        <Footer/>
    </div>
  )
})

export default CartPage