"use client"
import React, { useEffect, useState } from 'react';

const listbh = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch('http://localhost:3000/api/data-address');
        const data = await res.json();
        setData(data);
      };
  
      fetchData();
      
    }, []);
    
    
    
  return (
    <div className='mt-10'>
    
      <table className='min-w-full table-auto '>
        <thead className=' '>
            <tr className='bg-indigo-600 uppercase '>
            
                <th className='px-10 py-2 '>
                    <span className='text-white'> STT  </span>
                </th>
                <th className='px-10 py-2'>
                    <span className='text-white'> HÃNG  </span>
                </th>
                <th className='px-10 py-2'>
                    <span className='text-white'>SẢN PHẨM GỬI  </span>
                </th>
                <th className='px-10 py-2'>
                    <span className='text-white'>  ĐỊA CHỈ  </span>
                </th>
                {/* <th className='px-10 py-2'>
                    <span className='text-white'> Action  </span>
                </th> */}
            </tr>
        </thead>
        
        <tbody>
        {/* {
          data.map((item, i) =>(
            <div key={i}>
            {item.hang}
            </div>

          ))
        } */}
        {   
                        Array.isArray(data) && data.map((item, i) => {
                          return(

             <tr className='bg-gray-20  border-b-2 '>
                <td className='px-10 py-2  '>
                    <span className='text-start ml-2  text-gray-700'>{i+1}</span>
                </td>
                <td className='px-5 p-2 text-gray-700'>
                    <span >{item.hang}</span>
                </td>
                <td className='py-2'>
                    <span className=' text-gray-700 text-start uppercase '>{item.sanphamgui}</span>
                </td>
                <td className=' text-gray-700 text-start'>
                    <span>{item.diachi}</span>
                </td>
            
                    {/* <button>
                        <a className="group relative inline-block overflow-hidden border border-indigo-600 px-4 py-2 focus:outline-none focus:ring" href="#">
                            <span className="absolute inset-y-0 right-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

                            <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                                Xem
                            </span>
                        </a>
                    </button> */}
                
            </tr>
            
        
            
        ) 
    })
    }
      
    
    
        </tbody>
    </table>
    </div>
  )
}

export default  listbh

