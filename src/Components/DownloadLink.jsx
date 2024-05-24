import React from 'react';
import pdfdoc from '../assets/Hassan Resume.pdf'; // Assuming the PDF file is in src/assets

const DownloadLink = ({label,style}) => {
  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = pdfdoc;
    link.download = 'Hassan_Resume.pdf'; // Set the filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded lg:ml-14"
      onClick={downloadFile}
    >

      CV Download
    </button>
    
  );
};

export default DownloadLink;
