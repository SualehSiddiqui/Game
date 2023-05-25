var player1 = sessionStorage.getItem('player1');
var player2 = sessionStorage.getItem('player2');



var sec = 60;
var min = 2;
var fightTime = document.getElementById("fight-time-div")
var interval = setInterval(function () {
    --sec
    if (sec == 0) {
        if (min == 0) {
            clearInterval(interval)
        }
        else {
            sec = 60
            --min
        }
    }
    var s = sec < 10 ? "0" + sec : sec;
    fightTime.innerHTML = "0" + min + " : " + s;
}, 1000)

var time = setTimeout(timeUp, 180000);

function timeUp() {
    Swal.fire({
        title: 'Time Out',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
}

var fightingPage = document.getElementById("fighting-bg");
var arr= ['house','temple','jungle','roof']
var background = arr[Math.floor(Math.random()*4)]
fightingPage.className = background;
// console.log(fightingPage.className)

function player1Image() {
        //For Player 1
        if (player1 == "captainAmerica") {
            var firstPlayer = document.getElementById("player-1-image");
            firstPlayer.src = "Images/Character-Images/Captain-America/captain-america-stance.gif"
            firstPlayer.className = "first-player-caption-img"
        } else if (player1 == "hulk") {
            var firstPlayer = document.getElementById("player-1-image");
            firstPlayer.src = "Images/Character-Images/Hulk/hulk-stance.gif"
            firstPlayer.className = "first-player-hulk-img"
        } else if (player1 == "ironMan") {
            var firstPlayer = document.getElementById("player-1-image");
            firstPlayer.src = "Images/Character-Images/Iron-Man/iron-man-stance.gif"
            firstPlayer.className = "first-player-ironMan-img"
        } else if (player1 == "spiderMan") {
            var firstPlayer = document.getElementById("player-1-image");
            firstPlayer.src = "Images/Character-Images/Spider-Man/spider-man-stance.gif"
            firstPlayer.className = "first-player-spiderMan-img"
        } else if (player1 == "wolverine") {
            var firstPlayer = document.getElementById("player-1-image");
            firstPlayer.src = "Images/Character-Images/Wolverine/wolverine-boneclaw-stance.gif"
            firstPlayer.className = "first-player-wolverine-img"
        } else if (player1 == "warMachine") {
            var firstPlayer = document.getElementById("player-1-image");
            firstPlayer.src = "Images/Character-Images/War-Machine/war-machine-stance.gif"
            firstPlayer.className = "first-player-warMachine-img"
        } else if (player1 == "venom") {
            var firstPlayer = document.getElementById("player-1-image");
            firstPlayer.src = "Images/Character-Images/Venom/venom-stance.gif"
            firstPlayer.className = "first-player-venom-img"
        } else if (player1 == "thanos") {
            var firstPlayer = document.getElementById("player-1-image");
            firstPlayer.src = "Images/Character-Images/Thanos/thanos-stance.gif"
            firstPlayer.className = "first-player-thanos-img"
        }

}

function player2Image() {
    if (player2 == "captainAmericaMirror") {
        var secondPlayer = document.getElementById("player-2-image");
        secondPlayer.src = "Images/Character-Images/Captain-America-Mirror/captain-america-stance.gif"
        secondPlayer.className = "second-player-captionMirror-img"
    } else if (player2 == "hulkMirror") {
        var secondPlayer = document.getElementById("player-2-image");
        secondPlayer.src = "Images/Character-Images/Hulk-Mirror/hulk-stance.gif"
        secondPlayer.className = "second-player-hulkMirror-img"
    } else if (player2 == "ironManMirror") {
        var secondPlayer = document.getElementById("player-2-image");
        secondPlayer.src = "Images/Character-Images/Iron-Man-Mirror/iron-man-stance.gif"
        secondPlayer.className = "second-player-ironManMirror-img"
    } else if (player2 == "spiderManMirror") {
        var secondPlayer = document.getElementById("player-2-image");
        secondPlayer.src = "Images/Character-Images/Spider-Man-Mirror/spider-man-stance.gif"
        secondPlayer.className = "second-player-spiderManMirror-img"
    } else if (player2 == "wolverineMirror") {
        var secondPlayer = document.getElementById("player-2-image");
        secondPlayer.src = "Images/Character-Images/Wolverine-Mirror/wolverine-boneclaw-stance.gif"
        secondPlayer.className = "second-player-wolverineMirror-img"
    } else if (player2 == "warMachineMirror") {
        var secondPlayer = document.getElementById("player-2-image");
        secondPlayer.src = "Images/Character-Images/War-Machine-Mirror/war-machine-stance.gif"
        secondPlayer.className = "second-player-warMachineMirror-img"
    } else if (player2 == "venomMirror") {
        var secondPlayer = document.getElementById("player-2-image");
        secondPlayer.src = "Images/Character-Images/Venom-Mirror/venom-stance.gif"
        secondPlayer.className = "second-player-venomMirror-img"
    } else if (player2 == "thanosMirror") {
        var secondPlayer = document.getElementById("player-2-image");
        secondPlayer.src = "Images/Character-Images/Thanos-Mirror/thanos-stance.gif"
        secondPlayer.className = "second-player-thanosMirror-img"
    }
}


player1Image()
player2Image()

window.addEventListener('keydown', playerMove)
window.addEventListener('keyup', playerStop)

var charLeftAdd = 80;
var charRightAdd = 80;
var firstPlayer = document.getElementById("player-1-image");
var secondPlayer = document.getElementById("player-2-image");
function playerMove() {
    player1Move()
    player2Move()
}


function player1Move() {
    console.log(event.code)
        if (player1 == "captainAmerica") {
            if (event.code == "KeyD") {
                charLeftAdd += 8;
                firstPlayer.style.left = charLeftAdd + "px";
            } else if (event.code == "KeyA") {
                charLeftAdd -= 8;
                firstPlayer.style.left = charLeftAdd + "px";
            } else if (event.code == "KeyW") {
                firstPlayer.src = "Images/Character-Images/Captain-America/captain-america-upper.gif";
            } else if (event.code == "Space") {
                firstPlayer.src = "Images/Character-Images/Captain-America/captainamerica-crouch.gif";
                firstPlayer.className += " first-player-crouch-img";
            } else if (event.code == "KeyS") {
                firstPlayer.src = "Images/Character-Images/Captain-America/captain-america-special-ability.gif";
                firstPlayer.className += " first-player-special-img";
            } else if (event.code == "KeyE") {
                firstPlayer.src = "Images/Character-Images/Captain-America/captainamerica-punch.gif";
                firstPlayer.className += " first-player-special-img";
            }
        }

        else if (player1 == "hulk") {
            if (event.code == "KeyD") {
                charLeftAdd += 8;
                firstPlayer.style.left = charLeftAdd + "px";
                firstPlayer.src = "Images/Character-Images/Hulk/hulk-forward-walk.gif";
            } else if (event.code == "KeyA") {
                charLeftAdd -= 8;
                firstPlayer.style.left = charLeftAdd + "px";
                firstPlayer.src = "Images/Character-Images/Hulk/hulk-bakwardward-walk.gif";
            } else if (event.code == "Space") {
                firstPlayer.src = "Images/Character-Images/Hulk/hulk-intocrouch.gif";
                firstPlayer.className += " first-player-crouch-img";
            } else if (event.code == "KeyS") {
                firstPlayer.src = "Images/Character-Images/Hulk/hulk-special.gif";
            } else if (event.code == "KeyE") {
                firstPlayer.src = "Images/Character-Images/Hulk/hulk-punch.gif";
                firstPlayer.className += " first-player-special-img";
            } else if (event.code == "KeyQ") {
                firstPlayer.src = "Images/Character-Images/Hulk/hulk-kick.gif";
            }
        }

        else if (player1 == "ironMan") {
            if (event.code == "KeyD") {
                charLeftAdd += 8;
                firstPlayer.style.left = charLeftAdd + "px";
                firstPlayer.src = "Images/Character-Images/Iron-Man/iron-man-forward-walk.gif";
            } else if (event.code == "KeyA") {
                charLeftAdd -= 8;
                firstPlayer.style.left = charLeftAdd + "px";
                firstPlayer.src = "Images/Character-Images/Iron-Man/iron-man-backward-walk.gif";
            } else if (event.code == "KeyW") {
                firstPlayer.src = "Images/Character-Images/Iron-Man/iron-man-fly.gif";
                firstPlayer.className += " first-player-special-img";
            } else if (event.code == "Space") {
                firstPlayer.src = "Images/Character-Images/Iron-Man/iron-crouch.gif";
                firstPlayer.className += " first-player-crouch-img";
            } else if (event.code == "KeyS") {
                firstPlayer.src = "Images/Character-Images/Iron-Man/ironman-shield.gif";
            } else if (event.code == "KeyE") {
                firstPlayer.src = "Images/Character-Images/Iron-Man/iron-gem.gif";
                firstPlayer.className += " first-player-special-img";
            }
        }

        else if (player1 == "spiderMan") {
            if (event.code == "KeyD") {
                charLeftAdd += 8;
                firstPlayer.style.left = charLeftAdd + "px";
                firstPlayer.src = "Images/Character-Images/Spider-Man/spider-man-forward-walk.gif";
            } else if (event.code == "KeyA") {
                charLeftAdd -= 8;
                firstPlayer.style.left = charLeftAdd + "px";
                firstPlayer.src = "Images/Character-Images/Spider-Man/spider-man-backward-walk.gif";
            } else if (event.code == "KeyW") {
                firstPlayer.src = "Images/Character-Images/Spider-Man/spidey-usegem.gif";
            } else if (event.code == "Space") {
                firstPlayer.src = "Images/Character-Images/Spider-Man/spidey-crouch.gif";
                firstPlayer.className += " first-player-spider-crouch-img";
            } else if (event.code == "KeyS") {
                firstPlayer.src = "Images/Character-Images/Spider-Man/spider-man-webball.gif";
            } else if (event.code == "KeyE") {
                firstPlayer.src = "Images/Character-Images/Spider-Man/spidey-block-down.gif";
            }
        }

        else if (player1 == "wolverine") {
            if (event.code == "KeyD") {
                charLeftAdd += 8;
                firstPlayer.style.left = charLeftAdd + "px";
                firstPlayer.src = "Images/Character-Images/Wolverine/wolvie-snes-forward-walk.gif";
            } else if (event.code == "KeyA") {
                charLeftAdd -= 8;
                firstPlayer.style.left = charLeftAdd + "px";
                firstPlayer.src = "Images/Character-Images/Wolverine/wolvie-snes-backward-walk.gif";
            } else if (event.code == "Space") {
                firstPlayer.src = "Images/Character-Images/Wolverine/wolvie-crouch.gif";
                firstPlayer.className += " first-player-crouch-img";
            } else if (event.code == "KeyS") {
                firstPlayer.src = "Images/Character-Images/Wolverine/wolvie-block.gif";
            } else if (event.code == "KeyQ") {
                firstPlayer.src = "Images/Character-Images/Wolverine/wolvie-drillclaw.gif";
                firstPlayer.className += " first-player-special-img";
            } else if (event.code == "KeyE") {
                firstPlayer.src = "Images/Character-Images/Wolverine/wolvie-standingattacks.gif";
                firstPlayer.className += " first-player-special-img";
            }
        }

        else if (player1 == "warMachine") {
            if (event.code == "KeyD") {
                charLeftAdd += 8;
                firstPlayer.style.left = charLeftAdd + "px";
                firstPlayer.src = "Images/Character-Images/War-Machine/war-machine-stance.gif";
            } else if (event.code == "KeyA") {
                charLeftAdd -= 8;
                firstPlayer.style.left = charLeftAdd + "px";
                firstPlayer.src = "Images/Character-Images/War-Machine/war-machine-stance.gif";
            } else if (event.code == "Space") {
                firstPlayer.src = "Images/Character-Images/War-Machine/warmachine-missle.gif";
                firstPlayer.className += " first-player-crouch-img";
            } else if (event.code == "KeyS") {
                firstPlayer.src = "Images/Character-Images/War-Machine/war-machine-block.gif";
            } else if (event.code == "KeyE") {
                firstPlayer.src = "Images/Character-Images/War-Machine/war-machine-ap.gif";
                firstPlayer.className += " first-player-special-img";
            } else if (event.code == "KeyQ") {
                firstPlayer.src = "Images/Character-Images/War-Machine/war-machine-cb.gif";
                firstPlayer.className += " first-player-special-img";
            }
        }

        else if (player1 == "venom") {
            if (event.code == "KeyD") {
                charLeftAdd += 8;
                firstPlayer.style.left = charLeftAdd + "px";
                firstPlayer.src = "Images/Character-Images/Venom/venom-forward-walk.gif";
            } else if (event.code == "KeyA") {
                charLeftAdd -= 8;
                firstPlayer.style.left = charLeftAdd + "px";
                firstPlayer.src = "Images/Character-Images/Venom/venom-backward-walk.gif";
            } else if (event.code == "Space") {
                firstPlayer.src = "Images/Character-Images/Venom/venom-crouch.gif";
            } else if (event.code == "KeyS") {
                firstPlayer.src = "Images/Character-Images/Venom/venom-air6.gif";
                firstPlayer.className += " first-player-Venom-S-img";

            } else if (event.code == "KeyE") {
                firstPlayer.src = "Images/Character-Images/Venom/venom-air-punch.gif";
                firstPlayer.className += " first-player-special-img";
            } else if (event.code == "KeyQ") {
                firstPlayer.src = "Images/Character-Images/Venom/venom-fp.gif";
                firstPlayer.className += " first-player-Venom-Q-img";
            } else if (event.code == "KeyW") {
                firstPlayer.src = "Images/Character-Images/Venom/venom-mp.gif";
                firstPlayer.className += " first-player-special-img";
            }
        }

        else if (player1 == "thanos") {
            if (event.code == "KeyD") {
                charLeftAdd += 8;
                firstPlayer.style.left = charLeftAdd + "px";
                firstPlayer.src = "Images/Character-Images/Thanos/thanos-forward-walk.gif";
            } else if (event.code == "KeyA") {
                charLeftAdd -= 8;
                firstPlayer.style.left = charLeftAdd + "px";
                firstPlayer.src = "Images/Character-Images/Thanos/thanos-backward-walk.gif";
            } else if (event.code == "Space") {
                firstPlayer.src = "Images/Character-Images/Thanos/than-wins.gif";
                firstPlayer.className += " first-player-special-img";
            } else if (event.code == "KeyS") {
                firstPlayer.src = "Images/Character-Images/Thanos/than-special.gif";

            } else if (event.code == "KeyQ") {
                firstPlayer.src = "Images/Character-Images/Thanos/thanos-rocks.gif";
                firstPlayer.className += " first-player-Venom-Q-img";
            }
        }
}

function player2Move() {
        if (player2 == "captainAmericaMirror") {
            if (event.code == "ArrowRight") {
                charRightAdd -= 8;
                secondPlayer.style.right = charRightAdd + "px";
            } else if (event.code == "ArrowLeft") {
                charRightAdd += 8;
                secondPlayer.style.right = charRightAdd + "px";
            } else if (event.code == "ArrowUp") {
                secondPlayer.src = "Images/Character-Images/Captain-America-Mirror/captain-america-upper.gif";
            } else if (event.code == "Numpad0") {
                secondPlayer.src = "Images/Character-Images/Captain-America-Mirror/captainamerica-crouch.gif";
                secondPlayer.className += " second-player-crouch-img";
            } else if (event.code == "ArrowDown") {
                secondPlayer.src = "Images/Character-Images/Captain-America-Mirror/captainamerica-special-ability.gif";
                secondPlayer.className += " second-player-special-img";
            } else if (event.code == "Numpad4") {
                secondPlayer.src = "Images/Character-Images/Captain-America-Mirror/captainamerica-punch.gif";
            }
        }

        else if (player2 == "hulkMirror") {
            if (event.code == "ArrowRight") {
                charRightAdd -= 8;
                secondPlayer.style.right = charRightAdd + "px";
                secondPlayer.src = "Images/Character-Images/Hulk-Mirror/hulk-forward-walk.gif";
            } else if (event.code == "ArrowLeft") {
                charRightAdd += 8;
                secondPlayer.style.right = charRightAdd + "px";
                secondPlayer.src = "Images/Character-Images/Hulk-Mirror/hulk-bakwardward-walk.gif";
            } else if (event.code == "Numpad0") {
                secondPlayer.src = "Images/Character-Images/Hulk-Mirror/hulk-intocrouch.gif";
                secondPlayer.className += " second-player-crouch-img";
                console.log(secondPlayer.className)
            } else if (event.code == "ArrowDown") {
                secondPlayer.src = "Images/Character-Images/Hulk-Mirror/hulk-special.gif";
            } else if (event.code == "Numpad4") {
                secondPlayer.src = "Images/Character-Images/Hulk-Mirror/hulk-punch.gif";
                secondPlayer.className += " second-player-special-img";
            } else if (event.code == "Numpad6") {
                secondPlayer.src = "Images/Character-Images/Hulk-Mirror/hulk-kick.gif";
            }
        }

        else if (player2 == "ironManMirror") {
            if (event.code == "ArrowRight") {
                charRightAdd -= 8;
                secondPlayer.style.right = charRightAdd + "px";
                secondPlayer.src = "Images/Character-Images/Iron-Man-Mirror/iron-man-backward-walk.gif";
            } else if (event.code == "ArrowLeft") {
                charRightAdd += 8;
                secondPlayer.style.right = charRightAdd + "px";
                secondPlayer.src = "Images/Character-Images/Iron-Man-Mirror/iron-man-forward-walk.gif";
            } else if (event.code == "ArrowUp") {
                secondPlayer.src = "Images/Character-Images/Iron-Man-Mirror/iron-man-fly.gif";
                secondPlayer.className += " second-player-special-img";
            } else if (event.code == "Numpad0") {
                secondPlayer.src = "Images/Character-Images/Iron-Man-Mirror/iron-crouch.gif";
                secondPlayer.className += " second-player-crouch-img";
            } else if (event.code == "ArrowDown") {
                secondPlayer.src = "Images/Character-Images/Iron-Man-Mirror/ironman-shield.gif";
            } else if (event.code == "Numpad4") {
                secondPlayer.src = "Images/Character-Images/Iron-Man-Mirror/iron-gem.gif";
                secondPlayer.className += " second-player-special-img";
            }

        }

        else if (player2 == "spiderManMirror") {
            if (event.code == "ArrowRight") {
                charRightAdd -= 8;
                secondPlayer.style.right = charRightAdd + "px";
                secondPlayer.src = "Images/Character-Images/Spider-Man-Mirror/spider-man-backward-walk.gif";
            } else if (event.code == "ArrowLeft") {
                charRightAdd += 8;
                secondPlayer.style.right = charRightAdd + "px";
                secondPlayer.src = "Images/Character-Images/Spider-Man-Mirror/spider-man-forward-walk.gif";
            } else if (event.code == "ArrowUp") {
                secondPlayer.src = "Images/Character-Images/Spider-Man-Mirror/spidey-usegem.gif";
            } else if (event.code == "Numpad0") {
                secondPlayer.src = "Images/Character-Images/Spider-Man-Mirror/spidey-crouch.gif";
                secondPlayer.className += " second-player-spider-crouch-img";
            } else if (event.code == "ArrowDown") {
                secondPlayer.src = "Images/Character-Images/Spider-Man-Mirror/spider-man-special-ability.gif";
            } else if (event.code == "Numpad4") {
                secondPlayer.src = "Images/Character-Images/Spider-Man-Mirror/spidey-block-down.gif";
                // secondPlayer.className += " second-player-spider-crouch-img";
            }
        }

        else if (player2 == "wolverineMirror") {
            if (event.code == "ArrowRight") {
                charRightAdd -= 8;
                secondPlayer.style.right = charRightAdd + "px";
                secondPlayer.src = "Images/Character-Images/Wolverine-Mirror/wolvie-snes-backward-walk.gif";
            } else if (event.code == "ArrowLeft") {
                charRightAdd += 8;
                secondPlayer.style.right = charRightAdd + "px";
                secondPlayer.src = "Images/Character-Images/Wolverine-Mirror/wolvie-snes-forward-walk.gif";
            } else if (event.code == "Numpad0") {
                secondPlayer.src = "Images/Character-Images/Wolverine-Mirror/wolvie-crouch.gif";
                secondPlayer.className += " second-player-crouch-img";
            } else if (event.code == "ArrowDown") {
                secondPlayer.src = "Images/Character-Images/Wolverine-Mirror/wolvie-block.gif";
            } else if (event.code == "Numpad4") {
                secondPlayer.src = "Images/Character-Images/Wolverine-Mirror/wolvie-standingattacks.gif";
                secondPlayer.className += " second-player-special-img"
            } else if (event.code == "Numpad6") {
                secondPlayer.src = "Images/Character-Images/Wolverine-Mirror/wolvie-drillclaw.gif";
                secondPlayer.className += " second-player-special-img"
            }
        }

        else if (player2 == "warMachineMirror") {
            if (event.code == "ArrowRight") {
                charRightAdd -= 8;
                secondPlayer.style.right = charRightAdd + "px";
                secondPlayer.src = "Images/Character-Images/War-Machine-Mirror/war-machine-stance.gif";
            } else if (event.code == "ArrowLeft") {
                charRightAdd += 8;
                secondPlayer.style.right = charRightAdd + "px";
                secondPlayer.src = "Images/Character-Images/War-Machine-Mirror/war-machine-stance.gif";
            } else if (event.code == "Numpad0") {
                secondPlayer.src = "Images/Character-Images/War-Machine-Mirror/warmachine-missle.gif";
                secondPlayer.className += " second-player-crouch-img";
            } else if (event.code == "ArrowDown") {
                secondPlayer.src = "Images/Character-Images/War-Machine-Mirror/war-machine-block.gif";
            } else if (event.code == "Numpad4") {
                secondPlayer.src = "Images/Character-Images/War-Machine-Mirror/war-machine-ap.gif";
                secondPlayer.className += " second-player-special-img"
            } else if (event.code == "Numpad6") {
                secondPlayer.src = "Images/Character-Images/War-Machine-Mirror/war-machine-cb.gif";
                secondPlayer.className += " first-player-special-img";
            }
        }

        else if (player2 == "venomMirror") {
            if (event.code == "ArrowRight") {
                charRightAdd -= 8;
                secondPlayer.style.right = charRightAdd + "px";
                secondPlayer.src = "Images/Character-Images/Venom-Mirror/venom-backward-walk.gif";
            } else if (event.code == "ArrowLeft") {
                charRightAdd += 8;
                secondPlayer.style.right = charRightAdd + "px";
                secondPlayer.src = "Images/Character-Images/Venom-Mirror/venom-forward-walk.gif";
            } else if (event.code == "Numpad0") {
                secondPlayer.src = "Images/Character-Images/Venom-Mirror/venom-crouch.gif";
            } else if (event.code == "ArrowDown") {
                secondPlayer.src = "Images/Character-Images/Venom-Mirror/venom-air6.gif";
                secondPlayer.className += " second-player-Venom-ArrowDown-img";
            } else if (event.code == "Numpad4") {
                secondPlayer.src = "Images/Character-Images/Venom-Mirror/venom-air-punch.gif";
                secondPlayer.className += " second-player-special-img"
            } else if (event.code == "Numpad6") {
                secondPlayer.src = "Images/Character-Images/Venom-Mirror/venom-fp.gif";
                secondPlayer.className += " second-player-Venom-Numpad6-img";
            } else if (event.code == "ArrowUp") {
                secondPlayer.src = "Images/Character-Images/Venom-Mirror/venom-mp.gif";
                secondPlayer.className += " first-player-special-img";
            }
        }

        else if (player2 == "thanosMirror") {
            if (event.code == "ArrowRight") {
                charRightAdd -= 8;
                secondPlayer.style.right = charRightAdd + "px";
                secondPlayer.src = "Images/Character-Images/Thanos-Mirror/thanos-backward-walk.gif";
            } else if (event.code == "ArrowLeft") {
                charRightAdd += 8;
                secondPlayer.style.right = charRightAdd + "px";
                secondPlayer.src = "Images/Character-Images/Thanos-Mirror/thanos-forward-walk.gif";
            } else if (event.code == "Numpad0") {
                secondPlayer.src = "Images/Character-Images/Thanos-Mirror/than-wins.gif";
                secondPlayer.className += " second-player-special-img";
            } else if (event.code == "ArrowDown") {
                secondPlayer.src = "Images/Character-Images/Thanos-Mirror/than-special.gif";
            } else if (event.code == "Numpad6") {
                secondPlayer.src = "Images/Character-Images/Thanos-Mirror/thanos-rocks.gif";
                secondPlayer.className += " second-player-Venom-Numpad6-img";
            }
        }
}

function playerStop() {
    playerStop1()
    playerStop2()
}

function playerStop1() {
    // console.log(event.code)
        if (player1 == "captainAmerica") {
            if (event.code == "KeyW" || event.code == "KeyD" || event.code == "KeyA" || event.code == "KeyS" || event.code == "Space" || event.code == "KeyQ" || event.code == "KeyE") {
                firstPlayer.src = "Images/Character-Images/Captain-America/captain-america-stance.gif";
                firstPlayer.className = "first-player-caption-img";
            }
        }
        else if (player1 == "hulk") {
            if (event.code == "KeyW" || event.code == "KeyD" || event.code == "KeyA" || event.code == "KeyS" || event.code == "Space" || event.code == "KeyQ" || event.code == "KeyE") {
                firstPlayer.src = "Images/Character-Images/Hulk/hulk-stance.gif";
                firstPlayer.className = "first-player-hulk-img";
            }
        }
        else if (player1 == "ironMan") {
            if (event.code == "KeyW" || event.code == "KeyD" || event.code == "KeyA" || event.code == "KeyS" || event.code == "Space" || event.code == "KeyQ" || event.code == "KeyE") {
                firstPlayer.src = "Images/Character-Images/Iron-Man/iron-man-stance.gif";
                firstPlayer.className = "first-player-ironMan-img";
            }
        }
        else if (player1 == "spiderMan") {
            if (event.code == "KeyW" || event.code == "KeyD" || event.code == "KeyA" || event.code == "KeyS" || event.code == "Space" || event.code == "KeyQ" || event.code == "KeyE") {
                firstPlayer.src = "Images/Character-Images/Spider-Man/spider-man-stance.gif";
                firstPlayer.className = "first-player-spiderMan-img";
            }
        }
        else if (player1 == "wolverine") {
            if (event.code == "KeyW" || event.code == "KeyD" || event.code == "KeyA" || event.code == "KeyS" || event.code == "Space" || event.code == "KeyQ" || event.code == "KeyE") {
                firstPlayer.src = "Images/Character-Images/Wolverine/wolverine-boneclaw-stance.gif";
                firstPlayer.className = "first-player-wolverine-img";
            }
        }
        else if (player1 == "warMachine") {
            if (event.code == "KeyW" || event.code == "KeyD" || event.code == "KeyA" || event.code == "KeyS" || event.code == "Space" || event.code == "KeyQ" || event.code == "KeyE") {
                firstPlayer.src = "Images/Character-Images/War-Machine/war-machine-stance.gif";
                firstPlayer.className = "first-player-wolverine-img";
            }
        }
        else if (player1 == "venom") {
            if (event.code == "KeyW" || event.code == "KeyD" || event.code == "KeyA" || event.code == "KeyS" || event.code == "Space" || event.code == "KeyQ" || event.code == "KeyE") {
                firstPlayer.src = "Images/Character-Images/Venom/venom-stance.gif";
                firstPlayer.className = "first-player-wolverine-img";
            }
        }
        else if (player1 == "thanos") {
            if (event.code == "KeyW" || event.code == "KeyD" || event.code == "KeyA" || event.code == "KeyS" || event.code == "Space" || event.code == "KeyQ" || event.code == "KeyE") {
                firstPlayer.src = "Images/Character-Images/Thanos/thanos-stance.gif";
                firstPlayer.className = "first-player-wolverine-img";
            }
        }

}

function playerStop2() {
        if (player2 == "captainAmericaMirror") {
            if (event.code == "ArrowUp" || event.code == "ArrowDown" || event.code == "ArrowLeft" || event.code == "ArrowRight" || event.code == "Numpad0" || event.code == "Numpad4" || event.code == "Numpad6") {
                secondPlayer.src = "Images/Character-Images/Captain-America-Mirror/captain-america-stance.gif";
                secondPlayer.className = "second-player-captionMirror-img";
            }
        }
        else if (player2 == "hulkMirror") {
            if (event.code == "ArrowUp" || event.code == "ArrowDown" || event.code == "ArrowLeft" || event.code == "ArrowRight" || event.code == "Numpad0" || event.code == "Numpad4" || event.code == "Numpad6") {
                secondPlayer.src = "Images/Character-Images/Hulk-Mirror/hulk-stance.gif";
                secondPlayer.className = "second-player-hulkMirror-img";
            }
        }
        else if (player2 == "ironManMirror") {
            if (event.code == "ArrowUp" || event.code == "ArrowDown" || event.code == "ArrowLeft" || event.code == "ArrowRight" || event.code == "Numpad0" || event.code == "Numpad4" || event.code == "Numpad6") {
                secondPlayer.src = "Images/Character-Images/Iron-Man-Mirror/iron-man-stance.gif";
                secondPlayer.className = "second-player-ironManMirror-img";
            }
        }
        else if (player2 == "spiderManMirror") {
            if (event.code == "ArrowUp" || event.code == "ArrowDown" || event.code == "ArrowLeft" || event.code == "ArrowRight" || event.code == "Numpad0" || event.code == "Numpad4" || event.code == "Numpad6") {
                secondPlayer.src = "Images/Character-Images/Spider-Man-Mirror/spider-man-stance.gif";
                secondPlayer.className = "second-player-spiderManMirror-img";
            }
        }
        else if (player2 == "wolverineMirror") {
            if (event.code == "ArrowUp" || event.code == "ArrowDown" || event.code == "ArrowLeft" || event.code == "ArrowRight" || event.code == "Numpad0" || event.code == "Numpad4" || event.code == "Numpad6") {
                secondPlayer.src = "Images/Character-Images/Wolverine-Mirror/wolverine-boneclaw-stance.gif";
                secondPlayer.className = "second-player-wolverineMirror-img";
            }
        }
        else if (player2 == "warMachineMirror") {
            if (event.code == "ArrowUp" || event.code == "ArrowDown" || event.code == "ArrowLeft" || event.code == "ArrowRight" || event.code == "Numpad0" || event.code == "Numpad4" || event.code == "Numpad6") {
                secondPlayer.src = "Images/Character-Images/War-Machine-Mirror/war-machine-stance.gif";
                secondPlayer.className = "second-player-wolverineMirror-img";
            }
        }
        else if (player2 == "venomMirror") {
            if (event.code == "ArrowUp" || event.code == "ArrowDown" || event.code == "ArrowLeft" || event.code == "ArrowRight" || event.code == "Numpad0" || event.code == "Numpad4" || event.code == "Numpad6") {
                secondPlayer.src = "Images/Character-Images/Venom-Mirror/venom-stance.gif";
                secondPlayer.className = "second-player-wolverineMirror-img";
            }
        }
        else if (player2 == "thanosMirror") {
            if (event.code == "ArrowUp" || event.code == "ArrowDown" || event.code == "ArrowLeft" || event.code == "ArrowRight" || event.code == "Numpad0" || event.code == "Numpad4" || event.code == "Numpad6") {
                secondPlayer.src = "Images/Character-Images/Thanos-Mirror/thanos-stance.gif";
                secondPlayer.className = "second-player-wolverineMirror-img";
            }
        }

}

function controlsPlayer1(){
    // if()

}