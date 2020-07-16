import React from 'react';
import { useTranslation } from 'react-i18next';

import './App.scss';
import Corner from './components/corner/corner';
import HtmlTag from './components/html_tag/html_tag';
import { ReactComponent as PersonalLogo } from './images/animated_logo.svg';

function App() {
  const { t } = useTranslation();

  return (
    <div className="app">
      <Corner />
      <div className="container mt-5">
        <HtmlTag tagName="body" fullPage>
          <HtmlTag tagName="h2">
            <h2 className="title">
              {t('build_something')} <span className="text-secondary">{t('exciting')}</span>?
            </h2>
          </HtmlTag>
        </HtmlTag>
      </div>
      <PersonalLogo className={'personal-logo'} />
    </div>
  );
}

export default App;
