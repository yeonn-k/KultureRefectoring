export const makeParams = (keyArr, valueArr) => {
  const params = new URLSearchParams();
  keyArr.forEach((el, idx) => {
    params.append(el, valueArr[idx]);
  });
  return params;
};
