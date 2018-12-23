/* global it, expect, describe */
import React from 'react';
import { mount } from 'enzyme';
import Divider from './index';

describe('<Divider />', () => {
    it('should render correctly', () => {
        const wrapper = mount(<Divider />);

        expect(wrapper.props().children).toEqual(undefined);
        expect(wrapper.props().inverse).toEqual(undefined);
        expect(wrapper).toHaveStyleRule('background-color', '#293440');
    });

    it('should render correctly when inversed', () => {
        const wrapper = mount(<Divider inverse />);

        expect(wrapper).toHaveStyleRule('background-color', '#fdf6e3');
    });
});
