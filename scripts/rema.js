const images = [
  'images/img1.jpg',
  'images/img8.jpg',
  'images/img5.jpg'
];
const bigTexts = [
  'God loves you',
  'God is with you',
  'God cares for you'
];
const smallTexts = [
  'The love of God is unfathomable',
  'Trust in His plan',
  'You are never alone'
];

let currentIndex = 0;
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  const zoomImage = document.getElementById('zoomImage');
  const bigTextElement = document.getElementById('bigText');
  const smallTextElement = document.getElementById('smallText');

  zoomImage.style.animation = 'none';
  zoomImage.offsetHeight;
  zoomImage.src = images[currentIndex];
  zoomImage.style.animation = 'zoomIn 15s forwards';

  bigTextElement.style.animation = 'none';
  bigTextElement.offsetHeight;
  bigTextElement.textContent = bigTexts[currentIndex];
  bigTextElement.style.animation = 'slideInFromTop 2s forwards';

  smallTextElement.style.animation = 'none';
  smallTextElement.offsetHeight;
  smallTextElement.textContent = smallTexts[currentIndex];
  smallTextElement.style.animation = 'slideInFromBottom 2s forwards';
}, 15000);

const navMenu = document.querySelector('header nav ul');
const menuLinks = document.querySelectorAll('.js-home, .js-about, .js-programs, .js-education, .js-gallery, .js-join');
const dropdownToggle = document.querySelector('header nav'); // Adjust selector if necessary

// Function to check if the screen size is small
function isSmallScreen() {
  return window.innerWidth <= 768; // Apply behavior for small screens only
}

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (isSmallScreen()) {
      navMenu.style.opacity = '0'; // Fade out
      setTimeout(() => {
        navMenu.style.display = 'none'; // Hide after animation
      }, 300); // Matches the transition duration
    }
  });
});

// Reset the menu when the dropdown is clicked
dropdownToggle.addEventListener('click', () => {
  if (isSmallScreen()) {
    navMenu.style.display = 'block'; // Show the menu
    setTimeout(() => {
      navMenu.style.opacity = '1'; // Fade in smoothly
    }, 10); // Add slight delay to avoid conflict
  }
});
// Select all elements with the class 'js-whatsapplink'
const buttons = document.querySelectorAll('.js-whatsapplink');

// Add a click event to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Redirect to the WhatsApp link
        window.location.href = 'https://wa.me/2349099272660';
    });
});

// Select the input field and the message container
const inputField = document.getElementById('userInput');
const messageDiv = document.querySelector('.js-message');

// Add an event listener for the 'keydown' event
inputField.addEventListener('keydown', (event) => {
    // Check if the key pressed is 'Enter'
    if (event.key === 'Enter') {
        const userMessage = inputField.value.trim(); // Get the input value
        
        if (userMessage) {
            // Display a success message with a checkmark
            messageDiv.innerHTML = '✅ Your message was submitted successfully!';
            messageDiv.style.color = 'green';

            // Clear the input field
            inputField.value = '';
        } else {
            // Show an error message if the input is empty
            messageDiv.innerHTML = '⚠️ Please enter a message before submitting.';
            messageDiv.style.color = 'red';
        }
    }
});

// Select all buttons with the class "js-donate"
const donateButtons = document.querySelectorAll('.js-donate');

// Add a click event listener to each button
donateButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Open payment.html in a new tab
    window.open('payment.html', '_blank');
  });
});

