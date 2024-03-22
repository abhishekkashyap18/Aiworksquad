import React from 'react';
import { CiEdit } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineDeleteForever } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { CiShare1 } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { LuShieldCheck } from "react-icons/lu";
import { FaHistory } from "react-icons/fa";

function Sidebar() {
  return (
    <div className=' hidden sm:flex flex-col mx-1 my-2 text-center  shadow-lg shadow-gray-400 justify-between w-56 h-3/3 '>
        <div>
            <button className='border border-black text-center w-52 my-2 h-9'>+ New Chat</button>
            <div className='flex flex-row justify-center'>
                <FaHistory className='mt-1 mr-1'/>
                <p className=''>History</p>
            </div>
            <ul className=' h-32 w-56 text-start my-4 mx-1'>
                <li className='flex flex-row'>
                    <FaRegMessage className='my-1 mx-1'/>
                    <p className='mb-1 mx-1'>New chat</p>
                    <CiEdit className='my-1 ml-20'/>
                    <MdOutlineDeleteForever className='my-1'/>
                </li>
                <li className='flex flex-row'>
                    <FaRegMessage className='my-1 mx-1'/>
                    <p className='mb-1 mx-1'>What is marketing</p>
                    <CiEdit className='my-1 ml-4'/>
                    <MdOutlineDeleteForever className='my-1'/>
                </li>
                <li className='flex flex-row'>
                    <FaRegMessage className='my-1 mx-1'/>
                    <p className='mb-1 mx-1'>Give me a list of..</p>
                    <CiEdit className='my-1 ml-6'/>
                    <MdOutlineDeleteForever className='my-1'/>
                </li>
                <li className='border border-black w-52 rounded-md shadow-xl shadow-gray-300 my-4 text-center'>Give me a list of marketing agencies near me in 5km </li>
            </ul>
        </div>
    
        <div>
            <ul className='h-32 w-52 text-start'>
                <li className='flex flex-row '>
                    <AiOutlineUserAdd className='my-1 mr-3 ml-4'/>
                    <p>Upgrade to plus</p>
                </li>
                <li className='flex flex-row '>
                    <CiShare1 className='my-1 mr-3 ml-4'/>
                    <p>Updates & FAQ</p>
                </li>
                <li className='flex flex-row '>
                    <FaRegEdit className='my-1 mr-3 ml-4'/>
                    <p>Terms and condition</p>
                </li>
                <li className='flex flex-row '>
                    <LuShieldCheck className='my-1 mr-3 ml-4'/>
                    <p>Privacy Policy Page</p>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Sidebar;
