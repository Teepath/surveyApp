
export const json = {
  
  
    "title": "Customer satisfaction survey template",
    "description": "This is Template for creating Customer Satisfaction",
    "questions": [

        {
            type: "rating",
            name: "nps_score",
            title:
              "How a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
            isRequired: true,
            rateMin: 0,
            rateMax: 10,
            minRateDescription: "(Most unlikely)",
            maxRateDescription: "(Most likely)",
        },

        {
            type: "radiogroup",
            name: "satisfied",
            title: "How satisfied are you with the product?",
            isRequired: true,
            colCount: 1,
            choices: [
                "Extremely satisfied",
                "Very satisfied",
                "Somewhat satisfied",
                "Not so satisfied",
                "Not at all satisfied"
            ]
        },
        {
            type: "radiogroup",
            name: "quality",
            title: "How would you rate the qaulity of our support?",
            isRequired: true,
            colCount: 1,
            choices: [
                "Very High Quality",
                "High quality",
                "Neither high nor low",
                "Low quality",
                "Very low quality"
            ]
        },
        {
            type: "radiogroup",
            name: "purchase",
            title: "How likely are you to purchase our product again?",
            isRequired: true,
            colCount: 1,
            choices: [
                "Extremely likely",
                "Very likely",
                "Somewhat likely",
                "Not so likely",
                "Not likely at al"
            ]
        },
   

        {
            type: "comment",
            name: "other_conserns",
            title: "Do you have any other comments, questions, or concerns?",
          },
     
  ]
}