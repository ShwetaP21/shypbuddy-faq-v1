
"use client"
import React from 'react';
import Accordion from '../component/Accordion';
import ViewAllRatesExplanationObj from '../Objects/Tools/ViewAllRatesExplanationObj';

export default function ViewAllRatesExplanation() {


  return (
    <>
        {/* accordion */}
        <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">View All Rates Explanation</h1>
      <div className="divide-y divide-slate-200">
        {ViewAllRatesExplanationObj.map((item, index) => (
          <Accordion key={index} question={item.question.toUpperCase()} id={`faqs-${index}`}>
            {/* Render the answer directly if it's a string */}
            {typeof item.answer === 'string' ? (
              <div>
                <p className='text-justify'>{item.answer}</p>
              </div>
            ) : (
              // Otherwise, map over the answer array
              item.answer.map((subItem, subIndex) => (
                <div key={subIndex}>
                  <p className='text-justify'><li><b>{subItem.subquestion}</b> : {subItem.subanswer}</li></p>
                  {/* <p className='text-justify'></p> */}
                </div>
              ))
            )}
          </Accordion>
        ))}
      </div>
    </div>
    </>
  );
}