"use client";
import Image from "next/image"; // Importing Image component from Next.js
import AnimatedAccordionPage from "./component/AnimatedAccordionPage"; // Importing Page component from local file
// import Hero from "./Hero"; // Importing Hero component from local file (uncomment if needed)
import Marketing from "./Marketing"; // Importing Marketing component from local file
import HeroPageDetails from "./HeroPageDetails";
import Search from "./component/Search";

// // SearchBar Imports
import React, { useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./component/Sidebar";
import WeightManagement from "./WeightManagement/page"; // Assuming these are component imports
import Orders from "./Orders/page";
import BuddyShield from "./BuddyShield/page";
import KnowledgeBase from "./KnowledgeBase/page";
import BillingPlans from "./BillingPlans/page";
import Tools from "./ShypbuddyTools/Page";
import SearchResult from "./component/SearchResult";
import Shipment from "./Shipment/page";
import Website from "./WebsiteFaQ/page";

export default function Home() {
  // const router = useRouter(); // Get the current router object
  const [searchResults, setSearchResults] = useState([]);
  const [activeComponent, setActiveComponent] = useState("Website");
  const [clearSearchBar, setClearSearchBar] = useState<boolean>(false); // Corrected type to boolean

 
 
  const [searchTerm, setSearchTerm] = useState('');
  // const [displayActiveComponent, setDisplayActiveComponent] = useState<boolean>(false); 

  const handleSearch = (results: React.SetStateAction<never[]>) => {
    setSearchResults(results);
   
  };

  const handleComponentChange = (component: any) => {
    setActiveComponent(component);
   
    // setClearSearchBar(true); // Clear search bar when switching to a component
  };

  const clearSearch = () => {
   
    setSearchResults([]);
    console.log("line 41");
    setClearSearchBar(true); 
    console.log("setClearSearchBar : " + setClearSearchBar);   // Reset clearSearchBar state for Search component
  };

  const handleSearchClick = () => {
     // Set search bar as active when search button is clicked
    clearSearch(); // Clear search results
  };


  return (
    <div className="bg-gray-100 text-gray-600 w-screen h-screen overflow-y-auto overflow-x-hidden">
      <main className="h-full w-full bg-stone-100">
        <div>
          <div className="rounded-b-md bg-[#5a38fa] mx-5 md:mx-10 my-5 h-1/4 rounded-lg">
            <HeroPageDetails />
            <div className="pb-10">
              <Marketing />
              {/* <Search setSearchResults={setSearchResults} /> */}
              <Search setSearchResults={setSearchResults} searchClearOrNot={clearSearchBar} setClearSearchBar={setClearSearchBar} />
            </div>
          </div>

          {/* Search Results or Active Component */}
          <div className="mt-5 md:mt-5 lg:mt-5 ">
            <div className="bg-stone-100 ">
              <div className="py-5 md:px-5 overflow-hidden">
                <div className="w-full mx-auto px-5 gap-4 flex flex-col md:flex-row rounded-lg  ">
                  <Sidebar onComponentChange={handleComponentChange} clearSearch={clearSearch} />
            
                  <div className="flex-1 h-full md:h-full max-w-[120rem] shadow-lg bg-white overflow-auto rounded-md px-6 md:px-6 py-5">
                    {/* Conditionally render search results or other components */}
                    {searchResults.length > 0 ? (
                    // Render SearchResult component if searchResults exist
                    <SearchResult results={searchResults} />
                  ) : (
                    // Render based on activeComponent if searchResults are empty
                    <>
                      {/* Render SearchResult if activeComponent is none of the specified values */}
                      {activeComponent !== "WeightManagement" &&
                          activeComponent !== "Tools" &&
                          activeComponent !== "KnowledgeBase" &&
                          activeComponent !== "BillingPlans" &&
                          activeComponent !== "BuddyShield" &&
                          activeComponent !== "Orders" &&
                          activeComponent !== "Shipment" &&
                          activeComponent !== "Website" ? (
                          <SearchResult results={searchResults} />
                        ) : null}
                      {/* Render components based on activeComponent */}
                      {activeComponent === 'WeightManagement' && <WeightManagement /> }
                      {activeComponent === 'Tools' && <Tools /> }
                      {activeComponent === 'KnowledgeBase' && <KnowledgeBase /> }
                      {activeComponent === 'BillingPlans' && <BillingPlans /> }
                      {activeComponent === 'BuddyShield' && <BuddyShield /> }
                      {activeComponent === 'Orders' && <Orders /> }
                      {activeComponent === 'Shipment' && <Shipment /> }
                      {activeComponent === 'Website' && <Website /> }
                    </>
                  )
 }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
