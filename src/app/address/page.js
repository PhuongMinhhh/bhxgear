
import Header from '../components/header'
import ListBH from '../components/bh/listbh'
import Search from '../components/search'
const page = () => {
  
  return (
    <>
    <div className="mx-auto ">
      <Header/>
      <div className="flex justify-end m-2 ">
       
        <Search/>
      </div>
      <ListBH/> 
      
    </div>
    </>
  )
}

export default page
