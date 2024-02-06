//@ts-check
import { remote } from "webdriverio";

let browser = await remote({
  capabilities: {
    browserName: "chrome",
  },
});

await browser.url("https://www-test.ifolor.de");

// const logs = await browser.getLogs("browser");
// console.log(logs);

const ppt = await browser.getPuppeteer();

await browser.call(async () => {
  const pages = await ppt.pages();
  pages[0].on("console", (msg) => {
    console.log(msg.text());
    console.log(msg.type());
    console.log(msg.args());
  });
});

// const page = await pup.newPage();

// await page.setRequestInterception(true);
// page.on("request", async (request) => {
//   console.log("---------------------------------------");
//   console.log(request.url());
//   console.log(request.headers());
//   console.log(request.method());
//   console.log(request.postData());
//   console.log("---------------------------------------");
//   request.continue();
// });
// page.on("console", (msg) => console.log(msg.text()));
// page.goto("https://www-test.ifolor.de");

// await browser.debug();
