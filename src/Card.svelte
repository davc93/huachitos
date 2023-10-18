<script>
  import { createEventDispatcher } from "svelte";
  import { animalService } from "./services";
  export let id;
  export let nombre;

  const dispatch = createEventDispatcher();
  async function handleDetails() {
    const rta = await animalService.getOne(id)

    dispatch("getDetails",{
      details:rta
    });
  }
</script>

<article>
  <h1>
    {nombre}
  </h1>
  
  <button on:click={handleDetails}>Más detalles</button>
</article>
