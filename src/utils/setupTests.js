/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';

configure({ adapter: new Adapter() });

const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';

global.document = new JSDOM(documentHTML);
global.window = document.parentWindow;
global.window.scrollTo = () => {};
global.confirm = () => true;
global.document.getElementById = () => global.document.createElement('SPAN');
