<script>
  import PetDetail from "./PetDetail.svelte";
  import ListOfPet from "./ListOfPet.svelte";
  import Form from "./Form.svelte";
import Navbar from "./Navbar.svelte";
  
  let details;
  let m = { x: 0, y: 0 };

  
  function handleMove(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }
  function handleShowPet(event) {
    details = event.detail.details;
  }
</script>
<div>
  <Navbar m={{x:m.x,y:m.y}}/>

  <main class="pt-14" on:pointermove={handleMove}>
    <section class="container mx-auto">
      <Form />

    </section>
    <section class="section">

      <ListOfPet on:getDetails={handleShowPet}/>
    </section>
    {#if details}
      <PetDetail {...details} />
    {/if}
  </main>
</div>
