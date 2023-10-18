<script>
  import { animalService } from "./services";
  import Card from "./Card.svelte";
  import PetDetail from "./PetDetail.svelte";
  import { createEventDispatcher } from "svelte";


  let animals = animalService.getAll()
  let count;
  let m = { x: 0, y: 0 };
  let details
  const dispatch = createEventDispatcher()
  function handleSearch() {

  }
  $: {
      animals.then((result)=>{
        count = result.length
      })
  }
  function handleMove(event) {
    m.x = event.clientX 
    m.y = event.clientY 

  }
  function handleShowPet(event) {
    details = event.detail.details
  }
</script>

<main on:pointermove={handleMove}>
  <div style="display:flex; justify-content:end; width:100%;">{`The pointer is at ${m.x} ${m.y}`}</div>
  <div>
    <select on:change={handleSearch} name="" id="">
      <option value="adopcion">Adopción</option>
      <option value="encontrado">Encontrado</option>
      <option value="perdido">Perdido</option>
    </select>
    <!-- <button on:click|once={handleClick}>
      {'buscar animal'}
    </button> -->
  </div>
  {#await animals}
    <p>Waiting...</p>
  {:then results} 
    {#each results as result,i}
      <div>
        <Card nombre={result.nombre} id={result.id} on:getDetails={handleShowPet}/>

      </div>  
    {/each}
    <span>Total {count}</span>
    {:catch error}
    <p>{error}</p>
  {/await}

  {#if details}
    
    <PetDetail {...details}/>
  {/if}
    
</main>
