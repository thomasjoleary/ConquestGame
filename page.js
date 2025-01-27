let map = L.map('map', {minZoom : 4, maxZoom : 7}).setView([39.8282, -92.5796], 4);

let geojson = null;

function getStateColor(state) {
    let player = null;
    for (let i = 0; i < neighborStates.length; i++) {
        if (neighborStates[i].Name === state) {
            player = neighborStates[i].Owner;
        }
    }
    switch (player) {
        case 1:
            return 'blue';
        case 2:
            return 'red';
        case 3:
            return 'green';
        case 4:
            return 'yellow';
    }
}

function setOwner(state, player) {
    for (let i = 0; i < neighborStates.length; i++) {
        if (neighborStates[i].Name === state) {
            neighborStates[i].Owner = player;
        }
    }
}

function distributeStates(layer, player, los) {
    while (los.length > 0) {
        let randomIndex = Math.floor(Math.random() * los.length);
        let randomState = los[randomIndex];
        los.splice(randomIndex, 1);
        for (let i = 0; i < layer.length; i++) {
            if (layer[i].feature.properties.name === randomState) {
                if (player === 1) {
                    layer[i].setStyle({
                        color: 'blue'
                    });
                    setOwner(randomState, player);
                    player = 2;
                } else if (player === 2) {
                    layer[i].setStyle({
                        color: 'red'
                    });
                    setOwner(randomState, player);
                    player = 3;
                } else if (player === 3) {
                    layer[i].setStyle({
                        color: 'green'
                    });
                    setOwner(randomState, player);
                    player = 4;
                } else if (player === 4) {
                    layer[i].setStyle({
                        color: 'yellow'
                    });
                    setOwner(randomState, player);
                    player = 1;
                }
            }
        }
    }
}

let newGB = document.getElementById('newGameButton');
newGB.onclick = function newGame() {
    let layer = geojson.getLayers();
    let player = 1;
    let los = [];
    for (let i = 0; i < layer.length; i++) {
        console.log(layer[i].feature.properties.name);
        los.push(layer[i].feature.properties.name);
    }
    distributeStates(layer, player, los);
}

///////////////////////////////////////////////
// Neighbor Check
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
///////////////////////////////////////////////
// Clicked event handler
function clicked(e) {
    let select = e.target
    //alert("You clicked on " + e.target.feature.properties.name);
    if (select === selected) {
        selected.setStyle({
            color: getStateColor(selected.feature.properties.name)
        });
        selected = null;
    } else if (selected === null) {
        selected = select;
        select.setStyle({
            color: 'purple'
        });
    } else {
        if (neighborCheck(selected.feature.properties.name, select.feature.properties.name)) {
            alert("Move " + selected.feature.properties.name + " to " + select.feature.properties.name);
            selected.setStyle({
                color: getStateColor(selected.feature.properties.name)
            });
            selected = null;
        } else {
            alert("Invalid move");
            selected.setStyle({
                color: getStateColor(selected.feature.properties.name)
            });
            selected = null;
        }
    }
}
///////////////////////////////////////////////
// Event handler applier
function onEachFeature(feature, layer) {
    //bind click
    layer.on({
        click: clicked
    });
}
///////////////////////////////////////////////

geojson = L.geoJson(states, {
    onEachFeature: onEachFeature
}).addTo(map);