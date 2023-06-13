p = []
c = []
q = []
Markup = 1.5

function myfunction(){
    let produto = (document.querySelector("input#produto").value)
    let quantidade = Number(document.querySelector("input#quantidade").value)
    let custo = Number(document.querySelector("input#custo").value)
    focus(produto)

    
    for(contador in p){
        if (p[contador] == produto){
            console.log(`${produto} já adicionado no Etoque`)
        } 
    }


    p.push(produto)
    q.push(quantidade)
    c.push(custo)
    
    let p_venda = custo * Markup
    let lucro = (p_venda - custo) * quantidade
    var impostos = lucro * 0.15
    var impostos = Math.floor(impostos)

    

    if(p.length == 1){
        let n1 = document.querySelector("td#n1")
        let q1 = document.querySelector("td#q1")
        let m1 = document.querySelector("td#m1")
        let i1 = document.querySelector("td#i1")
        let l1 = document.querySelector("td#l1")

        n1.innerHTML = produto
        q1.innerHTML = quantidade
        c1.innerHTML = custo
        m1.innerHTML = Markup
        i1.innerHTML = impostos
        l1.innerHTML = lucro
    }
    if(p.length == 2){
        let n2 = document.querySelector("td#n2")
        let q2 = document.querySelector("td#q2")
        let c2 = document.querySelector("td#c2")
        let m2 = document.querySelector("td#m2")
        let i2 = document.querySelector("td#i2")
        let l2 = document.querySelector("td#l2")

        n2.innerHTML = produto
        q2.innerHTML = quantidade
        c2.innerHTML = custo
        m2.innerHTML = Markup
        i2.innerHTML = impostos
        l2.innerHTML = lucro
    }
    if(p.length == 3){
        let n3 = document.querySelector("td#n3")
        let q3 = document.querySelector("td#q3")
        let c3 = document.querySelector("td#c3")
        let m3 = document.querySelector("td#m3")
        let i3 = document.querySelector("td#i3")
        let l3 = document.querySelector("td#l3")

        n3.innerHTML = produto
        q3.innerHTML = quantidade
        c3.innerHTML = custo
        m3.innerHTML = Markup
        i3.innerHTML = impostos
        l3.innerHTML = lucro
    }
    if(p.length == 4){
        let n4 = document.querySelector("td#n4")
        let q4 = document.querySelector("td#q4")
        let c4 = document.querySelector("td#c4")
        let m4 = document.querySelector("td#m4")
        let i4 = document.querySelector("td#i4")
        let l4 = document.querySelector("td#l4")

        n4.innerHTML = produto
        q4.innerHTML = quantidade
        c4.innerHTML = custo
        m4.innerHTML = Markup
        i4.innerHTML = impostos
        l4.innerHTML = lucro
    }
    if(p.length > 4 && p.length < 58){
        var tbody = document.querySelector("tbody")
        var tr = tbody.insertRow()

            var td_nome = tr.insertCell()
            var td_quantidade = tr.insertCell()
            var td_custo = tr.insertCell()
            var td_markup = tr.insertCell()
            var td_impostos = tr.insertCell()
            var td_lucro = tr.insertCell()

            td_nome.innerHTML += produto
            td_quantidade.innerHTML += quantidade
            td_custo.innerHTML += custo
            td_markup.innerHTML += Markup
            td_impostos.innerHTML += impostos
            td_lucro.innerHTML += lucro
        }
        if(p.length == 11){
            var main = document.querySelector("main")

            main.style.paddingBottom = '100%'

        }
        if(p.length > 57){
            alert("[ERRO] limite maximo permitido")
        }
}
