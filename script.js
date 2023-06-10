function myfunction(){
    
    var produto = document.querySelector("input#produto").value
    var quantidade = Number(document.querySelector("input#quantidade").value)
    var custo = Number(document.querySelector("input#custo").value)

    var td1 = document.querySelector('td#n1')
    var td2 = document.querySelector('td#n2')
    var td3 = document.querySelector('td#n3')
    var td4 = document.querySelector('td#n4')

    td1.innerHTML = "bola"
    td2.innerHTML = "arroz"
    td3.innerHTML = "frijao"
    td4.innerHTML = "uva"

    alert(produto)
    alert(quantidade)
    alert(custo)
}