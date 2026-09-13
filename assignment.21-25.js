// Q : Question no 1
array1 = []
var inp1 = prompt("Enter First Name: ")
var inp2 = prompt("Enter Second Name: ")

array1.push(inp1)
array1.push(inp2)
document.write(`<div style="border:2px solid skyblue; border-radius:20px 20px;
    width:180px; height:30px; padding:8px;">`)
document.write(`This is your full name: ${array1.join(" ")} <br>`)
document.write(`</div>`)

document.write(`<br>`)

// Q : Question no 2
var wordString = "Pakistani"
var indexNum = wordString.indexOf("n")

document.write(`<div style="border:2px solid skyblue; border-radius:20px 20px; 
    width:180px; height:50px; padding:8px;">`)
document.write(`String: ${wordString} <br> Index of 'n': ${indexNum} <br>`)
document.write(`</div>`)

document.write(`<br>`)

// Q : Question no 3 
var word = "Hello World"
var numIndex = word.lastIndexOf("l")

document.write(`<div style="border:2px solid skyblue; border-radius:20px 20px; 
    width:180px; height:50px; padding:8px;">`)
document.write(`String : ${word} <br> Last word 'l' : ${numIndex}<br>`)
document.write(`</div>`)

document.write(`<br>`)

// Q : Question no 4
var word = "Pakistani"
var numIndex = word.indexOf("i")

document.write(`<div style="border:2px solid skyblue; border-radius:20px 20px; 
    width:180px; height:50px; padding:8px;">`)
document.write(`String : ${word} <br> Character at index ${numIndex} : i <br>`)
document.write(`</div>`)

document.write(`<br>`)

// Q : Question no 5 (Using concat() method)
var firstName = prompt("Enter your First Name:");
var lastName = prompt("Enter your Last Name:");

// Syntax: string.concat(string2, string3, ...)
var fullName = firstName.concat(" ", lastName);

document.write(`<div style="border:2px solid skyblue; border-radius:20px 20px; 
    width:250px; height:30px; padding:8px;">`)
document.write("Welcome " + fullName + "!"+"<br>");
document.write(`</div>`)

document.write(`<br>`)

// Q : Question no 6
var city = "Hyderabad"
var newcity = city.replace("Hyder","Islam")

document.write(`<div style="border:2px solid skyblue; border-radius:20px 20px; 
    width:250px; height:30px; padding:8px;">`)
document.write(`Original city : ${city} <br> After replacement : ${newcity} <br>`)
document.write(`</div>`)

document.write(`<br>`)

// Q : Question no 7
var message = "Ali and Sami are best friends. They play cricket and football together."
var newMessage = message.replaceAll("and", "&")

document.write(`<div style="border:2px solid skyblue; border-radius:20px 20px; 
    width:250px; height:60px; padding:8px;">`)
document.write(newMessage + "<br>")
document.write(`</div>`)

document.write(`<br>`)

// Q : Question no 8
var stringValue = "472";
// String ko Number mein convert karein
var numberValue = Number(stringValue);

// Browser mein result dikhayein
document.write(`<div style="border:2px solid skyblue; border-radius:20px 20px; 
    width:180px; height:80px; padding:8px;">`)
document.write("Value: " + stringValue + "<br>");
document.write("Type: " + typeof(stringValue) + "<br>");

document.write("Value: " + numberValue + "<br>");
document.write("Type: " + typeof(numberValue) + "<br>");
document.write(`</div>`)

document.write(`<br>`)

// Q : Question no 9
var input = prompt("Enter any word in lowerCase like peanut convert into upperCase: ")

document.write(`<div style="border:2px solid skyblue; border-radius:20px 20px; 
    width:180px; height:50px; padding:8px;">`)
document.write(`User input : ${input} <br>`)
document.write(`Upper case : ${input.toUpperCase()} <br>`)
document.write(`</div>`)

document.write(`<br>`)

// Q : Question no : 10
var input = prompt("Enter any word in lowerCase like 'peanut' convert into titleCase: ");

// Capitalize the first letter and add the rest of the string
var titleCase = input[0].toUpperCase() + input.slice(1);

document.write(`<div style="border:2px solid skyblue; border-radius:20px 20px; 
    width:180px; height:50px; padding:8px;">`)
document.write(`User Input : ${input} <br>`);
document.write(`Title case : ${titleCase} <br>`);
document.write(`</div>`)

document.write(`<br>`)

// Q : Question no 11
var num = 35.36;

// 1. Number ko String mein convert karein
var numString = num.toString();

// 2. Dot (.) ko khatam (replace) karein
// Hum dot ko khali jagah "" se badal denge
var result = numString.replace(".", "");

// Browser mein display karein
document.write(`<div style="border:2px solid skyblue; border-radius:20px 20px; 
    width:180px; height:50px; padding:8px;">`)
document.write("Number: " + num + "<br>")
document.write("Result: " + result + "<br>")
document.write(`</div>`)

// Q : Question no 12
var username = prompt("Enter your username:");
var isValid = true;

for (var i = 0; i < username.length; i++) {
    var charCode = username.charCodeAt(i);

    // Check karein ke kya charCode in mein se koi hai
    if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
        isValid = false;
        break; 
    }
}

if (isValid === false) {
    alert("Please enter a valid username (symbols like @ . , ! are not allowed)");
} else {
    alert("Username saved: " + username);
}

document.write(`<br>`)