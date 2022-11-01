let switch_1 = document.getElementById("switch-1");
let switch_2 = document.getElementById("switch-2");
let switch_3 = document.getElementById("switch-3");
let ball = document.getElementById("idBall");
//let main_container = document.querySelector('.main-container');
let header_calc = document.querySelector(".header-calc");
let switch_ball = document.querySelector(".switch-ball");
let keyboard_container = document.querySelector(".keyboard-container");
let screenn = document.querySelector(".screen");
let keyboard_numbers = document.querySelectorAll(".keyboard_numbers");
let keyboard_borders = document.querySelectorAll(".keyboard_borders");
let keyboard_numbers_reset = document.querySelector(".keyboard_numbers_reset");
let keyboard_borders_reset = document.querySelector(".keyboard_borders_reset");
let del_bg_shadow = document.querySelector(".del-bg-shadow");
let del_bg_color = document.querySelector(".del-bg-color");
let keyboard_numbers_equal = document.querySelector(".keyboard_numbers_equal");
let keyboard_borders_equal = document.querySelector(".keyboard_borders_equal");
let btn_equal = document.getElementById("btn-equal");
let keyboardContainerNumbers = document.querySelectorAll(
  ".keyboard-container_numbers"
);
let screenResult = document.getElementById("result");
let main_body = document.body;
const arrayKeyNummber = [...keyboard_numbers];
const arrayKeyShadows = [...keyboard_borders];
let resultAux;
let arrayOperation = new Array();
let numDecimal = "";
let value = "";
let flagEqualOp = false;
//console.log(eval('1+3*7-2'));
//let num = '9.695';
//console.log(typeof(num));
const keyValues = document.querySelectorAll(".keyValues");
let expregr = /^([+-]?[0-9]{1,10}(\.[0-9]{1,4})?)$/g;
//console.log(num.match(expregr)!= null);
//console.log (num.indexOf("."));git

keyValues.forEach((item) => {
  item.addEventListener("click", () => {
    calcAll(item.lastElementChild.innerHTML);
  });
});

function calcAll(itemKey) {
  switch (itemKey) {
    case "del": delOperation();
      break;
    case "+":
      additionOperation();
      break;

    case "-":substraccionOperation();
      break;

    case "x":
      multiOperation();
      break;

    case "reset":
      resetOperation();
      break;
    case "=":
      equalOperation();
      break;
    case "/": divisionOperation();
      break;

    case ".":
      numDecimalValidation(); 

      break;

    default:
        
       if(flagEqualOp) {  // borrar la pantalla y ecribir el nuevo valor
            resetOperation();
            flagEqualOp = false;
            console.log(flagEqualOp);
       }
       
      if (arrayOperation.length != 0) {
        //numDecimal = screenResult.value.substring(resultTempory.length, -1);
        if (screenResult.value.length > resultTempory.length) {
          numDecimal = screenResult.value.substring(
            resultTempory.length,
            screenResult.value.length
          );
          if (numDecimal.includes(".")) {
            if (!numDecimal.endsWith(".")) {
              if (numDecimal.match(expregr) != null) {
                screenResult.value += itemKey;
              }
            } else {
              screenResult.value += itemKey;
            }
          } else {
            value += itemKey;
            //console.log(resultTempory.length);
            screenResult.value = screenResult.value.substring(
              0,
              resultTempory.length
            );
            screenResult.value += Number(value);
          }
        } else {
          value += itemKey;
          //console.log(resultTempory.length);
          screenResult.value = screenResult.value.substring(
            0,
            resultTempory.length
          );
          screenResult.value += Number(value);
        }
      } else {
        screenResult.value += itemKey;
        var s = screenResult.value;
        if (
          !screenResult.value.includes(".0") &&
          !(screenResult.value.includes(".") && itemKey == "0")
        ) {
          screenResult.value = Number(s);
        }
      }

      break;
  }
}

function numDecimalValidation() {
  if (screenResult.value != "" && arrayOperation.length == 0) {
    if (!screenResult.value.includes(".")) {
      screenResult.value += ".";
    }
  } else if (screenResult.value != "" && arrayOperation.length != 0) {
    let arr = screenResult.value.split(" ");
    console.log(arr);
    if (
      arr[arr.length - 1].match(expregr) != null &&
      !arr[arr.length - 1].includes(".")
    ) {
      screenResult.value += ".";
    }
  }
}

function delOperation() {
  if (!arrayOperation.length == 0 && !screenResult.value == "") {
    let arraaux = [];
    arraaux = screenResult.value.split("");
    arraaux.pop();
    screenResult.value = arraaux.join("");
    
     if( screenResult.value.endsWith('+') || screenResult.value.endsWith('-') || screenResult.value.endsWith('/') || screenResult.value.endsWith('*') )
     {
      arraaux.pop();
      arraaux.pop();
      screenResult.value = arraaux.join(""); 
      value = "";
     }
  } else if (arrayOperation.length == 0 && !screenResult.value == "" ){
    let arraaux = [];
    arraaux = screenResult.value.split("");
    arraaux.pop();
    screenResult.value = arraaux.join("");
  }
  console.log(arrayOperation);
}
function resetOperation() {
  //clear the screen
  resultAux = "";
  screenResult.value = "";
  arrayOperation = [];
  console.log(arrayOperation);
}
function auxEqualOp() {
 let arrayString = "";
 arrayString = screenResult.value;
 arrayString = arrayString.trimEnd();
 
 let op = arrayString.charAt(arrayString.length-1);
 if (op!='+' && op!='*' && op!='/' && op!='-' ){
      return true;
 }
   return false;
}
  function equalOperation() {
     if(arrayOperation.length != 0 && screenResult.value != "" && auxEqualOp()){
      let numtempo = eval(screenResult.value);
      flagEqualOp = true;
      let cont = numtempo.toString();
      numtempo = cont;
      cont = cont.indexOf(".");
     
      if (cont != -1) {
        if (numtempo.length - (cont + 1) > 2) {
          screenResult.value = numtempo.substring(0, cont + 3);
        } else {
          screenResult.value = numtempo;
        }
      } else {
        if(numtempo === 'NaN'){screenResult.value = 'Error';}
        else {screenResult.value = numtempo;}
      }
   }

   console.log(arrayOperation);
   console.log(flagEqualOp);
}

function check(array) {
  let keyOperation = array[array.length - 1];
  let num = keyOperation.match(expregr);
  if ((array[0] == "0" && keyOperation == " ") || num == null) {
    console.log(keyOperation);
    return true;
  }
  
  return false;
}

function sum(item_a, item_b) {
  return Number(item_a) + Number(item_b);
}

///////////////////////// estoy aqui ////////////////////////////////////////////////////////////////////
function divisionOperation() {
  if (screenResult.value == "") {
    screenResult.value = "0" + " " + "/" + " ";
    resultTempory = screenResult.value;
    arrayOperation = resultTempory.split(" ");
    value = "";
  } else {
    arrayTemp = screenResult.value.split(" ");
    if (!check(arrayTemp)) {
      resultTempory = screenResult.value += " " + "/" + " ";
      arrayOperation = resultTempory.split(" ");
      value = "";
      
    }
  }
  flagEqualOp = false;
  console.log(flagEqualOp);
}
 function substraccionOperation()
 {
  if (screenResult.value == "") {
    screenResult.value = "0" + " " + "-" + " ";
    resultTempory = screenResult.value;
    arrayOperation = resultTempory.split(" ");
    value = "";
  } else {
    arrayTemp = screenResult.value.split(" ");
    if (!check(arrayTemp)) {
      resultTempory = screenResult.value += " " + "-" + " ";
      arrayOperation = resultTempory.split(" ");
      value = "";
      
    }
  }
  flagEqualOp = false;
  console.log(flagEqualOp);  
 }
function additionOperation() {
  if (screenResult.value == "") {
    screenResult.value = "0" + " " + "+" + " ";
    resultTempory = screenResult.value;
    arrayOperation = resultTempory.split(" ");
    value = "";
  } else {
    arrayTemp = screenResult.value.split(" ");
    if (!check(arrayTemp)) {
      resultTempory = screenResult.value += " " + "+" + " ";
      arrayOperation = resultTempory.split(" ");
      value = "";
      
    }
  }
  flagEqualOp = false;
  console.log(flagEqualOp);
}

function multiOperation() {
  if (screenResult.value == "") {
    screenResult.value = "0" + " " + "*" + " ";
    resultTempory = screenResult.value;
    arrayOperation = resultTempory.split(" ");
    value = "";
  } else {
    arrayTemp = screenResult.value.split(" ");
    if (!check(arrayTemp)) {
      resultTempory = screenResult.value += " " + "*" + " ";
      arrayOperation = resultTempory.split(" ");
      value = "";
      
    }
  }
  flagEqualOp = false;
  console.log(flagEqualOp);
}

function multiAux(item_a, item_b) {
  return Number(item_a) * Number(item_b);
}

switch_2.addEventListener("click", () => {
  updateTheme(switchPositions()); // Change the themes
  moveUpdate(); // move the ball
  ball.classList.add("move_position_2");
  sorterTheme(2);
});

switch_3.addEventListener("click", () => {
  updateTheme(switchPositions()); // Change the themes
  moveUpdate();
  ball.classList.add("move_position_3");
  sorterTheme(3);
});

switch_1.addEventListener("click", () => {
  updateTheme(switchPositions()); // Change the themes
  moveUpdate(); // move the ball
});

function sorterTheme(themeNumber) {
  switch (themeNumber) {
    case 1:
      chanceTheme1();
      break;

    case 2:
      chanceTheme2();
      break;

    default:
      chanceTheme3();
      break;
  }
}

function chanceTheme1() {}
function chanceTheme2() {
  main_body.classList.add("body_theme2");
  header_calc.classList.add("header-calc_theme2");
  switch_ball.classList.add("switch-ball_theme2");
  keyboard_container.classList.add("keyboard-container_theme2");
  screenn.classList.add("screen_theme2");
  //let arrayKeyNummber = [...keyboard_numbers];
  arrayKeyNummber.forEach((item) => {
    item.classList.add("keyboard_numbers_theme2");
  });
  keyboard_numbers_reset.classList.add("keyboard_numbers_reset_theme2");
  keyboard_borders_reset.classList.add("keyboard_borders_reset_theme2");
  del_bg_color.classList.add("keyboard_numbers_reset_theme2");
  del_bg_shadow.classList.add("keyboard_borders_reset_theme2");
}

function chanceTheme3() {
  main_body.classList.add("body_theme3");
  header_calc.classList.add("header-calc_theme3");
  switch_ball.classList.add("switch-ball_theme3");
  keyboard_container.classList.add("keyboard-container_theme3");
  screenn.classList.add("keyboard-container_theme3");
  screenn.classList.add("screen_texto_theme3");

  arrayKeyNummber.forEach((item) => {
    item.classList.add("keyboard_numbers_theme3");
  });

  arrayKeyShadows.forEach((item) => {
    item.classList.add("keyboard_borders_theme3");
  });
  keyboard_numbers_reset.classList.add("keyboard_numbers_reset_theme3");
  keyboard_borders_reset.classList.add("keyboard_borders_reset_theme3");
  del_bg_color.classList.add("keyboard_numbers_reset_theme3");
  del_bg_shadow.classList.add("keyboard_borders_reset_theme3");
  ball.classList.add("ball_theme3");
  keyboard_numbers_equal.classList.add("keyboard_numbers_equal_theme3");
  keyboard_borders_equal.classList.add("keyboard_borders_equal_theme3");
  btn_equal.classList.add("btn-equal_theme3");

  keyboardContainerNumbers.forEach((item) => {
    if (item.childNodes[5].id != "dele") {
      item.classList.add("keyboard_numbers_theme3");
    }
  });
}

function moveUpdate() {
  if (ball.classList.contains("move_position_2")) {
    ball.classList.remove("move_position_2");
  }
  if (ball.classList.contains("move_position_3")) {
    ball.classList.remove("move_position_3");
  }
}

function updateTheme(num_theme) {
  switch (num_theme) {
    case 1:
      deleteTheme_1();
      break;
    case 2:
      deleteTheme_2();
      break;

    default:
      deleteTheme_3();
      break;
  }
}

function switchPositions() {
  if (ball.classList.contains("move_position_2")) return 2;
  else if (ball.classList.contains("move_position_3")) {
    return 3;
  } else {
    return 1;
  }
}

function deleteTheme_2() {
  main_body.classList.remove("body_theme2");
  header_calc.classList.remove("header-calc_theme2");
  switch_ball.classList.remove("switch-ball_theme2");
  keyboard_container.classList.remove("keyboard-container_theme2");
  screenn.classList.remove("screen_theme2");
  //let arrayKeyNummber = [...keyboard_numbers];
  arrayKeyNummber.forEach((item) => {
    item.classList.remove("keyboard_numbers_theme2");
  });
  keyboard_numbers_reset.classList.remove("keyboard_numbers_reset_theme2");
  keyboard_borders_reset.classList.remove("keyboard_borders_reset_theme2");
  del_bg_color.classList.remove("keyboard_numbers_reset_theme2");
  del_bg_shadow.classList.remove("keyboard_borders_reset_theme2");
}

function deleteTheme_3() {
  main_body.classList.remove("body_theme3");
  header_calc.classList.remove("header-calc_theme3");
  switch_ball.classList.remove("switch-ball_theme3");
  keyboard_container.classList.remove("keyboard-container_theme3");
  screenn.classList.remove("keyboard-container_theme3");
  screenn.classList.remove("screen_texto_theme3");

  arrayKeyNummber.forEach((item) => {
    item.classList.remove("keyboard_numbers_theme3");
  });

  arrayKeyShadows.forEach((item) => {
    item.classList.remove("keyboard_borders_theme3");
  });

  keyboard_numbers_reset.classList.remove("keyboard_numbers_reset_theme3");
  keyboard_borders_reset.classList.remove("keyboard_borders_reset_theme3");
  del_bg_color.classList.remove("keyboard_numbers_reset_theme3");
  del_bg_shadow.classList.remove("keyboard_borders_reset_theme3");
  ball.classList.remove("ball_theme3");
  keyboard_numbers_equal.classList.remove("keyboard_numbers_equal_theme3");
  keyboard_borders_equal.classList.remove("keyboard_borders_equal_theme3");
  btn_equal.classList.remove("btn-equal_theme3");

  keyboardContainerNumbers.forEach((item) => {
    if (item.childNodes[5].id != "dele") {
      item.classList.remove("keyboard_numbers_theme3");
    }
  });
}

function deleteTheme_1() {}
