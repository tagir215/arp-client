import React, { memo, useState } from 'react'
import {setCookie} from '../utils/CookieHelper';
import { baseURLServer } from '../config';

const ProductCard = memo(({ product, icons, computerInfo }) => {
    const [saving, setSaving] = useState(0);

    async function addToCart() {
        const url = baseURLServer + "/api/v1/cart/add/";
        const cookie = setCookie();
        console.log("interest")
        setSaving(1);
        const components = product.components;
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    motherboardId: components[0].id,
                    caseId: components[1].id,
                    gpuId: components[2].id,
                    cpuId: components[3].id,
                    cpuCoolerId: components[4].id,
                    ramId: components[5].id,
                    storageId: components[6].id,
                    powerUnitId: components[7].id,
                    os: computerInfo.os,
                    osVersion: "",
                    sessionId: cookie
                })
            })
            setSaving(2);
        } catch (error) {
            console.log("saving collection failed: ", error);
            setSaving(0)
        } 
    }


    return (
        <li className="border rounded-md border-gray-200 p-8 w-1/2 my-10 items-center flex flex-col">
            <div className="flex justify-between w-full">
                <div className="flex flex-col gap-6">
                    {product && product.components.map((component, index) => {
                        return <a className="flex items-center hover:bg-background2 cursor-pointer" key={index} href={component.url} target="_blank">
                            <img
                                src={icons[index]}
                                alt=""
                                className="w-8 mr-4 invert"
                            />
                            <dl className="mt-0.5 space-y-px text-[10px] text-text2">
                                <div>
                                    <dt className="inline text-text1">{"Name: "}</dt>
                                    <dd className="inline text-text2">{component.name}</dd>
                                </div>
                                <div>
                                    <dt className="inline text-text2">{"Price: "}</dt>
                                    <dd className="inline text-secondary text-md">{component.price + "$"}</dd>
                                </div>
                            </dl>
                        </a>
                    })}
                </div>
                <div className="bg-secondary bg-opacity-25 flex max-h-12 rounded-xl items-center px-4">
                    <div className="flex items-end">
                        <span className="text-secondary text-md mr-2">{"Total: "}</span>
                        <span className="text-secondary text-3xl">{product.combinedPrice + "$"}</span>
                    </div>
                </div>
            </div>
            {saving === 0 && 
                <button className="bg-secondary rounded-xl w-44 h-7 mt-10 mb-2" onClick={addToCart}>Save</button>
            }
            {saving === 1 &&
                <div className="flex justify-center items-center bg-secondary rounded-xl w-44 h-7 mt-10 mb-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-t-4 border-white-500"></div>    
                </div>
            }
            {saving === 2 && 
                <button className="bg-background2 rounded-xl w-44 h-7 mt-10 mb-2">Save</button>
            }
        </li>
    )

})

export default ProductCard