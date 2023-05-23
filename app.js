
var playerPreview1 = document.getElementById("player-preview-1");
var playerPreview2 = document.getElementById("player-preview-2");

var player1 = "";
function selectPlayer1(selectedPlayer) {
    if (selectedPlayer == "captainAmericaSelected") {
        playerPreview1.innerHTML = '<img src="Images/Character-Images/Captain-America/captain-america.png" alt="Captain America" class="preview-image">'
        player1 = "captainAmerica";
    } else if (selectedPlayer == "hulkSelected") {
        playerPreview1.innerHTML = '<img src="Images/Character-Images/Hulk/hulk.png" alt="Hulk" class="preview-image">'
        player1 = "hulk";
    } else if (selectedPlayer == "ironManSelected") {
        playerPreview1.innerHTML = '<img src="Images/Character-Images/Iron-Man/iron-man.png" alt="Iron Man" class="preview-image">'
        player1 = "ironMan";
    } else if (selectedPlayer == "spiderManSelected") {
        playerPreview1.innerHTML = '<img src="Images/Character-Images/Spider-Man/spider-man.png" alt="Sider Man" class="preview-image">'
        player1 = "spiderMan";
    } else if (selectedPlayer == "wolverineSelected") {
        playerPreview1.innerHTML = '<img src="Images/Character-Images/Wolverine/wolverine.png" alt="Wolverine" class="preview-image">'
        player1 = "wolverine";
    } else if (selectedPlayer == "warMachineSelected") {
        playerPreview1.innerHTML = '<img src="Images/Character-Images/War-Machine/war-machine.png" alt="War Machine" class="preview-image">'
        player1 = "warMachine";
    } else if (selectedPlayer == "venomSelected") {
        playerPreview1.innerHTML = '<img src="Images/Character-Images/Venom/venom.png" alt="Venom" class="preview-image">'
        player1 = "venom";
    } else if (selectedPlayer == "thanosSelected") {
        playerPreview1.innerHTML = '<img src="Images/Character-Images/Thanos/thanos.jpg" alt="Thanos" class="preview-image">'
        player1 = "thanos";
    }
}

var player2 = "";
function selectPlayer2(selectedPlayer) {
    if (selectedPlayer == "captainAmericaMirrorSelected") {
        playerPreview2.innerHTML = '<img src="Images/Character-Images/Captain-America-Mirror/captain-america.png" alt="Captain America" class="preview-image">'
        player2 = "captainAmericaMirror";
        
    } else if (selectedPlayer == "hulkMirrorSelected") {
        playerPreview2.innerHTML = '<img src="Images/Character-Images/Hulk-Mirror/hulk.png" alt="Hulk" class="preview-image">'
        player2 = "hulkMirror";
    } else if (selectedPlayer == "ironManMirrorSelected") {
        playerPreview2.innerHTML = '<img src="Images/Character-Images/Iron-Man-Mirror/iron-man.png" alt="Iron Man" class="preview-image">'
        player2 = "ironManMirror";
    } else if (selectedPlayer == "spiderManMirrorSelected") {
        playerPreview2.innerHTML = '<img src="Images/Character-Images/Spider-Man-Mirror/spider-man.png" alt="Sider Man" class="preview-image">'
        player2 = "spiderManMirror";
    } else if (selectedPlayer == "wolverineMirrorSelected") {
        playerPreview2.innerHTML = '<img src="Images/Character-Images/Wolverine-Mirror/wolverine.png" alt="Wolverine" class="preview-image">'
        player2 = "wolverineMirror";
    } else if (selectedPlayer == "warMachineMirrorSelected") {
        playerPreview2.innerHTML = '<img src="Images/Character-Images/War-Machine-Mirror/war-machine.png" alt="War Machine" class="preview-image">'
        player2 = "warMachineMirror";
    } else if (selectedPlayer == "venomMirrorSelected") {
        playerPreview2.innerHTML = '<img src="Images/Character-Images/Venom-Mirror/venom.png" alt="Venom" class="preview-image">'
        player2 = "venomMirror";
    } else if (selectedPlayer == "thanosMirrorSelected") {
        playerPreview2.innerHTML = '<img src="Images/Character-Images/Thanos-Mirror/thanos.png" alt="Thanos" class="preview-image">'
        player2 = "thanosMirror";
    }
}

function checkPlayers() {
    //Player 1 Checking
    var player1present = "";
    switch (player1) {
        case "captainAmerica":
            player1present = true
            break;
        case "hulk":
            player1present = true
            break;
        case "ironMan":
            player1present = true
            break;
        case "spiderMan":
            player1present = true
            break;
        case "wolverine":
            player1present = true
            break;
        case "warMachine":
            player1present = true
            break;
        case "venom":
            player1present = true
            break;
        case "thanos":
            player1present = true
            break;

        default:
            player1present = false
    }

    //Player 2 Checking
    var player2present = "";
    switch (player2) {
        case "captainAmericaMirror":
            player2present = true
            break;
        case "hulkMirror":
            player2present = true
            break;
        case "ironManMirror":
            player2present = true
            break;
        case "spiderManMirror":
            player2present = true
            break;
        case "wolverineMirror":
            player2present = true
            break;
        case "warMachineMirror":
            player2present = true
            break;
        case "venomMirror":
            player2present = true
            break;
        case "thanosMirror":
            player2present = true
            break;

        default:
            player2present = false
    }

    //Resulting
    if (player1present && player2present) {
        console.log(player1)
        sessionStorage.setItem("player1", player1);
        sessionStorage.setItem("player2", player2);
        window.location.href = "Fighting-Page.html"
    } else {
        Swal.fire({
            title: 'Please Select Players',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
}



