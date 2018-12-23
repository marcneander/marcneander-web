/* global it, expect, describe */
import React from 'react';
import { mount } from 'enzyme';
import Emoji from './index';

describe('<Emoji />', () => {
    it('should render correctly', () => {
        const wrapper = mount(<Emoji symbol="👍" label="Thumbs up" />);

        expect(wrapper.find('span').prop('role')).toEqual('img');
        expect(wrapper.find('span').text()).toBe('👍');
        expect(wrapper.find('span').prop('aria-label')).toBe('Thumbs up');
        expect(wrapper.find('span').prop('aria-hidden')).toBe('false');
    });
});
