import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card Component',()=>{
    it('renders without crashing', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Renders the UI as expected', ()=>{
        const tree =renderer
            .create(<Card title='title' content='content' />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})