import React, { useState } from 'react';
import axios from 'axios';

export default function Calculator() {
  const [jwlno, setJwlno] = useState('');
  const [monthlyRate, setMonthlyRate] = useState('');
  const [details, setDetails] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  const calculate = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/bjsn/item/${jwlno}/interest/details`, {
        params: { monthlyRate }
      });
      setDetails(res.data);
      setStatusMessage('');
    } catch (err) {
      alert('Failed to fetch interest details');
      console.error(err);
      setDetails(null);
    }
  };

  const toggleStatus = async () => {
    if (!details) return;
    const newStatus = !details.status;
    try {
      const response = await axios.put(
        `http://localhost:8080/bjsn/item/${details.jwlno}/status`,
        null,
        { params: { status: newStatus } }
      );
      alert(response.data);
      setDetails({ ...details, status: newStatus });
      setStatusMessage(response.data);
    } catch (err) {
      alert('Failed to update status');
      console.error(err);
    }
  };

  return (
    <div className='calculate'>
      <div className='calculate-body'>
        <h2 className="text-xl font-bold mb-4">Interest Calculator</h2>
        <div className="space-y-4">
          <input
            type="number"
            placeholder="JWL No"
            value={jwlno}
            onChange={(e) => setJwlno(e.target.value)}
            className="p-2 w-full border rounded dark:bg-gray-800 dark:text-white"
          />
          <input
            type="number"
            step="0.01"
            placeholder="Monthly Rate"
            value={monthlyRate}
            onChange={(e) => setMonthlyRate(e.target.value)}
            className="p-2 w-full border rounded dark:bg-gray-800 dark:text-white"
          />
          <button
            onClick={calculate}
            className="btn btn-success p-2">
            Calculate
          </button>
        </div>
        {details && (
          <div className="mt-6 bg-white dark:bg-gray-700 p-4 rounded shadow space-y-2">
            <h3 className="font-bold text-lg mb-2">Results for {details.name}</h3>
            <p>Months: {details.months}</p>
            <p>Loan Date: {details.stdate}</p>
            <p>Principal Amount: ₹{details.principalamt}</p>
            <p>Simple Interest: ₹{details.simpleInterest.toFixed(2)}</p>
            <p>Compound Interest: ₹{details.compoundInterest.toFixed(2)}</p>
            <div className="flex items-center space-x-4">
              <p>Status: {details.status ? 'In Loan' : 'Released'}</p>
              <button
                onClick={toggleStatus}
                className={`px-3 py-1 rounded text-white ${details.status ? 'bg-red-600' : 'bg-green-600'
                  }`}
              >
                {details.status ? 'Mark as Released' : 'Mark as In Loan'}
              </button>
            </div>
            {statusMessage && (
              <p className="text-green-600 font-semibold">{statusMessage}</p>
            )}
          </div>
        )}
      </div>
    </div>

  );
}
