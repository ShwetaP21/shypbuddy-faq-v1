import React from 'react'
import AmountOnHoldObj from '../Objects/Weight/AmountOnHoldObj';
import Accordion from '../component/Accordion';

interface FAQItem {
    question: string;
    answer: string;
  }
  
  interface FAQCategory {
    question: string;
    answer: FAQItem[];
  }

  const FAQsGlossary: React.FC = () => {
    return (
      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
       <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">Amount on hold.</h1>
        <div className="divide-y divide-slate-200">
          {AmountOnHoldObj.map((category, index) => (
            <Accordion key={index} question={category.question.toUpperCase()} id={`faqs-${index}`}>
              <ul className="list-disc pl-5 text-justify">
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
  
  export default FAQsGlossary;
  
  interface AccordionProps {
    title: string;
    id: string;
  }
  
