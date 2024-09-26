// content.js
const currentDomain = window.location.hostname;


if (currentDomain === "heliyatra.irctc.co.in") {
    // Show the button if on the correct domain
    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    button.style.position = 'fixed';
    button.style.bottom = '10px';
    button.style.right = '10px';
    button.style.zIndex = '9999';

    document.body.appendChild(button);

    // Add event listener for button click
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
} else {
    // Show a message if on a different domain
    const message = document.createElement('div');
    message.textContent = 'This feature only works on the Helicopter Yatra to Shri Kedarnath Dham website.';
    message.style.position = 'fixed';
    message.style.top = '10px';
    message.style.right = '10px';
    message.style.zIndex = '9999';
    message.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
    message.style.color = 'white';
    message.style.padding = '10px';
    message.style.borderRadius = '5px';
    message.style.fontSize = '16px';

    document.body.appendChild(message);
}
