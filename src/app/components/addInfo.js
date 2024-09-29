"use client"
import React from 'react'
import { useReducer } from 'react'
import Success from './success'
import { TiDocumentAdd } from "react-icons/ti";

const formReducer = (state, event) => {
    return{
        ...state,
        [event.target.name]: event.target.value  
    }
}
const addinfo = () => {
    const [formData, setFormData] =useReducer(formReducer,{})
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.keys(formData).length == 0) return  console.log(`Don't have form data`)
        console.log(formData)
       
    
    }
    // if(Object.keys(formData).length > 0) return <Success message={'Thêm thành công!'}></Success>
   
    
  return (
    <div >
      <form action="" className="grid lg:grid-cols-3 w-9/6 gap-5 ml-10  " onSubmit={handleSubmit} >
        <div className='input-type mt-4'>
            <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <input  onChange={setFormData} name='sophieubh' type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
                placeholder=""/>
                <span
                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                    Số phiếu bảo hành
                </span>
            </label>
        </div>
        <div className='input-type mt-4'>
            <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <input  onChange={setFormData} name='khachahng' type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
                placeholder=""/>
                <span
                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                    Khách hàng
                </span>
            </label>
        </div>
        <div className='input-type mt-4'>
            <div className='form-check'>
                <fieldset className="grid grid-cols-2 gap-4">
  

  <div >
    <label htmlFor="DeliveryStandard"
      className="flex cursor-pointer justify-between gap-2 rounded-lg border border-gray-100 bg-white p-2 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-indigo-600 has-[:checked]:ring-1 has-[:checked]:ring-indigo-600"
    >
      
      <input onChange={setFormData}  type="radio" name='loai' value="khách lẻ"  id="DeliveryStandard" className="size-5 border-gray-300 text-indigo-600"/>
      <div>
        <p className="text-gray-700">Khách Lẻ</p>
      </div>
    </label>
  </div>

  <div>
    <label
      htmlFor="DeliveryPriority"
      className="flex cursor-pointer justify-between gap-4q rounded-lg border border-gray-100 bg-white p-2 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-indigo-500 has-[:checked]:ring-1 has-[:checked]:ring-indigo-500"
    >
    <input onChange={setFormData}  type="radio" name='loai'  value="Công ty" id="DeliveryPriority" className="size-5 border-gray-300 text-indigo-600"/>
      <div>
        <p className="text-gray-700">Công Ty</p>
      </div>
    </label>
  </div>
                </fieldset>
            </div>
        </div>
        <div className='input-type mt-4'>
            <label htmlFor="Username"  className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <input onChange={setFormData} name='diachi' type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
                placeholder=""/>
                <span
                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                    Địa chỉ
                </span>
            </label>
        </div>
        <div className='input-type mt-4'>
            <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <input onChange={setFormData} name='sanpham' type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
                placeholder=""/>
                <span
                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                    Sản phẩm
                </span>
            </label>
        </div>
        <div className='input-type mt-4'>
            <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <input onChange={setFormData} name='serialnumber' type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
                placeholder=""/>
                <span
                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                    Serial Number
                </span>
            </label>
        </div>
        <div className='input-type mt-4'>
            <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <input onChange={setFormData} name='loi' type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
                placeholder=""/>
                <span
                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                    Lỗi
                </span>
            </label>
        </div>
        <div className='input-type mt-4'>
            <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <input onChange={setFormData} name='ghichu' type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2" placeholder="Username"/>
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Ghi chú
                </span>
            </label>
        </div>
        <div className='input-type mt-4'>
            <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <input onChange={setFormData} name='trungtambaohanh' type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
                placeholder="Username"/>
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Trung tâm bảo hành
                </span>
            </label>
        </div>
        
        <div className='flex justify-start mt-1'>
        <button  className='w-1/2 flex justify-center  border-sm p-2 rounded-sm border border-current bg-indigo-600 text-white hover:bg-white  hover:text-indigo-700 hover:border-indigo-700'><span className='px-1'><TiDocumentAdd size={22}/></span></button>
        
 
        </div>

       
            
        
      </form>
    </div>
  )
}

export default  addinfo 
