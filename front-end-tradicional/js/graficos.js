google.charts.load('current', { packages: ['corechart']});
google.charts.setLoadCallback(fetchData);



JSC.Chart('graficoVendas',{
    yAxis: {scale: {range: [100, 1000]}},
xAxis: {label: { text: 'Meses'}},
series:[{
    nome: 'Vendas Mensais',
    points: []
}]
});