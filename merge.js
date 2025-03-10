/*const PDFMerger = require('pdf-merger-js');


var merger = new PDFMerger();

const mergePdfs = async (p1,p2) => {
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2); // merge only page 2
 



  await merger.save('public/merged.pdf'); //save under given name and reset the internal document
  
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}
module.exports ={mergePdfs}*/
import PDFMerger from 'pdf-merger-js';

const mergePdfs = async (p1, p2, outputFilename) => {
  const merger = new PDFMerger();
  await merger.add(p1); // Add the first PDF
  await merger.add(p2); // Add the second PDF

  await merger.save(outputFilename); // Save the merged PDF
};

export { mergePdfs };
















