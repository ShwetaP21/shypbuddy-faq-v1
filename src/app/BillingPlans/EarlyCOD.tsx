"use client"
import React from 'react';
import Accordion from '../component/Accordion';
import EarlyCODObj from '../Objects/Billing/EarlyCODObj';

export default function EarlyCOD() {



  return (
    <>
  <div className="flex-1 bg-white overflow-auto rounded-md py-5">
  <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">Early COD</h1>
        <div className="divide-y divide-slate-200">
          {EarlyCODObj.map((item, index) => (
            <Accordion key={index} question={item.question.toUpperCase()} id={`faqs-${index}`}>
              {/* Check if the answer is an array */}
              {Array.isArray(item.answer) ? (
                // If it's an array, map over each subitem
                item.answer.map((subItem, subIndex) => (
                  <div key={subIndex}>
                    <p className='text-justify'><li><b>{subItem.subquestion}</b> : {subItem.subanswer}</li></p>
                  </div>
                ))
              ) : (
                // If it's not an array, display the answer directly
                <div>
                  <p className='text-justify'>{item.answer}</p>
                </div>
              )}
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}