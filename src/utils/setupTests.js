/* eslint-disable import/no-extraneous-dependencies */
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';

global.document = new JSDOM(documentHTML);
global.window = document.parentWindow;
global.window.scrollTo = () => {};
global.confirm = () => true;
global.document.getElementById = () => global.document.createElement('SPAN');
