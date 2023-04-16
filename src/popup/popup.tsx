
import React from 'react';
import { createRoot } from 'react-dom/client'
import '../assets/tailwind.css'
import App from './front';

const All = () => {
  return (
    <div>
      <App />
    </div>
  );
};

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<All />);

