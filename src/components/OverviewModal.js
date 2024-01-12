import React, { memo } from 'react';
import { baseURLServer } from "../config";
import { setCookie } from '../utils/CookieHelper';

const OverviewModal = memo(({ modalInfo, close, icons, computerInfo }) => {

  function handleOnClick() {
    close();
  }

  function handleModalClick(event){
    event.stopPropagation();
  }

  function openLink(url){
    window.open(url);
  }

  async function addToCart(){
    const url = baseURLServer + "/api/v1/cart/add/";
    const cookie = setCookie();
    const components = modalInfo.product.components;
    try{
      const response = await fetch(url, {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          motherboardId:components[0].id,
          caseId:components[1].id,
          gpuId:components[2].id,
          cpuId:components[3].id,
          cpuCoolerId:components[4].id,
          ramId:components[5].id,
          storageId:components[6].id,
          powerUnitId:components[7].id,
          os:computerInfo.os,
          osVersion:"",
          sessionId:cookie
        })
      })
      console.log(response);
      close();
    } catch(error){
        console.log("saving collection failed: ",error);
    }
  }

  return (
    <div>
      {modalInfo.active && (<div className="bg-black w-screen h-screen fixed inset-0 z-40 bg-opacity-70 overflow-y-scroll" onClick={handleOnClick}>
        <section className="flex justify-between w-3/4 bg-white mx-auto my-10 relative" onClick={(e) => handleModalClick(e)}>
          <img className="absolute right-0 top-0 w-6 cursor-pointer" src={process.env.PUBLIC_URL + "/x.png"} onClick={handleOnClick}></img>
          <section>
            {modalInfo.product.components.map((component, index) => {
              return <div onClick={() => openLink(component.url)} className="hover:opacity-50 cursor-pointer">
                <div className="flex items-center ">
                  <div className="bg-black p-2 w-16 h-16 flex items-center justify-center">
                    <img className="filter invert w-8" src={process.env.PUBLIC_URL + "/" + icons[index]} alt=""></img>
                  </div>
                  <div className="flex flex-col">
                    <span className="ml-5 text-xs">{component.name}</span>
                    <span className="ml-5 text-xs text-orange-600">{component.price+"$"}</span>
                  </div>
                </div>
              </div>
            })}
          </section>
          <section className="w-1/4 flex flex-col justify-center items-center">
            <div className="flex flex-col  bg-orange-200">
              <span>{"Type: "+computerInfo.type}</span>
              <span>{"Tier: "+computerInfo.tier}</span>
              <span>{"Operating System: "+computerInfo.os}</span>
            </div>
            <button className="bg-teal-600 rounded-full px-10 mt-10 text-white" onClick={addToCart}>SAVE</button>
          </section>
        </section>

      </div>)}
    </div>
  )
})

export default OverviewModal
