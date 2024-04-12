import Contact from "./Contact";
import Terms from "./Contact";
import Glossary from "./Gloassary";
import SupportTeam from "./SupportTeam";

export default function KnowledgeBase(){
    return (
        <>
           <h1 className="font-bold text-2xl lg:text-4xl text-center text-black">Welcome TO Knowledge Base</h1>
        <Contact/>
        <SupportTeam/>
        <Glossary/>
        </>
    );
}