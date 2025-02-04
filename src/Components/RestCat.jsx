import Card from "./Card.jsx";
import RestData from '../../FoodData/TopRestData.js';
import Detail from "./Detail.jsx";
const RestCat=()=>{
 return (
<>
        <div className='w-[75%] mx-auto    overflow-hidden mt-9 '>
                    <div className='flex items-center  justify-between'>
                            <div className='font-bold text-[24px]' style={{fontFamily:"Poppins"}}   >Restaurants with online food Delivery in Kanpur</div>
                        
                        
                    </div>
                    <div className='grid grid-cols-4 mt-9 '>
                            {
                                RestData.map((d,i)=>{
                                    return <div className="  cursor-pointer flex-col hover:scale-95 duration-200">
                                        <div className="scale-80"><Card {...d} class key={i}/></div>
                                    <div className=" mt-[-20px] ml-[20px] w-[200px] text-ellipsis overflow-hidden"> <Detail  {...d}/> </div>
                                    
                                    </div>
                                })
                            }
                        </div>
                    </div>

</>

 );

}
export default RestCat;