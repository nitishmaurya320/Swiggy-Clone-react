import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
import RestData from '../../FoodData/TopRestData.js';
const TopRest = () =>{
return ( <div className='w-5/6 mx-auto min-w-[1000px] mt-4'>
            <div className='flex items-center  justify-between'>
                    <div className='font-bold text-[24px]'    >Top restaurant chains in Kanpur</div>
                <div className='flex'>
                    <div className='text-gray-400 text-[40px] hover:opacity-[0.6] cursor-pointer'><IoArrowBackCircle /></div>
                    <div className='text-gray-400 text-[40px] hover:opacity-[0.6] cursor-pointer'><IoArrowForwardCircle /></div>
                </div>
                
            </div>
            <div className="flex gap-8 mt-5 ">
                
                    {
                       RestData.map((item,index)=>{
                       return <div className=""><img className="w-[273px] h-[182px] object-cover rounded-2xl hover:w-[250px] hover:h-[150px]    " src={item.FoodImage}></img>
                       <div className="flex-col">
                        <div>{item.FoodName}</div>
                         <div>{item.Rating}{item.Time}</div>
                        {item.Location}</div>
                        </div>
                    })
                    }
               

                
            </div>
        </div>
        )}  

        export default TopRest;