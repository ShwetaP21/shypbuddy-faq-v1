
"use client"
import React from 'react';
import Accordion from '../component/Accordion';
import ContactInfoObj from '../Objects/KnowledgeBase/ContactObj';

export default function Contact() {


  return (
    <>
      

        {/* accordion */}
        <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">Support Team</h1>
      <div className="divide-y divide-slate-200">
        {ContactInfoObj.map((item, index) => (
          <Accordion key={index} question={item.question.toUpperCase()} id={`faqs-${index}`}>
            {/* Map over each answer within the answer array */}
            {item.answer.map((subItem, subIndex) => (
              <div key={subIndex}>
                <p className='text-justify'><b>{subItem.subquestion}</b> : {subItem.subanswer}</p>
                {/* <p className='text-justify'></p> */}
              </div>
            ))}
          </Accordion>
        ))}
      </div>
    </div>
    </>
  );
}