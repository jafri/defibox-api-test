const axios = require('axios');

const main = async () => {
  const res = await axios({
    url: 'https://defibox.io/api/swap/getMarket',
    method: 'post',
    data: {
      limit: 1000,
      isAsc: false,
      orderColumn: '',
      symbol: '',
      type: 2,
    },
  });
  console.log(res);
};

main();
