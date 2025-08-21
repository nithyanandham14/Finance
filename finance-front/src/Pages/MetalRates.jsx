import React, { useEffect, useState } from "react";
import API from "../axios"; 

export default function MetalRates() {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await API.get("/api/metal-rates"); // auto adds JWT
        setRates(res.data);
      } catch (err) {
        console.error("Failed to fetch metal rates", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  if (loading) {
    return <p className="text-gray-500">Loading live rates...</p>;
  }

  return (
    <div className="metal-rates">
      <div className="metal-body">
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
