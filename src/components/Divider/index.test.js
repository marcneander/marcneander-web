/* global it, expect, describe */
import React from 'react';
import { render } from 'enzyme';
import Divider from './index';

describe('<Divider>', () => {
    it('should render correctly', () => {
        const wrapper = render(<Divider width={30} />);

        expect(wrapper).toMatchSnapshot();
    });
});
