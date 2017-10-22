module.exports = {
    system: {
        projectRoot: './',
        plugins: {
            'html-reporter': {
                enabled: true,
                path: 'test/visual/report',
                defaultView: 'all'
            }
        }
    },
    rootUrl: 'http://web:8000',
    gridUrl: 'http://selenium-hub:4444/wd/hub',
    screenshotsDir: './test/visual/',
    httpTimeout: 30000,
    sessionRequestTimeout: 120000,
    sessionsPerBrowser: 2,
    compositeImage: true,
    browsers: {
        mobile: {
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    mobileEmulation: {
                        deviceName: 'Nexus 6P'
                    }
                }
            }
        },
        desktop: {
            windowSize: '1024x768',
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }
};
