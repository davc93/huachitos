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
{#each results as result, i}
  <div>
    <Card
      nombre={result.nombre}
      id={result.id}
      on:getDetails
    />
  </div>
{/each}
<span>Total {count}</span>
{:catch error}
<p>{error}</p>
{/await}
