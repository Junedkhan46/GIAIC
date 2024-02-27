let personName: string = '';

personName = prompt("What's your name ?") || '';
let lowerCase :string= personName.toLowerCase();
let upperCase :string= personName.toUpperCase();
let titleCase :string= personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).
toLowerCase()).join('');

if (personName !== null && personName !=='') {alert(`Hello ${personName}, Here is your name in:
Lower Case: ${lowerCase}
Upper Case: ${upperCase}
Title Case: ${titleCase}`
)} else {alert(`Enter Your Name!`)};