$(document).ready(function () {
  print_graph('t');
  print_graph('n');
  print_graph('tr');

  $('.js-scrollTo').on('click', function() {
			var page = $(this).attr('href');
			var speed = 750;
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
			return false;
		});
});

function print_graph(name) {
  if (name == 't') { //Toto
    var arr_skill = ['Mobile', 'Web', 'Analytics', 'Backend/NoSQL', 'NoSQL', 'Gestion de projet'];
    var data_skill = [60, 30, 75, 75, 80, 80];
    var v_color = "#ff3333";
  }
  else if (name == 'n') { //Nico
    var arr_skill = ['Scripting/Algorithme', 'Gestion de projet', 'Software', 'Cobol', 'Admin Base de données', 'Web'];
    var data_skill = [80, 80, 60, 30, 70, 80];
    var v_color = "#33cc00";
  }
  else { //Flatflat
    var arr_skill = ['Web', 'SQL', 'ASP/PHP', 'Mobile', 'C/Python', 'Access management'];
    var data_skill = [80, 75, 75, 50, 80, 65];
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
