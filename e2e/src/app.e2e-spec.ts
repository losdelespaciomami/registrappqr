import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
<<<<<<< HEAD

  it('should be blank', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
=======
  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/Inbox');
    });
    it('should say Inbox', () => {
      expect(page.getParagraphText()).toContain('Inbox');
    });
>>>>>>> e02cf71 (version 2.0)
  });
});
