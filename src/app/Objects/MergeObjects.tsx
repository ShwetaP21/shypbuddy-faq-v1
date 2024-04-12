//order
import DeliveryDispute from "./Orders/DeliveryDisputeObj";
import Ndr from "./Orders/NdrObj";
import Nps from "./Orders/NpsObj";
import OrderProcess from "./Orders/OrderProcessObj";
import CreateOrderSteps from "./Orders/CreateOrderStepsObj";
import Pickups from "./Orders/PickupsObj";
import RtoOrders from "./Orders/RtoOrdersObj";

// planing and details
import RechargeProcess from "./PlanAndDetails/RechargeProcessObj";

// others
import ProhibitedProducts from "./Others/ProhibitedProductsObj";
import GeneralFAQs from "./WebsiteFAQ/GeneralFAQsObj";

// tools
import BlockPinCodes from "./Tools/BlockPinCodesObj";
import MultipleWarehouseManagement from "./Tools/MultipleWarehouseManagementObj";
import ShipmentForwardChanges from"./Tools/ShipmentForwardChargesObj";
import ShippingPartnerPreference from "./Tools/ShippingPartnerPreferenceObj";
import ShippingRateCalculation from "./Tools/ShippingRateCalculationObj";
import ShippingZonesExplanation from "./Tools/ShippingZonesExplanationObj";
import ViewAllRates from "./Tools/ViewAllRatesExplanationObj";

// weight
import AmountOnHold from "./Weight/AmountOnHoldObj";
import PackagingTips from "./Weight/AmountOnHoldObj";
import VoumetricWeightCalculation from "./Weight/AmountOnHoldObj";
import WeightDicrepancy from "./Weight/AmountOnHoldObj";
import WeightDiscrepancyReport from "./Weight/AmountOnHoldObj";
import WeightTerminology from "./Weight/AmountOnHoldObj";

// setup manage
import CreateWarehouse from "./SetUpManage/CreateWarehouseObj";
import CustomerDetails from "./SetUpManage/CustomerDetailsObj";
import IntegrationProcess from "./SetUpManage/IntegrationProcessObj";
import KycDocuments from "./SetUpManage/KycDocumentsObj";
import ShippingRequirements from "./SetUpManage/ShippingRequirementsObj";

// knowledge base
import  Contact from "./KnowledgeBase/ContactObj";
import Glossary from "./KnowledgeBase/GlossaryObj";
import Knowledgebase from "./KnowledgeBase/KnowledgeBaseObj";

// billing
import Credit from "./Billing/CreditSummaryObj";
import DelayedWalletUpdate from "./Billing/DelayedWalletUpdateObj";
import DownloadCOD from "./Billing/DownloadCODReportObj";
import EarlyCOD from "./Billing/EarlyCODObj";
import Pending from "./Billing/PendingObj";
import Recharge from "./Billing/RechargeObj";

const mergedObjects = {


  // order
  CreateOrderSteps,
  DeliveryDispute,
  Ndr,
  Nps,
    OrderProcess,
    Pickups,
    RtoOrders,

    // PlanAndDetails
    // PricingPlansString,
    RechargeProcess,

    //Others
    ProhibitedProducts,

    //WebsiteFAQ
    GeneralFAQs,


    //Tools
    BlockPinCodes,
    MultipleWarehouseManagement,
    ShipmentForwardChanges,
    ShippingPartnerPreference,
    ShippingRateCalculation,
    ShippingZonesExplanation,
    ViewAllRates,    


    // Weight Management
    AmountOnHold,
    PackagingTips,
    VoumetricWeightCalculation,
    WeightDicrepancy,
    WeightDiscrepancyReport,
    WeightTerminology,


    // Set Up Manage
    CreateWarehouse,
    CustomerDetails,
    IntegrationProcess,
    KycDocuments,
    ShippingRequirements,

    // Glossary
    Contact,
    Glossary,
    Knowledgebase,

    // Billing 
    Credit,
    DelayedWalletUpdate,
    DownloadCOD,
    EarlyCOD,
    // PaymentString,
    Pending,
    Recharge,

    // Knowledge Base
  };
  
  // Stringify the merged object
  const MergedObjectsString = JSON.stringify(mergedObjects);


  
  // Log the merged object as a JSON string
  console.log("MergedObjectsString : " , MergedObjectsString);

export default MergedObjectsString;
