import { TickyTickPage } from './app.po';

describe('ticky-tick App', function() {
  let page: TickyTickPage;

  beforeEach(() => {
    page = new TickyTickPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
