import React from 'react';

// Helper function to get data from localStorage
const Helper = (key) => {
  const name = JSON.parse(localStorage.getItem(key));
  return name;
};

// Remove function to delete data from localStorage
export const Remove = (key) => {
  localStorage.removeItem(key);
};

export default Helper;
