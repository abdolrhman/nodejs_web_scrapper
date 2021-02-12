const fetch = require('node-fetch');
const readline = require('readline');
const scrapToken = require('./scrapToken')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('please enter product url..', async (url) => {
  if (!url) {
    console.log('you need to set url');
    rl.close();
  }
  let token = await scrapToken();
  console.log('oooo', token);
  fetch("https://www.shopdisney.co.uk/on/demandware.store/Sites-disneyuk-Site/en_GB/Cart-AddProduct", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9,ar;q=0.8",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "__cfduid=d87c0e6205064fe3c5a6203eec0317c981613135074; dwac_cdYLkiaagQNQ6aaadqpRAb3HPZ=KoGmaqq-WfHP02qLYOQ8bZH_ViUj-c2Y0Ag%3D|dw-only|||GBP|false|Europe%2FLondon|true; cqcid=ac6i8Ls1CTQ03aSmfqDu5jUwbh; cquid=||; sid=KoGmaqq-WfHP02qLYOQ8bZH_ViUj-c2Y0Ag; dwanonymous_4b4f41ef658a5f7622324979f744826c=ac6i8Ls1CTQ03aSmfqDu5jUwbh; __cq_dnt=0; dw_dnt=0; dwsid=d3xAw-cuOlxepR-PPq5CAMwCsIxuaa41QX4Tqmc4p_5PbmkxS3vtNYxQ55cIywXYead7VSZ4D8g9AlHSrCTMbg==; uvtddl=1; SWID=22f54d90-bcac-4300-842e-fcd5635b49d1; DisneyCookieConsentChecksum=-636545365; AMCVS_CC0A3704532E6FD70A490D44%40AdobeOrg=1; s_cc=true; __olapicU=1613135087418; __cqact=%5B%7B%22activityType%22%3A%22addToCart%22%2C%22parameters%22%3A%7B%22cookieId%22%3A%22ac6i8Ls1CTQ03aSmfqDu5jUwbh%22%2C%22userId%22%3A%22%22%2C%22product%22%3A%7B%22id%22%3A%222841047080168M%22%2C%22sku%22%3A%22428411449216%22%2C%22quantity%22%3A1%7D%2C%22realm%22%3A%22AAMZ%22%2C%22siteId%22%3A%22disneyuk%22%2C%22instanceType%22%3A%22prd%22%2C%22locale%22%3A%22en_GB%22%7D%7D%5D; s_tp=2487; s_ppv=emea%253Auk%253Ashopdisney%253Aoffers%2C79%2C30%2C1957; CONSENTMGR=c1:1|c2:1|c3:1|c4:1|c5:1|c6:1|c17:1|c18:1|c19:1|c20:1|c21:1|c22:1|c23:1|c24:1|c25:1|c26:1|c27:1|c28:1|c29:1|c30:1|c31:1|c33:1|c37:1|c38:1|ts:1613138952468|consent:true; s_sq=%5B%5BB%5D%5D; _cs_mk=0.960954889623868_1613143691382; gpv_pn=no%20value; utag_main=v_id:01779657dd6d0002983f248e536203073006906b00838$_sn:3$_se:2$_ss:0$_st:1613145549028$vapi_domain:shopdisney.co.uk$ses_id:1613143690659%3Bexp-session$_pn:2%3Bexp-session$_prevpage:undefined%3Bexp-1613147349041$user_status:inc%3Bexp-session; AMCV_CC0A3704532E6FD70A490D44%40AdobeOrg=-281048578%7CMCIDTS%7C18671%7CMCMID%7C82546401423631046209199787612734454149%7CMCAID%7CNONE%7CMCOPTOUT-1613150949s%7CNONE%7CvVersion%7C4.6.0; s_ptc=0.00%5E%5E0.00%5E%5E0.00%5E%5E0.00%5E%5E0.58%5E%5E0.09%5E%5E2.61%5E%5E0.06%5E%5E3.32"
    },
    "referrer": "https://www.shopdisney.co.uk/disney-store-mickey-mouse-sweetheart-medium-soft-toy-412501639700.html?cgid=2100502",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `format=ajax&Quantity=1&pid=412501639700&csrf_token=${token}`,
    "method": "POST",
    "mode": "cors"
  }).then((result) => {
    if (result.status === 200) {
      console.log('Product added to cart successfully');
    }
  });

  rl.close();
});

