
import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const Table = ({ val }) => {
    return (<tr>
    <td> {val} </td>
    </tr>)
}

const Chart = (props)=>{

    const { choices, analysis, name , question} = props;

    const countValue = (choice) => {
        
        for (let i = 0; i < analysis.length; i++){
            if (Object.values(analysis[i].questions)) {
                Object.values(analysis[i].questions).map(val => {
                    if (val.length > 15) {
                        <Table val={ val}/>
                   }
                })
            }
        }

       
    }
  
   
    if (analysis) {
        return (
            <div>
            { countValue()}
            </div>
        )
    } else {
        return <div> loading</div>
    }
    
}

export default Chart;
