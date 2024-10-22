
const myButton = document.getElementById("on-light");
const myLampOff = document.getElementById("lamp-off")
const myLampOn = document.getElementById("lamp-on")

let isOn = false

myButton.addEventListener("click", () => {
    if(!isOn){
        myLampOff.classList.remove("d-none")
        myLampOff.classList.add("d-block")
        myLampOn.classList.remove("d-block")
        myLampOn.classList.add("d-none")
        isOn = true
    }else{
        myLampOff.classList.remove("d-block")
        myLampOff.classList.add("d-none")
        myLampOn.classList.remove("d-none")
        myLampOn.classList.add("d-block")
        isOn = false

    }

})