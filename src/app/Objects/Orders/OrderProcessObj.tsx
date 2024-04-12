const OrderProcessObj = [
  {
    question: "How to change the payment mode of my order?",
    answer: [
      {
        subquestion: "Description",
        subanswer:
          "Connect with your KAM/ support team and they will help you to get this changed.",
      },
      {
        subquestion: "Note",
        subanswer: " Not all courier companies modify their payment mode.",
      },
    ],
  },

  {
    question: "How to download shipping labels?",
    answer: [
      {
        subquestion: "Step 1",
        subanswer: " Navigate to Orders and click on Manage orders",
      },
      {
        subquestion: "Step 2",
        subanswer:
          " You can filter according to your shipping partner and date.",
      },
      {
        subquestion: "A",
        subanswer: "Download single label",
      },
      {
        subquestion: "Step 1",
        subanswer:
          " Checkmark the AWB which label needs to be printed, click on label and it will be downloaded.",
      },
      {
        subquestion: "Step 2",
        subanswer:
          " To download in PDF format - Checkmark single AWB, click on Alternative on right corner, select the AWB again click on label and it will be downloaded in PDF format.",
      },
      {
        subquestion: "B",
        subanswer: "Download bulk label",
      },
      {
        subquestion: "Step 1",
        subanswer:
          " Check mark AWB in bulk, click on label and it will be downloaded in PDF format.",
      },
      {
        subquestion: "Step 2",
        subanswer:
          "To download in PDF format - Checkmark AWBs, click on Alternative on right corner, select the AWB again click on label and it will be downloaded in PDF format.",
      },
    ],
  },
  {
    question: "How to edit an order?",
    answer: [
      {
        subquestion: "Step 1",
        subanswer: " From the left menu, select Orders.",
      },
      {
        subquestion: "Step 2",
        subanswer:
          "Click on Manage button, click on the drop-down and select To Be Processed where you can view all of your pending/new orders.",
      },
      {
        subquestion: "Step 3",
        subanswer: "Click on edit option which is just below Actions.",
      },
      {
        subquestion: "Step 4",
        subanswer:
          "Click on Manage button, click on the drop-down and select To Be Processed where you can view all of your pending/new orders.",
      },
      {
        subquestion: "Step 5",
        subanswer:
          "You can edit shipment's weight & dimensions, payment mode, and customer's details.",
      },
      {
        subquestion: "Note",
        subanswer:
          "This can only be done when the order is in To be processed state which means AWB is not generated.",
      },
    ],
  },

  {
    question: "How to download orders reports?",
    answer: [
      {
        subquestion: "Step 1",
        subanswer: "Navigate to Reports and click on Orders Report.",
      },
      {
        subquestion: "Step 2",
        subanswer: "Select Parameters",
      },
      {
        subquestion: "Step 3",
        subanswer: "Select Date Range.",
      },
      {
        subquestion: "Step 4",
        subanswer: "Select Payment Mode- COD, Prepaid, or all.",
      },
      {
        subquestion: "Step 3",
        subanswer:
          "Select section according to your preference or select all and click on Get report.",
      },
    ],
  },
  // {
  //   question: "Explain Orders Dropdown",
  //   answer: [
  //     {
  //       subquestion: "",
  //       subanswer: "",
  //     },
  //     {
  //       subquestion: "",
  //       subanswer: "",
  //     },
  //     {
  //       subquestion: "",
  //       subanswer: "",
  //     },
  //     {
  //       subquestion: "",
  //       subanswer: "",
  //     },
  //     {
  //       subquestion: "",
  //       subanswer: "",
  //     },
  //     {
  //       subquestion: "",
  //       subanswer: "",
  //     },
  //     {
  //       subquestion: "",
  //       subanswer: "",
  //     },
  //     {
  //       subquestion: "",
  //       subanswer: "",
  //     },

  //     // "Shopify Orders - Allows you to view all the orders that have been processed through the Shopify platform.",
  //     // "Woocommerce Orders - Allows you to view all the orders that have been processed through the Woocommerce platform.",
  //     // "To be processed - Refers to orders that are pending completion or are awaiting further action.",
  //     // "Ready to Ship - Indicates that an order has been processed, packed, and is prepared for shipment.",
  //     // "Orders Manually shipped - Refers to orders that have been created out by manual processing.",
  //     // "In Transit - It means that the package is currently on its way to the delivery destination.",
  //     // "OFD - Out for Delivery, indicating that the package is en route to its final destination and will be delivered shortly.",
  //     // "Delivered - Refers that the package has been successfully delivered to the designated address.",
  //     // "RTO In transit - Indicates that a shipment marked for Return to Origin (RTO) is currently in transit back to the original pickup address.",
  //     // "RTO Delivered - It refers that the shipment marked for Return to Origin (RTO) has been successfully delivered back to the pickup address.",
  //     // "All - Refers to the complete set of Manage orders.",
  //   ],
  // },
];

export default OrderProcessObj;
