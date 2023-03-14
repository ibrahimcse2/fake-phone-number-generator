
 // Fetch country data from REST Countries API
 fetch('https://restcountries.com/v2/all')
 .then(response => response.json())
 .then(data => {
   // Get select input element
   const select = document.getElementById('country-select');

   // Loop through countries and add option elements to select input
   data.forEach(country => {
     const option = document.createElement('option');
     option.value = country.alpha2Code;
     option.textContent = `${country.name} (+${country.callingCodes[0]})`;
     
     const flagIcon = document.createElement('span');
     flagIcon.className = 'flag-icon';
     flagIcon.style.backgroundImage = `url('${country.flag}')`;
     option.prepend(flagIcon);
     
     select.appendChild(option);
   });
 })
 .catch(error => console.error(error));

// Add event listener for generate button click
const generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', function() {
 // Get selected option and quantity input
 const selectedOption = document.getElementById('country-select').options[document.getElementById('country-select').selectedIndex];
 const quantityInput = document.getElementById('quantity-input');

 // Generate random phone numbers based on selected country code and quantity
 const phoneCode = selectedOption.textContent.match(/\d+/)[0];
 let phoneNumbers = '';
 for (let i = 0; i < quantityInput.value; i++) {
   const randomNumber = Math.floor(Math.random() * 10000000000);
   const phoneNumber = `+${phoneCode}${randomNumber}`;
   phoneNumbers += `${phoneNumber}\n`;
 }

 // Set phone output value to generated phone numbers
 const phoneOutput = document.getElementById('phone-output');
 phoneOutput.value = phoneNumbers;
});