import { MdStars } from "react-icons/md";
import RestData from '../../FoodData/TopRestData.js';
import { GoDotFill } from "react-icons/go";


const Card =()=> {
    return (
        <div className="flex gap-8 mt-5 overflow-hidden">
                
                    {
                       RestData.map((item,index)=>{
                       return <div className=" shrink-0 hover:scale-95 duration-200 cursor-pointer">
                        <div><img className=" shadow-md shadow-gray-800 w-[273px] h-[182px] object-cover rounded-2xl" src={item.FoodImage}></img>
                        {/* <span className="absolute text-2xl text-white font-bold  ">ITEMS AT 499</span>   */}
                        </div>
                        
                       <div className="flex-col mt-[15px] ml-[15px] "style={{fontFamily:"Poppins"}} >
                        <div className="font-bold">{item.FoodName}</div>
                         <div className="flex"><span className="text-2xl text-green-700">{<MdStars/>}</span><div className="flex justify-center items-center">{item.Rating}<span className="text-[10px]"><GoDotFill/></span><span className="font-semibold">{item.Time}</span></div></div>
                         <div className="text-[#686b78]">{item.FoodCategory}</div>
                         <div className="text-[#686b78]">{item.Location} </div>
                         </div>
                         
                        </div>
                    })
                    }
               

                
            </div>
    );
}
export default Card;