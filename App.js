import './App.css';
import styled from'styled-components';
import img from './img/energy3.jpg';
import {ProgressBar} from "./progress_bar";
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


function App() {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#48e2b3', '#de73f7', '#54b4b4', '#cac59b'];
  return (
    <Div className="App">
      <Containers>
        <h1>Energy Management</h1>
        <Wrap className='pie-chart'>
          <PieChart width={1500} height={230}>
          <Pie
            data={data}
            cx={740}
            cy={120}
            innerRadius={50}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index %   COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </Wrap>
      <div className='progressBar'>
         <ProgressBar />
      </div>
      </Containers>
    </Div>
  );
}

const Containers = styled.div`
 height: 92vh;
 width:91%;
 color:white;
 text-align:center;
 background:rgba(255,255,255,0.1);
 backdrop-filter:blur(8px);
 border-radius:20px;
`;
const Wrap = styled.div`
 display : flex;
 flex-direction : row;
 align-items : center;
 justify-content : center;
`;
const Div = styled.div`
 height:100vh;
 width:100%;
 background-image: url(${img});
 background-size:cover;
 background-position:center;
 background-repeat:no-repeat;
 display:flex;
 flex-direction:row;
 justify-content : center;
 align-items:center;
`;


export default App;
