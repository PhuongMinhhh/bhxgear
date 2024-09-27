'use client'
import React, { useEffect, useState } from 'react';
import { MdEditNote } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";


const schedulelist=  () => {
    const [data, setData] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch('http://localhost:3000/api/data-infos');
        const data = await res.json();
        setData(data);
      };
  
      fetchData();
      
    }, []);
    
  return (
    <>
    <table className='min-w-full table-auto '>
        <thead className=''>
            <tr className='bg-indigo-600 uppercase '>
                <th className='px-10 py-2 '>
                    <span className='text-white'> STT  </span>
                </th>
                <th className='px-10 py-2'>
                    <span className='text-white'> Số phiếu  </span>
                </th>
                <th className='px-10 py-2'>
                    <span className='text-white'> Loại  </span>
                </th>
                <th className='px-10 py-2'>
                    <span className='text-white'>  Sản phẩm  </span>
                </th>
                <th className='px-10 py-2'>
                    <span className='text-white'> Action  </span>
                </th>
            </tr>
        </thead>
        
        <tbody>
        { Array.isArray(data) && data.map((info,i)=>{
            return (
                <tr key={i} className='bg-gray-20 text-center border-b-2'>
                <td className='px-10 py-2 '>
                    <span className='text-center ml-2 font-semibold'>{i+1}</span>
                </td>
                <td className='px-10 py-2'>
                    <span >
                        {info.sophieu}
                    </span>
                </td>
                <td className='py-2'>
                    <span className=' bg-green-500 rounded-full px-5 p-2 text-white'>{info.loai}</span>
                    
                </td>
                <td className='px-10 py-2'>
                    <span>{info.model}</span>
                </td>
            
                <td className='px-10 py-2 justify-around gap-5'>
                    <button>
                        <a className="group relative inline-block overflow-hidden border border-indigo-600 px-4 py-2 focus:outline-none focus:ring" href="#">
                            <span className="absolute inset-y-0 right-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

                            <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                                Xem
                            </span>
                        </a>
                    </button>
                </td>
            </tr>
            )
            
        })}
             
            
        
            
             
        </tbody>
    </table>
    </>

)}

export default schedulelist
