const moogleDb = require('./moogleDb');

const moogleSearch = (searchInput, db) => {
  // filter each website that includes the search input
  const matches = db.filter(website => website.includes(searchInput));
  // if there are more than 3 matches then just return the top 3
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(moogleSearch('recipe', moogleDb));

module.exports = moogleSearch;
