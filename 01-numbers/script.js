
const myButton = document.getElementById("on-light");
const myLampOff = document.getElementById("lamp-off")
const myLampOn = document.getElementById("lamp-on")


myButton.addEventListener("click", () => {
    myLampOff.classList.add("d-none")
    myLampOn.classList.add("d-block")
})