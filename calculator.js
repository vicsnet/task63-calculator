let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));
//console.log(buttons)

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    // console.log('clicked')
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.textContent)
    switch (e.target.innerText) {
      // case 'C':
      //     display.innerText = " "
      //     break
      case "←":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }

        break;

      default:
        display.innerText += e.target.innerText;
    }
  });
});
