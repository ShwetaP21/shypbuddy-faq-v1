import Accordion from "../component/Accordion";
import React from "react";
import BlockPinCodesObj from "../Objects/Tools/BlockPinCodesObj";

function BlockPinCodes() {
  return (
    <>
      

          {/* accordion */}
          <div className="flex-1 bg-white overflow-auto rounded-md py-5">
          <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">Block Pincodes</h1>
        <div className="divide-y divide-slate-200"> 
    {BlockPinCodesObj.map((item, index) => (
            <Accordion key={index} question={item.question.toUpperCase()} id={`faqs-${index}`}>
              {/* Map over each answer within the answer array */}
              {item.answer.map((subItem, subIndex) => (
                <div key={subIndex}>
                  <p className='text-justify'><li><b>{subItem.subquestion}</b> : {subItem.subanswer}</li></p>
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

export default BlockPinCodes;
