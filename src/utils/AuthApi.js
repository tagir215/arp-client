import { baseURLServer } from '../config';
import { getJwtToken } from './CookieHelper';

export async function checkAuthenticationStatus(){
    const url = baseURLServer + "/api/v1/user/status";
    try{
        const response = await fetch(url,{
            method:"GET",
            headers:{
                "Authorization": `Bearer ${getJwtToken()}`
            }
        });
        return response.ok;
    }catch(error){
        console.log("failed to check status: ",error);
        return false;
    }
}