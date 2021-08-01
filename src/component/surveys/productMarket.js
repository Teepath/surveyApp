
export const json = {
  
  
    "title": "Product market research survey template",
    "description": "This is Template for creating Product Market Research Survey",
    "questions": [

        {
            type: "radiogroup",
            name: "quality",
            title: "How would you rate the quality of our product?",
            isRequired: true,
            colCount: 1,
            choices: [
                "Very high quality",
                "High quality",
                "Neither high now low quality",
                "Low quality",
                "Very low quality"
            ]
        },
        {
            type: "radiogroup",
            name: "value",
            title: "How would you rate the value for the money of the product?",
            isRequired: true,
            colCount: 1,
            choices: [
                "Excellent",
                "Above average",
                "Average",
                "Below Average",
                "Poor"
            ]
        },
   
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
            type: "comment",
            name: "passive_experience",
            title: "What would you like to improve in our product?",
          },
     
  ]
}