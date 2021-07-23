
let urls = [
'https://api.diffbot.com/v3/product',
'http://store.livrada.com/collections/all/products/before-i-go-to-sleep',
'http://cdn.shopify.com/s/files/1/0184/6296/products/BeforeIGoToSleep_large.png?946'
'https://docs.apigee.com/api-platform/publish/create-api-products'
];


let requests = urls.map(url => fetch(url));

Promise.all(requests)
.then(responses => responses.forEach(
  response => alert(`${response.url}: ${response.status}`)
));
