import { BirdAppPage } from './app.po';

describe('bird-app App', function() {
  let page: BirdAppPage;

  beforeEach(() => {
    page = new BirdAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
