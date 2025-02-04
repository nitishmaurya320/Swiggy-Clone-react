
import RestData from '../../FoodData/TopRestData.js';


const Card =(props)=> {
    
        
        return( <div className=" shrink-0  cursor-pointer  flex items-center justify-center" >
                        <div><img className=" shadow-md shadow-gray-800 w-[273px] h-[182px] object-cover rounded-2xl" src={props.FoodImage}></img>
                        {/* <span className="absolute text-2xl text-white font-bold  ">ITEMS AT 499</span>   */}
                        </div>
                        
                       
                         
                        </div>
                    )}

 
                    
               


export default Card;