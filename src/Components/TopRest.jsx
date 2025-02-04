import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
import Card from "./Card.jsx";
import react, { useState } from 'react'
import RestData from '../../FoodData/TopRestData.js';
import Detail from "./Detail.jsx";

const TopRest = () =>{

     
        const [slideo,SetSlide] = useState(0);

        const nextSlide = () =>{
            
            if((3-RestData.length)>slideo) return (false);
            console.log(slideo);
            console.log(slideo*2);
            SetSlide(slideo-2);
        }
        const prevSlide = () =>{
            if(0==slideo) return (false);
            SetSlide(slideo+2);
        }


return ( <div className='w-[75%] mx-auto  mt-4 overflow-hidden border-b-1 border-gray-400'>
            <div className='flex items-center  justify-between'>
                    <div className='font-bold text-[24px]' style={{fontFamily:"Poppins"}}   >Top restaurant chains in Kanpur</div>
                <div className='flex'>
                    <div className='text-gray-400 text-[40px] hover:opacity-[0.6] cursor-pointer'><IoArrowBackCircle onClick={prevSlide} /></div> 
                     <div className='text-gray-400 text-[40px] hover:opacity-[0.6] cursor-pointer'><IoArrowForwardCircle onClick={nextSlide}/></div>
                </div>
                
            </div>
            <div  className="flex gap-7 duration-800 mt-[20px]" style={{transform: `translateX(${slideo*305}px)`}} >
                {
                    RestData.map((d,i)=>{
                        return <div className="cursor-pointer hover:scale-95 duration-200"><Card {...d}  style={{transform: `translateX(${slideo*305}px)`}}  key={i}/>
                            <div> <Detail  {...d}/> </div>
                        </div>
                                
                    })
                }
            </div>
            
        </div>
        )}  

        export default TopRest;
      
        