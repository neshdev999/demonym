import React from 'react';
import ReactDOM from 'react-dom';
import DemonymApp from './DemonymApp';

describe('DemonymApp', ()=>{
    it('should render without crashing', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<DemonymApp />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});