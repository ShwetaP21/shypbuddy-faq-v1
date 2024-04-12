const WeightTerminologyObj = [
  {
    question:"entered Weight",
    answer:[
      {
        question:"description",
        answer:"This is the weight the seller inputs when processing an order in the panel.",
      },
      {
        question:"note",
        answer:"Note: The system considers 0.5 Kg as the minimum default weight for the shipment.",
      }

    ]
  },
  {
    question:"volumetric Weight",
    answer:[
      {
        question:"description",
        answer:"It's the weight calculated based on the size (length, breadth, height) of the order.",
      },
      {
        question:"formula",
        answer:"(LxBxH)/5000 (for most couriers)",
      },
      {
        question:"note",
        answer:"Note: The calculation method may vary with different courier partners.",
      }

    ]
  },
  {
    question:"applied Weight",
    answer:[
      {
        question:"description",
        answer:"It's the higher of two weights - what you entered and the volumetric weight. Shipping charges are calculated based on this weight.",
      }
    ]
  },
  {
    question:"partner Weight",
    answer:[
      {
        question:"description",
        answer:"It's the weight for which the courier company charges you.",
      }
    ]
  }
]

export default WeightTerminologyObj;
