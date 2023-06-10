function myfunction(){
    var produto = document.querySelector("input#produto")
    var quantidade = Number(document.querySelector("input#quantidade").value)
    var custo = Number(document.querySelector("input#custo").value)

    var td1 = document.querySelector('td#n1')
    var td2 = document.querySelector('td#n1')
    var td3 = document.querySelector('td#n1')
    var td4 = document.querySelector('td#n1')

    td1.innerHTML += (quantidade)
    td2.innerHTML += (quantidade)
    td3.innerHTML += (quantidade)
    td4.innerHTML += (quantidade)
}