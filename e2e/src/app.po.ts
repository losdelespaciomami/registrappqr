import { browser, by, element } from 'protractor';

export class AppPage {
<<<<<<< HEAD
  navigateTo() {
    return browser.get('/');
=======
  navigateTo(destination) {
    return browser.get(destination);
>>>>>>> e02cf71 (version 2.0)
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
  }
}
