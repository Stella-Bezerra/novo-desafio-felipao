let nome= "stella"
let xp= 3005

if(xp < 1000){
    nivel = "ferro"
}else if(xp > 1000 && xp < 2000){
    nivel = "bronze"
}else if(xp > 2000 && xp < 5000){
    nivel = "prata"
}else if(xp > 5000 && xp < 7000){
    nivel = "ouro"
}else if(xp > 7000 && xp < 8000){
    nivel = "platina"
}else if(xp > 8000 && xp < 9000){
    nivel = "ascendente"
}else if(xp > 9000 && xp < 10000){
    nivel = "imortal"
}else if (xp >=10001){
    nivel = "prata"
}
console.log ("O heroi de "+ nome + " está no nível " + nivel)