import Image from "next/image";
import { MdOutlinePostAdd } from "react-icons/md";
import Schedulelist from "./components/schedulelist"
export default function Home() {
  return (
    <>
    
    <main className="">
    <div className="flex flex-col justify-center ">
    <Image className=" absolute m-5" src='https://file.hstatic.net/200000837185/file/logo-web-white-2_d77f90f6d67c47bea3c129624300ba8f.png' width={100} height={70}/>
      <h1 className="text-xl md:text-2xl text-white text-center font-bold py-10 bg-red-700 ">Bảo Hành</h1>
    </div>
      {/* <div className="container mx-auto flex justify-between py-5 border-b ">
        <div className="left flex gap-3">
          <button className="flex bg-blue-400 text-white p-2 rounded-md hover:bg-blue-600 ">
         Thêm lịch bảo hành <span className="px-1"><MdOutlinePostAdd size={20}/></span>
         </button>
        </div>
         
      </div> */}
      {/* schedule list */}  
      <div  >
      {/* <Schedulelist/>  */}
      </div>
    </main></>
    
  );
}
