const json = require('pa11y-reporter-json');
const pa11y = require('pa11y');

pa11y('https://www.amazon.in/').then(async results => {
    // Returns a string with the results formatted as HTML
    const jsonreport = await json.results(results);
    console.log(jsonreport);
});