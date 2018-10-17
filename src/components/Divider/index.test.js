/* global it, expect, describe */
import React from 'react';
import { render } from 'enzyme';
import Divider from './index';

describe('<Divider>', () => {
    it('should render correctly', () => {
        const tree = render(<Divider />);

        expect(tree).toMatchSnapshot();
    });
});
