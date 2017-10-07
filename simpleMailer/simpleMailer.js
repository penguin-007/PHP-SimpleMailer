$(document).ready(function(){

  // wps_form
  $("body").on( "submit", ".fn_simpleMailer", function(){
    var form       = $(this);
    var data       = new FormData(form[0]);
    var btn_submit = form.find('[type=submit]');

    $.ajax({
      // server script to process the upload
      url: "simpleMailer/simpleMailer.php",
      type: 'POST',
      // Form data
      data: data,
      // Tell jQuery not to process data or worry about content-type
      cache: false,
      contentType: false,
      processData: false,
      beforeSend: function(data){ 
        form.addClass('sending');
        btn_submit.addClass('sending');
      },
      success: function(data) {
        // get data from json
        var json = JSON.parse(data);
        // if redirect
        console.log( json.location );
        if ( json.location ) {
          window.location.replace(json.location+"/");
        } else {
          form.trigger('reset');
          // clear styles
          form.removeClass('sending');
          btn_submit.removeClass('sending');
          // style success
          form.addClass('success');
          btn_submit.addClass('success');
          // clear styles success
          setTimeout(function(){
            form.removeClass('success');
            btn_submit.removeClass('success');
          }, 2500);
          // message
          console.log("simpleMailer success");
        }
      },
      error: function(data){
        console.log("simpleMailer error");
      }
    });
    return false;
  });
  
});