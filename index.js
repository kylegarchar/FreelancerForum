// Names and Occupations
const possibleNames = ["Alice", "Bob", "Carol", "David", "Emma"];
const possibleOccupations = ["Writer", "Teacher", "Programmer", "Designer", "Photographer"];

// Starting Array
let freelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
];

// Render freelancers in the list
function renderFreelancers() {
  const freelancerList = document.getElementById('freelancer-list');
  freelancerList.innerHTML = '';

  freelancers.forEach(freelancer => {
    const list = document.createElement('ul');
    list.innerHTML = `
      <li>${freelancer.name}</li>
      <li>${freelancer.occupation}</li>
      <li>$${freelancer.price}</li>
    `;
    freelancerList.appendChild(list);
  });
}

// calculate and update the average starting price
function updateAveragePrice() {
  const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
  const averagePrice = totalPrices / freelancers.length;
  document.getElementById('average-price').textContent = averagePrice.toFixed(2);
}

// Add a random freelancer
function addRandomFreelancer() {
  const randomName = possibleNames[Math.floor(Math.random() * possibleNames.length)];
  const randomOccupation = possibleOccupations[Math.floor(Math.random() * possibleOccupations.length)];
  const randomPrice = Math.floor(Math.random() * 100) + 20;

  freelancers.push({
    name: randomName,
    occupation: randomOccupation,
    price: randomPrice
  });

  renderFreelancers(); 
  updateAveragePrice();
}
// Initial freelancers and average price
renderFreelancers();
updateAveragePrice();

// Add random freelancer every 6 seconds
setInterval(addRandomFreelancer, 6000);