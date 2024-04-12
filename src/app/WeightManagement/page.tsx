
import Accordion from '../component/Accordion';
import AmountOnHoldComponent from './AmountOnHoldComponent';
import PackagingTipsComponent from './PackagingTipsComponent';
import WeightDiscrepancyComponent from './WeightDiscrepancyComponent';
import WeightDiscrepancyReportComponent from './WeightDiscrepancyReportComponent';
import WeightTerminologyComponent from './WeightTerminologyComponent';
import VolumetricWeightCalculation from './VolumetricWeightCalculation';

export default function WeightManagement() {


  return (
    <>
    {/* hello */}
    <h1 className="font-bold text-2xl lg:text-4xl text-center text-black">Welcome TO Weight Management</h1>
      <AmountOnHoldComponent />
      <WeightDiscrepancyComponent />
      <WeightDiscrepancyReportComponent />
      <WeightTerminologyComponent />
      <VolumetricWeightCalculation />
      <PackagingTipsComponent /> 
        {/* accordion */}
        {/* <div className="flex-1 bg-white overflow-auto rounded-md   py-5">
          <h1 className="text-2xl font-bold text-slate-900">FAQs Glossary</h1>
          <div className="divide-y divide-slate-200">
            {Object.entries(nps).map(([title, text], index) => (
              <Accordion key={index} title={title.toUpperCase()} id={`faqs-${index}`}>
                {Array.isArray(text) ? (
                  <ul className="list-disc pl-5 text-justify">
                    {text.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className='text-justify'>{text}</p>
                )}
              </Accordion>
            ))}
          </div>
        </div> */}
   
    </>
  );
}