import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
import Card from "./Card.jsx";

const TopRest = () =>{
return ( <div className='w-[75%] mx-auto  mt-4  '>
            <div className='flex items-center  justify-between'>
                    <div className='font-bold text-[24px]' style={{fontFamily:"Poppins"}}   >Top restaurant chains in Kanpur</div>
                <div className='flex'>
                    <div className='text-gray-400 text-[40px] hover:opacity-[0.6] cursor-pointer'><IoArrowBackCircle /></div>
                    <div className='text-gray-400 text-[40px] hover:opacity-[0.6] cursor-pointer'><IoArrowForwardCircle /></div>
                </div>
                
            </div>
            <Card/>
            
        </div>
        )}  

        export default TopRest;