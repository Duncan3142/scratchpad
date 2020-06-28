module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	clearMocks: true,
	coverageDirectory: 'coverage',
	coveragePathIgnorePatterns: ['/node_modules/'],
	testPathIgnorePatterns: ['/node_modules/', '/dist/'],
	watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
