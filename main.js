var gameData = {
    credits: 100,
    CPS: 0,
    HDDCost: 50,
    freeStorage: 0,
    totalStorage: 0,
    storagePerHDD: 64,
    upgradeHDDCost: 200,
    allocatedSDMovies: 0,
    totalCreditsSpent: 0,
    totalCreditsEarned: 100,
}

function update() {
    document.getElementById("currentCredits").innerHTML = "Credits: " + gameData.credits + " ¤"
    document.getElementById("currentStorage").innerHTML = "Free Storage: " + gameData.freeStorage + " GB"
    document.getElementById("totalStorage").innerHTML = "Total Storage: " + gameData.totalStorage + " GB"
    //gameData.credits += 1
}

function buyStorage() {
    if (gameData.credits >= 50) {
        gameData.credits -= gameData.HDDCost
        gameData.totalCreditsSpent += gameData.HDDCost
        gameData.freeStorage += gameData.storagePerHDD
        gameData.totalStorage += gameData.storagePerHDD
        document.getElementById("currentCredits").innerHTML = "Credits: " + gameData.credits + " ¤"
        document.getElementById("currentStorage").innerHTML = "Free Storage: " + gameData.freeStorage + " GB"
        document.getElementById("totalStorage").innerHTML = "Total Storage: " + gameData.totalStorage + " GB"
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
    }
}

var mainGameLoop = window.setInterval(function() {
    update()
    gainCredits()
}, 1000)