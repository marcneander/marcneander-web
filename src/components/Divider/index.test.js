/* global it, expect, describe */
import React from 'react';
import { mount } from 'enzyme';
import Divider from './index';

describe('<Divider>', () => {
    it('should render correctly', () => {
        const wrapper = mount(<Divider width={30} inverse />);

        expect(wrapper.find('span').props().children).toEqual(undefined);
        expect(wrapper.find('span').props().style).toEqual({ width: 30 });
        expect(wrapper.find('span').props().inverse).toEqual(undefined);
        expect(wrapper.find('StyledDivider').props().inverse).toEqual(true);
    });
});
