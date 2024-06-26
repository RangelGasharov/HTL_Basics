let dictionary = [
    "about", "above", "abuse", "actor", "acnes", "adays", "adios", "admit", "agree", "ahead", "album", "alien", "alike", "alone", "allow", "alpha", "angry", "ancle", "anime", "antic", "apple", "argue", "asset", "atoms", "awake", "awful",
    "basic", "badly", "baths", "beach", "bears", "beige", "below", "bench", "biome", "black", "blank", "blast", "bleed", "blush", "bombs", "boost", "bread", "break", "bring", "brown",
    "cache", "candy", "cards", "cargo", "carry", "catch", "chair", "chaos", "chase", "cheat", "chest", "chief", "chill", "china", "chunk", "claim", "class", "clean", "click", "clock", "clone", "coach", "coast", "codes", "cover", "crane", "crash", "crazy", "crime", "crowd", "curse", "cycle",
    "daily", "dance", "death", "debut", "delay", "delta", "depot", "depth", "diary", "digit", "disco", "dodge", "doing", "donut", "doubt", "dozen", "dream", "dress", "drift", "drill", "drink",
    "eagle", "earth", "ebook", "eight", "elder", "elite", "elope", "enemy", "enjoy", "equal", "equip", "error", "essay", "event", "exams", "exist",
    "faced", "fakes", "fault", "field", "fixes", "floor", "focus", "fresh", "fusel",
    "gamma", "ghost", "glare", "glass", "grass", "goals", "golem", "grade", "greek", "group", "guide",
    "hacks", "hands", "happy", "heart", "heath", "hokey", "hoper", "hooty", "horse", "hours", "house",
    "iches", "ideas", "image", "input", "issue",
    "japan", "jeans", "jelly", "jimmy", "jokes", "judge",
    "karma", "kelly", "kitty", "kills", "knife", "koala", "korea",
    "lasso", "laser", "latex", "laxed", "layer", "leafs", "leash", "lefts", "level", "libra", "light", "limit", "locks", "loses", "lucky", "lunch",
    "magic", "major", "march", "marry", "match", "metal", "minor", "money", "month", "motor", "mouse", "music", "myths",
    "night", "nodes", "noise", "notes", "north", "novel", "nurse",
    "oasis", "offer", "order", "other", "outro", "ovals", "owner", "oxide",
    "panda", "panel", "paper", "party", "pause", "peace", "peaks", "peans", "pearl", "penny", "phase", "phone", "piece", "pilot", "place", "plant", "pluto", "pound", "power", "price", "puppy",
    "quick", "quiet", "queen", "query", "quest", "quote",
    "races", "radio", "rails", "rains", "range", "ready", "reply", "rings", "river", "roads", "round", "route", "rugby", "ruins", "rumor",
    "scale", "score", "shake", "sheep", "shirt", "silly", "skill", "sleep", "smoke", "songs", "solve", "squad", "sound", "space", "speed", "spike", "sport", "stars", "style", "sugar",
    "taiga", "taxes", "teams", "tease", "theme", "thumb", "tires", "total", "tools", "touch", "tower", "trend", "truck", "truth",
    "ultra", "unbox", "uncle", "union", "unite", "unset", "usage", "using", "usual",
    "value", "venus", "video", "visit", "viral", "vital", "vlogs", "vodka", "voice",
    "waste", "watch", "water", "wheal", "wheat", "whale", "while", "white", "whole", "woman", "world", "wrote",
    "yacht", "young", "youth",
    "zebra", "zones"
];
let targetWords = [
    "above", "abuse", "actor", "apple", "basis", "beach", "below", "bread", "brown", "chair", "class", "cover", "cycle", "dance", "doubt", "dream", "drink",
    "earth", "enemy", "error", "event", "fault", "field", "floor", "focus", "glass", "group", "guide", "heart", "horse", "house", "image", "input", "issue",
    "japan", "judge", "kitty", "kills", "knife", "layer", "level", "light", "limit", "lunch", "major", "march", "match", "metal", "money", "month", "motor",
    "music", "night", "noise", "north", "novel", "nurse", "offer", "order", "other", "owner", "panel", "paper", "party", "peace", "phase", "phone", "piece",
    "pilot", "place", "pound", "power", "price", "queen", "radio", "range", "reply", "river", "round", "route", "rugby", "scale", "score", "sheep", "shirt",
    "skill", "sound", "space", "speed", "sport", "style", "sugar", "theme", "total", "touch", "tower", "trend", "truth", "uncle", "union", "value", "video",
    "visit", "voice", "waste", "watch", "water", "while", "whole", "woman", "world", "youth"
];

const WORD_LENGTH = 5
const FLIP_ANIMATION_DURATION = 500
const DANCE_ANIMATION_DURATION = 500
const keyboard = document.querySelector("[data-keyboard]")
const alertContainer = document.querySelector("[data-alert-container]")
const guessGrid = document.querySelector("[data-guess-grid]")
const offsetFromDate = new Date(2022, 0, 1)
const targetWord = targetWords[Math.floor(Math.random() * targetWords.length)]
console.log(targetWord)

startInteraction()

function startInteraction() {
    document.addEventListener("click", handleMouseClick)
    document.addEventListener("keydown", handleKeyPress)
}

function stopInteraction() {
    document.removeEventListener("click", handleMouseClick)
    document.removeEventListener("keydown", handleKeyPress)
}

function handleMouseClick(e) {
    if (e.target.matches("[data-key]")) {
        pressKey(e.target.dataset.key)
        return
    }

    if (e.target.matches("[data-enter]")) {
        submitGuess()
        return
    }

    if (e.target.matches("[data-delete]")) {
        deleteKey()
        return
    }
}

function handleKeyPress(e) {
    if (e.key === "Enter") {
        submitGuess()
        return
    }

    if (e.key === "Backspace" || e.key === "Delete") {
        deleteKey()
        return
    }

    if (e.key.match(/^[a-z]$/)) {
        pressKey(e.key)
        return
    }
}

function pressKey(key) {
    const activeTiles = getActiveTiles()
    if (activeTiles.length >= WORD_LENGTH) return
    const nextTile = guessGrid.querySelector(":not([data-letter])")
    nextTile.dataset.letter = key.toLowerCase()
    nextTile.textContent = key
    nextTile.dataset.state = "active"
}

function deleteKey() {
    const activeTiles = getActiveTiles()
    const lastTile = activeTiles[activeTiles.length - 1]
    if (lastTile == null) return
    lastTile.textContent = ""
    delete lastTile.dataset.state
    delete lastTile.dataset.letter
}

function submitGuess() {
    const activeTiles = [...getActiveTiles()]
    if (activeTiles.length !== WORD_LENGTH) {
        showAlert("Not enough letters")
        shakeTiles(activeTiles)
        return
    }

    const guess = activeTiles.reduce((word, tile) => {
        return word + tile.dataset.letter
    }, "")

    if (!dictionary.includes(guess)) {
        showAlert("Not in word list")
        shakeTiles(activeTiles)
        return
    }

    stopInteraction()
    activeTiles.forEach((...params) => flipTile(...params, guess))
}

function flipTile(tile, index, array, guess) {
    const letter = tile.dataset.letter
    const key = keyboard.querySelector(`[data-key="${letter}"i]`)
    setTimeout(() => {
        tile.classList.add("flip")
    }, (index * FLIP_ANIMATION_DURATION) / 2)

    tile.addEventListener(
        "transitionend",
        () => {
            tile.classList.remove("flip")
            if (targetWord[index] === letter) {
                tile.dataset.state = "correct"
                key.classList.add("correct")
            } else if (targetWord.includes(letter)) {
                tile.dataset.state = "wrong-location"
                key.classList.add("wrong-location")
            } else {
                tile.dataset.state = "wrong"
                key.classList.add("wrong")
            }

            if (index === array.length - 1) {
                tile.addEventListener(
                    "transitionend",
                    () => {
                        startInteraction()
                        checkWinLose(guess, array)
                    },
                    { once: true }
                )
            }
        },
        { once: true }
    )
}

function getActiveTiles() {
    return guessGrid.querySelectorAll('[data-state="active"]')
}

function showAlert(message, duration = 1000) {
    const alert = document.createElement("div")
    alert.textContent = message
    alert.classList.add("alert")
    alertContainer.prepend(alert)
    if (duration == null) return

    setTimeout(() => {
        alert.classList.add("hide")
        alert.addEventListener("transitionend", () => {
            alert.remove()
        })
    }, duration)
}

function shakeTiles(tiles) {
    tiles.forEach(tile => {
        tile.classList.add("shake")
        tile.addEventListener(
            "animationend",
            () => {
                tile.classList.remove("shake")
            },
            { once: true }
        )
    })
}

function checkWinLose(guess, tiles) {
    if (guess === targetWord) {
        showAlert("You Win", 5000)
        danceTiles(tiles)
        stopInteraction()
        return
    }

    const remainingTiles = guessGrid.querySelectorAll(":not([data-letter])")
    if (remainingTiles.length === 0) {
        showAlert(targetWord.toUpperCase(), null)
        stopInteraction()
    }
}

function danceTiles(tiles) {
    tiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add("dance")
            tile.addEventListener(
                "animationend",
                () => {
                    tile.classList.remove("dance")
                },
                { once: true }
            )
        }, (index * DANCE_ANIMATION_DURATION) / 5)
    })
}

//https://www.youtube.com/watch?v=Wak7iN4JZzU&t=1364s
//https://www.youtube.com/watch?v=1tVCwv_BX2M
//https://www.youtube.com/watch?v=Pb-8DzAObmg