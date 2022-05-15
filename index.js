/*-----
SELECTORS
-------*/
const controls = document.querySelectorAll('.controls input');
const resetBtn = document.querySelector('.reset-btn');
const pic = document.querySelector(".pic");
const inputs = document.querySelectorAll("input");


/*-----
EVENT LISTENERS
-------*/
controls.forEach(input => {
    input.addEventListener('input', handleUpdate);
});

resetBtn.addEventListener("click", resetProperties);

/*-----
Functions
-------*/
function handleUpdate(e) {
    // dataset will give you an object of data- attributes 
    const suffix = this.dataset.sizing || ""; //to prevent undefind value and also give px at the end of styles.
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // change the style of root element(entire document) 
}

function resetProperties(e) {
    document.documentElement.style.setProperty("--blur", 0);
    document.documentElement.style.setProperty("--base", "rgb(161, 200, 255)");
    document.documentElement.style.setProperty("--spacing", "10px");
    document.documentElement.style.setProperty("--brightness", "100%");
    document.documentElement.style.setProperty("--contrast", "100%");
    document.documentElement.style.setProperty("--grayscale", 0);

    const allinputs = [...inputs];
    allinputs.forEach(input => {
        switch (input.name) {
            case "spacing":
                input.value = 10;
                break;
            case "blur":
                input.value = 0;
                break;
            case "base":
                input.value = "rgb(161, 200, 255)";
                break;
            case "brightness":
                input.value = 100;
                break;
            case "contrast":
                input.value = 100;
                break;
            case "grayscale":
                input.value = 0;
                break;
        }
    });

}