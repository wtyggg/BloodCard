let Atk = document.getElementById("AttackPower-EL")
let Atknumber = 0

let HP = document.getElementById("Health-EL")
let HPnumber = 0

function Atkaddone() {
    Atknumber += 1
    Atk.textContent = Atknumber
}
function Atkaddfive() {
    Atknumber += 5
    Atk.textContent = Atknumber
}
function Atkminusone() {
    Atknumber -= 1
    Atk.textContent = Atknumber
}
function HPaddone() {
    HPnumber += 1
    HP.textContent = HPnumber
}
function HPaddfive() {
    HPnumber += 5
    HP.textContent = HPnumber
}
function HPminusone() {
    HPnumber -= 1
    HP.textContent = HPnumber
}
