import React from 'react';
import ReactDOM from 'react-dom';
import Demonym from './Demonym';

describe('Demonym', ()=>{
    it('should render without crashing', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<Demonym />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});