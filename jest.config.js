/**
 * @format
 * @Author: huweijian
 * @Date: 2020-02-09 07:47:22
 * @Desc: 单元测试配置
 */

module.exports = {
  verbose: true,
  clearMocks: false,
  collectCoverage: true, // 是否收集测试覆盖率
  collectCoverageFrom: ['{src,include}/**/*.{ts,tsx}', '!**/node_modules/**'], // 从哪里收集覆盖率信息
  coverageDirectory: 'coverage', // 覆盖率信息导出路径
  coverageReporters: ['text', 'lcov'], // 覆盖率信息导出格式
  reporters: ['default', 'jest-junit'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/file-mock.js', // 配置无需测试资源对应的mock文件
    '\\.(scss|sass|less|css)': '<rootDir>/test/__mocks__/object-mock.js', // 配置无需测试资源的mock对象
    '@src(.*)$': '<rootDir>/src$1', // 配置同webpack alias短路径
    '^@lib(.*)$': '<rootDir>/src/lib$1', // 配置同webpack alias短路径
    '^@config(.*)$': '<rootDir>/src/config$1', // 配置同webpack alias短路径
    '^@components(.*)$': '<rootDir>/src/components$1', // 配置同webpack alias短路径
    '^@customTypes(.*)$': '<rootDir>/src/customTypes$1', // 配置同webpack alias短路径
    '^@view(.*)$': '<rootDir>/src/view$1', // 配置同webpack alias短路径
    '^@store(.*)$': '<rootDir>/src/store$1', // 配置同webpack alias短路径
    '^@router(.*)$': '<rootDir>/src/router$1', // 配置同webpack alias短路径
    '^@utils(.*)$': '<rootDir>/src/utils$1', // 配置同webpack alias短路径
    '^@image(.*)$': '<rootDir>/src/image$1', // 配置同webpack alias短路径
    '^@svg(.*)$': '<rootDir>/src/assets/svg$1' // 配置同webpack alias短路径
  },
  testMatch: ['<rootDir>/**/__test__/**/*.unit.test.(js|jsx|ts|tsx)'], // 配置需要执行的测试代码
  transform: {
    '^.+unit\\.(js|jsx)$': 'babel-jest', // 配置需要语法转化的文件
    '^.+\\.(ts|tsx)$': 'babel-jest' // 配置需要语法转化的文件
  },
  globals: {
    ENV: 'dev'
  },
  setupFilesAfterEnv: ['<rootDir>test/setupTexts.js'] // 配置测试启动执行的入口文件
}
