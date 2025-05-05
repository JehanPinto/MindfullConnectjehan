import React from 'react'
import Image from "next/image";
import Accordian from './Accordian';
import plusIcon from '../../../public/plus35621.svg'
import  minusIcon  from '../../../public/minusIcon.svg'
import { faqs } from './data';

const Faq = () => {
  return (
    <div className="min-h-screen relative p-4 pb-10 ">
      <section>
        <h1 className="flex gap-3 iteam-center" >
            <span className="font-bold  text-5xl font-sans text-blue-600 pb-10 ">Frequently Asked Questions</span>
        </h1>
      </section>
      <section className="relative bg-white transition-all mx-auto max-w-xs sm:max-w-2xl rounded-lg flex-col gap-4 mt-40 sm:mt-8 p-10
      ">
        <div className="flex flex-col gap-4 divide-y">
          {faqs.map((d,i)=>(
             <Accordian answer={d.answer}
             question={d.question} 
             isAccordionOpen={d.isAccordionOpen}  
             key={i}/>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Faq
