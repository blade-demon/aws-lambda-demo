const axios = require('axios');

// handler 名称和控制台中的名称要保持一致
exports.handler = (event, context, callback) => {
  axios.get('http://weibo.gamepoch.com/usercounts').then(response => {
    console.log(response.data);
    callback(null, response.data);
  }).catch(e => {
    if (e.response.data) {
      console.log(e.response.data);
      callback(e.response.data);
    }
    if (e.message) {
      console.log(e.message);
      callback(e.message);
    }
  });
};