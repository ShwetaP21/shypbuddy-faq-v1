"use client"
import React from 'react';
import Accordion from '../component/Accordion';
import RechargeObj from '../Objects/Billing/RechargeObj';

export default function Recharge() {



  return (
    <>
 

<div className="flex-1 bg-white overflow-auto rounded-md py-5">
<h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">Recharge</h1>
        <div className="divide-y divide-slate-200">
          {RechargeObj.map((item, index) => (
            <Accordion key={index} question={item.question.toUpperCase()} id={`faqs-${index}`}>
              {/* Convert answer to a React node */}
              <p className='text-justify'>{item.answer}</p>
            </Accordion>
          ))}
        </div>
      </div>
   
    </>
  );
}