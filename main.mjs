import { remote } from "webdriverio";

let browser = await remote({
  capabilities: {
    browserName: "chrome",
  },
  services: ["devtools"],
});

await browser.cdp("Network", "enable");
await browser.url("http://google.com");
await browser.debug();
