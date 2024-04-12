import React from 'react';
import { FAQ, ContactInfoObjItem, ShypBuddyTermsObjItem, GlossaryObjItem, SubAnswer } from '../Elements/types'; // Import types

function Results({ searchResults }) {
  console.log(searchResults);
  return (
    <>
     <div className="w-2/4 bg-slate-500 rounded-lg " >
      {searchResults.length > 0 && (
        <div>
          {searchResults.map((item: FAQ | ContactInfoObjItem | ShypBuddyTermsObjItem | GlossaryObjItem | SubAnswer, index: number) => (
            <div key={index} className="hover:bg-gray-100">
              <div className="m-4">
              <h3>{item.question ?? item.subquestion}</h3>
              {/* Render answer */}
              {typeof item.answer === 'object' && (
                <div>
                  {item.answer.map((subAnswer) => (
                    <p key={subAnswer.subquestion}>{subAnswer.subquestion}: {subAnswer.subanswer}</p>
                  ))}
                </div>
              )}
              {/* Render FAQ or SubAnswer answer */}
              {typeof item.answer === 'string' && <p>{item.answer}</p>}

              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </>
  );
}

export default Results;
