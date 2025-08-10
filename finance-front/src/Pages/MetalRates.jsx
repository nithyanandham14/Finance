import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MetalRates() {
  const [rates, setRates] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8080/api/metal-rates')
      .then(res => setRates(res.data))
      .catch(err => console.error('Failed to fetch metal rates', err));
  }, []);

  return (
    <div className='metal-rates'>
      <div className='metal-body'>
        <h2 className="text-xl font-bold mb-4">Live Metal Rates</h2>
        <table className="p-5 rounded">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800">
              <th className="text-left p-2">Metal</th>
              <th className="text-left p-2">Rate (₹)</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(rates).map(([metal, rate]) => (
              <tr key={metal}>
                <td className="p-2">{metal}</td>
                <td className="p-2">₹{rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
// import React, { useEffect, useState } from "react";

// function MetalRates() {
//   const [rates, setRates] = useState({});

//   useEffect(() => {
//     fetch("https://kjplbullion.com/api/liveprice")
//       .then(response => response.json())
//       .then(data => setRates(data))
//       .catch(err => console.error("Failed to fetch rates:", err));
//   }, []);

//   return (
//     <div>
//       <h2>Chennai Gold & Silver Rates (Live from KJPL)</h2>
//       <p>24K Gold: ₹{rates.gold_24}</p>
//       <p>22K Gold: ₹{rates.gold_22}</p>
//       <p>Silver: ₹{rates.silver}</p>
//     </div>
//   );
// }

// export default MetalRates;
