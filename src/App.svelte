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

<main on:pointermove={handleMove}>
  <Navbar m={{x:m.x,y:m.y}}/>
  <Form />
  <ListOfPet on:getDetails={handleShowPet}/>
  {#if details}
    <PetDetail {...details} />
  {/if}
</main>
