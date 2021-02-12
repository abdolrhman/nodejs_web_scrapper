//scraper.js

const cheerio = require("cheerio");
const axios = require("axios").default;

const fethHtml = async url => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch {
    console.error(`ERROR: An error occurred while trying to fetch the URL: ${url}`);
  }
};


const scrapToken = async () => {
  const steamUrl =
    "https://www.shopdisney.co.uk/disney-store-mickey-mouse-sweetheart-medium-soft-toy-412501639700.html?cgid=2100502";

  const html = await fethHtml(steamUrl);

  const selector = cheerio.load(html);

  return selector(".csrftoken").attr('value');
};
module.exports = scrapToken;
