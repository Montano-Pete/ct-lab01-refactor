const capitalizeAndFilter = (arr, filter) => {
  return arr.filter(item => item.charAt(0) !== filter && item.charAt(0) !== filter.toUpperCase()).map(item => item.toUpperCase());
};

export default capitalizeAndFilter;
