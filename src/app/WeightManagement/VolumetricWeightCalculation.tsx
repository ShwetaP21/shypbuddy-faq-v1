import React from 'react'
import VolumetricWeightCalculationObj from "../Objects/Weight/VolumetricWeightCalculationObj";
import Accordion from '../component/Accordion'

function VolumetricWeightCalculation() {
  return (
    <div className="flex-1 bg-white overflow-auto rounded-md   py-5">
    <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">Voumetric Weight Calculation</h1>
    <div className="divide-y divide-slate-200">
      {VolumetricWeightCalculationObj.map((item, index) => (
        <Accordion key={index} question={item.question.toUpperCase()} id={`faqs-${index}`}>
            <ul className="list-disc pl-5 text-justify">
              {item.answer.map((que, i) => (
                <li key={i}>  
                  <strong>{que.question}:</strong>{que.answer}</li>
              ))}
            </ul>
        </Accordion>
      ))}
    </div>
  </div>
  )
}

export default VolumetricWeightCalculation