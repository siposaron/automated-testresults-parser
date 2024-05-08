# Automated test results parser

Parse test results from JUnit, TestNG, xUnit, NUnit, Mocha(json), Cucumber(json).

Project is a fork of https://github.com/test-results-reporter/parser

## Improvements

- parse content from URL
- improve NUnit v3 
  - fix duration and status of test suite
  - add new metadata: environment, settings

## Support

| Result Type                   | Support |
|-------------------------------|---------|
| TestNG                        | ✅      |
| JUnit                         | ✅      |
| NUnit (v2 & v3)               | ✅      |
| MSTest                        | ✅      |
| xUnit                         | ✅      |
| Mocha (json & mochawesome)    | ✅      |
| Cucumber                      | ✅      |
