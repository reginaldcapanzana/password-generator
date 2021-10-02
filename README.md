# Password Generator

## Description
The objective of this project was to add Javascript to the existing css and html in order to create a password generator. The password that is generated has 5 different criteria that the user can input. These criteria are: lowercase characters, uppercase characters, numeric characters, special symbols, and password length (8-128 characters). Once the user inputs their desired criteria, the randomized password will be generated and displayed on the webpage.

I implemented the user inputs using window.prompt(), which asked the user if they wanted a specific criteria. The desired input would either be "Y" or "N". I implemented checks within my code to throw an alert if the user input was invalid. In the future, these prompts could instead contain radio buttons using modals which would make the design cleaner. Another input check I implemented was for the password length. If the user input was not between 8-128 characters then it will return an error message.

![Landing page of password generator](./assets/images/password-generator-screenshot.jpg)

[Deployed Application](https://reginaldcapanzana.github.io/password-generator/)

