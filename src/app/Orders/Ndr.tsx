import Accordion from "../component/Accordion";
import React from "react";
import NdrObj from "../Objects/Orders/NdrObj";

function Ndr() {
  return (
    <div className="flex-1 bg-white overflow-auto rounded-md py-5">
      <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">NDR</h1>
      <div className="divide-y divide-slate-200">
        {NdrObj.map((item, index) => (
          <Accordion
            key={index}
            question={item.question.toUpperCase()}
            id={`faqs-${index}`}
          >
            {/* Convert answer to a React node */}
            <p className="text-justify">{item.answer}</p>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default Ndr;
