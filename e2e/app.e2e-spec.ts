import { NgCloudAdminPage } from './app.po';

describe('ng-cloud-admin App', () => {
  let page: NgCloudAdminPage;

  beforeEach(() => {
    page = new NgCloudAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
