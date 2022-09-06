// JS OO.
// Com duas Classes ou mais.
// Bootstrap 
//    - cdn referenciado na index
// Criação dinâmica de HTML
//    - construção realizada via jquery através do metodo append
// Feedbacks em Alertas para usuário 
//    - utilizado o sweetalert para personalização dos alerts
//    - utilização do mesmo em todas validações ajax
//    - cdn referenciado na index
// Sistema de Abas horizontal ou vertical.
//    - criação feita dentro da classe page constructor na construção do html_base
// Gráficos.
//    - Gerados com auxilio da lib chart.js
//    - graficos construidos na classe PageConstructor
// Consulta em API Ajax
//    - Todas interações com a api está sendo feita via ajax
//    - interações feitas na classe PageInteractor


// Classe que organiza a página
// Um PageOrganizer tem N PageConstructors
// Um PageOrganizer tem N PageInteractors
PageOrganizer = function() {
  const pageConstructor = new PageConstructor();
  const pageInteractor = new PageInteractor();
  
  pageConstructor.html_base();
  pageConstructor.vehicle_form();
  pageConstructor.vehicles_table();
  pageConstructor.vehicles_charts();
  
  pageInteractor.loadCar();
  //pageInteractor.deleteCar();
  pageInteractor.loadTable();  
  pageInteractor.loadChart();
}

// Classe que constrói dinâmicamente o html da página
PageConstructor = function(){
  
  this.html_base = function(){
    $('#dealership-page').append(
      $('<nav>', {id: 'sidebar', class: 'active'}).append(
        $('<div>', {class: 'custom-menu'}).append(
          $('<button>', {type: 'button', id: 'sidebarCollapse', class: 'btn btn-primary'}).append(
            $('<i>', {class: 'fa fa-bars'}),
            $('<span>', {class: 'sr-only'}).append('Toggle Menu')
          )
        )
      ).append(
        $('<div>', {class: 'p-4'}).append(
          $('<h1>').append(
            $('<a>', {href: '#', class:'logo'}).append('Henricar')
          )
        ).append(
          $('<ul>', {class: 'list-unstyled components mb-5'}).append(
            $('<li>', {class: 'active'}).append(
              $('<a>', {href: '#', id: 'all'}).append(
                $('<span>', {class: 'fa-solid fa-expand mr-3'}),('Ver Tudo')
              )
            ),
            $('<li>').append(
              $('<a>', {href: '#', id: 'chart'}).append(
                $('<span>', {class: 'fa-solid fa-chart-pie mr-3'}),('Gráficos')
              )
            ),
            $('<li>').append(
              $('<a>', {href: '#', id: 'create'}).append(
                $('<span>', {class: 'fa-solid fa-plus mr-3'}),('Cadastro')
              )
            ),
            $('<li>').append(
              $('<a>', {href: '#', id: 'table'}).append(
                $('<span>', {class: 'fa-solid fa-box-archive mr-3'}),('Estoque')
              )
            )
          )
        )
      ),
      $('<div>', {id: 'content', class:'p-4 p-md-5 pt-5'})
    )

  }

  this.vehicle_form = function(){
    $('#content').append(
      $('<div>', {class: 'mb-4', id: 'd-create-car'}).append(
        $('<form>', {id: 'create-car-id'}).append(
          $('<div>', {class: 'row'}).append(
            $('<div>', {class: 'col'}).append(
              $('<label>').append('Modelo'),
              $('<input>', {id: 'car-model', required: 'required', type: 'text', class: 'form-control', placeholder: 'Ex.: Gol Power 1.6'})
            ),
            $('<div>', {class: 'col'}).append(
              $('<label>').append('Marca'),
              $('<input>', {id: 'car-maker', required: 'required', type: 'text', class: 'form-control', placeholder: 'Ex.: Volkswagen'})
            ),
            $('<div>', {class: 'col'}).append(
              $('<label>').append('Ano'),
              $('<input>', {id: 'car-year', required: 'required', type: 'number', class: 'form-control', placeholder: 'Ex.: 2008'})
            ),
            $('<div>', {class: 'col'}).append(
              $('<input>', {type: 'submit', value: 'Cadastrar', class: 'btn btn-primary btn-send mt-4'})
            )
          ),
        )
      )
    )

  }

  this.vehicles_table = function(){
    $('#content').append(
      $('<div>', {class: 'mb-4', id: 'd-table'}).append(
        $('<div>', { class: 'card' }).append(
          $('<div>', { class: 'card-body' }).append(
            $('<table>', { id: 'datatablesSimple'}).append(
              $('<thead>').append(
                $('<tr>').append(
                  $('<th>').append('Modelo'),
                  $('<th>').append('Fabricante'),
                  $('<th>').append('Ano'),
                  $('<th>').append('Deletar')
                )
              ),
              $('<tbody>', {id: 'd-table-body'}).append(
              )
            )
          )
        )
      )
    )
  }

  this.vehicles_charts = function(){
    $('#content').append(
      $('<div>', {class: 'mb-4', id: 'd-chart'}).append(
        $('<div>', {class: 'row'}).append(
          $('<div>', {class: 'col-xl-4'}).append(
            $('<div>', {class: 'card'}).append(
              $('<div>', {class: 'card-header'}).append(
                $('<i>', {class: 'fas fa-chart-pie me-1'}),('Veículos Cadastrados')
              ),
              $('<div>', {class: 'card-body'}).append(
                $('<canvas>', {id: 'ModelChart', width: '100%', height: '50%'})
              ),
              $('<div>', {class: 'card-footer small text-muted'})
            )
          ),
          $('<div>', {class: 'col-xl-4'}).append(
            $('<div>', {class: 'card'}).append(
              $('<div>', {class: 'card-header'}).append(
                $('<i>', {class: 'fas fa-chart-pie me-1'}),('Montadoras')
              ),
              $('<div>', {class: 'card-body'}).append(
                $('<canvas>', {id: 'MakerChart', width: '100%', height: '50%'})
              ),
              $('<div>', {class: 'card-footer small text-muted'})
            )
          ),
          $('<div>', {class: 'col-xl-4'}).append(
            $('<div>', {class: 'card'}).append(
              $('<div>', {class: 'card-header'}).append(
                $('<i>', {class: 'fas fa-chart-pie me-1'}),('Ano de Fabricação')
              ),
              $('<div>', {class: 'card-body'}).append(
                $('<canvas>', {id: 'YearChart', width: '100%', height: '50%'})
              ),
              $('<div>', {class: 'card-footer small text-muted'})
            )
          )
        )
      )
    )
  }

}

// Classe que interage com a API via ajax para manipular informações
PageInteractor = function() {
  let url = "http://localhost:3000/cars/"
  let that = this

  this.loadCar = function(){
    $('#create-car-id').on('submit', function(e){
      const model = $('#car-model').val();
      const maker = $('#car-maker').val();
      const year = $('#car-year').val();

      let data = {'model': model, 'maker': maker, 'year': year}
      const myJSON = JSON.stringify(data)
      
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      $.ajax({
        url: url,
        method: "POST",
        headers: {"Content-Type": "application/json"},
        data: myJSON
      }).done(function (response) {
        that.loadTable();
        that.loadChart();
        Toast.fire({
          icon: 'success',
          title: 'Veículo cadastrado com sucesso!'
        })
        document.getElementById('create-car-id').reset();
      }).fail(function (response) {
        Toast.fire({
          icon: 'error',
          title: 'Preencha os campos corretamente!'
        })
      });

      e.preventDefault();
    });
  }
  
  this.loadTable = function(){
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      success: function(response) {
        if(response.length !== 0){
          $('#d-table-body').empty();
          for(var k in response) {
            $('#d-table-body').append(
              $('<tr>').append(
                $('<td>', {hidden: 'hidden', id: 'deleteId'}).append(response[k].id),
                $('<td>').append(response[k].model),
                $('<td>').append(response[k].maker),
                $('<td>').append(response[k].year),
                $('<td>').append($('<input>', {type: 'submit', id: 'deleteButton', value: 'deletar'}))
              )
            )
          }
        }else{
          $('#d-table-body').empty();
          $('#d-table-body').append(
            $('<tr>').append(
              $('<td>', {colspan:'4', style: 'text-align: center'}).append('Nenhum registro encontrado!'),
            )
          )
        }
      }
    })

  }

  this.loadChart = function(){
    let models = []
    let makers = []
    let years = []
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      success: function(response) {
        if(response.length !== 0){
          for(var k in response) {
            var model = response[k].model
            models = models.concat(model)
            var maker = response[k].maker
            makers = makers.concat(maker)
            var year = response[k].year
            years = years.concat(year)
          }
        }
        createChart(models, 'ModelChart');
        createChart(makers, 'MakerChart');
        createChart(years, 'YearChart');
      }
    })
  }

  // this.deleteCar = function(){
  //   $('#deleteButton').on('click', function(e){
  //     const id = $('#deleteId').text();
  //     url = url.concat(id)

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

  //     e.preventDefault(); 
  //   })
  // };
}
