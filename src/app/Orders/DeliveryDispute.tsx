"use client";
import React from "react";
import Accordion from "../component/Accordion";
import DeliveryDisputeObj from "../Objects/Orders/DeliveryDisputeObj";

export default function DeliveryDispute() {
  return (
    <>
      {/* accordion */}
      <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">
          Delivery Dispute{" "}
        </h1>
        <div className="divide-y divide-slate-200">
          {DeliveryDisputeObj.map((item, index) => (
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
    </>
  );
}
