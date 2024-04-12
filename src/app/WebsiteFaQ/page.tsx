import GeneralFAQs from "@/app/WebsiteFaQ/GeneraFAQ"
import CreateWarehouse from "./CreateWarehouse";
import CustomerDetails from "./CustomerDetails";
import IntegrationProcess from "./IntegrationProcess";
import KycDocuments from "./KycDocuments";

export default function Website(){
    return (
        <>
           <h1 className="font-bold text-2xl lg:text-4xl text-center text-black">Welcome TO FAQ Page</h1>
        <GeneralFAQs/>
        <CreateWarehouse/>
        <CustomerDetails/>
        <IntegrationProcess/>
        <KycDocuments/>
        </>
    );
}