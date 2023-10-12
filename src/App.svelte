<script>
  import { animalService } from "./services";
  let count = 40;
  
  let error = null
  /**
   * @type {Animal}
   */
  let animal = null
  $: if (count >= 50) {
    alert("the count is to high");
    count = 40;
  } else {
    console.log(`The count is ${count}`);
  }
  async function getAnimal() {
    try {
      const data =  await animalService.getOne(count)
      animal = data
      error = null
      
    } catch (errorMessage) {
      error = errorMessage
    }
    count += 1;
  }
</script>

<main>
  <button on:click={getAnimal}>
    {`${count}`}
  </button>
  <article>
    <h1>
      {animal?.nombre}
    </h1>

  </article>
  <div class="error">
    {!error ? "" : error}
  </div>
</main>
