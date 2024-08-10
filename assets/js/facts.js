 // Array to hold the facts from the JSON file
 let birdFacts = [];

 // Fetch the facts from the JSON file
 fetch('./assets/js/facts.json')
     .then(response => response.json())
     .then(data => {
         birdFacts = data;
         displayRandomFact();  // Display the first random fact on load
     });

 // Function to display a random fact
 function displayRandomFact() {
     const randomIndex = Math.floor(Math.random() * birdFacts.length);
     const randomFact = birdFacts[randomIndex];
     document.getElementById('bird-species').innerText = randomFact.species;
     document.getElementById('bird-fact').innerText = randomFact.fact;
 }

 // Add event listener to the button
 document.getElementById('new-fact-btn').addEventListener('click', displayRandomFact);