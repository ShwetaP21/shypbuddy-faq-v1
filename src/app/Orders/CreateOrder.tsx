import Accordion from "../component/Accordion";
import React from "react";
import CreateOrderObj from "../Objects/Orders/CreateOrderObj";

function CreateOrders() {
  return (
    <div className="flex-1 bg-white overflow-auto rounded-md py-5">
      <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
        Create Order{" "}
      </h1>
      <div className="divide-y divide-slate-200">
        {CreateOrderObj.map((item, index) => (
          <Accordion
            key={index}
            question={item.question.toUpperCase()}
            id={`faqs-${index}`}
          >
            <ul className="list-none pl-5 text-justify">
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

export default CreateOrders;
