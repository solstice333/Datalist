import { DatalistPage } from './app.po';

describe('datalist App', () => {
  let page: DatalistPage;

  beforeEach(() => {
    page = new DatalistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
