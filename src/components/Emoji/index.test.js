/* global it, expect, describe */
import React from 'react';
import { shallow } from 'enzyme';
import Emoji from './index';

describe('<Divider>', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Emoji symbol="👍" label="Thumbs up" />);

        expect(wrapper.find('span').prop('role')).toEqual('img');
        expect(wrapper.find('span').text()).toBe('👍');
        expect(wrapper.find('span').prop('aria-label')).toBe('Thumbs up');
    });
});
