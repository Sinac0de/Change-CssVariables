/*-----
SELECTORS
-------*/
const controls = document.querySelectorAll('.controls input');
const pic = document.querySelector(".pic");

/*-----
EVENT LISTENERS
-------*/
controls.forEach(input => {
    input.addEventListener('input', handleUpdate);
});

/*-----
Functions
-------*/
function handleUpdate(e) {
    // dataset will give you an object of data- attributes 
    const suffix = this.dataset.sizing || ""; //to prevent undefind value and also give px at the end of styles.
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // change the style of root element(entire document) 
}