const dis = document.getElementById("display2");

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
      case "C":
        display.innerText = " ";
        dis.innerText = "";
        break;
      case "←":
        dis.innerText = dis.innerText.slice(0, -1);
        break;
      case "=":
        try {
          display.innerText = eval(dis.innerText);

          // dis.innerText = display.innerText
        } catch {
          display.innerText = "Error";
        }
       
        if (display != "") {
          
          // e.click = e.target.innerText;
          // click = dis.innerText
          // e.target.innerText = display.innerText;
          // this.dis.innerText = display.innerText;
          dis.innerText = display.innerText
          // display.innerText = ''
          // dis.innerText = display
          console.log(display.innerText);
        }

        break;
      // case (dis.innerText != '') :
      //           dis.innerText = display.innerText;

      default:
        // display.innerText == e.target.innerText;

        dis.innerText += e.target.innerText;
    }
  });
 
});
