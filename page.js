let map = L.map('map', {minZoom : 4, maxZoom : 7}).setView([39.8282, -92.5796], 4);

let selected = null;

function findNeighborsFromName(state) {
    let ncodes = [];
    for (let i = 0; i < neighborStates.length; i++) {
        if (neighborStates[i].Name === state) {
            ncodes = neighborStates[i].Neighborcodes;
        }
    }
    let neighbors = [];
    for (let i = 0; i < ncodes.length; i++) {
        for (let j = 0; j < neighborStates.length; j++) {
            if (ncodes[i] === neighborStates[j].Code) {
                neighbors.push(neighborStates[j].Name);
            }
        }
    }
    return neighbors;
}

function neighborCheck(state1, state2) {
    let neighborNames = findNeighborsFromName(state1);
    for (let i = 0; i < neighborNames.length; i++) {
        if (neighborNames[i] === state2) {
            return true;
        }
    }
    return false;
}

function clicked(e) {
    let select = e.target
    alert("You clicked on " + e.target.feature.properties.name);
    if (select === selected) {
        selected = null;
        geojson.resetStyle(e.target);
    } else if (selected === null) {
        selected = select;
        select.setStyle({
            color: 'red'
        });
    } else {
        if (neighborCheck(selected.feature.properties.name, select.feature.properties.name)) {
            alert("Move " + selected.feature.properties.name + " to " + select.feature.properties.name);
            geojson.resetStyle(selected);
            selected = null;
        } else {
            alert("Invalid move");
            geojson.resetStyle(selected);
            selected = null;
        }
    }
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