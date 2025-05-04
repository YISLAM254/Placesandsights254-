document.addEventListener("DOMContentLoaded", () => {
  fetch('data/places.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('places-container');

      data.forEach(place => {
        const placeCard = document.createElement('div');

        placeCard.innerHTML = `
          <h2>${place.name}</h2>
          <p><strong>Location:</strong> ${place.location}</p>
          <p>${place.description}</p>
          <img src="${place.image}" alt="${place.name}" style="width:100%; border-radius: 8px; margin-top: 10px;">
        `;
    container.appendChild(placeCard);
      });
    })
    .catch(error => {
      console.error("Error loading places:", error);
    });
});

