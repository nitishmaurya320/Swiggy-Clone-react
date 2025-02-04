import { MdStars } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
const Detail=(props)=>{
    return( <div className="flex-col mt-[15px] ml-[15px] w-[270px] "style={{fontFamily:"Poppins"}} >
                        <div className="font-bold truncate">{props.FoodName}</div>
                         <div className="flex"><span className="text-2xl text-green-700">{<MdStars/>}</span><div className="flex justify-center items-center">{props.Rating}<span className="text-[10px]"><GoDotFill/></span><span className="font-semibold">{props.Time}</span></div></div>
                         <div className="text-[#686b78] truncate">{props.FoodCategory}</div>
                         <div className="text-[#686b78]">{props.Location} </div>
                         
                         </div>
                         
    );
 }
 export default Detail;