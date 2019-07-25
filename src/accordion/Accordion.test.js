
import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';


it('Accordion renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Accordion />, div);
  ReactDOM.unmountComponentAtNode(div);
});