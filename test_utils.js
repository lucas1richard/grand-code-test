export const containsText = (wrapper, txt) => {
  return expect(wrapper.text().indexOf(txt)).toBeGreaterThan(-1);
}