// eslint-disable-next-line no-unused-vars
'use strict';
const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/bookmarks-miriam';

  const getItems = function (callback) {
    $.getJSON(
      BASE_URL + '/items',
      (response) => {
        callback(response);
      });
  };

  const createItem = function(name, callback) {
    const newItem = JSON.stringify({name});
    console.log(newItem);
    $.ajax({
      url: BASE_URL + '/items',
      method: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: newItem,
      success: callback 
    });

  };

  return {
    getItems,
    createItem,

  };
}());

