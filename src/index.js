
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { I18nextProvider } from 'react-i18next'
import i18next from './translations/i18next'

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
      <App />
  </I18nextProvider>,
  document.getElementById('root')
);

