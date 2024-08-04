import React, { useState } from 'react';
import InsertForm from './InsertForm';

function App3() {
   const [insertResults, setInsertResults] = useState([]);

  const handleInsert = (insertParams) => {
    fetch('http://localhost:8083/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(insertParams),
    })
     /* .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })*/
        .then((res) => res.json())
      .then((data) => setInsertResults(data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1> admin page</h1>
      <InsertForm onInsert={handleInsert}/>
      {insertResults? (
        <div>Insertion Successful.</div>
      )
      :(
        <div>Insertion Failed.</div>
      )}
    </div>
  );
}

export default App3;
