/* global it, expect, describe */
import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('<Button>', () => {
    it('should render children prop', () => {
        const wrapper = shallow(<Button>child</Button>);

        expect(wrapper.children().text()).toBe('child');
    });
});
