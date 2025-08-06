let num = document.getElementById('num')

num.addEventListener('input', Conversor)

let botao = document.getElementById('btn')
botao.addEventListener('click', Conversor)

let result = document.getElementById('resultado')

function Conversor(event) {
    let num = parseFloat(document.getElementById('num').value)

    if (isNaN(num)) {
        result.textContent = ''
    } else {
        if (num === 0) {
            result.textContent = 0
        } else {
            event.preventDefault()
        let resto;
        let binario = []
        if (typeof(num) === 'number') {
            while (num > 0) {
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
        }  
}