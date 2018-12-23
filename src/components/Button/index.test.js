/* global it, expect, describe */
import React from 'react';
import { mount } from 'enzyme';
import Button from './index';

describe('<Button />', () => {
    it('should render children prop', () => {
        const wrapper = mount(<Button>Text</Button>);

        expect(wrapper.children().text()).toBe('Text');
    });
});
