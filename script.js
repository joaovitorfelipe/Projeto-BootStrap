const botao = document.getElementById("falecomigo");

botao.addEventListener("click", () => {
    window.open("https://wa.me/5527999562749");
});

document.getElementById("tema").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const curiosidades = [
    "JavaScript foi criado em apenas 10 dias.",
    "O primeiro site da internet ainda está online.",
    "Python recebeu esse nome por causa do grupo Monty Python.",
    "Mais de 90% dos dados do mundo foram criados recentemente."
];

document.getElementById("gerar").addEventListener("click", () => {

    const indice = Math.floor(
        Math.random() * curiosidades.length
    );

    document.getElementById("curiosidade").textContent =
        curiosidades[indice];
});

document.querySelectorAll(".faq-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.nextElementSibling.classList.toggle("d-none");

    });

});

document.querySelectorAll(".filtro").forEach(btn => {

    btn.addEventListener("click", () => {

        const categoria = btn.dataset.categoria;

        document.querySelectorAll(".tecnologia").forEach(card => {

            if(
                categoria === "todos" ||
                card.classList.contains(categoria)
            ){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }

        });

    });

});

function animar(id, valor){

    let numero = 0;

    const intervalo = setInterval(() => {

        numero += Math.ceil(valor/50);

        if(numero >= valor){

            numero = valor;
            clearInterval(intervalo);

        }

        document.getElementById(id).textContent = numero;

    },30);

}

animar("devs", 28000000);
animar("vagas", 150000);
animar("ling", 700);
animar("empresas", 50000);