import React from 'react';
import TextComponent from './TextComponent';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


it('must have a text prop when rendering', () => {
    const wrapper = shallow(<TextComponent text='Hej' />)
    expect(wrapper.text()).toBe('Hej')
});
