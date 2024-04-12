
const ShipmentForwardChargesObj = [
  {
    question: "forward Charges",
    answer:[
      {
        subquestion: "description",
        subanswer: "Shipment Forward Charges:"
      },
      {
        subquestion : "explanation",
        subanswer: "When an order is sent from the seller to the customer, and you pay for the delivery, those costs are called 'forward charges.' It's basically the money you spend to get your order delivered to the customer."
      }
    ],
  },
  {
    question: "RTO Charges",
    answer: [
      {
        subquestion: "description",
        subanswer: "RTO Charges:",
      },
      {
        subquestion: "explanation",
        subanswer:"When your shipment is undelivered to the customer and needs to return it to the seller's pickup address (Return To Origin or RTO), the associated charges for shipping it back are referred to as RTO backward charges.",  
      }
    ]
  }
];

// const ShipmentChargesExplanationString = JSON.stringify(
//   ShipmentChargesExplanation
// );

export default ShipmentForwardChargesObj;
