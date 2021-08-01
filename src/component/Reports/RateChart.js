
import React, {useState} from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
            </div>
        );
    }

    return null;
};

const ChartRate = (props)=>{

    const { analysis, name } = props;
    const [res, setRes] = useState({ maxNum: 0, minNum: 0 })
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];
    
    const countMaxValue = () => {
        let res = 0;
        
        for (let i = 0; i < analysis.length; i++){
            if (Object.values(analysis[i].questions)) {
                Object.values(analysis[i].questions).map(val => {
                    if (typeof val === "number") {
                        if (val > 4) {
                            res= res + 1
                        } 
                   }
                })
            }
        }

        console.log(res)
        return res;
    }

    const countMin = () => {
        let res = 0;
        
        for (let i = 0; i < analysis.length; i++){
            if (Object.values(analysis[i].questions)) {
                Object.values(analysis[i].questions).map(val => {
                    if (typeof val === "number") {
                        if (val <= 4) {
                            res = res + 1
                        } 
                   }
                })
            }
        }

        console.log(res)
        return res;
    }


    const chartHandle = () => {
        let count =0
        let arr = [
            {
                name: "Most Likely",
                value: countMaxValue()
            },

            {
                name: "Most Unlikely",
                value: countMin()
            }
        ];
  

        console.log(arr)
        return arr;
    }

    const data = chartHandle()
   
    if (analysis) {
        return (
            <div>
                <PieChart width={730} height={250}>
                    <Pie
                        data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8"
                    
                    >

{
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }

                        </Pie>
                    <Tooltip content={ CustomTooltip}/>
                    <Legend />
                </PieChart>
            
            </div>
        )
    } else {
        return <div> loading</div>
    }
    
}

export default ChartRate;