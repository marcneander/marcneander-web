// firefox setting
const FIREFOX_CONFIGURATION = {
    browserName: 'firefox',
    marionette: true,
    javascriptEnabled: true,
    acceptSslCerts: true
};

// chrome setting
const CHROME_CONFIGURATION = {
    browserName: 'chrome',
    javascriptEnabled: true,
    acceptSslCerts: true
};

// default setting
const DEFAULT_CONFIGURATION = {
    launch_url: 'http://web:3001',
    selenium_port: 4444,
    selenium_host: 'selenium-hub',
    silent: true,
    screenshots: {
        enabled: true,
        path: 'test/e2e/screenshots',
        on_failure: true,
        on_error: true
    },
    desiredCapabilities: CHROME_CONFIGURATION
};

const ENVIRONMENTS = {
    default: DEFAULT_CONFIGURATION,
    firefox: {
        desiredCapabilities: FIREFOX_CONFIGURATION
    },
    chrome: {
        desiredCapabilities: CHROME_CONFIGURATION
    }
};

module.exports = {
    src_folders: ['test/e2e'],
    output_folder: 'test/e2e/reports',
    test_settings: ENVIRONMENTS
};
