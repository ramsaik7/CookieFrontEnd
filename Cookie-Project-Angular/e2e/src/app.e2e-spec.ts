import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('cafe-cookie app is running!');
  });

  it('should display Add Button',()=>{
    page.navigateTo();
    expect(page.getAddButton().getText()).toEqual('Add');
  })


  it('should display Search Button',()=>{
    page.navigateTo();
    expect(page.getSearchButton().getText()).toEqual('Search');
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
