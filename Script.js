let NomeDaPessoa = document.getElementById("nome");
let resposta = document.getElementById("resposta")

function Enviar()
{
    resposta.innerHTML = " Olá, " +
     NomeDaPessoa.value + " tudo bem?"
     nome.value + "nome"
}



let metros = document.getElementById("metros")
let calcular = document.getElementById("lucas")

c = 100

function lucas()

{
    calculo.innerHTML = (parseInt(metros.value)/100);
}




let antes = document.getElementById("antes")
let numero = document.getElementById("numero")
let depois = document.getElementById("depois")

    function calcule()
{
   antes.innerHTML = "Antes é " + (parseInt(numero.value) -1)
   depois.innerHTML = "Depois é " + (parseInt(numero.value) +1)
}





let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")
let menor = document.getElementById("m")

function comparar()
{
    if(n1.value > n2.value)
        {
            menor.innerHTML = "O valor maior é" + n1.value
        }
        else
        {
            n1.innerHTML = "O menor valor é "  + n2.value
        }   
}




b = 1
while(b <= 100)
    {
        console.log(b)
        b = b +1;
    }


    c = 0
while(c <= 50)
    {
        console.log(c)
        c = c +5;
    }


    d = 100
    while(d >= 0)
        {
            console.log(d)
            d = d -10;
        }
    

    





           