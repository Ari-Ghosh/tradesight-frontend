import React from 'react';
import { AlertTriangle } from 'lucide-react'; // Make sure you have lucide-react installed

const NoStockData = () => {
    return (
        <div className="flex items-start gap-4 bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl shadow-md animate-fade-in" role="alert">
            <div className="pt-1">
                <AlertTriangle className="w-6 h-6 text-red-500 animate-bounce" />
            </div>
            <div>
                <h3 className="text-md font-semibold">Heads up!</h3>
                <p className="text-sm mt-1">Stock data is currently unavailable for this stock. Please try again later.</p>
            </div>
        </div>
    );
};

export default NoStockData;
