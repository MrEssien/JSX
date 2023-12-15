import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
const myList = (
  <ul>Arsenal
  <li>Man Utd 
  <li>Chelsea
  </li>
  </li>
  </ul>
);

root.render(myList);