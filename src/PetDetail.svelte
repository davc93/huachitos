<script>
    export let nombre;
    export let estado;
    export let comuna;
    export let genero;
    export let imagenes;
</script>



<div style="position: fixed; top: 0;right:100px">
    <h3>
      nombre: {nombre}
    </h3>
    <h3>
      Estado: {estado}
    </h3>

    <h3>
      Comuna: {comuna}
    </h3>

    <h3>
      genero: {genero}
    </h3>
    <div style="height: 200px;">
      <img style="width: 100%; height:100%;" src="{imagenes[0].imagen}" alt="{nombre}">
    </div>
  </div>