import React, { useState } from 'react';

interface FileUploadProps {
  onFileUpload: (file: File | null) => void;
  allowedExtensions?: string[];
  buttonTitle?: string;
}

const ALLOWED_EXTENTIONS = [
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.vue',
  '.html',
  '.css',
  '.json',
  '.pdf',
];

const FileUpload: React.FC<FileUploadProps> = ({
  onFileUpload,
  allowedExtensions = ALLOWED_EXTENTIONS,
  buttonTitle = 'Upload File',
}) => {
  const [file, setFile] = useState<File | undefined>();
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState<boolean>(false);

  const validateExtention = (file: File) => {
    const fileExt = file.name.split('.').pop();
    return allowedExtensions.includes(`.${fileExt}`);
  };

  const processFile = (file: File | null) => {
    if (file) {
      if (validateExtention(file)) {
        setFile(file);
        setError(null);
        onFileUpload(file); // Pass file for further processing
      } else {
        setError('Unsupported file type. Please upload a valid code file.');
        setFile(undefined);
        onFileUpload(null);
      }
    }
  };

  // Handle the drag over event (allow file drop)
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // using for Preventing default action to allow drop
    setDragging(true);
  };

  // Handle the drag leave event (remove highlighting)
  const handleDragLeave = () => {
    setDragging(false);
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    processFile(file);
  };

  // Handle the drop event (process the dropped file)
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    handleDragLeave();
    const file = e.dataTransfer.files ? e.dataTransfer.files[0] : null;
    processFile(file);
  };

  return (
    <div
      className={`flex flex-col items-center rounded-md border-2 p-4 ${
        dragging ? 'border-blue-500' : 'border-dashed border-gray-400'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Hidden file input element */}
      <input
        type='file'
        accept={allowedExtensions.join(',')}
        onChange={handleFileChange}
        className='hidden'
        name='file-upload'
        id='file-upload'
      />
      <label
        htmlFor='file-upload'
        className='cursor-pointer text-gray-700 dark:text-gray-300'
      >
        <div className='rounded-md border border-gray-300 bg-gray-100 p-4 shadow-sm dark:border-gray-600 dark:bg-gray-800'>
          {dragging ? 'Drop here' : buttonTitle}
        </div>
      </label>
      {file && (
        <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
          {file.name}
        </p>
      )}
      {error && <p className='mt-2 text-sm text-red-500'>{error}</p>}
    </div>
  );
};

export default FileUpload;
