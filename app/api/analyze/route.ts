import axios from 'axios';
import { ESLint } from 'eslint';
import fs from 'fs';
import multer from 'multer';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

// Custom type for Next.js API Request with file
interface NextApiRequestWithFile extends NextApiRequest {
  file?: Express.Multer.File;
}

// Multer setup for file upload
const upload = multer({
  dest: 'uploads/', // Files will be uploaded to the 'uploads' folder
});

export const config = {
  api: {
    bodyParser: false, // Disable body parsing to handle file uploads
  },
};

// Middleware wrapper for multer
const multerMiddleware = upload.single('file');

// Wrap multer as a Promise to avoid callback-based usage
const multerWrapper = (req: NextApiRequestWithFile, res: NextApiResponse) =>
  new Promise((resolve, reject) => {
    multerMiddleware(req as any, res as any, (err) => {
      if (err) reject(err);
      resolve(true);
    });
  });

const handler = async (req: NextApiRequestWithFile, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      await multerWrapper(req, res); // Handle file uploads

      const { url } = req.body;
      let code = '';

      // Fetch code from URL if provided
      if (url) {
        const response = await axios.get(url);
        code = response.data;
      } else if (req.file) {
        // Read uploaded file content
        const filePath = path.join(process.cwd(), req.file.path);
        code = fs.readFileSync(filePath, 'utf-8');
      }

      console.log(code);
      // ESLint code analysis
      const eslint = new ESLint();
      const results = await eslint.lintText(code);
      const formatter = await eslint.loadFormatter('stylish');
      const formattedResults = formatter.format(results);

      return res.status(200).json({ results: formattedResults });
    } catch (error) {
      return res.status(500).json({ message: 'Error processing code', error });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
