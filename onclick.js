var x;
var experienceItem1 = document.getElementById("experienceItem1");
var descriptionBox1 = document.getElementById("descriptionBox1");
var experienceItem2 = document.getElementById("experienceItem2");
var descriptionBox2 = document.getElementById("descriptionBox2");
var experienceItem3 = document.getElementById("experienceItem3");
var descriptionBox3 = document.getElementById("descriptionBox3");
var experienceItem4 = document.getElementById("experienceItem4");
var descriptionBox4 = document.getElementById("descriptionBox4");
var experienceItem5 = document.getElementById("experienceItem5");
var descriptionBox5 = document.getElementById("descriptionBox5");
var experienceItem6 = document.getElementById("experienceItem6");
var descriptionBox6 = document.getElementById("descriptionBox6");
var experienceItem7 = document.getElementById("experienceItem7");
var descriptionBox7 = document.getElementById("descriptionBox7");
var experienceItem8 = document.getElementById("experienceItem8");
var descriptionBox8 = document.getElementById("descriptionBox8");

function expandAll() {
  for (var i = 1; i <= 8; i++) {
    document.getElementById("experienceItem" + i).style.color = "#89cff0";
    document.getElementById("descriptionBox" + i).style.display = "block";
    document.getElementById("sign" + i).innerHTML = "—";
  }
  experienceItem1.classList.add("on");
  experienceItem1.classList.remove("off");
  experienceItem2.classList.add("on");
  experienceItem2.classList.remove("off");
  experienceItem3.classList.add("on");
  experienceItem3.classList.remove("off");
  experienceItem4.classList.add("on");
  experienceItem4.classList.remove("off");
  experienceItem5.classList.add("on");
  experienceItem5.classList.remove("off");
  experienceItem6.classList.add("on");
  experienceItem6.classList.remove("off");
  experienceItem7.classList.add("on");
  experienceItem7.classList.remove("off");
  experienceItem8.classList.add("on");
  experienceItem8.classList.remove("off");
}
function hideAll() {
  for (var i = 1; i <= 8; i++) {
    document.getElementById("experienceItem" + i).style.color = "white";
    document.getElementById("descriptionBox" + i).style.display = "none";
    document.getElementById("sign" + i).innerHTML = "+";
  }
  experienceItem1.classList.add("off");
  experienceItem1.classList.remove("on");
  experienceItem2.classList.add("off");
  experienceItem2.classList.remove("on");
  experienceItem3.classList.add("off");
  experienceItem3.classList.remove("on");
  experienceItem4.classList.add("off");
  experienceItem4.classList.remove("on");
  experienceItem5.classList.add("off");
  experienceItem5.classList.remove("on");
  experienceItem6.classList.add("off");
  experienceItem6.classList.remove("on");
  experienceItem7.classList.add("off");
  experienceItem7.classList.remove("on");
  experienceItem8.classList.add("off");
  experienceItem8.classList.remove("on");
}
// function clear() {
//   document.getElementById("nameReset").innerHTML = "";
//   document.getElementById("emailReset").innerHTML = "";
//   document.getElementById("messageReset").innerHTML = "";
// }
function showDescription(x) {
  // picture needs to go minus with description
  if (x == 1) {
    if (experienceItem1.classList.contains("off")) {
      document.getElementById("descriptionBox1").style.display = "block";
      document.getElementById("experienceItem1").style.color = "#89cff0";
      document.getElementById("sign1").innerHTML = "—";
      experienceItem1.classList.add("on");
      experienceItem1.classList.remove("off");
    } else {
      document.getElementById("experienceItem1").style.color = "white";
      document.getElementById("descriptionBox1").style.display = "none";
      document.getElementById("sign1").innerHTML = "+";
      experienceItem1.classList.add("off");
      experienceItem1.classList.remove("on");
    }
  }
  if (x == 2) {
    if (experienceItem2.classList.contains("off")) {
      document.getElementById("descriptionBox2").style.display = "block";
      document.getElementById("experienceItem2").style.color = "#89cff0";
      document.getElementById("sign2").innerHTML = "—";
      experienceItem2.classList.add("on");
      experienceItem2.classList.remove("off");
    } else {
      document.getElementById("experienceItem2").style.color = "white";
      document.getElementById("descriptionBox2").style.display = "none";
      document.getElementById("sign2").innerHTML = "+";
      experienceItem2.classList.add("off");
      experienceItem2.classList.remove("on");
    }
  }
  if (x == 3) {
    if (experienceItem3.classList.contains("off")) {
      document.getElementById("descriptionBox3").style.display = "block";
      document.getElementById("experienceItem3").style.color = "#89cff0";
      document.getElementById("sign3").innerHTML = "—";
      experienceItem3.classList.add("on");
      experienceItem3.classList.remove("off");
    } else {
      document.getElementById("experienceItem3").style.color = "white";
      document.getElementById("descriptionBox3").style.display = "none";
      document.getElementById("sign3").innerHTML = "+";
      experienceItem3.classList.add("off");
      experienceItem3.classList.remove("on");
    }
  }
  if (x == 4) {
    if (experienceItem4.classList.contains("off")) {
      document.getElementById("descriptionBox4").style.display = "block";
      document.getElementById("experienceItem4").style.color = "#89cff0";
      document.getElementById("sign4").innerHTML = "—";
      experienceItem4.classList.add("on");
      experienceItem4.classList.remove("off");
    } else {
      document.getElementById("experienceItem4").style.color = "white";
      document.getElementById("descriptionBox4").style.display = "none";
      document.getElementById("sign4").innerHTML = "+";
      experienceItem4.classList.add("off");
      experienceItem4.classList.remove("on");
    }
  }
  if (x == 5) {
    if (experienceItem5.classList.contains("off")) {
      document.getElementById("descriptionBox5").style.display = "block";
      document.getElementById("experienceItem5").style.color = "#89cff0";
      document.getElementById("sign5").innerHTML = "—";
      //   document.getElementById("plussss").innerHTML = "-";
      experienceItem5.classList.add("on");
      experienceItem5.classList.remove("off");
    } else {
      document.getElementById("experienceItem5").style.color = "white";
      document.getElementById("descriptionBox5").style.display = "none";
      document.getElementById("sign5").innerHTML = "+";
      experienceItem5.classList.add("off");
      experienceItem5.classList.remove("on");
    }
  }
  if (x == 6) {
    if (experienceItem6.classList.contains("off")) {
      document.getElementById("descriptionBox6").style.display = "block";
      document.getElementById("experienceItem6").style.color = "#89cff0";
      document.getElementById("sign6").innerHTML = "—";
      experienceItem6.classList.add("on");
      experienceItem6.classList.remove("off");
    } else {
      document.getElementById("experienceItem6").style.color = "white";
      document.getElementById("descriptionBox6").style.display = "none";
      document.getElementById("sign6").innerHTML = "+";
      experienceItem6.classList.add("off");
      experienceItem6.classList.remove("on");
    }
  }
  if (x == 7) {
    if (experienceItem7.classList.contains("off")) {
      document.getElementById("descriptionBox7").style.display = "block";
      document.getElementById("experienceItem7").style.color = "#89cff0";
      document.getElementById("sign7").innerHTML = "—";
      experienceItem7.classList.add("on");
      experienceItem7.classList.remove("off");
    } else {
      document.getElementById("experienceItem7").style.color = "white";
      document.getElementById("descriptionBox7").style.display = "none";
      document.getElementById("sign7").innerHTML = "+";
      experienceItem7.classList.add("off");
      experienceItem7.classList.remove("on");
    }
  }
  if (x == 8) {
    if (experienceItem8.classList.contains("off")) {
      document.getElementById("descriptionBox8").style.display = "block";
      document.getElementById("experienceItem8").style.color = "#89cff0";
      document.getElementById("sign8").innerHTML = "—";
      //   document.getElementById("plussss").innerHTML = "-";
      experienceItem8.classList.add("on");
      experienceItem8.classList.remove("off");
    } else {
      document.getElementById("experienceItem8").style.color = "white";
      document.getElementById("descriptionBox8").style.display = "none";
      document.getElementById("sign8").innerHTML = "+";
      experienceItem8.classList.add("off");
      experienceItem8.classList.remove("on");
    }
  }
}
