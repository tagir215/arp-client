import {baseURLServer } from '../config';

export const fetchComputers = async (type,tier,os) => {
    try {
        const url = baseURLServer + "/api/v1/getComputers/";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ type: type, tier: tier, os: os })
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log("Error fetching products:", error);
    }
}