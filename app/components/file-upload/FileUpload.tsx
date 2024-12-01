import React, { useState } from 'react';

interface FileUploadProps {
  onFileUpload: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const allowedExtensions = [
    '.js',
    '.jsx',
    '.ts',
    '.tsx',
    '.vue',
    '.html',
    '.css',
    '.json',
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const fileExt = file.name.split('.').pop();
      if (allowedExtensions.includes(`.${fileExt}`)) {
        setFileName(file.name);
        setError(null);
        onFileUpload(file); // Pass file for further processing
      } else {
        setError('Unsupported file type. Please upload a valid code file.');
        setFileName(null);
        onFileUpload(null);
      }
    }
  };

  return (
    <div className='flex flex-col items-center rounded-md border-2 border-dashed border-gray-400 p-4'>
      <input
        type='file'
        accept={allowedExtensions.join(',')}
        onChange={handleFileChange}
        className='hidden'
        id='file-upload'
      />
      <label
        htmlFor='file-upload'
        className='cursor-pointer text-gray-700 dark:text-gray-300'
      >
        <div className='rounded-md border border-gray-300 bg-gray-100 p-4 shadow-sm dark:border-gray-600 dark:bg-gray-800'>
          Drag and drop or click to upload code file
        </div>
      </label>
      {fileName && (
        <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
          {fileName}
        </p>
      )}
      {error && <p className='mt-2 text-sm text-red-500'>{error}</p>}
    </div>
  );
};

export default FileUpload;
