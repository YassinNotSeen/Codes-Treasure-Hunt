// Array to store valid codes and corresponding messages or images
const codes = [
    { code: '65Z9', message: 'Average numbers of birthdate "1951." Add all digits then divide them by the number of digits. | ꩜' },
    { code: '3211', message: "...غرفة فئران عند بيت" },
    // Add more codes and messages as needed
];

// Function to handle code submission
document.getElementById('submit').addEventListener('click', () => {
    const code = Array.from(document.querySelectorAll('.code-grid input')).map(input => input.value).join('');
    const resultDiv = document.getElementById('result');
    
    // Clear previous result
    resultDiv.innerHTML = '';
    
    // Check if the entered code matches any of the valid codes
    const validCodes = codes.filter(c => c.code === code);
    
    if (validCodes.length > 0) {
        validCodes.forEach(validCode => {
            resultDiv.innerHTML += `<p>${validCode.message}</p>`;
            // Optional: You can also add images or other content
            // resultDiv.innerHTML += `<img src="path_to_image.png" alt="Success">`;
        });
    } else {
        resultDiv.textContent = 'Invalid code. Try again!';
    }
});
