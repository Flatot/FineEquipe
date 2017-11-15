$(document).ready(function () {
  print_graph('t');
  print_graph('n');
  print_graph('tr');
});

function print_graph(name) {
  if (name == 't') { //Toto
    var arr_skill = ['C', 'MySQL', 'NodeJS', 'Android', 'HTML/CSS', 'Firebase'];
    var data_skill = [90, 80, 85, 85, 60, 85];
    var v_color = "#ff3333";
  }
  else if (name == 'n') { //Nico
    var arr_skill = ['C', 'PowerShell', 'PHP', 'JavaScript', 'Python', 'MySQL/MariaDB'];
    var data_skill = [90, 80, 85, 85, 60, 85];
    var v_color = "#33cc00";
  }
  else { //Flatflat
    var arr_skill = ['C', 'PHP', 'JavaScript', 'Python', 'MySQL', 'Shell'];
    var data_skill = [90, 80, 85, 85, 60, 85];
    var v_color = "#1a75ff";
  }
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
        categories: arr_skill,
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
        pointFormat: '<span style="color:{series.color}">{point.y:,.0f}</b><br/>'
    },

    series: [{
        name: 'Skills',
        color: v_color,
        data: data_skill,
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
