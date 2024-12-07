import React, { useState } from "react";

interface File {
  id: string;
  name: string;
}

interface MinutesViewerProps {
  files: File[];
}

export default function MinutesViewer({ files }: MinutesViewerProps) {
  const [selectedFile, setSelectedFile] = useState<string>(files[0].id);

  const handleChange = (event) => {
    setSelectedFile(event.target.value);
  };

  return (
    <>
      <select className="custom-select" onChange={handleChange} value={selectedFile}>
        {files.map((file) => (
          <option key={file.id} value={file.id}>
            議事録_{file.name}
          </option>
        ))}
      </select>
      <div>
        <iframe
          src={`https://drive.google.com/file/d/${selectedFile}/preview`}
          width="100%"
          height="500"
          allow="autoplay"
          title="PDF Viewer"
        ></iframe>
      </div>
    </>
  );
}
