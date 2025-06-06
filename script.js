// Dati esempio POI (aggiungi altri punti secondo necessità)
const poiData = [
    {
        name: "Locanda dell'Angelo",
        lat: 44.0675,
        lng: 9.9667,
        type: "Ristorante",
        phone: "+39018765336",
        desc: "Ristorante tipico ligure"
    },
    {
        name: "Castello di Ameglia",
        lat: 44.0736,
        lng: 9.9814,
        type: "Attrazione",
        desc: "Castello medievale del X secolo"
    },
    {
        name: "Ospedale Sant'Andrea",
        lat: 44.1057,
        lng: 9.8086,
        type: "Ospedale",
        phone: "+390187533111",
        desc: "Pronto soccorso 24h"
    },
    {
        name: "Farmacia Argentieri",
        lat: 44.0707,
        lng: 9.9628,
        type: "Farmacia",
        phone: "+39018760010",
        desc: "Farmacia con orario esteso"
    }
];

// Inizializza la mappa
const map = L.map('map').setView([44.0740, 9.9814], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Icone personalizzate
const icons = {
    "Ristorante": L.icon({ iconUrl: "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-red.png", iconSize: [25,41], iconAnchor: [12,41], popupAnchor: [1,-34] }),
    "Attrazione": L.icon({ iconUrl: "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-green.png", iconSize: [25,41], iconAnchor: [12,41], popupAnchor: [1,-34] }),
    "Ospedale": L.icon({ iconUrl: "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-blue.png", iconSize: [25,41], iconAnchor: [12,41], popupAnchor: [1,-34] }),
    "Farmacia": L.icon({ iconUrl: "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-orange.png", iconSize: [25,41], iconAnchor: [12,41], popupAnchor: [1,-34] }),
    "default": L.icon({ iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png", iconSize: [25,41], iconAnchor: [12,41], popupAnchor: [1,-34] })
};

// Aggiungi marker per ogni POI
poiData.forEach(poi => {
    let popup = `<b>${poi.name}</b><br>${poi.desc || ""}`;
    if (poi.phone) popup += `<br><a href="tel:${poi.phone}">${poi.phone}</a>`;
    L.marker([poi.lat, poi.lng], {icon: icons[poi.type] || icons["default"]})
        .bindPopup(popup)
        .addTo(map);
});

// Gestione lingua (placeholder)
function changeLanguage(lang) {
    alert("Funzione multilingue in sviluppo. Lingua selezionata: " + lang);
}

// Personalizzazione profilo (placeholder)
document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Funzione di personalizzazione in sviluppo!");
});
