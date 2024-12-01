'use client';
import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';

import { Alert, Button, FileUpload, Input } from '../components';

const CodeAnalyzer: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState('');
  const [results, setResults] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    setLoading(true);
    setResults(null);

    const formData = new FormData();
    if (file) formData.append('file', file);
    if (url) formData.append('url', url);

    try {
      const response = await axios.post('/api/analyze', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResults(response.data.results);
    } catch (error) {
      setError((error as AxiosError).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='space-y-4 p-4'>
      <Input
        label='Enter URL (optional)'
        type='text'
        placeholder='Enter URL to fetch code'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <FileUpload onFileUpload={(selectedFile) => setFile(selectedFile)} />
      <Button onClick={handleAnalyze} disabled={false} text='Analyze Code' />

      {loading && <p className='text-center text-gray-500'>Analyzing...</p>}

      {results && (
        <Alert type='info'>
          <pre className='whitespace-pre-wrap'>{results}</pre>
        </Alert>
      )}

      {error && <Alert type='error'>{error}</Alert>}
    </div>
  );
};

export default CodeAnalyzer;
