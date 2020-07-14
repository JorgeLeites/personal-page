import React from 'react';
import './App.scss';
import Corner from './components/corner/corner';
import HtmlTag from './components/html_tag/html_tag';

function App() {
  return (
    <div className="app">
      <Corner />
      <div className="container mt-5">
        <HtmlTag tagName="body" fullPage>
          <HtmlTag tagName="h2">
            <h2 className="title">
              Do you want to build something <span className="text-secondary">exciting</span>?
            </h2>
          </HtmlTag>
        </HtmlTag>
      </div>
    </div>
  );
}

export default App;
