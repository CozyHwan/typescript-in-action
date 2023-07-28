/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: [
    '/node_modules/',
    'dist',
  ],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',{
        diagnostics: {
          ignoreCodes: [1343],
        },
      },
    ],
  },
};
