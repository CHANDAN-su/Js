// function currenttime(){
//   let Current = new Date();
//   let hh = Current.getHours();
//   let mm = Current.getMinutes();
//   let ss = Current.getSeconds();
//   let seasion = "AM";

// if(hh > 12){
//     hh = hh-12;
//     seasion = "PM";
// }

// if(hh === 0){
//     hh = 12;
// }

// hh = (hh < 10) ? "0" +hh : hh;
// mm = (mm < 10) ? "0" + mm : mm;
// ss = (ss <10) ? "0" + ss :ss;

// let Time = hh + " : " + mm + " : " + ss + " : " + seasion;


//   document.getElementById("clock").innerText = Time;


//   let t = setTimeout(function (){
//        currenttime();
//     },1000);

// };


// currenttime();


function currenttime(){

    let Current = new Date();

    //Time 
    let hh = Current.getHours();
    let mm = Current.getMinutes();
    let ss = Current.getSeconds();
    let seasion = "AM";
  
  if(hh > 12){
      hh = hh-12;
      seasion = "PM";
  }
  
  if(hh === 0){
      seasion = "AM"
      hh = 12;
  }
  
  hh = (hh < 10) ? "0" +hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss <10) ? "0" + ss :ss;

  let Time = hh + " : " + mm + " : " + ss + " : " + seasion ;


  document.getElementById("clock").innerText = Time;

  //date
  let Day = Current.getDay();
  let month = Current.getMonth();
  let date = Current.getDate();
  let year = Current.getFullYear();

  let dayyname = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let monthname = ["january","February","March","April","May","June","July","August","October","Movember","December"];

  date = (date < 10) ? "0"+ date :date;
  
  let Date1 = dayyname[Day] + " , "+ monthname[month] + " , " + date + " , "  + year;
  
  document.getElementById("Date").innerText = Date1;
  
  };

currenttime();

setInterval(currenttime,1000);