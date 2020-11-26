$(function (){
    $('[data-toggle="tooltip"]').tooltip();
    $("[data-toggle='popover']").popover();
    $('carousel').carousel({
      interval:1000
    });
    $('#suscripcionModal').on('show.bs.modal', function(e){
      console.log('El modal se muestra');
      $('#contactoBtn').removeClass('btn-outline-info');
      console.log('Cambio el botón');
      $('#contactoBtn').addClass('btn-primary');
      $('#contactoBtn').prop('disabled',true);
    });
    $('#suscripcionModal').on('shown.bs.modal', function(e){
        console.log('El modal se mostró');
    });
    $('#suscripcionModal').on('hide.bs.modal', function(e){
      console.log('El modal se oculta');
    });
    $('#suscripcionModal').on('hidden.bs.modal', function(e){
      console.log('El modal se oculto');
      $('#contactoBtn').removeClass('btn-primary');
      console.log('Cambio el botón');
      $('#contactoBtn').addClass('btn-outline-info');
      $('#contactoBtn').prop('disabled',false);
    });
    $('#suscripcionModal').on('hidePrevented.bs.modal', function(e){
      console.log('Hiciste clic fuera del modal pero no te dejo ocultarlo');
    });
});