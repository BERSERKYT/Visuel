document.addEventListener('DOMContentLoaded', function () {
    // Chart for bg1 (Pending and Completed Invoices)
    var options1 = {
        series: [{
            name: 'Pending Invoice',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Invoice',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }],
        chart: {
            type: 'bar',
            height: 350,
            fontFamily: 'figtree', // Change this to your desired font family
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false,
            style: {
                fontSize: '5px' // Change this to your desired font size
            }
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Marketing & sales', 'IT', 'Finance', 'Research & development', 'Add Text', 'Add Text', 'Add Text', 'Add Text', 'Add Text'],
            labels: {
                style: {
                    fontSize: '10px' // Change this to your desired font size
                }
            }
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands";
                }
            }
        }
    };

    // Render chart for bg1
    var chart1 = new ApexCharts(document.querySelector(".bk1"), options1);
    chart1.render();

    // Chart for bg2 (Donut Chart)
    var options2 = {
        series: [44, 55, 41, 17],
        chart: {
            width: 380,
            type: 'donut',
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
        },
        legend: {
            formatter: function (val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex]
            }
        },
        title: {
            text: 'Outstanding Invoices by user status'
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    // Render chart for bg2
    var chart2 = new ApexCharts(document.querySelector(".bg2"), options2);
    chart2.render();

    // New ApexCharts code for bg3 (Stock Analysis)
    var series = {
        monthDataSeries1: {
            dates: [
                "Month1",
                "Month2",
                "Month3",
                "Month4",
                "Month5",
                "Month6",
                "Month7",
                "Month8",
                "Month9",
                "Month10 ",
            ],
            prices: [500, 560, 610, 590, 600,500, 560, 610, 590, 600],
            xaxis: {
                type: 'text',
                labels: {
                    style: {
                        fontSize: '8px' // Change this to your desired font size
                    }
                }
            },
        }
    };

    var options3 = {
        series: [{
            name: "STOCK ABC",
            data: series.monthDataSeries1.prices
        }],
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: '',
            align: 'left'
        },
        subtitle: {
            text: '',
            align: 'left'
        },
        labels: series.monthDataSeries1.dates,
        xaxis: {
            type: 'text',
            labels: {
                style: {
                    fontSize: '8px' // Change this to your desired font size
                }
            }
        },
        yaxis: {
            opposite: true
        },
        legend: {
            horizontalAlign: 'left'
        }
    };

    // Render chart for bg3
    var chart3 = new ApexCharts(document.querySelector(".bg3"), options3);
    chart3.render();

    // Chart for bg4 (Donut Chart)
    var options4 = {
        series: [44, 55, 41, 17, 15],
        chart: {
            width: 380,
            type: 'donut',
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
        },
        legend: {
            formatter: function (val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex]
            }
        },
        title: {
            text: 'Gradient Donut with custom Start-angle'
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    // Render chart for bg4
    var chart4 = new ApexCharts(document.querySelector(".bg4"), options4);
    chart4.render();

    // Chart for bg5 (Stacked Bar Chart)
    var options5 = {
        series: [{
            name: 'PRODUCT A',
            data: [30, 0, 0, 0]
        }, {
            name: 'PRODUCT B',
            data: [ 0, 60, 0, 0]
        }, {
            name: 'PRODUCT C',
            data: [ 0, 0, 89, 0]
        }, {
            name: 'PRODUCT D',
            data: [ 0, 0, 0, 77]
        }],
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 0,
                dataLabels: {
                    total: {
                        enabled: true,
                        style: {
                            fontSize: '13px',
                            fontWeight: 900
                        }
                    }
                }
            },
        },
        xaxis: {
            type: 'text',
            categories: [ 'Approuved', 'Hold', 'Inprogress', 'Rejected'],
        },
        legend: {
            position: 'right',
            offsetY: 40
        },
        fill: {
            opacity: 1
        }
    };

    // Render chart for bg5
    var chart5 = new ApexCharts(document.querySelector(".bg5"), options5);
    chart5.render();

    // Chart for bg6 (Stacked Bar Chart)
    var options6 = {
        series: [{
            name: 'PRODUCT A',
            data: [30, 0, 0, 0]
        }, {
            name: 'PRODUCT B',
            data: [ 0, 60, 0, 0]
        }, {
            name: 'PRODUCT C',
            data: [ 0, 0, 89, 0]
        }, {
            name: 'PRODUCT D',
            data: [ 0, 0, 0, 77]
        }],
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 0,
                dataLabels: {
                    total: {
                        enabled: true,
                        style: {
                            fontSize: '13px',
                            fontWeight: 900
                        }
                    }
                }
            },
        },
        xaxis: {
            type: 'text',
            categories: [ 'Approuved', 'Hold', 'Inprogress', 'Rejected'],
        },
        legend: {
            position: 'right',
            offsetY: 40
        },
        fill: {
            opacity: 1
        }
    };

    // Render chart for bg6
    var chart6 = new ApexCharts(document.querySelector(".bg6"), options6);
    chart6.render();
});