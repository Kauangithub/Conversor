// console.log("Conversão iniciada") // Descomente para depuração

let botao = document.getElementById('btn')
botao.addEventListener('click', Conversor)

let result = document.getElementById('resultado')

function Conversor(event) {
    event.preventDefault()
    let num = parseFloat(document.getElementById('num').value)
    let resto;
    let binario = []
    if (num != '') {
        while (num != 0) {
            resto = Math.trunc(num % 2).toString();
            console.log(resto);
            num = Math.trunc(num / 2);
            binario.push(resto)
            
        }
        if (resto !== undefined) {
            result.textContent = resto;
        } 
        console.log(binario)
        let binario2 = binario.reverse().join("")
        result.textContent =  binario2
        console.log(binario2)
        console.log(typeof(binario))
        

    } else {
        alert('insira números válidos')
    }   
}