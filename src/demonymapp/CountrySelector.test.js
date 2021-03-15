import React from 'react';
import ReactDOM from 'react-dom';
import CountrySelector from './CountrySelector';

describe('CountrySelector', ()=>{
    it('should render without crashing', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<CountrySelector />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});