let selectedNumbers = [];
let isWin = false;

let xTurn = document.getElementById("Xturn");
let oTurn = document.getElementById("Oturn");

function Turn(){
  if (selectedNumbers.length % 2 == 0) {
    oTurn.style.fontSize = "10px";
    oTurn.style.backgroundColor = "rgb(203, 203, 203)";
    xTurn.style.fontSize = "20px";
    xTurn.style.transition = "1s ease all";
    xTurn.style.backgroundColor = "black";
  } 
  else{
    xTurn.style.backgroundColor = "rgb(203, 203, 203)";
    xTurn.style.fontSize = "10px";
    oTurn.style.fontSize = "20px";
    oTurn.style.transition = "1s ease all";
    oTurn.style.backgroundColor = "black";
  }
}

Turn();

// Replay
function Replay(){
    window.location.reload(true);  
}
// for ensuring that selected box should not be selected again
function Find(toFind) {
  for (let value of selectedNumbers) {
    if (toFind == value) {
      return true;
    }
  }
}

function Select1() {
  if (!Find(1)) {
    if (selectedNumbers.length % 2 == 0) {
      document.getElementById("item1").textContent = "X";
    } else {
      document.getElementById("item1").textContent = "O";
    }
    selectedNumbers.push(1);
  }
  ResultCheck();
  Turn();
}

function Select2() {
    if (!Find(2)) {
        if (selectedNumbers.length % 2 == 0) {
          document.getElementById("item2").textContent = "X";
        } else {
          document.getElementById("item2").textContent = "O";
        }
        selectedNumbers.push(2);
      }
      ResultCheck();
  Turn();

}
function Select3() {
  if (!Find(3)) {
    if (selectedNumbers.length % 2 == 0) {
      document.getElementById("item3").textContent = "X";
    } else {
      document.getElementById("item3").textContent = "O";
    }
    selectedNumbers.push(3);
  }
  ResultCheck();
  Turn();

}
function Select4() {
  if (!Find(4)) {
    if (selectedNumbers.length % 2 == 0) {
      document.getElementById("item4").textContent = "X";
    } else {
      document.getElementById("item4").textContent = "O";
    }
    selectedNumbers.push(4);
  }
  ResultCheck();
  Turn();

}
function Select5() {
  if (!Find(5)) {
    if (selectedNumbers.length % 2 == 0) {
      document.getElementById("item5").textContent = "X";
    } else {
      document.getElementById("item5").textContent = "O";
    }
    selectedNumbers.push(5);
  }
  ResultCheck();
  Turn();

}
function Select6() {
  if (!Find(6)) {
    if (selectedNumbers.length % 2 == 0) {
      document.getElementById("item6").textContent = "X";
    } else {
      document.getElementById("item6").textContent = "O";
    }
    selectedNumbers.push(6);
  }
  ResultCheck();
  Turn();

}
function Select7() {
  if (!Find(7)) {
    if (selectedNumbers.length % 2 == 0) {
      document.getElementById("item7").textContent = "X";
    } else {
      document.getElementById("item7").textContent = "O";
    }
    selectedNumbers.push(7);
  }
  ResultCheck();
  Turn();

}
function Select8() {
  if (!Find(8)) {
    if (selectedNumbers.length % 2 == 0) {
      document.getElementById("item8").textContent = "X";
    } else {
      document.getElementById("item8").textContent = "O";
    }
    selectedNumbers.push(8);
  }
  ResultCheck();
  Turn();

}
function Select9() {
  if (!Find(9)) {
    if (selectedNumbers.length % 2 == 0) {
      document.getElementById("item9").textContent = "X";
    } else {
      document.getElementById("item9").textContent = "O";
    }
    selectedNumbers.push(9);
  }
  ResultCheck();
  Turn();

}

function ResultCheck(){
    let a = document.getElementById("item1").textContent;
    let b = document.getElementById("item2").textContent;
    let c = document.getElementById("item3").textContent;
    let d = document.getElementById("item4").textContent;
    let e = document.getElementById("item5").textContent;
    let f = document.getElementById("item6").textContent;
    let g = document.getElementById("item7").textContent;
    let h = document.getElementById("item8").textContent;
    let i = document.getElementById("item9").textContent;
    // Rows

    if(a==b && b==c){
        document.getElementById("message").textContent = (a=="")?"":`${a} Wins`;
        isWin = true;
    }
    else if(d == e && e == f && d!= ""){
        document.getElementById("message").textContent = (d=="")?"":`${d} Wins`;
        isWin = true;
    }
    else if(g == h && h == i && g!= ""){
        document.getElementById("message").textContent = (g=="")?"":`${g} Wins`;
        isWin = true;

    }
    // Columns Check
    else if(a == d && d == g && a!=""){
        document.getElementById("message").textContent = (a=="")?"":`${a} Wins`;
        isWin = true;
        

    }
    else if(b==e && e == h && b != ""){
        document.getElementById("message").textContent = (b=="")?"":`${b} Wins`;
        isWin = true;
        

    }
    else if(c == f && f == i && c!=""){
        document.getElementById("message").textContent = (c=="")?"":`${c} Wins`;
        isWin = true;
        

    }
    // Diagonal
    else if(a == e && e == i && a!= ""){
        document.getElementById("message").textContent = (a=="")?"":`${a} Wins`;
        isWin = true;
        

    }
    
    else if(c == e && e== g && c!= ""){
        document.getElementById("message").textContent = (c=="")?"":`${c} Wins`;
        isWin = true;
    }
    else if(selectedNumbers.length == 9){
        document.getElementsByClassName("success")[0].style.backgroundColor = "red";
        document.getElementById("message").textContent = "Draw";
        isDisplay = true;
        isWin = true;

    }
}