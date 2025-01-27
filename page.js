let map = L.map('map', {minZoom : 4, maxZoom : 7}).setView([39.8282, -92.5796], 4);

function clicked(e) {
    alert("You clicked on " + e.target.feature.properties.name);
}

function onEachFeature(feature, layer) {
    //bind click
    layer.on({
        click: clicked
    });
}

let geojson = L.geoJson(states, {
    onEachFeature: onEachFeature
}).addTo(map);