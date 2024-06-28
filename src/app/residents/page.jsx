'use client'

import { useState } from 'react';
import data from './data.json';
import './resident.css';
import SidebarMenu from '../../Components/Sidebar/SidebarMenu.jsx'


export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const rowsPerPage = 10;

  // Filtered data based on search term
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handleEdit = (index) => {
    const editedData = prompt("Edit the data:", JSON.stringify(filteredData[index]));
    if (editedData) {
      filteredData[index] = JSON.parse(editedData);
    }
  };

  const paginatedData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <><SidebarMenu />
    <div className="container">
      <h1>Manage Residents</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearch} />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Master Details</th>
            <th>Flat No</th>
            <th>Block No</th>
            <th>Role</th>
            <th>Residing</th>
            <th>Parking</th>
            <th>Feedback</th>
            <th>Vehicle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.address}</td>
              <td>{row.moreDetails}</td>
              <td>{row.flatNo}</td>
              <td>{row.blockNo}</td>
              <td>{row.role}</td>
              <td>{row.residing}</td>
              <td>{row.parking}</td>
              <td>{row.feedback}</td>
              <td>{row.vehicle}</td>
              <td><button className="edit-button" onClick={() => handleEdit((currentPage - 1) * rowsPerPage + index)}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>&lt; Previous</button>
        <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>1</button>
        <button onClick={() => setCurrentPage(2)} disabled={currentPage === 2}>2</button>
        {currentPage > 2 && currentPage < totalPages - 1 && <span>...</span>}
        <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>{totalPages}</button>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next &gt;</button>
      </div>
    </div></>
  );
}
