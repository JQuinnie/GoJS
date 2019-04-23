const moogleDb = require('./moogleDb');

const moogleSearch = (searchInput) => {
  // filter each website that includes the search input
  const matches = moogleDb.filter(website => website.includes(searchInput));
  // if there are more than 3 matches then just return the top 3
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(moogleSearch('recipe'));
