// "use client"
// import React from "react";

// interface AccordionItemProps {
//   showDescription: string;
//   fontWeightBold: string;
//   ariaExpanded: string;
//   item: { question: string; answer: string };
//   index: number;
//   onClick: () => void;
// }

// const AccordionItem: React.FC<AccordionItemProps> = ({
//   showDescription,
//   fontWeightBold,
//   ariaExpanded,
//   item,
//   index,
//   onClick,
// }) => {
//   return (
//     <div className="faq__item">
//       <button
//         className={`faq__question ${fontWeightBold}`}
//         onClick={onClick}
//         aria-expanded={ariaExpanded}
//         aria-controls={`faq__answer--${index}`}
//       >
//         {item.question}
//       </button>
//       <div
//         id={`faq__answer--${index}`}
//         className={`faq__answer ${showDescription}`}
//         aria-hidden={ariaExpanded === "false"}
//       >
//         {item.answer}
//       </div>
//     </div>
//   );
// };

// export default AccordionItem;