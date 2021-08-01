import React from "react";
import { XAxis, YAxis, CartesianAxis, Tooltip, Legend, Bar, BarChart } from "recharts";



const CreateBar = (props) => {
    const [name, setName] = React.useState("")
    const { choices, analysis,} = props;
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];
    const countValue = (choice) => {
        let count = 0;
  
        // console.log(choice)
        for (let i = 0; i < analysis.length; i++){
           
            if (Object.values(analysis[i].questions)) {
                Object.values(analysis[i].questions).map(val => {
                    if (val[0] === choice) {
                        count = count + 1;
                        console.log(val)
                   }
                })
            }

            
        }

        return count;
    }

    const chartHandle = () => {
        let arr = [];
        let res={name:name}
        choices.map((choice) => {
                res ={...res, [choice]: countValue(choice)}
        })
        arr.push(res)
        console.log(arr)
        return arr;
    }

    const data = chartHandle()

    return (
        <BarChart width={500}
            height={300}
            data={data}
            margin={{
                top:5, right:30, left:20, bottom:5,
            }}
        >
            <CartesianAxis strokeDasharray="3 3" />
            <XAxis datakey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {
                choices.map((entry, index) => <Bar dataKey={`${entry}`} fill={COLORS[index % COLORS.length]} />)
            }
        </BarChart>

      
        
    )
}


export default CreateBar;