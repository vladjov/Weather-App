let findElementWithClass = (elements, className) => [...elements].find(item => item.classList.contains(className));

export { findElementWithClass }; 