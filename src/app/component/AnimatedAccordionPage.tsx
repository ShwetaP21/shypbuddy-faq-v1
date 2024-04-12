// import React, { useState, useEffect } from 'react';
// import Accordion from './Accordion';
// import Tools from "../ShypbuddyTools/Page";
// import Sidebar from "./Sidebar";
// import KnowledgeBase from "../KnowledgeBase/page";
// import WeightManagement from '../WeightManagement/page';
// import BillingPlans from '../BillingPlans/page';
// // import { FAQ, ShypBuddyTermsObjItem, ContactInfoObjItem, GlossaryObjItem, SubAnswer } from '../Elements/types';
// // import Results from './Results';

// export default function AnimatedAccordionPage() {

//   const [activeComponent, setActiveComponent] = useState('');

//   const handleComponentChange = (component: any) => {
//     setActiveComponent(component);
//   };

//   return (
//     <>
//       <div className="w-full mx-auto px-5 gap-4 flex flex-col md:flex-row rounded-lg">
//         <Sidebar onComponentChange={handleComponentChange} />
//         <div className="flex-1 h-full md:h-full max-w-[120rem] shadow-lg bg-white overflow-auto rounded-md px-6 md:px-6 py-5">
//           <h1 className="text-2xl font-bold text-center text-slate-900">Welcome To ShypBuddy FAQ page</h1>

//           {/* <Results searchResults={searchResults} /> */}
//             <>
//               {activeComponent === 'WeightManagement' && <WeightManagement />}
//               {activeComponent === 'Tools' && <Tools />}
//               {activeComponent === 'KnowledgeBase' && <KnowledgeBase />}
//               {activeComponent === 'BillingPlans' && <BillingPlans />}
//             </>
//         </div>
//       </div>
//     </>
//   );
// }
