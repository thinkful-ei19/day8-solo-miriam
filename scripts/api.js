// eslint-disable-next-line no-unused-vars
'use strict';
const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/miriamseha';

  const getItems = function (callback) {
    $.getJSON(
      BASE_URL + '/items',
      (response) => {
        callback(response);
      });
  };

  const createItem =function(name, callback) {}
    
  //callback('api module works!');


  return {
    getItems,

  };
}());

