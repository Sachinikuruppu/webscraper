const scrape = require('website-scraper-existing-directory');
const options = {
  urls: ['http://nodejs.org/'],
  directory: '\Save'
};
 
scrape({
    urls: [
      'http://nodejs.org/',	// Will be saved with default filename 'index.html'
      {url: 'http://nodejs.org/about', filename: 'about.html'},
      {url: 'http://blog.nodejs.org/', filename: 'blog.html'}
    ],
    directory: '\Save'
  });

// with async/await
// const result = await scrape(options);
 
// // with promise
// scrape(options).then((result) => {});
 
// // or with callback
// scrape(options, (error, result) => {});