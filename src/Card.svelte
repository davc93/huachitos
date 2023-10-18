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

  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">{nombre}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button on:click={handleDetails} class="btn btn-primary">Mas Detalle</button>
      </div>
    </div>
  </div>
