import { TwoTeamPage } from './app.po';

describe('two-team App', function() {
  let page: TwoTeamPage;

  beforeEach(() => {
    page = new TwoTeamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
