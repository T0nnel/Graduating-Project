/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function searchBar() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // Sample data array
  useEffect(() => {
    // Simulating fetching data from an API
    const fetchData = async () => {
      // Replace with actual fetch request to your backend endpoint
      const response = await fetch('http://localhost:4000/getdata');
      const initialData = await response.json();
      setData(initialData);
      setFilteredData(initialData); // Initialize filteredData with all data
    };

    fetchData();
  }, []);

  // Function to handle user input in search bar
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    // Filter data based on user input
    const filteredResults = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default searchBar;
