$(document).ready(function () {
  print_graph('t');
  print_graph('n');
  print_graph('tr');
});

function print_graph(name) {

Highcharts.chart('graph_'+name, {

    chart: {
        backgroundColor: '#f0f0f5',
        polar: true,
        type: 'line'
    },

    credits: {
    enabled: false
  },

    exporting: {
    enabled: false
  },

    legend: {
    enabled: false
  },

    title: {
        text: null,
        x: -80
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Sales', 'Marketing', 'Development', 'Customer Support',
                'Information Technology', 'Administration'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        gridLineColor: '#999999',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
    },

    series: [{
        name: 'Allocated Budget',
        data: [43000, 19000, 60000, 35000, 17000, 10000],
        pointPlacement: 'on'
    }]

});
}

jQuery(function ($) {

  (function () {
        $(".home_part").height($(window).height());

        $(window).resize(function(){
            $(".home_part").height($(window).height());
        });

    }());

    (function () {
      $('.header').sticky({
          topSpacing: 0
      });

      $('body').scrollspy({
          target: '#navbar-collapse-main',
          offset: 70
      })
    }());

});
