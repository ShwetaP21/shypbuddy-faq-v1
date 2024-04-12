import React from 'react';
import WeightTerminologyObj from '../Objects/Weight/WeightTerminologyObj'; // Importing the JSON object
import Accordion from '../component/Accordion'; // Assuming the Accordion component is imported


const WeightTerminologyComponent: React.FC = () => {
  return (
    <div className="flex-1 bg-white overflow-auto rounded-md py-5">
      <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">Weight Terminology Report</h1>
      <div className="divide-y divide-slate-200">
        {WeightTerminologyObj.map((category, index) => (
          <Accordion key={index} question={category.question.toUpperCase()} id={`faqs-${index}`}>
            <ul className="list-disc pl-5 text-justify">
              {/* Mapping over the category.answer array */}
              {category.answer.map((item, i) => (
                <li key={i}>
                  <strong>{item.question}: </strong>{item.answer}
                </li>
              ))}
            </ul>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default WeightTerminologyComponent