est = []

function myfunction(){
    var produto = document.querySelector("input#produto").value
    var quantidade = Number(document.querySelector("input#quantidade").value)
    var custo = Number(document.querySelector("input#custo").value)

    est.push(quantidade)
    est.push(custo)

    const jsonData = JSON.stringify(est)
    console.log(jsonData)




























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


    if((est.length)-1 == 1){
        n1.innerHTML = produto
        q1.innerHTML = quantidade
        c1.innerHTML = custo
    }

    if((est.length)-1 == 2){
        n2.innerHTML = produto
        q2.innerHTML = quantidade
        c2.innerHTML = custo
    }
    if((est.lengt)-1 == 3){
        n3.innerHTML = produto
        q3.innerHTML = quantidade
        c3.innerHTML = custo
    }
    if((est.length)-1 == 4){
        n4.innerHTML = produto
        q4.innerHTML = quantidade
        c4.innerHTML = custo
    }
}