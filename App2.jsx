import React, { useState } from 'react';
import SearchForm from './SearchForm';

function App2() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchParams) => {
    fetch('http://localhost:8081/search', { // Update endpoint to /authorised
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(searchParams),
    })
      .then((res) => res.json())
      .then((data) => setSearchResults(data))
      .catch((err) => console.error(err)); // Typo fixed: console.error(err)
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <table>
        <tbody>
          {searchResults.map((result, index) => (
            <tr key={index}>
              {Object.keys(result).map((key) => (
                <td key={key}>{result[key]}, </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App2;
