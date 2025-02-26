/*const express = require('express')
const path = require('path')
const app = express()
const multer  = require('multer')
const {mergePdfs}  = require('./merge')
const upload = multer({ dest: 'uploads/' })
app.use(express.static('public'))
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templates/index.html"))
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=> {
  try {
    console.log(req.files);

    // Merge PDFs and save to the "public" directory
    await mergePdfs(
      path.join(__dirname, req.files[0].path),
      path.join(__dirname, req.files[1].path),
      path.join(__dirname, 'public', 'merged.pdf')
    );

    // Redirect to the merged PDF
    res.redirect('/merged.pdf');
  } catch (err) {
    console.error('Error merging PDFs:', err);
    res.status(500).send('An error occurred while merging PDFs.');
  }
});
  /*  console.log(req.files)
   await mergePdfs(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path))
    res.redirect("http://localhost:3000/static/merged.pdf")
    //res.send({data: req.files })
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
  })
  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })
  */
  import express from 'express';
  import path from 'path';
  import multer from 'multer';
  import { mergePdfs } from './merge.js';
  
  const app = express();
  const upload = multer({ dest: 'uploads/' });
  const port = 3000;
  
  app.use(express.static('public'));
  
  app.get('/', (req, res) => {
    res.sendFile(path.resolve('templates/index.html'));
  });
  
  app.post('/merge', upload.array('pdfs', 2), async (req, res) => {
    try {
      console.log(req.files);
  
      const outputFilePath = path.resolve('public/merged.pdf');
      await mergePdfs(req.files[0].path, req.files[1].path, outputFilePath);
  
      res.redirect('/merged.pdf');
    } catch (err) {
      console.error('Error merging PDFs:', err);
      res.status(500).send('An error occurred while merging PDFs.');
    }
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
  });
  