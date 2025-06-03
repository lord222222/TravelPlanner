document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('tripForm');
  const tripList = document.getElementById('tripList');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const trip = {
        destination: document.getElementById('destination').value,
        country: document.getElementById('country').value,
        date: document.getElementById('date').value,
        duration: document.getElementById('duration').value,
        budget: document.getElementById('budget').value,
        type: document.getElementById('type').value,
        notes: document.getElementById('notes').value
      };

      let trips = JSON.parse(localStorage.getItem('trips')) || [];
      trips.push(trip);
      localStorage.setItem('trips', JSON.stringify(trips));
      alert('Trip saved!');
      form.reset();
    });
  }

  if (tripList) {
    const trips = JSON.parse(localStorage.getItem('trips')) || [];
    tripList.innerHTML = trips.map((trip, i) => `
        <div class="trip-card">
          <h3>${trip.destination}, ${trip.country}</h3>
          <p><strong>Date:</strong> ${trip.date}</p>
          <p><strong>Duration:</strong> ${trip.duration} days</p>
          <p><strong>Budget:</strong> $${trip.budget}</p>
          <p><strong>Type:</strong> ${trip.type}</p>
          <p><strong>Notes:</strong> ${trip.notes}</p>
          <button onclick="deleteTrip(${i})">Delete</button>
        </div>
      `).join('');
  }
});

function deleteTrip(index) {
  let trips = JSON.parse(localStorage.getItem('trips')) || [];
  trips.splice(index, 1);
  localStorage.setItem('trips', JSON.stringify(trips));
  location.reload();
}
