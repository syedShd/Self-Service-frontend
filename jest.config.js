module.exports = {
  verbose: true,
  globals: {
    'ts-jest': {
      diagnostics: true,
    },
  },
  transform: {
    '^.+\\.(js|ts|tsx)?$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './assetsTransformer.ts',
    '\\.(yaml)$': 'jest-raw-loader',
  },
  transformIgnorePatterns: ['node_modules/(?!@prekari/core-ui)'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFiles: ['./src/setupTests.ts'],
  setupFilesAfterEnv: ['./src/globals.ts'],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  snapshotSerializers: ['enzyme-to-json/serializer'],
}
