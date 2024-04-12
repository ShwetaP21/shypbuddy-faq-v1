import Accordion from "../component/Accordion";
import React from "react";
import IntegrationProcessObj from "../Objects/SetUpManage/IntegrationProcessObj";

function Contact() {
  return (
    <div className="flex-1 bg-white overflow-auto rounded-md py-5">
     <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">Integration Process</h1>
      <div className="divide-y divide-slate-200">
        {IntegrationProcessObj.map((item, index) => (
          <Accordion
            key={index}
            question={item.question.toUpperCase()}
            id={`faqs-${index}`}
          >
            <ul className="pl-5 text-justify list-disc">
              {item.answer.map((item, i) => (
                <li key={i}>
                  <strong>{item.subquestion}: </strong>
                  {item.subanswer}
                </li>
              ))}
            </ul>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default Contact;
