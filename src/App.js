import React from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const App = () => {
  const doc = [
    {
      uri:"https://dmotfbgqnoylq.cloudfront.net/1695703743747.PPT",
      fileType: "ppt",
      fileName: "1695703743747.PPT"
    },
    
  ];

  return (
    <div>
      <h1>PowerPoint Viewer</h1>
      <DocViewer documents={doc} pluginRenderers={DocViewerRenderers} style={{ height: 500 }} />
    </div>
  );
};

export default App;
