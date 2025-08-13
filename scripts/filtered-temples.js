// Array of temples (example data)
const temples = [
  {
    name: "Accra Temple",
    location: "Accra, Ghana",
    dedicated: "2004-01-09",
    area: 45000,
    imageUrl: "images/accra-temple.webp",
    altText: "Accra Temple in Ghana"
  },
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 107240,
    imageUrl: "images/salt-lake-temple.webp",
    altText: "Salt Lake Temple"
  },
  {
    name: "Paris Temple",
    location: "Paris, France",
    dedicated: "2017-04-22",
    area: 14100,
    imageUrl: "images/Paris-france-temple.webp",
    altText: "Paris Temple"
  },
  {
    name: "Kirtland Temple",
    location: "Kirtland, Ohio, USA",
    dedicated: "1836-03-27",
    area: 2600,
    imageUrl: "images/kirtland-temple.webp",
    altText: "Kirtland Temple"
  },
  {
    name: "Apia Samoa Temple",
    location: "Apia, Samoa",
    dedicated: "2005-09-04",
    area: 18000,
    imageUrl: "images/apia-samoa-temple.webp",
    altText: "Apia Samoa Temple"
  },
  {
    name: "Aba-Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 18000,
    imageUrl: "images/aba-nigeria-temple.webp",
    altText: "Aba Nigeria Temple"
  },
  {
    name: "Los Angeles California Temple",
    location: "Los Angeles, California, USA",
    dedicated: "1956-03-14",
    area: 382207,
    imageUrl: "images/los-angeles-california-temple.webp",
    altText: "Los Angeles California Temple"
  },
  {
    name: "Kinshasa-Democratic-Republic-of-the-Congo Temple",
    location: "Kinshasa, Democratic Republic of the Congo",
    dedicated: "2019-04-14",
    area: 19184,
    imageUrl: "images/kinshasa-democratic-republic-of-the-congo-temple.webp",
    altText: "Kinshasa Temple"
  },
  {
    name: "Tokyo-Temple",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 52500,
    imageUrl: "images/tokyo-japan-temple.webp",
    altText: "Tokyo Temple"
  }
];

// Function to display temple cards
function displayTemples(filteredTemples) {
  const container = document.getElementById('temple-cards');
  container.classList.add('temples-grid');
  container.innerHTML = '';

  filteredTemples.forEach(temple => {
    const card = document.createElement('figure');
    card.classList.add('temple-card');

    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.altText;
    img.loading = 'lazy';
    card.appendChild(img);

    const caption = document.createElement('figcaption');

    const nameLine = document.createElement('div');
    nameLine.classList.add('temple-name');
    nameLine.textContent = temple.name;
    caption.appendChild(nameLine);

    const locationLine = document.createElement('div');
    locationLine.classList.add('temple-location');
    locationLine.textContent = temple.location;
    caption.appendChild(locationLine);

    const dedicatedLine = document.createElement('div');
    dedicatedLine.classList.add('temple-dedicated');
    dedicatedLine.textContent = `Dedicated on ${new Date(temple.dedicated).toLocaleDateString()}`;
    caption.appendChild(dedicatedLine);

    const areaLine = document.createElement('div');
    areaLine.classList.add('temple-area');
    areaLine.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
    caption.appendChild(areaLine);

    card.appendChild(caption);

    container.appendChild(card);
  });
  
}

// Function to filter temples by category
function filterTemples(filter) {
  switch (filter) {
    case 'old':
      return temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
    case 'new':
      return temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
    case 'large':
      return temples.filter(t => t.area > 90000);
    case 'small':
      return temples.filter(t => t.area < 10000);
    default:
      return temples;
  }
}

// Setup filter buttons
document.querySelectorAll('.navigation a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const filter = e.target.getAttribute('data-filter');
    const filtered = filterTemples(filter);

    document.querySelector('main h2').textContent = e.target.textContent;

    displayTemples(filtered);

    const nav = document.querySelector('.navigation');
    if (nav.classList.contains('show')) {
      nav.classList.remove('show');
    }
  });
});

// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  displayTemples(temples);

  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastmodified').textContent = document.lastModified;
});

