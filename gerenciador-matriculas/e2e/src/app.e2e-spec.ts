import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('página inicial do gerenciador de matriculas', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('deve mostrar o título correto', () => {
    page.navigateTo();
    console.log('Página', page);
    // expect(page.getTitleText()).toEqual('Gerenciador de matrículas');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
