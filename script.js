est = []

num = []


function myfunction(){
    var produto = document.querySelector("input#produto").value
    var quantidade = Number(document.querySelector("input#quantidade").value)
    var custo = Number(document.querySelector("input#custo").value)

    est.push(quantidade)
    est.push(custo)

    //const jsonData = JSON.stringify(est)
    //console.log(jsonData)



    const user = require('./user.json');
    
    console.log(user)






















num.push("0i")


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
    }else{


        var tbody = document.querySelector("tbody")
        var tr = document.createElement("tr")
        var t1 = document.createElement("td")
        var t2 = document.createElement("td")
        var t3 = document.createElement("td")
        var t5 = document.createElement("td")
        var t6 = document.createElement("td")
        var t7 = document.createElement("td")

        tbody.appendChild(tr)
        tbody.appendChild(t1).innerHTML += produto
        tbody.appendChild(t2).innerHTML += quantidade
        tbody.appendChild(t3).innerHTML += custo
        tbody.appendChild(t4).innerHTML += "o"
        tbody.appendChild(t5).innerHTML += "o"
        tbody.appendChild(t6).innerHTML += "o"
        tbody.appendChild(t7).innerHTML += "o"
    }
}