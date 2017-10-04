import { TestViewEncapsulationPage } from './app.po';

describe('test-view-encapsulation App', () => {
  let page: TestViewEncapsulationPage;

  beforeEach(() => {
    page = new TestViewEncapsulationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
