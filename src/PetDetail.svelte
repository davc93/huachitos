<script>
    export let nombre;
    export let estado;
    export let comuna;
    export let genero;
    export let imagenes;
    export let isOpen;
    function closeModal(){
      isOpen = false
    }
</script>

<div class={`fixed h-screen w-1/2 top-14 bg-indigo-400 p-8 right-0`} >
  <div class="relative">

    <button class="absolute btn btn-square right-0" on:click={closeModal}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
  </div>
  <div>
    
  </div>
    <h4>
      {`${isOpen}`}
    </h4>
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
    <div class="w-56">
      <img style="width: 100%; height:100%;" src="{imagenes[0].imagen}" alt="{nombre}">
    </div>
  </div>  
