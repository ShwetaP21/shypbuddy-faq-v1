"use client"
import React, { useState, useEffect, createContext, useContext } from 'react';
import Fuse from 'fuse.js';
import { FAQ, ShypBuddyTermsObjItem, ContactInfoObjItem, GlossaryObjItem, SubAnswer } from './types'; // Import types
import Glossary from "../Objects/Knowledgebase/GlossaryObj";
import ContactInfo from '../Objects/Knowledgebase/ContactInfoObj';
import ShypBuddyTerms from '../Objects/Knowledgebase/Knowledgebase';
import Results from '../component/Results';
// import Results from './Results';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<(FAQ | ContactInfoObjItem | ShypBuddyTermsObjItem | GlossaryObjItem | SubAnswer)[]>([]);
  // FAQ, ContactInfoObjItem, ShypBuddyTermsObjItem, GlossaryObjItem, SubAnswer
  const handleSearch = () => {
    let results: (FAQ | ContactInfoObjItem | ShypBuddyTermsObjItem | GlossaryObjItem | SubAnswer)[] = [];

    // Fuse.js options
    const fuseOptions = {
      
      keys: ['question','answer','answer.subquestion', 'answer.subanswer' ], // Search question and nested subanswers
      threshold: 0.2, // Adjust threshold for fuzzy matching (optional)
    };

    // Initialize Fuse instance
    const fuse = new Fuse([...Glossary, ...ContactInfo, ...ShypBuddyTerms,], fuseOptions);

    // Perform search
    const searchResult = fuse.search(searchTerm);

    // Extract search results
    results = searchResult.map(item => item.item);

    setSearchResults(results);
  };

  useEffect(() => {
    handleSearch(); // Perform initial search on component mount
  }, [searchTerm]); // Re-run search on searchTerm change

  return (
    <div className='App'>
      <h1>FAQ Page</h1>
      <input
        type='text'
        placeholder='Search FAQs'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
      <ul>

      {/* Pass searchResults as props to the Results component */}
      <Results searchResults={searchResults as (FAQ | ContactInfoObjItem | ShypBuddyTermsObjItem | GlossaryObjItem | SubAnswer)[]} />
      </ul>

    </div>
  );
}

export default Search;
