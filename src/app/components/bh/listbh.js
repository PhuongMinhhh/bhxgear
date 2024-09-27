import React from 'react'
// fetch data from server

const getData = async()=>{
    let data = await fetch('http://localhost:3000/api/data-infos')
    data = await data.json()
    return data;
}
const listbh
 = async() => {
  const data = await getData();
  return (
    <div className='mt-10'>
      <table className='min-w-full table-auto '>
        <thead className=''>
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
             <tr className='bg-gray-20 text-center border-b-2'>
                <td className='px-10 py-2  '>
                    <span className='text-center ml-2  text-gray-700'>1</span>
                </td>
                <td className='px-10 py-2 text-gray-700'>
                    <span >
                    FPT SERVICE 
                    </span>
                </td>
                <td className='py-2'>
                    <span className='px-5 p-2 text-gray-700 '>RAZER GEAR, LAPTOP MSI</span>
                    
                </td>
                <td className='px-10 py-2 text-gray-700'>
                    <span>194/3 Nguyễn Trọng Tuyển, Phường 8, Phú Nhuận, Hồ Chí Minh</span>
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
            
        
            
             
        </tbody>
    </table>
    </div>
  )
}

export default  listbh

