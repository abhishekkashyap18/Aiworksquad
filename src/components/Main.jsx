import React from 'react';
import { LuPencil } from "react-icons/lu";
import { VscVerified } from "react-icons/vsc";
import { LuMessagesSquare } from "react-icons/lu";
import { PiShareLight } from "react-icons/pi";
import { TbFileDownload } from "react-icons/tb";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlineDuplicate } from "react-icons/hi";
import { VscSend } from "react-icons/vsc";
import { PiSealQuestion } from "react-icons/pi";

function Main({name}) {
  return (
    <div className=' flex flex-col justify-center items-center sm:p-2 sm:block'>
        <div className='border border-gray-400 my-2 p-1 px-4 shadow-sm shadow-gray-400 w-[90%] sm:w-3/4'>
            <h1 className='font-bold p-2'>Introduce yourself to AIWorkSquad</h1>
            <p className='p-2 flex flex-row text-gray-500'>Im Nithin CEO of an IT startup company in India 
                <span><LuPencil className='my-1 ml-2'/></span>            
             </p>
        </div>
        <div className='sm:w-3/4 flex justify-end my-5 w-[90%]' >
            <button className=' border border-cyan-500 sm:w-56 h-14 bg-cyan-500 rounded-md text-white flex flex-row justify-center items-center font-medium shadow-sm shadow-gray-400 w-48'>What is marketing?
                <span className=' font-medium'><VscVerified className='my-1 ml-2 text-lg'/></span>
            </button>
        </div>

        <div className='border-2 border-cyan-500 sm:w-2/3 my-3 p-1 rounded-md pl-6 py-3 mb-5 shadow-sm shadow-gray-400 w-[90%]'>
            <p className='flex flex-row text-cyan-500'><span className='py-1 mr-2 text-cyan-500'><LuMessagesSquare/></span>Marketing refers to the process fo promoting and selling products or services to customers. It involves researching customer needs and wants, developing products and services that meet those needs, pricing products and services appropriately, Creating marketing materials to promote products and services, and distributing those materials through various channels to reach potential customers, The ultimate goal of marketing is to generate interest and increase sales for a bussiness or organization.</p>
            <span className='flex flex-row justify-end gap-4 mr-12 py-2'>
                <HiOutlineDuplicate/>
                <PiShareLight/>
                <TbFileDownload/>
                <IoMailOutline/>
            </span>
        </div>

        <div className='flex justify-end sm:w-3/4 h-14 w-[90%]'>
            <p className='border border-cyan-500 rounded-md bg-cyan-500 sm:w-4/5 p-1 text-white flex flex-row font-medium shadow-sm shadow-gray-400 w-[80%]'>Give me a list of the top 5 digital marketing agencies near em who offers services like social media marketing, content marketing and influencer marketing 
            <span className='py-3 mr-12'><VscVerified className='text-lg'/></span>
            </p>
            
        </div>

        <div className='flex flex-row border border-gray-400 mt-4 justify-between sm:w-2/3 h-14 items-center p-2 text-cyan-500 shadow-sm shadow-gray-400 w-[90%]'>
            <span className='flex flex-row items-center ml-4  '>
                <PiSealQuestion className=' text-2xl'/>
            </span> 
            <input type="text" className='border-none w-[90%] outline-none placeholder:text-cyan-500' 
           placeholder={`Enter your ${name} query here`}
           /> 
            <span className='mr-3'><VscSend className='text-lg'/></span>
        </div>

        <p className='text-xs mt-7 ml-11'>Type your next question above or select one from the related question section</p>
      
    </div>
  );
}

export default Main;
