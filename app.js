$(document).ready(function () {
  const $input = $('#ingresar-tarea');
  const $boton = $('button');
  const $listaDeTareas = $('#lista-de-tareas');

  $boton.on('click', agregarTarea);
  $input.on('keydown', function (e) {
    if (e.key === 'Enter') {
      agregarTarea();
    }
  });

  function agregarTarea() {
    const valor = $input.val();
    if (valor) {
      // Crear elementos
      const $tareaNueva = $('<div>').addClass('tarea');
      const $texto = $('<p>').text(valor);
      const $iconos = $('<div>').addClass('iconos');

      const $completar = $('<i>')
        .addClass('bi bi-check-circle-fill icono-completar')
        .on('click', completarTarea);

      const $eliminar = $('<i>')
        .addClass('bi bi-trash3-fill icono-eliminar')
        .on('click', eliminarTarea);

      $iconos.append($completar, $eliminar);
      $tareaNueva.append($texto, $iconos);
      $listaDeTareas.append($tareaNueva);

      $input.val(''); // Limpiar el input
    } else {
      alert('Por favor ingresa una tarea.');
    }
  }

  function completarTarea() {
    $(this).closest('.tarea').toggleClass('completada');
  }

  function eliminarTarea() {
    $(this).closest('.tarea').remove();
  }
});

