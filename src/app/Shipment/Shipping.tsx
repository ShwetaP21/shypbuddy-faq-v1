
"use client"
import Accordion from '../component/Accordion';
import ShippingObj from '../Objects/Shipment/ShippingObj';

export default function Shipping() {


  return (
    <>
      

        {/* accordion */}
        <div className="flex-1 bg-white overflow-auto rounded-md py-5">
        <h1 className="text-2xl py-1 ml-1.5 font-bold text-slate-600">Shipping</h1>
      <div className="divide-y divide-slate-200">
        {ShippingObj.map((item, index) => (
          <Accordion key={index} question={item.question.toUpperCase()} id={`faqs-${index}`}>
            {/* Map over each answer within the answer array */}
            <p className='text-justify'>{item.answer}</p>
             
            
          </Accordion>
           
        ))}
      </div>
    </div>
    </>
  );
}