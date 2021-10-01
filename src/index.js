import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

Sentry.init({
  dsn: 'https://c5c75517f1674aceab9613ae90c7014d@o1022424.ingest.sentry.io/5988626',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.getElementById('root'));
