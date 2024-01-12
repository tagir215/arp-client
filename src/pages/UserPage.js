import React, { memo } from 'react'
import SectionCard from '../components/SectionCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { checkAuthenticationStatus } from '../utils/AuthApi';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';

const UserPage = memo(() => {
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();


    useEffect(()=>{
        async function check() {
            const auth = await checkAuthenticationStatus();
            setAuthenticated(auth);
            if(!auth){
                navigate('/login');
            }
        }
        check();
    },[navigate]);

    return (
        <div className="min-h-screen">
            {authenticated && 
            <>
            <Header />
            <div className="flex justify-center items-center flex-col py-32">
                <SectionCard section={{ title: "User Details" }} />
                <SectionCard section={{ title: "Cart" }} />
            </div>
            <Footer/>
            </>
            }
            {!authenticated && 
                <LoadingScreen/> 
            }
        </div>
    )
})

export default UserPage