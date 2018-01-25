//var musicians = ["John Lennon" "Paul McCartney" "George Harrison" "Ringo Starr"]
//var instruments = ["Guitar" "Bass Guitar" "Lead Guitar" "Drums"]

function theBeatlesPlay(musicians, instruments){
  var newString = [];
  for (var i = 0; i < musicians.length; i ++){
  newString.push(musicians[i] + " plays " + instruments[i]);

}
return newString
}

function johnLennonFacts(facts) {
   var results = [];
   var count = 0;
   while (count < facts.length) {
    results.push(facts[count] + "!!!");
    count++;
 }
   return results;
 }

 function iLoveTheBeatles(number){
   var array = [];
   do{
     array.push("I love the Beatles!")
     number++;
   }while(number<15);

  return array
 }
