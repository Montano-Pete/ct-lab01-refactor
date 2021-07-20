const capitalizeAndFilter = (arr, filter) => {
  const newArr = [];
  for (const item of arr) {
    if (item.charAt(0) !== filter && item.charAt(0) !== filter.toUpperCase()) {
      newArr.push(item.toUpperCase());
    }
  }
  return newArr;
};

export default capitalizeAndFilter;
