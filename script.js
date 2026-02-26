function loadData(url, elementId, formatFunction) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById(elementId);
      data.forEach(item => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = formatFunction(item);
        container.appendChild(div);
      });
    });
}

loadData("/api/hotels", "hotels", hotel =>
  `<strong>${hotel.name}</strong><br>
   Location: ${hotel.location}<br>
   Price: $${hotel.price}`
);

loadData("/api/flights", "flights", flight =>
  `From: ${flight.from} → ${flight.to}<br>
   Price: $${flight.price}`
);

loadData("/api/cars", "cars", car =>
  `${car.name}<br>
   Price per day: $${car.price}`
);
