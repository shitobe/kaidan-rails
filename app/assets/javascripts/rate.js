$(function(){
  var targetTable = $('#target_table');
  function buildTable(tabel){
    var html = `
      <tr>
        <td>${tabel}</td>
        <td>${tabel}</td>
        <td>${tabel}</td>
        <td>${tabel}</td>
      </tr>
      `
      targetTable.append(html);
  }

  $('#trial_cal').on('click',function(e){
    e.preventDefault();
    $.ajax({
      method: 'GET',
      url: 'api/rates',
      dataType: 'json'
    })
    .done(function(rates){
      $('#target_table').children().remove();
      buildTable(1);
      buildTable(2);
      var hashForm = {};
      hashForm.method = $('input[name = "method"]:checked').val();
      hashForm.serviceLife = $('#ser_life').val();
      hashForm.price = $('.price-form-text').val();
      hashForm.startMonth = $('#sta_month').val();
      hashForm.operationMonth = $('#ope_month').val();

      switch (hashForm.method){
        case '0':
          console.log(0);
          break;
        case '1':
          console.log(1);
          break;
        case '2':
          console.log('OK');
          break;
      }
    })
    .fail(function(){
      console.log('Error')
    })
  })
})