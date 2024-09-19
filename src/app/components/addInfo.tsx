"use client"
import React from 'react'
import { useReducer } from 'react'
import Success from '../components/success'
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
    if(Object.keys(formData).length > 0) return <Success message={'Thêm thành công!'}></Success>
   
    
  return (
    <div >
      <form action="" className="grid lg:grid-cols-5 w-9/6 gap-5" onSubmit={handleSubmit} >
        <div className='input-type mt-4'>
            <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <input  onChange={setFormData} name='sophieu' type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
                placeholder=""/>
                <span
                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                    Số phiếu
                </span>
            </label>
        </div>
        <div className='input-type mt-4'>
            <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <input  onChange={setFormData} name='ngaynhan' type="date" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
                placeholder=""/>
                <span
                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                    Ngày nhận
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
      
      <input onChange={setFormData}  type="radio" name='loai' value="khachle"  id="DeliveryStandard" className="size-5 border-gray-300 text-indigo-600"/>
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
    <input onChange={setFormData}  type="radio" name='loai'  value="congty" id="DeliveryPriority" className="size-5 border-gray-300 text-indigo-600"/>
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
                <input onChange={setFormData} name='model' type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
                placeholder=""/>
                <span
                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                    Model 
                </span>
            </label>
        </div>
        <div className='input-type mt-4'>
            <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <input onChange={setFormData} name='tinhtrang' type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
                placeholder=""/>
                <span
                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                    Tình Trạng
                </span>
            </label>
        </div>
        <div className='input-type mt-4'>
            <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <input onChange={setFormData} name='sncu' type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
                placeholder=""/>
                <span
                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                    SN Cũ
                </span>
            </label>
        </div>
        <div className='input-type mt-4'>
            <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <input onChange={setFormData} name='snmoi' type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
                placeholder=""/>
                <span
                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                    SN Mới 
                </span>
            </label>
        </div>
        <div className='input-type mt-4'>
            <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <input onChange={setFormData} name='trungtambaohanh' type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2" placeholder="Username"/>
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Trung tâm bảo hành
                </span>
            </label>
        </div>
        <div className='input-type mt-4'>
            <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <input onChange={setFormData} name='ngaydi' type="date" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
                placeholder="Username"/>
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Ngày đi
                </span>
            </label>
        </div>
        <div className='input-type mt-4'>
            <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <input onChange={setFormData} name='ngayve' type="date" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
                placeholder="Username"/>
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Ngày về
                </span>
            </label>
        </div>
        <div className='flex justify-center mt-1'>
        <button  className='w-full border-sm p-2 rounded-sm bg-indigo-600 text-white hover:bg-indigo-700 hover:text-gray-200'>Thêm </button>
        </div>

       
            
        
      </form>
    </div>
  )
}

export default  addinfo 
