'use strict'; 
(function() {

//  MATH Object -  ALL function are static

display(Math.PI);
display(Math.max(1,2,4,6,7,77));// return the largest number
display(Math.round(55.6));


//  Date

let dateInMiliseconds = new Date(0); // miliseconds form 1970
let dateInMilisecondsOneScondAfter  = new Date(1000); // miliseconds form 1970
display(dateInMiliseconds.toString());
display(dateInMilisecondsOneScondAfter.toString());

let dateFull = new Date(2050,3,25,13,1,30,50); // date (year , month(0 base) , day , hour , minute , seconds , miliseconds)
display(dateFull.toISOString());
display(dateFull.toString());
display(dateFull.toUTCString());
display(dateFull.getTimezoneOffset());

dateFull.setMonth(6);
display(dateFull.toString());
display(dateFull.toString());

let dateFull2 =  new Date(2050,8,25,13,1,30,55);
display((dateFull2 - dateFull));/// milisconds

// regex

function checkPss(pass){
    let regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$');
    let regexShort = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$/;
    return regex.test(pass) + " short " + regexShort.test(pass);
    
}

display(checkPss('waek'));//false
display(checkPss('waek1'));//false
display(checkPss('Waek'));//false
display(checkPss('w  aek'));//false
display(checkPss('Strog1'));//false
display(checkPss('Stroger1'));//true





function findAlerts(logData) {
  let regex = /ERROR(.*?):(.*?);/g;
  
  let result = regex.exec(logData);
  while(result !== null) {
    display(result[1]);
    display(result[2]);
    display('---------------------------');
    result = regex.exec(logData);    
  }
}
 
let logData = 'INFO:Ok;ERROR(HIGH):Something broke;ERROR(LOW):Something fishy;ERROR(HIGH):So many errors;';
 
findAlerts(logData);

// display(findAlerts(results));
// display(findAlerts(results[0]));
// display(findAlerts(results.index));
// display(findAlerts(results.input));
  
})();