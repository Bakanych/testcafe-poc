import { t, ClientFunction } from "testcafe";

fixture`Example`.page("https://google.com");
const getPageTitle = ClientFunction(() => document.title);

test("it googles", async t => {
  await t.expect(getPageTitle()).eql("Google");
});
