$(document).ready(function () {
  menu();
  hideAndShowParts();
  dataTable();
  chartLayout();
});

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
};

function dataTable(){
  const datatablesSimple = document.getElementById('datatablesSimple');
  new simpleDatatables.DataTable(datatablesSimple);
};

function chartLayout(){
  Chart.defaults.global.defaultFontFamily =
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
  Chart.defaults.global.defaultFontColor = "#292b2c";
};

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
};

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
};

// function deleteVehicle(id, url){


//   url = url.concat(id)

//   console.log(url)
//   console.log(id)

//     Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         $.ajax({
//           url: url,
//           method: "DELETE"
//         }).done(function (response) {
//           Swal.fire(
//             'Sucesso!',
//             'Veículo deletado do sistema',
//             'success'
//           )
//           console.log(response);
//           that.loadTable();
//           that.loadChart();
//         }).fail(function (response) {
//           Swal.fire(
//             'Falha!',
//             'Não foi possível deletar o veículo do sistema',
//             'error'
//           )
//         });
        
//       }
//     })

//     // e.preventDefault(); 
// }
