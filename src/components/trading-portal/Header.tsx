import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Search } from 'lucide-react';
import { FaUserCircle } from "react-icons/fa";
import useDebounce from '../../hooks/useDebounce';
import DarkMode from '../DarkMode';

interface Suggestion {
  name: string;
  symbol: string;
}

export function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (debouncedSearchTerm.length < 2) {
        setSuggestions([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(`http://127.0.0.1:8080/api/suggestions?data=${debouncedSearchTerm}`);
        const result = await response.json();
        if (result.status === 'Success') {
          setSuggestions(result.data);
        }
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSuggestions();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setSearchTerm(suggestion.name);
    setShowSuggestions(false);
    navigate(`/chart/${suggestion.symbol}`);
  };

  return (
    <header className="flex items-center justify-between p-4 text-white shadow-md bg-white">
      {/* Search Bar */}
      <div className="flex items-center gap-4 flex-1">
        <div className="relative flex-1 max-w-md" ref={searchRef}>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-200 w-5 h-5" />
          <input
            type="search"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
          />
          {showSuggestions && (searchTerm.length >= 2 || suggestions.length > 0) && (
            <div
              className="absolute z-10 left-0 w-full mt-1 bg-white rounded-xl shadow-lg max-h-60 overflow-y-auto
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-track]:bg-gray-100
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-gray-300
              dark:[&::-webkit-scrollbar-track]:bg-neutral-700
              dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
            >
              {isLoading ? (
                <div className="p-2 text-gray-500">Loading...</div>
              ) : suggestions.length > 0 ? (
                suggestions.map((suggestion) => (
                  <div
                    key={suggestion.symbol}
                    className="px-2 hover:bg-gray-100 cursor-pointer text-gray-800 py-3"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <div className="font-medium text-left">{suggestion.name}</div>
                    <div className="text-sm text-gray-500 text-left">{suggestion.symbol}</div>
                  </div>
                ))
              ) : (
                <div className="p-2 text-gray-500">No results found</div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Notifications and Profile */}
      <div className="flex items-center gap-4">
       
        {/* Notification Bell */}
        <button className="p-2 hover:bg-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
         {/*dark mode toggle*/}
          <DarkMode />
        {/* Profile Section */}
        <div className="flex items-center gap-3">
          <FaUserCircle className="text-gray-400 h-16 w-16" />
          <div className="text-right">
            <div className="font-semibold text-gray-800">Austin Robertson</div>
            <div className="text-sm text-gray-600">Marketing Administrator</div>
          </div>
        </div>
      </div>
    </header>
  );
}

