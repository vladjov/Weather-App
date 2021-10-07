let findElementWithClass = (elements, className) => Array.from(elements).find(item => item.classList.contains(className));

export { findElementWithClass }; 