// Classe que organiza a página
// Um PageOrganizer tem N PageConstructors
// Um PageOrganizer tem N PageLoaders
PageOrganizer = function() {
  const pageConstructor = new PageConstructor();
  const pageLoader = new PageLoader();
  
  pageConstructor.html_base();
  pageConstructor.vehicle_form();
  pageConstructor.vehicles_table();
  pageConstructor.vehicles_charts();
  
  pageLoader.loadCar();
  pageLoader.loadTable();  
  pageLoader.loadChart();
}

// Classe que constrói dinâmicamente o html da página
// Um pageConstructor possui
PageConstructor = function(){
  const pageLoader = new PageLoader();

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
                $('<span>', {class: 'fa fa-home mr-3'}),('Ver Tudo')
              )
            ),
            $('<li>').append(
              $('<a>', {href: '#', id: 'chart'}).append(
                $('<span>', {class: 'fa fa-home mr-3', onclick: 'pageLoader.toggleMenu()'}),('Gráficos')
              )
            ),
            $('<li>').append(
              $('<a>', {href: '#', id: 'create'}).append(
                $('<span>', {class: 'fa fa-home mr-3'}),('Cadastro')
              )
            ),
            $('<li>').append(
              $('<a>', {href: '#', id: 'table'}).append(
                $('<span>', {class: 'fa fa-home mr-3'}),('Estoque')
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

PageLoader = function(that) {
  var url = "http://localhost:3000/cars"
  var that = this

  this.loadCar = function(){
    $('#create-car-id').on('submit', function(e){
      const url = "http://localhost:3000/cars/"
      const model = $('#car-model').val();
      const maker = $('#car-maker').val();
      const year = $('#car-year').val();

      let teste = {'model': model, 'maker': maker, 'year': year}
      const myJSON = JSON.stringify(teste)
      
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
                $('<td>').append(response[k].model),
                $('<td>').append(response[k].maker),
                $('<td>').append(response[k].year),
                $('<td>').append($('<input>', {type: 'button', value: 'deletar'}))
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

 

}

