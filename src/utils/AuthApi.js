import { baseURLServer } from '../config';
import { getJwtToken } from './CookieHelper';

export async function checkAuthenticationStatus(){
    const url = baseURLServer + "/api/v1/user/status";
    let token = getJwtToken();
    if(!token){
       token = "";
    }

    try{
        const response = await fetch(url,{
            method:"GET",
            headers:{
                "Authorization": `Bearer ${token}`
            }
        });
        return response.ok;
    }catch(error){
        console.log("failed to check status: ",error);
        return false;
    }
}


