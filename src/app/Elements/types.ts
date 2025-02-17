export interface FAQ {
  question: string;
  answer: string  | SubAnswer[];
}

export interface SubAnswer {
  subquestion: string;
  subanswer: string;
}



  export interface ShypBuddyTermsObjItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }

  export interface GlossaryObjItem {
    subquestion: string;
    subanswer: string | SubAnswer[];
  }


  export interface ContactInfoObjItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }





//order
export interface CreateOrdterStepsIem {
  question : String,
  answer : String | SubAnswer[],
  subquestion : String,
  subanswer : String
}
export interface DeliverytDisputeIem {
  question : String,
  answer : String | SubAnswer[],
  subquestion : String,
  subanswer : String
}
export interface NdrItem {
  question : String,
  answer : String | SubAnswer[],
  subquestion : String,
  subanswer : String
}
export interface NpsItem {
  question : String,
  answer : String | SubAnswer[],
  subquestion : String,
  subanswer : String
}
  export interface OrderProcessItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface PickupsItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface RtoOrdersItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }

  // PlanAndDetails
  // PricingPlansString,
  export interface RechargeProcessItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }

  //Others
  export interface ProhibitedProductsItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }

  //WebsiteFAQ
  export interface GeneralFAQsItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }


  //Tools
  export interface BlockPinCodesItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface MultipleWarehouseManagementItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface ShipmentForwardChangesItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface ShippingPartnerPreferenceItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface ShippingRateCalculationItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface ShippingZonesExplanationItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface ViewAllRatesItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }    


  // Weight Management
  export interface AmountOnHoldItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface PackagingTipsItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface VoumetricWeightCalculationItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface WeightDicrepancyItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface WeightDiscrepancyReportItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface WeightTerminologyItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }


  // Set Up Manage
  export interface CreateWarehouseItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface CustomerDetailsItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface IntegrationProcessItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface KycDocumentsItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface ShippingRequirementsItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }

  // Knowledg base

  // export interface GlossaryObjItem {
  //   question : String,
  //   answer : String | SubAnswer[],
  //   subquestion : String,
  //   subanswer : String
  // }
  // export interface KnowledgebaseItem {
  //   question : String,
  //   answer : String | SubAnswer[],
  //   subquestion : String,
  //   subanswer : String
  // }

  // export interface ShypBuddyTermsObjItem {
  //   question : String,
  //   answer : String | SubAnswer[],
  //   subquestion : String,
  //   subanswer : String
  // }

  // export interface GlossaryObjItem {
  //   subquestion: string;
  //   subanswer: string | SubAnswer[];
  // }
  
  
  // export interface ContactInfoObjItem {
  //   question : String,
  //   answer : String | SubAnswer[],
  //   subquestion : String,
  //   subanswer : String
  // }

  // Billing 
  export interface CreditSummaryItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface DelayedWalletUpdateItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface DownloadCODReportItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface EarlyCODItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }


  // PaymentString,
  export interface PendingItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }
  export interface RechargeItem {
    question : String,
    answer : String | SubAnswer[],
    subquestion : String,
    subanswer : String
  }



  export interface PaymentFrequencyItem {
      question : String,
      answer : String | SubAnswer[],
      subquestion : String,
      subanswer : String
    }

