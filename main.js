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
let int = "";
let value = "";
 //console.log(eval('1+3*7-2'));

const keyValues = document.querySelectorAll(".keyValues");
//console.log(keyValues);

keyValues.forEach((item) => {
  item.addEventListener("click", () => {
    
  
    calcAll(item.lastElementChild.innerHTML);
    
  });
});

function calcAll(itemKey) {
  switch (itemKey) {
   
    case "del":
      break;
    case "+":
      additionOperation();
      break;

    case "-":
      break;

    case "x": multiOperation();
      break;

    case "reset": resetOperation();
      break;
    case "=":
      break;
    case "/":
      break;
    case ".":
      break; 
      default:
        
   
        screenResult.value += itemKey;
      
      var s = screenResult.value;
      screenResult.value = Number(s);
      
      break;
  }
  
}

function delOperation() {
  if (arrayOperation.length == 0) {
    screenResult.value = "";
  }
  if (arrayOperation.length == 3) {
    arrayOperation.pop();
    screenResult.value = 0;
  }
}
function resetOperation() {
  //clear the screen
  resultAux = "";
  screenResult.value = "";
  arrayOperation = [];
  console.log("boton Eliminar" + ":" + arrayOperation.length);
  console.log(arrayOperation);
}

function check(itemKey) {
  if (arrayOperation.length == 2) {
    screenResult.value = itemKey;
    arrayOperation.push(itemKey);
    console.log(arrayOperation);
  }
  if (arrayOperation.length == 4) {
     screenResult.value = itemKey;
    
  }
}

function sum(item_a, item_b) {
  return Number(item_a) + Number(item_b);
}

function additionOperation() {
 resultTempory = screenResult.value += " " + "+" + " " ;
 arrayOperation = resultTempory.split(" ");
 int = "";
 value = ""; 
  console.log(arrayOperation);
}

  

  


function multiOperation() {                 /////////////// estoy aqui.**************************************////////
    
  let resultTempory = "";
  if (arrayOperation.length == 0 && screenResult.value == 0) {
        
    arrayOperation.push(0);
    arrayOperation.push("x");
   } else if (arrayOperation.length == 0 && screenResult.value != 0){
    arrayOperation.push(screenResult.value);
    arrayOperation.push("x");
   }
   else if (arrayOperation.length == 2) {
        
    if(arrayOperation[0] == "0"){
     arrayOperation = [];
     arrayOperation.push(0);
     arrayOperation.push("x");
     screenResult.value = "";
    }  else {
         // llamar funcion multiplicar
       resultTempory = multiAux(arrayOperation[0],screenResult.value)
       arrayOperation = [];
       arrayOperation.push(resultTempory);
       arrayOperation.push("x");
       screenResult.value = resultTempory;
    }
   
   

 } else if (arrayOperation.length == 4 && arrayOperation[0] == 0) {
   
   arrayOperation.pop();
   arrayOperation.pop();
   screenResult.value = "";
 } else if (arrayOperation.length ==3 && arrayOperation[0] != 0) {

   //llamar a la funcion multiplicar
   resultTempory = multiAux(arrayOperation[0],arrayOperation[2]);
   arrayOperation = [];
   arrayOperation.push(resultTempory);
   arrayOperation.push("x");
   screenResult.value = resultTempory;
 }
    
  console.log(arrayOperation);
}
  


  

function multiAux(item_a , item_b) {
  
  return Number(item_a) * Number(item_b);
}


function equalOperation() {
  if (arrayOperation.length == 3) {
    switch (arrayOperation[1]) {
      case "+":
        let valueSum = sum(arrayOperation[0], arrayOperation[2]);
        screenResult.value = valueSum;
        break;

      default:
        break;
    }
  }
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
