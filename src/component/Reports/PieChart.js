
import React from "react";
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




const Chart = (props)=>{

    const { choices, analysis, name } = props;

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    const countValue = (choice) => {
        let count = 0;
        console.log(choice)
        for (let i = 0; i < analysis.length; i++){
            if (Object.values(analysis[i].questions)) {
                Object.values(analysis[i].questions).map(val => {
                    if (val === choice) {
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

export default Chart;
