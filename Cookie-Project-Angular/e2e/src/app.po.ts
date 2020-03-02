import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root span')).getText() as Promise<string>;
  }

  getAddButton(){
    return element(by.css('[routerLink="/add"]'))
  }

  getSearchButton(){
    return element(by.css('[routerLink="/search"]'))
  }


  

  
}
