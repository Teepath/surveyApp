
export const json = {
  
  
    "title": " Customer Feedback Survey Feedback",
    "description": "This is Template for creating Customer Feedback Survey",
    "questions": [
   
        {
            type: "rating",
            name: "nps_score",
            title:
              "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
            isRequired: true,
            rateMin: 0,
            rateMax: 10,
            minRateDescription: "(Most unlikely)",
            maxRateDescription: "(Most likely)",
        },
        {
            type: "comment",
            name: "passive_experience",
            title: "What change would you to see to a higher rating?",
          },
        {
            type: "radiogroup",
            name: "reliability",
            title: "How satisfied are you with reliability of this product?",
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
            name: "look",
            title: "how satisfied are you with the look and the feel of this product?",
            isRequired: true,
            colCount: 1,
            choices: [
                "Extremely satisfied",
                "Very satisfied",
                "Somewhat satisfied",
                "Not so satisfied",
                "Not at all satisfied"
            ]
        }
  ]
}