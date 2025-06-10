'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { modelPredictionURL } from '@/app/components/apiURL';

type Prediction = {
    Timestamp: string;
    Open: number;
    High: number;
    Low: number;
    Close: number;
    Volume: number;
    Signal: string;
};

type AutotradeProps = {
    ticker: string;
};

const Autotrade: React.FC<AutotradeProps> = ({ ticker }) => {
    const [data, setData] = useState<Prediction[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!ticker) return;

        const fetchPrediction = async () => {
            setLoading(true);
            setError(null);

            try {
                // Add timestamp to prevent caching issues
                const timestamp = new Date().getTime();
                const response = await axios.get(
                    `${modelPredictionURL}?ticker=${ticker}.NS&_t=${timestamp}`,
                    {
                        headers: {
                            'ngrok-skip-browser-warning': 'true',
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'User-Agent': 'axios/1.6'
                        },
                        // Allow redirects
                        maxRedirects: 5,
                        timeout: 10000
                    }
                );

                console.log('API Response:', response);

                if (response.data) {
                    const prediction =
                        response.data?.data?.current_prediction ||
                        response.data?.current_prediction ||
                        response.data;

                    if (prediction) {
                        console.log('Extracted prediction:', prediction);

                        if (typeof prediction === 'object') {
                            const formattedPrediction: Prediction = {
                                Timestamp: prediction.Timestamp || new Date().toISOString(),
                                Open: parseFloat(prediction.Open) || 0,
                                High: parseFloat(prediction.High) || 0,
                                Low: parseFloat(prediction.Low) || 0,
                                Close: parseFloat(prediction.Close) || 0,
                                Volume: parseFloat(prediction.Volume) || 0,
                                Signal: prediction.Signal || 'Unknown'
                            };

                            // Always add the new prediction to the beginning of the array
                            // without checking for duplicates
                            setData(prev => [formattedPrediction, ...prev]);
                        }
                    } else {
                        console.warn('No prediction data found in response');
                    }
                }
            } catch (err: any) {
                console.error('Error fetching prediction:', err);
                setError(err.message || 'Failed to fetch prediction');
            } finally {
                setLoading(false);
            }
        };

        fetchPrediction();

        const interval = setInterval(fetchPrediction, 12000);

        return () => clearInterval(interval);
    }, [ticker]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Auto Trading Feed for {ticker}</h1>

            {loading && <p className="text-blue-500">Fetching data...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}

            {data.length === 0 && !loading && !error && (
                <p className="text-gray-500">No data available yet. Waiting for predictions...</p>
            )}

            {data.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">Timestamp</th>
                                <th className="border border-gray-300 px-4 py-2">Open</th>
                                <th className="border border-gray-300 px-4 py-2">High</th>
                                <th className="border border-gray-300 px-4 py-2">Low</th>
                                <th className="border border-gray-300 px-4 py-2">Close</th>
                                <th className="border border-gray-300 px-4 py-2">Volume</th>
                                <th className="border border-gray-300 px-4 py-2">Signal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, idx) => (
                                <tr key={idx} className={row.Signal === 'BUY' ? 'bg-green-50' : row.Signal === 'SELL' ? 'bg-red-50' : 'bg-white'}>
                                    <td className="border border-gray-300 px-4 py-2">{row.Timestamp}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.Open.toFixed(2)}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.High.toFixed(2)}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.Low.toFixed(2)}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.Close.toFixed(2)}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.Volume}</td>
                                    <td className={`border border-gray-300 px-4 py-2 font-bold ${row.Signal === 'BUY' ? 'text-green-600' :
                                        row.Signal === 'SELL' ? 'text-red-600' : 'text-gray-600'
                                        }`}>
                                        {row.Signal}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Autotrade;