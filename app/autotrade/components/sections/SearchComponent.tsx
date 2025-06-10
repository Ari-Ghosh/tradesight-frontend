"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";

interface SearchComponentProps {
    onSearch: (query: string) => void;
    searchTerm: string;
    setSearchTerm: (query: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch, searchTerm, setSearchTerm }) => {

    const [inputValue, setInputValue] = useState(searchTerm);

    const handleSearch = () => {
        if (inputValue.trim() !== "") {
            onSearch(inputValue);
            setSearchTerm(inputValue);
            setInputValue("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="flex items-center border rounded-xl px-3 py-2 w-full max-w-md bg-white shadow-sm">
            <input
                type="text"
                placeholder="Search..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 outline-none text-sm"
            />
            <button
                onClick={handleSearch}
                className="ml-2 text-gray-500 hover:text-black"
                aria-label="Search"
            >
                <Search size={18} />
            </button>
        </div>
    );
};

export default SearchComponent;
