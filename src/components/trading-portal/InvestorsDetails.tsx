import React, { useState, useEffect } from "react";
import axios from "axios";

const InvestorsDetails = ({companyName}) => {
  const [data, setData] = useState({ Promoter: [], Investor: [] });
  const [activeTab, setActiveTab] = useState("Promoter");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
        const response = await axios.get('http://127.0.0.1:8080/api/investors-details', {
            params: { company: companyName },
          });
      setData(response.data);
    } catch (err) {
        console.log(err)
      setError("Failed to fetch data. Please try again.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderTable = (tableData) => {
    if (tableData.length === 0) return <p className="text-gray-500">No data available.</p>;

    return (
      <table className="table-auto border-collapse border border-gray-200 w-full text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            {tableData[0].map((header, index) => (
              <th key={index} className="px-4 py-2 border border-gray-200">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex} className="odd:bg-white even:bg-gray-50">
              {row.map((col, colIndex) => (
                <td key={colIndex} className="px-4 py-2 border border-gray-200">
                  {col}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="p-6 font-sans bg-gray-100">
      <h1 className="text-xl font-semibold mb-4">Investors Details</h1>

      <div className="flex justify-center gap-4 mb-4">
        <button
          className={`px-6 py-2 rounded ${
            activeTab === "Promoter"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("Promoter")}
        >
          Promoter
        </button>
        <button
          className={`px-6 py-2 rounded ${
            activeTab === "Investor"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("Investor")}
        >
          Investor
        </button>
      </div>

      <div className="bg-white p-4 shadow-md rounded">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : activeTab === "Promoter" ? (
          renderTable(data.Promoter)
        ) : (
          renderTable(data.Investor)
        )}
      </div>
    </div>
  );
};

export default InvestorsDetails;
