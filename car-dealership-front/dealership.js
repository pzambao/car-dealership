
DealerShip = function(){
  var link_api = ''; // colocar link da api mudando apenas o metodo
  var method = ''; // receber o metodo do html
  var model = '';
  var maker = '';
  var year = '';
  var json_data = undefined;
  var formCreator = new FormCreator();
  this.formChanges = {'id': undefined, changes: new Array()};

  this.load = function(id){
    if( json_data !== undefined ){
      this.formChanges.id = json_data.id;
      this.setModel( json_data.model );
      this.setMaker( json_data.maker );
      this.setYear( json_data.year );
    }
    pageCreator.create(this);
  }

  this.dataSubmit = function(){
    form_data = new FormData();
    form_data.set('content', JSON.stringify(this.getDataChanges()))

    $.ajax({
      url: this.getAction(),
      type: this.getMethod(),
      processData: false,
      contentType: false,
      dataType: 'json',
      data: form_data,
      success: function (response) {
        alert('OK')
      },
      error: function(response) {
        alert('Falha')
      }
    });
  }

  // Getters e Setters
  this.setLinkApi = function(n){
    link_api = n;
  }

  this.setMethod = function(n){
    method = n;
  }

  this.setModel = function(n){
    model = n;
  }

  this.setMaker = function(n){
    maker = n;
  }

  this.setYear = function(n){
    year = n;
  }

  this.setJsonData = function(n){
    json_data = n;
  }

  



  this.getLinkApi = function(n){
    return link_api;
  }

  this.getMethod = function(n){
    return method;
  }

  this.getAction = function(n){
    return model;
  }

  this.getMaker = function(n){
    return maker;
  }

  this.getYear = function(n){
    return year;
  }

  this.getJsonData = function(n){
    return json_data;
  }

  this.getFormCreator = function(n){
    return formCreator;
  }

  this.getFormChanges = function(n){
    return this.formChanges;
  }
}

