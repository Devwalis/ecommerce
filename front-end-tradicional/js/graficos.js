 // Dados fixos por enquanto (depois você vai substituir pelo fetch da API)
 // Dados mockados
 const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 
  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

const mockData = months.map(() => ({
sales: Math.floor(Math.random() * 1000) + 100,
percentage: 0
}));

// Calcular totais e porcentagens
const totalSales = mockData.reduce((acc, curr) => acc + curr.sales, 0);
mockData.forEach(data => {
data.percentage = ((data.sales / totalSales) * 100).toFixed(1);
});

// Configurações do gráfico
const maxYValue = 1000;
const yAxisValues = [100, 200, 300, 500, 800, 1000];
const chartHeight = 400; // Altura do gráfico em pixels

// Criar eixos Y
const yAxis = document.querySelector('.y-axis');
yAxisValues.forEach(value => {
const position = ((maxYValue - value) / maxYValue) * 100;

// Linha de grade
const gridLine = document.createElement('div');
gridLine.className = 'grid-line';
gridLine.style.top = `${(value / maxYValue) * 100}%`;
document.querySelector('.chart-area').appendChild(gridLine);

// Label do eixo Y
const yLabel = document.createElement('div');
yLabel.className = 'y-label';
yLabel.textContent = value;
yLabel.style.top = `${position}%`;
yAxis.appendChild(yLabel);
});

// Criar colunas
const columnsContainer = document.querySelector('.columns-container');
mockData.forEach((data, index) => {
const column = document.createElement('div');
column.className = 'column';

// Altura da coluna
const columnHeight = (data.sales / maxYValue) * chartHeight;
column.style.height = `${columnHeight}px`;

// Label de porcentagem
const percentageLabel = document.createElement('div');
percentageLabel.className = 'percentage-label';
percentageLabel.textContent = `${data.percentage}%`;
column.appendChild(percentageLabel);

columnsContainer.appendChild(column);
});

// Criar eixos X
const xAxis = document.querySelector('.x-axis');
months.forEach(month => {
const label = document.createElement('div');
label.className = 'x-axis-label';
label.textContent = month;
xAxis.appendChild(label);
});