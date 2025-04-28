// components/talent/TalentSearchInput.tsx
import { type KeyboardEvent, useState } from 'react';

interface TalentSearchInputProps {
  onSearch: (query: string) => void;
  onClear: () => void;
}

export const TalentSearchInput = ({ onSearch, onClear }: TalentSearchInputProps) => {
  const [tempSearchInput, setTempSearchInput] = useState('');

  const handleSearchSubmit = () => {
    onSearch(tempSearchInput);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const handleClear = () => {
    setTempSearchInput('');
    onClear();
  };

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between rounded-lg border-b border-[#1F1F1F] p-2">
        <input
          type="text"
          value={tempSearchInput}
          onChange={(e) => setTempSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What do you need?"
          className="w-full border-none bg-transparent text-sm text-[#665F5F] focus:outline-none"
        />
        <div className="flex space-x-2">
          <button
            className="flex w-10 items-center rounded border border-[#1F1F1F] bg-transparent px-3 py-1 text-xs text-[#665F5F]"
            onClick={handleSearchSubmit}
          >
            <img src="/Vectar.png" alt="Arrow" className="h-3 w-3" />
          </button>
          <button
            className="flex items-center rounded border border-[#1F1F1F] bg-transparent px-3 py-1 text-xs text-[#665F5F]"
            onClick={handleClear}
          >
            <span>Return</span>
          </button>
        </div>
      </div>
    </div>
  );
};
