// https://github.com/wojtekmaj/react-pdf/wiki/Recipes

import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';


export default function ViewPDF({ pdf }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page scale={1.5} pageNumber={pageNumber} />
      </Document>
      <nav class="pagination-nav">
        <div class="pagination-nav__item">
          <button
            class="pagination-nav__link"
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            <div class="pagination-nav__sublabel">Previous</div>
            <div class="pagination-nav__label"></div>
          </button>

        </div>
        <div class="pagination-nav__item pagination-nav__item--next">
          <button
            class="pagination-nav__link"
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            <div class="pagination-nav__sublabel">Next</div>
            <div class="pagination-nav__label">Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}</div>
          </button>
        </div>
      </nav>
    </>
  );
}