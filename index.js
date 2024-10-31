//Assignment 2
//Q.1)Find Grades

//  function Findgrades(M) {
// switch (true) {

//     case(M >= 1 && M <= 10):
//      console.log("your grade is E");
//     break;
    
//     case (M >= 11 && M <= 20):
//      console.log("your grade is D");
//     break;

//     case (M >= 21 &&M <= 30 ):
//      console.log("your grade is C");
//     break;

//     case (M >= 31 && M <= 40):
//      console.log("your grade is B");
//     break;

//     case (M >= 41 && M <= 50):
//      console.log("your grade is A");
//     break;
//      default:  console.log("invalid value");
// }
    
// }
// Findgrades(50);

//Q.2)Get value

const C = 'E';
function getValue(C) {
    const valueMap = {
         'P': 'PrepBytes', 
         'Z': 'Zenith', 
         'E': 'Expert Coder', 
         'D': 'Data Structure'
    };
   return valueMap[C] || 'Invalid Input';
}
console.log(getValue(C));

        
          
    
    

            
    
    


//Q.3)Find the maximum out of three numbers
// function Max_out_three(A ,B , C) {
//     const maxNumbers = Math.max(2 ,5 , 4);
//     console.log(maxNumbers);
    
    
// }
// Max_out_three();

//Q.4)Find the second smallest integer
// function find2ndSmallest(X ,Y ,Z) {

//   let numbers = [2 ,9 ,23];
//   numbers.sort((a ,b) => a - b);
//   return numbers[1];
  
  
// }
// const secondSmallest = find2ndSmallest(2 ,9 ,23);
// console.log(`the second smallest number is :${secondSmallest}`);

//Q.5)check whether the Triangle is acute or obtuse
// function triangle_check(A ,B ,C) {
//     if (A < 90 && B < 90 && C < 90) {
//         console.log("Acute Triangle");
        


//   } else {console.log("Obtuse Triangle");
    
        
//     }
    
// }
// triangle_check(60 , 100 , 20);
