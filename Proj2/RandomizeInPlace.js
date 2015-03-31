
var A;
var size = 16;
var index;
var i;
var n;
var random;
var tmp;

var step;

var defaultColor = "#fff"; //white
var iColor = "#F4F163"; //yellow
var randomColor = "#D166FB"; //purple
var stepColor = "BDFB66"; //green

function initArray() {

  A = new Array(size);
  for (index = 0; index < size; index++) {
    A[index] = Math.floor(Math.random() * 100);
    document.getElementById('n' + index).textContent = A[index];
    document.getElementById('n' + index).style.color = null;
    document.getElementById('c' + index).style.backgroundColor = null;
    document.getElementById('c' + index).style.borderColor = defaultColor;
    document.getElementById('x' + index).style.borderColor = null;
    document.getElementById('x' + index).style.backgroundColor = null;
    document.getElementById('i' + index).textContent = null;
    document.getElementById('i'+index).style.color = iColor;
    document.getElementById('x'+index).style.visibility = "hidden";
  }
  document.getElementById('end').style.visibility = "hidden";
  document.getElementById("code1").style.visibility= "hidden";
  document.getElementById("code2").style.visibility= "hidden";
  document.getElementById("code3").style.visibility= "hidden";


  n = size;
  i = -1;
  random = 0;
  step = 1;
  tmp = 0;

}

function next() {
  switch (step) {

    case 0:
      break;

    case 1: // n = A.length
      n = size;
      document.getElementById("code1").style.visibility= "visible";
      step++;
      break;

    case 2: // for i = 1 to n

      if (i >= 0) {
        document.getElementById('i' + i).textContent = null;
        document.getElementById('c' + i).style.borderColor = null;
        document.getElementById('n' + i).style.color = null;
        document.getElementById('c' + random).style.borderColor = null;
        document.getElementById('n' + random).style.color = null;
        document.getElementById('i' + random).textContent = null;
        document.getElementById('i' + random).style.color = null;

      }

      i++;
      document.getElementById("code1").style.visibility= "hidden";
      document.getElementById("code2").style.visibility= "visible";
      document.getElementById("code3").style.visibility= "hidden";
      if (i >= n) {
        for (index = 0; index < size; index++) {
          document.getElementById('c' + index).style.backgroundColor = null;
          document.getElementById('c' + index).style.borderColor = defaultColor;
          document.getElementById('n' + index).style.color = null;
          document.getElementById('x'+index).style.visibility = "hidden";
          document.getElementById('i'+index).textContent = null;
          document.getElementById('i'+index).style.color = iColor;
          document.getElementById("code2").style.visibility= "hidden";
        }
        step = 0;
        document.getElementById('end').style.visibility = "visible";
        break;
      }
      document.getElementById('i' + i).style.visibility = "visible";
      document.getElementById('c' + i).style.borderColor = iColor;
      document.getElementById('n' + i).style.color = iColor;
      document.getElementById('i' + i).textContent = "i";
      document.getElementById('i' + i).style.color = iColor;

      step++;

      break;

    case 3: //swap A[i] with A[RANDOM(i, n)]
    document.getElementById("code2").style.visibility= "hidden";
    document.getElementById("code3").style.visibility= "visible";      

      random = Math.floor(Math.random()*(n-1));

      document.getElementById('c' + random).style.borderColor = randomColor;
      document.getElementById('n' + random).style.color = randomColor;
      document.getElementById('i' + random).style.visibility = "visible";
      document.getElementById('i' + random).textContent = "r";
      document.getElementById('i' + random).style.color = randomColor;

      tmp = A[i];
      A[i] = A[random];
      A[random] = tmp;

      document.getElementById('n' + i).textContent = A[i];
      document.getElementById('n' + random).textContent = A[random];

      step = 2;

      break;

      default :
        break;
  }

}
