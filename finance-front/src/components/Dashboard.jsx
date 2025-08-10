import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [rates, setRates] = useState({});
  const [search, setSearch] = useState('');
  const [itemDetails, setItemDetails] = useState(null);
  const [error, setError] = useState('');

  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/metal-rates');
      setRates(res.data);
    } catch (err) {
      console.error('Error fetching metal rates:', err);
    }
  };

  const fetchItemDetails = async (jwlno) => {
    try {
      const res = await axios.get(`http://localhost:8080/bjsn/item/${jwlno}`);
      setItemDetails(res.data);
      setError('');
    } catch (err) {
      console.error('Error fetching item details:', err);
      setItemDetails(null);
      setError('No record found for this JWL No');
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value) {
      fetchItemDetails(e.target.value);
    } else {
      setItemDetails(null);
      setError('');
    }
  };

  return (
    <div className='dashboard'>
      <div className='dashboard-side'>
        <ul>
          <li>Gold:<span>{gold}</span>₹</li>
          <li>Silver:<span>{silver}</span>₹</li>
        </ul>
      </div>

      <div className='dashboard-body'>
        <h2 className="">Today's Gold & Silver Rates</h2>
        {/* <h2 className="">Today's Rates</h2> */}
        <ul>
          {Object.entries(rates).map(([metal, rate]) => (
            <li key={metal} className="">
              <strong>{metal}:</strong> ₹{String(rate).substring(0, 7)}
            </li>
          ))}
        </ul>

        <h4 className="">Search Pawned Item by JWL No</h4>
        <input
          className="form-control my-2"
          type="number"
          placeholder="Enter JWL No..."
          value={search}
          onChange={handleSearch}
        />

        {error && <p className="text-red-600">{error}</p>}

        {itemDetails && (
          <div className="">
            <h3 className="">Details for JWL No: {itemDetails.jwlno}</h3>
            <p><strong>Name:</strong> {itemDetails.name}</p>
            <p><strong>Father Name:</strong> {itemDetails.fathername}</p>
            <p><strong>Principal Amount:</strong> ₹{itemDetails.principalamt}</p>
            <p><strong>Item Type:</strong> {itemDetails.itemtype}</p>
            <p><strong>Status:</strong> {itemDetails.status ? 'In Loan' : 'Released'}</p>
          </div>
        )}
      </div>
    </div>
  );
}
