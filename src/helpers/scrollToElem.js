export const scrollToElem = (elem, offset = 0) => {
  const y = elem.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};
