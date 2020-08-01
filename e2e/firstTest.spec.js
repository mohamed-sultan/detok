const TestId = require('../src/utils/testIds')

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('should have welcome screen', async () => {
    await expect(element(by.id(TestId.welcome))).toBeVisible();
  });
it('should render button',async()=>{
  expect(element(by.id(TestId.buttonText))).toHaveText(TestId.buttonTextOk)
  await element(by.id(TestId.fakeButton)).tap()
  expect(element(by.id(TestId.buttonText))).toHaveText(TestId.buttonTextNotOk)

})
it('should change text input',async()=>{
 await element(by.id(TestId.textInput)).typeText('this is awesome one')
 await element(by.id(TestId.textInput)).clearText()

 await element(by.id(TestId.textInput)).typeText('this is awesome two')

})
it('should dispaly four when tabed 4 time',async()=>{
  await expect(element(by.id('fuck'))).toHaveText('0')
  //await expect(element(by.id(TestId.counterButtonText))).toHaveText(0)
  await element(by.id(TestId.counterButton)).multiTap(4)
  await expect(element(by.id('fuck'))).toHaveText('4') 

})
 it('shoud move to the second item in flatlis',async()=>{
   await element(by.id(TestId.flatList)).scroll(100,'down')
   await element(by.id(TestId.flatList)).scrollTo('bottom')
   await element(by.id(TestId.flatList)).scrollTo('top')


 })
});
