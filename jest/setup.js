global.console = {
  ...console,
  error: jest.fn(),
  warn: jest.fn(),
};
