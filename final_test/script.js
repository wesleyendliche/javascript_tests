function adicionar() {
    let num = document.getElementById('num')
    let list = document.getElementById('numlist')
    if (num.value.length ==0) {
        window.alert('Por favor, digite um número')
    } else if (num.value < 1 || num.value > 100){
        res.innerHTML = 'O valor deve estar entre 1 e 100'
        let n = Number(num.value)
        let c = 1
    } else {
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        item.value = `list${num.value}`
        list.appendChild(item)
        c++
    }
}

