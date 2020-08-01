const TestId = require('../src/utils/testIds')

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('should have welcome screen', async () => {
    await expect(element(by.id(TestId.welcome))).toBeVisible();
  });
it('should render button',async()=>{
  await element(by.id(TestId.fakeButton)).tap()
})

});
