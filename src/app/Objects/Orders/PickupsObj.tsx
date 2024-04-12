const PickUpObj = [
  {
    question: "What is Order ID?",
    answer:
      "An Order ID is a unique code assigned to each transaction, simplifying order tracking and management for both businesses and customers.",
  },
  {
    question: "How do I handle pickup delays in my ShypBUDDY account?",
    answer:
      "Please know that if there's a delay in pickup, the ShypBUDDY team has already raised the concern. If you're still unhappy and want to escalate, feel free to contact your Key Account Manager (KAM).",
  },
  {
    question: "What is a pickup exception?",
    answer:
      "The status Pickup exception is marked when the courier company attempted pickup and couldn't complete it due to some reason. To deal with pickup exceptions, you can schedule pickup for a different day and time.",
  },
  {
    question: "Can I cancel a picked up shipment?",
    answer:
      "No, shipment cannot be cancelled once picked up, however you can always cancel shipments before handover to courier company.",
  },
  {
    question: "What do I do if fake pick-up attempt is made?",
    answer:
      "Escalation is the way by which ShypBUDDY provides a shield to its clients against fake courier remarks. If you feel the pickup exception reason was incorrect you can raise escalation. Note: You can raise the concern to your concerned POC/support team.",
  },
  {
    question: "Can I schedule shipment for a future date?",
    answer: "Yes, you can schedule your pickup for a future date.",
  },
  {
    question: "What happens to a pickup ID if all shipments are canceled?",
    answer:
      "The pickup ID will be automatically removed from the system if all shipments in that pickup ID are canceled.",
  },
 
  {
    question: "What will be the role of Manifest copy?",
    answer:
      "The Manifest copy remain valid for the scheduled pickup and are essential when handing over shipments to the pickup executive. It's important to note that, with the exception of pickup escalations, a valid Manifest copy is mandatory for addressing any other issues related to the pickup process.",
  },
  {
    question: "Can I modify the order details after I've scheduled pickup?",
    answer:
      "Kindly note that once a courier has been assigned to your order, modifications to the details will not be possible.",
  },
  {
    question: "Can I update the details of an already picked shipment?",
    answer:
      "There is no such option available to update the details of your already picked shipments.",
  },
  {
    question: "My order is in out for pickup status. Can I cancel it?",
    answer:
      "We regret to inform you that cancellation is not possible on status 'out for pickup'. However, you have the option to not hand over the item or reschedule the pickup if needed.",
  },
  {
    question:
      "Can I change the payment mode of my order if it’s in the out for delivery status?",
    answer: [
      "You cannot change the payment mode if your order is in any of the following status:",
      " Out for delivery.",
      " RTO(Return to Origin)",
      " Delivered",
      "4 LOST/Destroyed/Damaged",
    ],
  },
];

export default PickUpObj;
