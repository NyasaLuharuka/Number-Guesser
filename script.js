num = document.getElementById("number")

title = document.getElementById("input")

error = document.getElementById("extra")

random_int = Math.floor(Math.random() * 1001)


document.addEventListener("keydown", keyDown)

var clicks = 0

function keyDown(key) {
    if (key.keyCode == 13) {
        clicks += 1
        start()
    };
}

function start() {
    if (num.value < random_int) {
        title.innerHTML = "higher"
        title.style.color = "red"
        num.value = undefined;
    } else if (num.value > random_int) {
        title.innerHTML = "lower"
        title.style.color = "blue"
        num.value = undefined;
    } else if (num.value = random_int) {
        title.innerHTML = "perfect!"
        title.style.color = "green"
        error.innerHTML = "The random number chosen was " + random_int + ". You found it in " + clicks + " times"
        error.style.color = "green"
    } else {
        error.innerHTML = "SOMETHING WENT WRONG! SHUTTING DOWN!"
        title.style.color = "red"
    }
}

function rules() {
    location.href = "https://Number-Guesser-Rules.nyasa.repl.co"
}

function restart() {
    location.reload();
}
