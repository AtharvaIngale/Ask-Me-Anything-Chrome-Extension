document.addEventListener('DOMContentLoaded', function () {
    const questionInput = document.getElementById('questionInput');
    const askButton = document.getElementById('askButton');
    const responseDisplay = document.getElementById('responseDisplay');
  
    askButton.addEventListener('click', () => {
      const question = questionInput.value;
      // Call the API with 'question' and display the response in 'responseDisplay'
      
    });
  });
askButton.addEventListener('click', () => {
  const question = questionInput.value;
 
  fetch('http://localhost:3000/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question }),
  })
    .then((response) => response.json())
    .then((data) => {
      responseDisplay.textContent = data.response;
    })
    //exception handling
    .catch((error) => {
      responseDisplay.textContent = 'Error: Unable to reach the API';
      console.error(error);
    });
});
  