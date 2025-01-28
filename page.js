let map = L.map('map', {minZoom : 4, maxZoom : 7}).setView([39.8282, -92.5796], 4);

let geojson = null;

let turn = 1;
let round = 0;

///////////////////////////////////////////////
// Helper Functions
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

function setArmies(state, armies) {
    for (let i = 0; i < neighborStates.length; i++) {
        if (neighborStates[i].Name === state) {
            neighborStates[i].Armies = armies;
        }
    }
}

function countStates() {
    let player1 = 0;
    let player2 = 0;
    let player3 = 0;
    let player4 = 0;
    for (let i = 0; i < neighborStates.length; i++) {
        if (neighborStates[i].Owner === 1) {
            player1++;
        } else if (neighborStates[i].Owner === 2) {
            player2++;
        } else if (neighborStates[i].Owner === 3) {
            player3++;
        } else if (neighborStates[i].Owner === 4) {
            player4++;
        }
    }
    return [player1, player2, player3, player4];
}

function countArmies() {
    let player1 = 0;
    let player2 = 0;
    let player3 = 0;
    let player4 = 0;
    for (let i = 0; i < neighborStates.length; i++) {
        if (neighborStates[i].Owner === 1) {
            player1 += neighborStates[i].Armies;
        } else if (neighborStates[i].Owner === 2) {
            player2 += neighborStates[i].Armies
        } else if (neighborStates[i].Owner === 3) {
            player3 += neighborStates[i].Armies
        } else if (neighborStates[i].Owner === 4) {
            player4 += neighborStates[i].Armies
        }
    }
    return [player1, player2, player3, player4];
}

///////////////////////////////////////////////
// Every Turn

function tableUpdate() {
    let standings = countStates();
    let armies = countArmies();
    let t = document.getElementById('turn')
    let p1s = document.getElementById('player1States')
    let p1a = document.getElementById('player1Armies')
    let p2s = document.getElementById('player2States')
    let p2a = document.getElementById('player2Armies')
    let p3s = document.getElementById('player3States')
    let p3a = document.getElementById('player3Armies')
    let p4s = document.getElementById('player4States')
    let p4a = document.getElementById('player4Armies')

    t.innerHTML = "Round " + round + ", Player " + turn + "'s turn";
    p1s.innerHTML = standings[0] + " states";
    p1a.innerHTML = armies[0] + " armies";
    p2s.innerHTML = standings[1] + " states";
    p2a.innerHTML = armies[1] + " armies";
    p3s.innerHTML = standings[2] + " states";
    p3a.innerHTML = armies[2] + " armies";
    p4s.innerHTML = standings[3] + " states";
    p4a.innerHTML = armies[3] + " armies";
}

///////////////////////////////////////////////
// Next Turn



let nxtBtn = document.getElementById('nextTurnButton');
nxtBtn.onclick = function nextTurn() {
    if (turn % 4 === 0) {
        round++;
        turn = 1;
    } else {
        turn++;
    }
    tableUpdate();
}

///////////////////////////////////////////////
// New Game Button

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
                setArmies(randomState, 1);
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
        los.push(layer[i].feature.properties.name);
    }
    distributeStates(layer, player, los);
    tableUpdate();
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