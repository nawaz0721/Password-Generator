const lengthInput = document.getElementById('length');
const digitsInput = document.getElementById('digits');
const uppercaseInput = document.getElementById('uppercase');
const lowercaseInput = document.getElementById('lowercase');
const generateBtn = document.getElementById('btn');
const updatedpassword = document.getElementById('password');

    function passwordGenerator() {
        
      const passwordLength = lengthInput.value
      const numDigits = digitsInput.value;
      const numUppercase = uppercaseInput.value;
      const numLowercase = lowercaseInput.value;
        
        const digits = "0123456789";
        const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
      
        let password = "";
      
        for (let i = 0; i < numDigits; i++) {
          password += digits.charAt(Math.floor(Math.random() * digits.length));
        }
      
        for (let i = 0; i < numUppercase; i++) {
          password += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
        }
      
        for (let i = 0; i < numLowercase; i++) {
          password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
        }
        updatedpassword.innerText = password;
        console.log("Generated Password: ", password);
        
      }