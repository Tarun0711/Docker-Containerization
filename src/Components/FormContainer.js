import React, { useState } from 'react';
import './FormContainer.css';

function FormContainer() {
  const [containerName, setContainerName] = useState('');
  const [imageName, setImageName] = useState('');
  const [ports, setPorts] = useState([{ dockerPort: '', hostPort: '' }]);

  const handlePortChange = (index, key, value) => {
    const updatedPorts = [...ports];
    updatedPorts[index][key] = value;
    setPorts(updatedPorts);
  };
  const addPort = () => {
    setPorts([...ports, { dockerPort: '', hostPort: '' }]);
  };
  const removePort = (index) => {
    const updatedPorts = [...ports];
    updatedPorts.splice(index, 1);
    setPorts(updatedPorts);
  };
  const handleSubmit = () => {
    // Format ports for sending to backend
    const formattedPorts = {};
    ports.forEach(({ dockerPort, hostPort }) => {
      formattedPorts[`${dockerPort} tcp`] = hostPort;
    });
    console.log('Container Name:', containerName);
    console.log('Image Name:', imageName);
    console.log('Ports:', formattedPorts);
    // Send data to backend...
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Container Configuration</h1>
        <label>
          Container Name:
          <input type="text" value={containerName} onChange={(e) => setContainerName(e.target.value)} required />
        </label>
        <br />
        <label>
          Image Name:
          <input type="text" value={imageName} onChange={(e) => setImageName(e.target.value)} required />
        </label>
        <br />
        {ports.map((port, index) => (
  <div key={index} className="port-container">
    <label>
      Docker Port:
      <input type="text" value={port.dockerPort} onChange={(e) => handlePortChange(index, 'dockerPort', e.target.value)} />
    </label>
    <label>
      Host Port:
      <input type="number" value={port.hostPort} onChange={(e) => handlePortChange(index, 'hostPort', e.target.value)} min="1" max="65535" />
    </label>
    <button type="button" onClick={() => removePort(index)}>Remove</button>
  </div>
))}

        <button type="button" onClick={addPort}>Add Port</button>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormContainer;
