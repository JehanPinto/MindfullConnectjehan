/**@format */
"use client";
import React from 'react'
import Image from "next/image";
import plusIcon from '../../../public/plus35621.svg'
import  minusIcon  from '../../../public/minusIcon.svg'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useState } from 'react';

type Props ={
    isAccordionOpen?:boolean; 
    question:string;
    answer:string;
};
const Accordian = (props:Props) => {
    const [animationParent] = useAutoAnimate();
    const [isAccordionOpen, setAccordion] = useState(props.isAccordionOpen|| false);
     function toggleAccordion(){
        setAccordion(!isAccordionOpen);
     }
  return (
 
       <div ref={animationParent}  className="flex flex-col gap-4 py-4 ">
            <div>  {/*q */}
                 <p onClick={toggleAccordion}  className="flex justify-between gap-2 sm:text-lg font-semibold cursor-pointer" > 
                    <span>
                       {props.question}
                    </span>
                    {isAccordionOpen ?(
                    <Image src={minusIcon} alt="wdfwfs" className=" w-auto"  />):(
                    <Image src={plusIcon} alt="wdfwfs" className=" w-auto"  />)}
                 </p>
                 {
                    isAccordionOpen && ( <p className="text-sm sm:text-base text-gray-400">
                        {props.answer} 
                      </p>)
                 }
                
            </div>
            </div>  
  )
}

export default Accordian
