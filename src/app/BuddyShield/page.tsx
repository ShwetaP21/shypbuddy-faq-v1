import ContactInfo from "./ContactInfo";
import CompetitiveAdvantage from "./CompetitiveAdvantage";
import ImpactsOnDelivery from "./ImpactsOnDelivery";
import ProblemServiceBased from "./ProblemServiceBased";

export default function BuddyShield() {
  return (
    <>
    <h1 className="font-bold text-2xl lg:text-4xl text-center text-black">Welcome TO BuddyShield</h1>
      <ContactInfo />
      <CompetitiveAdvantage />
      <ImpactsOnDelivery />
      <ProblemServiceBased />
    </>
  );
}
