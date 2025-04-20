 // Dados fixos por enquanto (depois você vai substituir pelo fetch da API)
 const dados = [
    { mes: "Jan", valor: 100, cor: "#f28c8c", percentual: "1%" },
    { mes: "Fev", valor: 150, cor: "#f8b84e", percentual: "2%" },
    { mes: "Mar", valor: 200, cor: "#f2da4a", percentual: "3%" },
    { mes: "Abr", valor: 600, cor: "#a5d68b", percentual: "12%" },
    { mes: "Mai", valor: 1050, cor: "#6cb5f2", percentual: "17%" },
    { mes: "Jun", valor: 450, cor: "#83b0c9", percentual: "10%" },
    { mes: "Jul", valor: 200, cor: "#c5a4f5", percentual: "5%" },
    { mes: "Ago", valor: 450, cor: "#a27fe9", percentual: "10%" },
    { mes: "Set", valor: 450, cor: "#a27fe9", percentual: "10%" },
    { mes: "Out", valor: 500, cor: "#71c7ec", percentual: "15%" },
    { mes: "Nov", valor: 450, cor: "#9fd9f6", percentual: "10%" },
    { mes: "Dez", valor: 450, cor: "#9fd9f6", percentual: "10%" },
  ];

  const max = Math.max(...dados.map(d => d.valor));
  const grafico = document.getElementById("graficoVendas");

  dados.forEach(d => {
    const barra = document.createElement("div");
    barra.className = "barra";

    const percentual = document.createElement("div");
    percentual.className = "porcentagem";
    percentual.textContent = d.percentual;

    const valor = document.createElement("div");
    valor.className = "valor";
    valor.style.height = `${(d.valor / max) * 100}%`;
    valor.style.backgroundColor = d.cor;

    const mes = document.createElement("div");
    mes.className = "mes";
    mes.textContent = d.mes;

    barra.appendChild(percentual);
    barra.appendChild(valor);
    barra.appendChild(mes);

    grafico.appendChild(barra);
  });