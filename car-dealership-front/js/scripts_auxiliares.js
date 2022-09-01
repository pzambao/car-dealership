$(document).ready(function () {
  menu();
  hideAndShowParts();
  dataTable();
  chartLayout();

  function menu() {
    "use strict";
	
		var fullHeight = function() {
	
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
	
		};
		fullHeight();
	
		$('#sidebarCollapse').on('click', function () {
				$('#sidebar').toggleClass('active');
		});
  }
  
  function dataTable(){
    const datatablesSimple = document.getElementById('datatablesSimple');
    new simpleDatatables.DataTable(datatablesSimple);
  }

  function chartLayout(){
    Chart.defaults.global.defaultFontFamily =
    '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = "#292b2c";
  }
});

function createChart(itens, v){
  const counts = {};
  itens.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });  
  var ctx = $('#'.concat(v));
  var myPieChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: Object.getOwnPropertyNames(counts),
      datasets: [
        {
          data: Object.values(counts),
          backgroundColor: ["#c07dff", "#dc3545", "#ffc107", "#28a745","#667CE8", "#68F55F", "#FFCA63", "#2FB2F5"],
        },
      ],
    },
  });
}

function hideAndShowParts(){
  $("#create").click(function () {
    $("#d-table").hide();
    $("#d-chart").hide();
    $("#d-create-car").show();
  });
  $("#table").click(function () {
    $("#d-table").show();
    $("#d-chart").hide();
    $("#d-create-car").hide();
  });
  $("#chart").click(function () {
    $("#d-table").hide();
    $("#d-chart").show();

    $("#d-create-car").hide();
  });
  $("#all").click(function () {
    $("#d-table").show();
    $("#d-chart").show();
    $("#d-create-car").show();
  });
}
