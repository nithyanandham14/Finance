import React, { useState } from 'react';
import axios from 'axios';

export default function Report() {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [monthlyRate, setMonthlyRate] = useState('');
  const [status, setStatus] = useState('');

  const downloadReport = async () => {
    try {
      const res = await axios.get('http://localhost:8080/bjsn/items/report/pdf', {
        responseType: 'blob',
        params: { month, year, monthlyRate, filterStatus: status }
      });

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `Report_${month}_${year}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      alert('Failed to generate report');
      console.error(err);
    }
  };

  return (
    <div className='report'>
      <div className='report-body'>
        <h2 className="text-xl font-bold mb-4">Download Monthly Report</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="number" placeholder="Month (1-12)" value={month} onChange={(e) => setMonth(e.target.value)} className="p-2 border rounded dark:bg-gray-800 dark:text-white me-2" />
          <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} className="p-2 border rounded dark:bg-gray-800 dark:text-white me-2" />
          <input type="number" placeholder="Monthly Rate" step="0.01" value={monthlyRate} onChange={(e) => setMonthlyRate(e.target.value)} className="p-2 border rounded dark:bg-gray-800 dark:text-white me-2" />
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="p-2 border rounded dark:bg-gray-800 dark:text-white">
            <option value="">All</option>
            <option value="inloan">In Loan</option>
            <option value="released">Released</option>
          </select>
        </div>
        <button onClick={downloadReport} className="mt-4 px-4 py-2 btn btn-success rounded">Download PDF</button>
      </div>
    </div>
  );
}
