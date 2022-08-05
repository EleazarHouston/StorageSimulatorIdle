var gameData = {
    credits: 1000,
    CPS: 0,
    HDDCost: 500,
    freeStorage: 0,
    totalStorage: 0,
    storagePerHDD: 64,
    upgradeHDDCost: 2000,
    allocatedSDMovies: 0,
    totalCreditsSpent: 0,
    totalCreditsEarned: 1000,
    SDMovieRate: 1,
    CPS_SDMovies: 0,
}

function update() {
    document.getElementById("currentCredits").innerHTML = "Credits: " + (gameData.credits) + " ¤"
    document.getElementById("currentStorage").innerHTML = "Free Storage: " + gameData.freeStorage + " GB"
    document.getElementById("totalStorage").innerHTML = "Total Storage: " + gameData.totalStorage + " GB"
    document.getElementById("CPS").innerHTML = "Credits/Second: " + gameData.CPS
    gameData.CPS_SDMovies = (gameData.allocatedSDMovies * gameData.SDMovieRate);
    gameData.CPS = gameData.CPS_SDMovies
    document.getElementById("buyStorageButton").style.background="light_gray"
}

function buyStorage() {
    if (gameData.credits >= gameData.HDDCost) {
        gameData.credits -= gameData.HDDCost
        gameData.totalCreditsSpent += gameData.HDDCost
        gameData.freeStorage += gameData.storagePerHDD
        gameData.totalStorage += gameData.storagePerHDD
        document.getElementById("currentCredits").innerHTML = "Credits: " + gameData.credits + " ¤"
        document.getElementById("currentStorage").innerHTML = "Free Storage: " + gameData.freeStorage + " GB"
        document.getElementById("totalStorage").innerHTML = "Total Storage: " + gameData.totalStorage + " GB"
    }
    else if (gameData.credits <= gameData.HDDCost) {
        document.getElementById("buyStorageButton").style.background="red"
        setTimeout(() => {(document.getElementById("buyStorageButton")).style.background=""},250);
    }
}

function upgradeHDD() {
    if (gameData.credits >= upgradeHDDCost) {
        gameData.credits -= gameData.upgradeHDDCost
        gameData.storagePerHDD *= 2
        gameData.upgradeHDDCost *= gameData.upgradeHDDCost
    }
}

function allocateSDMovie() {
    if (gameData.freeStorage >= 2) {
        gameData.freeStorage -= 2
        gameData.allocatedSDMovies += 1
        document.getElementById("currentStorage").innerHTML = "Free Storage: " + gameData.freeStorage + " GB"
        document.getElementById("currentSDMovies").innerHTML = gameData.allocatedSDMovies + " SD Movies"
    }
    else if (gameData.freeStorage <= 2) {
        document.getElementById("allocateSDMovie").style.background="red"
        setTimeout(() => {(document.getElementById("allocateSDMovie")).style.background=""},250);
    }
}

function gainCredits() {
    gameData.credits += gameData.CPS
}


var updateLoop = window.setInterval(function() {
    update()

}, 100)

var mainGameLoop = window.setInterval(function() {
    gainCredits()
}, 1000)