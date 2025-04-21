import React, { useEffect, useState } from 'react'
import "./Table.css"

function Table() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const data =await fetch(`http://13.51.162.92:8888/getContainers`)
    const response = await data.json();
    setData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div  className="table-container">
        <table className="Table">
      <thead style={{border:"2px solid black"}}>
        <tr>
          <th className="Th 1">Container ID</th>
          <th className="Th 2">Name</th>
          <th className="Th 3">Image</th>
          <th className="Th 4">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}>
            <td className="td 1">{row.id}</td>
            <td className="td 2">{row.name}</td>
            <td className="td 3">{row.image}</td>
            <td className="td 4">{row.status}</td>
          <td className='buttons'>
          <button className='button start'>Start</button>
          <button className='button stop'>Stop</button>
          <button className='button resume'>Remove</button>
          </td>
          </tr>
        ))}
      </tbody>
      </table>

    </div>
  )
}

export default Table