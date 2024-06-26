let heroLuckyNumber = Math.floor(Math.random()*5) + 1
let heroName = ""
let heroExp = Math.floor(Math.random()*11000)
let heroCategory = ""

switch(heroLuckyNumber){
    case 1:
        heroName = "Adalbert"
    break
    case 2:
        heroName = "Bernard"
    break
    case 3:
        heroName = "Cassius"
    break
    case 4:
        heroName = "Dandarion"
    break
    case 5:
        heroName = "Evander"
    break
}

if (heroExp < 1000) {
    heroCategory = "Ferro"
} else if (heroExp < 2000) {
    heroCategory = "Bronze"
} else if (heroExp < 5000) {
    heroCategory = "Prata"
} else if (heroExp < 7000) {
    heroCategory = "Ouro"
} else if (heroExp < 8000) {
    heroCategory = "Platina"
} else if (heroExp < 9000) {
    heroCategory = "Ascendente"
} else if (heroExp < 10001) {
    heroCategory = "Imortal"
} else {
    heroCategory = "Radiante"
}

console.log("O herói de nome " + heroName + " está no nível de " + heroCategory)
console.log("Total de experência: " + heroExp)