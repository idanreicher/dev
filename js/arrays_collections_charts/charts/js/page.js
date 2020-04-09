//charts
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');
let yearlyLable = document.getElementById('yearlyTotal');

let monthlySales = [500,9000,3000];
let monthlyLables = ['Oct','Nov', 'Dec'];

let deptSales = [12, 19, 3];
let deptLables = ['Oct','Nov', 'Dec'];

let yearlYTotal = 0;
let addYearlYTotal = x => yearlYTotal += x;  

monthlySales.forEach(addYearlYTotal);
yearlyLable.innerHTML = '$' + yearlYTotal;

let octNums = [12004, 3040, 65564];
let novNums = [1205430, 335400, 345654];
let decNums = [12500, 30055, 65534];

let  findOver1000 = () =>{
    let first1000 = monthlySales.find(element => element > 1000); 
    let first1000Index = monthlySales.findIndex(element => element > 1000); 
    console.log(first1000);
    console.log(first1000Index);
};          

let  resetNum = () =>{
    monthlySales.fill(0);
    monthlySalesChart.update();
};     

// Bar
let monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: monthlyLables,
        datasets: [{
            label: '# of Sales',
            data: monthlySales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Pie
let deptSalesChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: deptLables,
        datasets: [{
            label: '# of Sales',
            data: deptSales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        
    }
})