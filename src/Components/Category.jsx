import react, { useState } from 'react'
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
import FoodData from "../../FoodData/FoodData.js";



const Category=()=>{   
    const [slide,SetSlide] = useState(0);

    const nextSlide = () =>{
        if(FoodData.length-25==slide) return (false);
        console.log(slide);
        console.log(FoodData.length);
        SetSlide(slide-3);
    }
    const prevSlide = () =>{
        if(0==slide) return (false);
        SetSlide(slide+3);
    }

    return ( <div className='w-5/6 mx-auto min-w-[1000px]'>
        <div className='flex items-center  justify-between mt-3'>
                 <div className='font-bold text-[24px]'    >What's on your mind</div>
            <div className='flex'>
                <div className='text-gray-400 text-[40px] hover:opacity-[0.6] cursor-pointer '><IoArrowBackCircle onClick={prevSlide}/></div>
                <div className='text-gray-400 text-[40px] hover:opacity-[0.6] cursor-pointer'><IoArrowForwardCircle onClick={nextSlide}/></div>
            </div>
            
        </div>
            <div className='flex mt-[20px] overflow-hidden border-b-1 border-slate-500 pb-5'>
                {
                    FoodData.map((Item)=>{
                        return <div style={ {transform: `translateX(${slide*100}%)`}} className=' duration-500 w-[150px] h-[150px] items-center justify-center flex-col text-center shrink-0 '><img className='h-[100px] m-auto' src={Item.FoodImage}></img>
                        <div className='mt-auto'>{Item.FoodName}</div>
                        </div> 
                                
                    })
                }
            </div>
    </div>
    
    
);}


export default Category;