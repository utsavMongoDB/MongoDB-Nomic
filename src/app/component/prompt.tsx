// components/TripPlannerForm.tsx

import React, { useState } from 'react';

interface TripPlannerFormProps {
  setWaitingForAI: (waiting: boolean) => void;
  setPrompt: (prompt: string) => void;
}

const TripPlannerForm: React.FC<TripPlannerFormProps> = ({ setWaitingForAI, setPrompt }) => {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState('');
  const [companions, setCompanions] = useState('');
  const [theme, setTheme] = useState('');
  const [budget, setBudget] = useState('');

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => setDestination(e.target.value);
  const handleDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => setDays(e.target.value);
  const handleCompanionsChange = (e: React.ChangeEvent<HTMLInputElement>) => setCompanions(e.target.value);
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => setTheme(e.target.value);
  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => setBudget(e.target.value);

  return (
    <div className="flex items-center pt-0 chat-window">
      <div className="flex flex-col w-full">
        <div className="flex justify-center items-center p-6 text-white space-x-5">
          <p>Planning a trip to </p>
          <input
            value={destination}
            onChange={handleDestinationChange}
            className="flex rounded-none border-0 border-b-2 border-dotted border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-0 focus:border-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#f9fafb] bg-black"
            placeholder="vegas, bahamas, etc."
          />
           <p>for</p> 
          <input
            value={days}
            onChange={handleDaysChange}
            className="flex rounded-none border-0 border-b-2 border-dotted border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-0 focus:border-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#f9fafb] bg-black"
            placeholder="3, 5, etc."
          />
           <p>days, </p>
          <input
            value={companions}
            onChange={handleCompanionsChange}
            className="flex rounded-none border-0 border-b-2 border-dotted border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-0 focus:border-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#f9fafb] bg-black"
            placeholder="with family, friends, etc."
          />
           <p> focused on </p> 
          <input
            value={theme}
            onChange={handleThemeChange}
            className="flex rounded-none border-0 border-b-2 border-dotted border-[#e5e7eb] px-2 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-0 focus:border-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#f9fafb] bg-black"
            placeholder="art, adventure, etc."
          />
          <p> theme, let us make it </p>
          <input
            value={budget}
            onChange={handleBudgetChange}
            className="flex rounded-none border-0 border-b-2 border-dotted border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-0 focus:border-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#f9fafb] bg-black"
            placeholder="budget-friendly, luxury, etc."
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-2 py-2 border-2 border-white transition duration-300 ease-in-out transform hover:bg-green-700"
            style={{
              boxShadow: '0 8px #999',
              transform: 'translateY(-4px)',
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'translateY(4px)';
              e.currentTarget.style.boxShadow = '0 2px #666';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px #999';
            }}
            onClick={(e) => {
              e.preventDefault();
              setWaitingForAI(true);
              // set prompt with the values
              setPrompt(`I am planning a trip to ${destination} for ${days} days. I am traveling with ${companions} with the theme of ${theme}, let's plan a ${budget} trip.`);
            }}
          >
            <img src="/bot.png" alt="Bot" className="ml-1 w-9 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripPlannerForm;