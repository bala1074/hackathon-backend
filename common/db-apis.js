const axios = require('axios');
const db_box = 'https://jsonbox.io/box_56b438c88807caba84e9';

exports.doit = async function (body) {
  console.log('body', body);
  const { http = false, payload = false, path = '', table = false } = body; // get, post, put, delete
  if (http && table) {
    if (http.trim().toLowerCase() === 'get') {
      return await get(path, table);
    } else if (http.trim().toLowerCase() === 'put') {
      return await put(path, table, payload);
    } else if (http.trim().toLowerCase() === 'post') {
      return await post(path, table, payload);
    } else if (http.trim().toLowerCase() === 'delete') {
      return await del(path, table);
    }
  }
  console.log('hoi')
  return 'http and table should be there';
}

async function get(path, table) {
  return new Promise(resolve => {
    axios.get(db_box + table + '/' + path)
      .then(function ({ data }) {
        // handle success
        console.log(data);
        resolve(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        resolve(response);
      })
  });
}

async function post(path, table, payload) {
  return new Promise(resolve => {
    axios.post(db_box + table + '/' + path, payload)
      .then(function ({ data }) {
        // handle success
        console.log(data);
        resolve(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        resolve(error);
      })
  });
}

async function put(path, table, payload) {
  return new Promise(resolve => {
    axios.put(db_box + table + '/' + path, payload)
      .then(function ({ data }) {
        // handle success
        console.log(data);
        resolve(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        resolve(error);
      })
  });
}

async function del(path, table) {
  return new Promise(resolve => {
    axios.delete(db_box + table + '/' + path)
      .then(function ({ data }) {
        // handle success
        console.log(data);
        resolve(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        resolve(error);
      })
  });
}