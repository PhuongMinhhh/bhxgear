import React from 'react'
import { MdEditNote } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

const schedulelist = () => {
  return (
    <table className='min-w-full table-auto'>
        <thead>
            <tr className='bg-gray-800'>
            <th className='px-10 py-1'>
                    <span className='text-gray-200'> STT  </span>
                </th>
                <th className='px-10 py-2'>
                    <span className='text-gray-200'> Ngày nhận  </span>
                </th>
                <th className='px-10 py-2'>
                    <span className='text-gray-200'> Nhận  </span>
                </th>
                <th className='px-10 py-2'>
                    <span className='text-gray-200'> Số phiếu  </span>
                </th>
                <th className='px-10 py-2'>
                    <span className='text-gray-200'> Model  </span>
                </th>
                <th className='px-10 py-2'>
                    <span className='text-gray-200'> S/N cũ   </span>
                </th>
                <th className='px-20 py-2'>
                    <span className='text-gray-200'> Tình trạng</span>
                </th>
                <th className='px-10 py-2'>
                    <span className='text-gray-200'> ngày đi   </span>
                </th>
                <th className='px-10 py-2'>
                    <span className='text-gray-200'> TTBH  </span>
                </th>
                
                <th className='px-10 py-2'>
                    <span className='text-gray-200'> Ngày gửi </span>
                </th>
                <th className='px-10 py-2'>
                    <span className='text-gray-200'> Ngày lấy </span>
                </th>
                <th className='px-10 py-2'>
                    <span className='text-gray-200'> Action</span>
                </th>
                
            </tr>
        </thead>
        <tbody>
            {/* Add rows here */}
            <tr className='bg-gray-20 text-center'>
                <td className='px-10 py-2 '>
                    <span className='text-center ml-2 font-semibold'>1</span>
                </td>
                <td className='px-10 py-2'>
                    <span >28/8/2024</span>
                </td>
                <td className='py-2'>
                    <span className=' bg-green-500 rounded-full px-5 p-2 text-gray-200'>Khách lẻ</span>
                    
                </td>
                <td className='px-10 py-2'>
                    <span>SBHGV24/BH24/006135</span>
                </td >
                <td className='px-10 py-2 text-justify '>
                    <span className='flex justify-center items-center'>Bộ điều khiển Rapoo Gamepad V600S Wireless Vibration Gamepad
                    </span>
                </td>
                <td className='px-10 py-2'>
                    <span>23945V600S00808</span>
                </td>
                <td className='px-10 py-2 text-justify '>
                    <span className='flex justify-center items-center'>Lỗi cần analog trái test qua app, 
                    Nhận gửi hãng thẩm định. Bảo hành lần 3</span>
                </td>
                <td className='px-10 py-2'>
                    <span>04/09/2024</span>
                </td>
                <td className='px-10 py-2'>
                    <span>PSD</span>
                </td>
                <td className='px-10 py-2'>
                    <span>04/09/2024</span>
                </td>
                <td className='px-10 py-2'>
                    <span>09/09/2024</span>
                </td>
                <td className='px-10 py-2 justify-around gap-5'>
                    <button className='cursor'>
                        <span className='px-1'><MdEditNote  size={22} color={"rgb(34,192,94)"}/></span>
                    </button>
                    <button className='cursor'>
                        <span className='px-1'><FaRegTrashAlt size={22} color={"rgb(185 28 28)"}/></span>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
  )
}

export default schedulelist
