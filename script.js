est = []
num = []
x = 0

function myfunction(){
    var produto = document.querySelector("input#produto").value
    var quantidade = Number(document.querySelector("input#quantidade").value)
    var custo = Number(document.querySelector("input#custo").value)


    for( num in est){
        if(est[num] == produto){
            alert("Erro")
        }
    }

    num.push("0i")

    est.push(produto)
    est.push(quantidade)
    est.push(custo)


    //const jsonData = JSON.stringify(est)
    //console.log(jsonData)
    //const user = require('./user.json');
    //console.log(user)




    var n1 = document.querySelector("td#n1")
    var n2 = document.querySelector("td#n2")
    var n3 = document.querySelector("td#n3")
    var n4 = document.querySelector("td#n4")

    var c1 = document.querySelector("td#c1")
    var c2 = document.querySelector("td#c2")
    var c3 = document.querySelector("td#c3")
    var c4 = document.querySelector("td#c4")

    var q1 = document.querySelector("td#q1")
    var q2 = document.querySelector("td#q2")
    var q3 = document.querySelector("td#q3")
    var q4 = document.querySelector("td#q4")


    if((num.length) == 1){
        n1.innerHTML = produto
        q1.innerHTML = quantidade
        c1.innerHTML = custo
    }

    else if((num.length) == 2){
        n2.innerHTML = produto
        q2.innerHTML = quantidade
        c2.innerHTML = custo
    }
    else if((num.length) == 3){
        n3.innerHTML = produto
        q3.innerHTML = quantidade
        c3.innerHTML = custo
    }
    else if((num.length) == 4){
        n4.innerHTML = produto
        q4.innerHTML = quantidade
        c4.innerHTML = custo
    }else if((num.length <= 40)){
        var tbody = document.querySelector("tbody")
        var tr = tbody.insertRow()

        var td_nome = tr.insertCell()
        var td_quantidade = tr.insertCell()
        var td_custo = tr.insertCell()
        var td_markup = tr.insertCell()
        var td_frete = tr.insertCell()
        var td_impostos = tr.insertCell()
        var td_lucro = tr.insertCell()

        td_nome.innerHTML += produto
        td_quantidade.innerHTML += quantidade
        td_custo.innerHTML += custo

        if(num.length >= 12){
            var r = document.querySelector("main")
            r.style.paddingBottom = '560px'
        }
    }else{
        alert("[Erro tabela chegou ao maximo permitido]")
    }
}