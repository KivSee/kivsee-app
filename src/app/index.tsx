import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const rootElement = document.getElementById('react-app');

render(<App />, rootElement);
