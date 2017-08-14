/**
 * Sort an array of objects based on an object parameter
 * @param {[object]} arr 
 * @param {string} param 
 */
const sortparam = (arr, param) => {
  return arr.slice().sort((aa, bb) => {
    if (aa[param] > bb[param]) {
      return 1;
    } else if (aa[param] < bb[param]) {
      return -1;
    } else {
      return 0;
    }
  });
};

export default sortparam;
