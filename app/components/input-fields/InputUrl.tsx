import React, { useState } from 'react';

import Input from './InputField';

interface URLInputProps {
  onURLSubmit: (url: string) => void;
}

const URLInput: React.FC<URLInputProps> = ({ onURLSubmit }) => {
  const [url, setUrl] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    setError(null); // Clear any previous errors
  };

  const handleSubmit = () => {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (urlPattern.test(url)) {
      onURLSubmit(url); // Pass URL to backend logic (future use)
    } else {
      setError('Please enter a valid URL.');
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-sm">
        <Input
          label="Enter URL for repository or code:"
          value={url}
          onChange={handleChange}
          placeholder="https://github.com/your/repository"
          error={error}
        />
        <button
          onClick={handleSubmit}
          className="mt-3 w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600"
        >
          Submit URL
        </button>
      </div>
    </div>
  );
};

export default URLInput;
