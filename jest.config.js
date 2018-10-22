module.exports = {
    collectCoverageFrom: ['src/**/*.{js,jsx}', '!**/node_modules/**', '!**/.cache/**'],
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFiles: ['<rootDir>/src/utils/setupTests.js'],
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    testPathIgnorePatterns: ['/node_modules/', '.cache'],
    testURL: 'http://localhost',
    transform: {
        '^.+\\.(js|ts|tsx)$': 'babel-jest'
    }
};
