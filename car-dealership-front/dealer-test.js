Dealership = function() {
  const pageConstructor = new PageConstructor();

  
  pageConstructor.html_base();
  pageConstructor.vehicle_form();
  pageConstructor.vehicles_table();
  pageConstructor.vehicles_charts();
  
}

Vehicle = function() {
  let model = model;
  let maker = maker;
  let year = year;
}

PageConstructor = function(){
  const action = 'http://localhost:3000/cars';

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
                $('<span>', {class: 'fa fa-home mr-3'}),('Gráficos')
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

    $.getScript("js/menu.js", function() {
      alert("Script loaded but not necessarily executed.");
   });
  }

  this.vehicle_form = function(){
    $('#content').append(
      $('<div>', {class: 'mb-4', id: 'd-create-car'}).append(
        $('<form>', {action: action, method: 'POST'}).append(
          $('<div>', {class: 'row'}).append(
            $('<div>', {class: 'col'}).append(
              $('<label>').append('Modelo'),
              $('<input>', {type: 'text', class: 'form-control', placeholder: 'Ex.: Gol Power 1.6'})
            ),
            $('<div>', {class: 'col'}).append(
              $('<label>').append('Marca'),
              $('<input>', {type: 'text', class: 'form-control', placeholder: 'Ex.: Volkswagen'})
            ),
            $('<div>', {class: 'col'}).append(
              $('<label>').append('Ano'),
              $('<input>', {type: 'text', class: 'form-control', placeholder: 'Ex.: 2008'})
            ),
            $('<div>', {class: 'col'}).append(
              $('<button>', {type: 'submit', class: 'btn btn-primary btn-send mt-4'}).append('Cadastrar')
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
                  $('<th>').append('Editar'),
                  $('<th>').append('Deletar')
                )
              ),
              $('<tbody>').append(
                $('<tr>').append(
                  $('<td>').append('Corsa Premium 1.4 Econoflex'),
                  $('<td>').append('GM - Chevrolet'),
                  $('<td>').append('2008'),
                  $('<td>').append('Edit'),
                  $('<td>').append('Delete')
                )
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
                $('<i>', {class: 'fas fa-chart-pie me-1'})
              ),
              $('<div>', {class: 'card-body'}).append(
                $('<canvas>', {id: 'myPieChart', width: '100%', height: '50%'})
              ),
              $('<div>', {class: 'card-footer small text-muted'}).append('Atualizado hoje tal horas')
            )
          ),
          $('<div>', {class: 'col-xl-4'}).append(
            $('<div>', {class: 'card'}).append(
              $('<div>', {class: 'card-header'}).append(
                $('<i>', {class: 'fas fa-chart-pie me-1'})
              ),
              $('<div>', {class: 'card-body'}).append(
                $('<canvas>', {id: 'myPieChart', width: '100%', height: '50%'})
              ),
              $('<div>', {class: 'card-footer small text-muted'}).append('Atualizado hoje tal horas')
            )
          ),
          $('<div>', {class: 'col-xl-4'}).append(
            $('<div>', {class: 'card'}).append(
              $('<div>', {class: 'card-header'}).append(
                $('<i>', {class: 'fas fa-chart-pie me-1'})
              ),
              $('<div>', {class: 'card-body'}).append(
                $('<canvas>', {id: 'myPieChart', width: '100%', height: '50%'})
              ),
              $('<div>', {class: 'card-footer small text-muted'}).append('Atualizado hoje tal horas')
            )
          )
        )
      )
    )
  }
}
