let personName :string = '';
personName = prompt("Enter Your Name") || '';
if(personName !== null && personName !== '' ) {
    alert(`Hello ${personName}! would you like to learn programming today ?`)
}
else {
    alert(`Enter your Name!`)
};
//if else function is used to call variables to run the code according to logic built.