import React, {useEffect, useState } from 'react'
import axios from 'axios';

export default function PriceDetails({companyName}) {
    const [priceSummery, setPriceSummery] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const fetchPriceSummery = async () => {
        if (!companyName) {
          setError('Company name is required.');
          return;
        }
  
        setError('');
        setLoading(true);
        try {
          const response = await axios.get('http://127.0.0.1:8080/api/price-summery', {
            params: { company: companyName },
          });
          setPriceSummery(response.data.price_details);
        } catch (error) {
          setError(error.response?.data?.message || 'Failed to fetch company details.');
          setPriceSummery(null);
        } finally {
          setLoading(false);
        }
      };
  
      fetchPriceSummery();
    }, [companyName]);
  
    return (
      <div className="mt-6 border border-gray-300 bg-white rounded-lg p-4  shadow-md ">
        {loading ? (
        <p className="text-center text-blue-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : priceSummery ? (
        <>
          <h2 className="text-xl font-semibold mb-4">Price Summery</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(priceSummery).map(([key, value]) => (
              <li key={key} className="flex flex-col mb-2">
                <span className="font-bold">{key}</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      </div>
    );
}