const { router } = require('../../server');

describe('Server routes', () => {
  it('should have 2 routes', () => {
    const routes = [
      { path: '/watches', method: 'get' },
      { path: '/iphones', method: 'get' },
    ];

    routes.forEach((route) => {
      const match = router.stack.find(
        (s) => s.route.path === route.path && s.route.methods[route.method]
      );

      expect(match).toBeTruthy();
    });
  });
});
