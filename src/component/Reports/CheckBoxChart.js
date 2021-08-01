
import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const CheckBoxChart = (props)=>{

    const { choices, analysis, name } = props;

    const countValue = (choice) => {
        let count = 0;
        console.log(choice)
        for (let i = 0; i < analysis.length; i++){
            if (Object.values(analysis[i].questions)) {
                Object.values(analysis[i].questions).map(val => {
                    if (val.includes(choice)) {
                        count = count + 1;
                   }
                })
            }
        }

        console.log(count)
        return count;
    }
    const chartHandle = () => {
        let arr = [];
        choices.map((choice) => {
                arr.push({value: countValue(choice), name:choice})
        })

        console.log(arr)
        return arr;
    }
   
    if (analysis) {
        return (
            <div>
                <PieChart width={730} height={250}>
                    <Pie
                        data={chartHandle()} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
                    <Tooltip />
                </PieChart>
            
            </div>
        )
    } else {
        return <div> loading</div>
    }
    
}

export default CheckBoxChart;
