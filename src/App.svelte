<script>
  import PetDetail from "./PetDetail.svelte";
  import ListOfPet from "./ListOfPet.svelte";
  import Form from "./Form.svelte";
  import Navbar from "./Navbar.svelte";
  import PetForm from "./PetForm.svelte";
  import { point } from "./store";
  import { route } from "./routeStore";
  let details;
  let isModalOpen = false
  function handleMove(event) {
    point.update((point) => ({
      x: event.clientX,
      y: event.clientY,
    }));
  }
  function handleShowPet(event) {
    details = event.detail.details;
    isModalOpen = true
    console.log(details);
    console.log(isModalOpen);
  }
</script>

<div class="" on:pointermove={handleMove}>
  <Navbar />
  <div class="grid container mx-auto pt-20">
    {#if $route == ""}
      <main class="">
        <section class="">
          <Form />
        </section>
        <section class="">
          <ListOfPet on:getDetails={handleShowPet} />
        </section>
        {#if isModalOpen}
          <PetDetail isOpen={isModalOpen} {...details} />
        {/if}
      </main>
    {:else}
      <section class="">
        <PetForm />
      </section>
    {/if}
  </div>
</div>
