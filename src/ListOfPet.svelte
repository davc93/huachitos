<script>
  import { animalService } from "./services";
  import Card from "./Card.svelte";
  let animals = animalService.getAll();
  let count;

  $: {
    animals.then((result) => {
      count = result.length;
    });
  }
</script>

{#await animals}
  <p>Waiting...</p>

{:then results}
<span>Total {count}</span>
<div class="grid gap-5 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
    {#each results as result, i}
      <Card nombre={result.nombre} id={result.id} on:getDetails />
    {/each}
  </div>

{:catch error}
  <p>{error}</p>
{/await}
