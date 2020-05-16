const devicesList = [
  {
    model: 'macbook-15',
    width: 1440,
    height: 900,
  },
  {
    model: 'ipad-2',
    width: 768,
    height: 1024,
  },
  {
    model: 'iphone-8',
    width: 375,
    height: 667,
  },
];

function multipleDevicesTesting(pageList, tests) {
  pageList.forEach(page => {
    describe(`${page}`, () => {
      devicesList.forEach(device => {
        describe(`Testing on ${device.model}`, () => {
          beforeEach(() => {
            cy.viewport(device.width, device.height);
            cy.visit(page);
          });

          tests();
        });
      });
    });
  });
}

module.exports = multipleDevicesTesting;
