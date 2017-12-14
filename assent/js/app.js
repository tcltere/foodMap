$(document).ready(function() {

    setTimeout(function() {
        $('.load').fadeOut(500);
      },2000);
          setTimeout(function() {
               $('.container').fadeIn(500); // <-- time in milliseconds

    });

    $('ul.listado a').click(function() {
    var textoFiltro = $(this).text();
    if(textoFiltro == 'Todos')
    {
        $('div.filtros div.hidden').fadeIn('').removeClass('hidden');
    }
    else
    {
        $('.filtros div').each(function()
        {
            if(!$(this).hasClass(textoFiltro))
            {
                $(this).fadeOut('normal').addClass('hidden');
            }
            else
            {
                $(this).fadeIn('slow').removeClass('hidden');
            }
        });
    }
    });
});

