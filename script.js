const controls = document.getElementById('controls');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  border(value) {
    this.element.style.border = value;
  },
  text(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  },
};

const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  handleStyle[name](value);
  showCSS();
  saveValues(name, value);
};

const showCSS = () => {
  cssText.innerHTML =
    '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
};

const saveValues = (name, value) => {
  localStorage[name] = value;
};

const setValues = () => {
  const properties = Object.keys(localStorage);

  properties.forEach((propertie) => {
    controls.elements[propertie].value = localStorage[propertie];
    handleStyle[propertie](localStorage[propertie]);
    showCSS();
  });
};

setValues();

controls.addEventListener('change', handleChange);
