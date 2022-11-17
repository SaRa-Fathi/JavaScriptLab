var fName=prompt("Please Enter Your First Name:");
console.log(fName);

var lName=prompt("Please Enter Your last Name:");
console.log(lName);

var confirmation=confirm(fName + " "+lName);

var birth=prompt("Please Enter Your Birth Year:");
console.log(birth);

var age=2022-birth;
var message=alert("Welcome " + fName +" "+ lName +" you are " + age +" years old");
// console.log(message);

/*****************************************************************************************/
//---------Making Summation Calculator-----------
console.log("Hello,this is the first release of a calculator that only has a summation feature");
document.write("Hello,this is the first release of a calculator that only has a summation feature");

var firstNum=Number(prompt("Please Enter the First Number:"));
console.log(firstNum);

var lastNum=Number(prompt("Please Enter the Last Number:"));
console.log(lastNum);

var sum;

function add(firstNum,lastNum){
    sum=firstNum + lastNum;
    return sum;
}
console.log(firstNum + "+" + lastNum + "=" + add(firstNum,lastNum));
alert(firstNum + "+" + lastNum + "=" + add(firstNum,lastNum));







