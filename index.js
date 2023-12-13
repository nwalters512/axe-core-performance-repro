const axe = require('axe-core');
const { JSDOM } = require('jsdom');

const OPTION_COUNT = 500;

const options = Array.from({ length: OPTION_COUNT }, (_, i) => `
  <option value="${i}">Option ${i}</option>
`).join('');

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Test</title>
  </head>
  <body>
    <h1>Test</h1>
    <select>${options}</select>
  </body>
</html>
`

const page = new JSDOM(html);

const start = Date.now();
axe.run(page.window.document.documentElement).then((results) => {
  console.log(`Got results in ${Date.now() - start}ms`)
});
