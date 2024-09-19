import AddInfo from "./addInfo";
import UpdateInfo from "./updateinfo";
const form = ()=>{
    const flag = true; 
    return(
        <div className='container mx-auto mt-5 mb-5'>
        {flag ? <AddInfo/> : <UpdateInfo/>}
        
        
        </div>
    )

}
export default form;