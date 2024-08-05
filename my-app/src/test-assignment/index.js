import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChainAssignment = () => {
    const [isShowChatLine,setIsShowChatLine]=useState('table-section');
    const [jsonData, setJsonData] = useState([
        { "Id": 1, "Year": 2004, "Medals": 1 },
        { "Id": 2, "Year": 2008, "Medals": 3 },
        { "Id": 3, "Year": 2012, "Medals": 6 },
        { "Id": 4, "Year": 2016, "Medals": 2 },
        { "Id": 5, "Year": 2020, "Medals": 7 }
    ]);

     const tabsSection=(value)=>{
        setIsShowChatLine(value)
     }
    return (
        <>
              <div>
            <div className="tabs-main">
                <button className="tabs-section" onClick={() => tabsSection("table-section")}>Table</button>
                <button className="tabs-section" onClick={() => tabsSection("chat-section")}>Chart Line</button>
            </div>
            
            <div className="personal-selection">
            <span>Name:</span> <span>Naresh A</span><br />
            <span>Email:</span> <span>nareshallakonda4@gmail.com</span><br />
            <span>Phone Number:</span> <span>7032872734</span>
            </div>
            {isShowChatLine === "table-section" && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Year</th>
                            <th>Medals</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jsonData.map((item) => (
                            <tr key={item.Id}>
                                <td>{item.Id}</td>
                                <td>{item.Year}</td>
                                <td>{item.Medals}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
                        
           {isShowChatLine === "chat-section" && (
                <div className="chart-container">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={jsonData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Year" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="Medals" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
        </>
    );
}
export default ChainAssignment;