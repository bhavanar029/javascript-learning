let count = 0;

function cc(card) {
  // Only change code below this line
   switch(card) {
     case 2:
     case 3:
     case 4:
     case 5:
     case 6:
      count++ ;
      break;
     case 10:
     case "J":
     case "Q":
     case "K":
     case "A":
      count-- ; 
      break;
   }
    
    var holdbet = 'Hold' 
      if (count > 0) {
      holdbet = 'Bet';
      }


  return count + " " + holdbet;
  // Only change code above this line
}

 const y = cc(2); //cc(3); cc(7); cc('K'); cc('A');
 console.log(y);

 const a = cc(3);
 console.log(a);

 const b = cc(7);
 console.log(b);

 const c = cc('k');
 console.log(c);

 const d = cc('A');
 console.log(d);