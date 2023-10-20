<script>
  import { formReducer } from "./formStore";
  import { route } from "./routeStore";
  let name = "";
  let observation = "";
  let edad = 0;
  let esterilizado = false;
  let generoSelected = "Macho";
  let generos = ["Macho", "Hembra"];
  let comunas = [
    {
      id: 1,
      nombre: "Peñalolen",
    },
    {
      id: 2,
      nombre: "Ñuñoa",
    },
  ];
  let comunaSelected;
  function handleSubmit(event) {
    event.preventDefault();
    console.log(name);
    route.update(() => "");
  }
</script>

<div class="">
  {#if $formReducer == "general"}
    <form class="flex flex-col gap-2">
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Nombre</span>
          <!-- <span class="label-text-alt">Top Right label</span> -->
        </label>
        <input
          bind:value={name}
          type="text"
          placeholder="Escribe el nombre de la mascota"
          class="input input-bordered w-full max-w-xs"
        />
        <label class="label">
          <!-- <span class="label-text-alt">Bottom Left label</span> -->
          <!-- <span class="label-text-alt">Bottom Right label</span> -->
        </label>
      </div>
      <div class="flex items-center">
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Edad</span>
            <!-- <span class="label-text-alt">Top Right label</span> -->
          </label>
          <input
            bind:value={edad}
            type="number"
            placeholder="Escribe el nombre de la mascota"
            class="input input-bordered w-full max-w-xs"
          />
          <label class="label">
            <!-- <span class="label-text-alt">Bottom Left label</span> -->
            <!-- <span class="label-text-alt">Bottom Right label</span> -->
          </label>
        </div>

        <input
          type="range"
          min="0"
          max="25"
          bind:value={edad}
          class="range range-primary"
        />
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Esterilizado</span>
          <input type="checkbox" class="toggle" bind:checked={esterilizado} />
        </label>
      </div>
      <select
        class="select select-primary w-full max-w-xs"
        bind:value={comunaSelected}
      >
        <option value="" disabled selected>Seleccione una comuna</option>
        {#each comunas as comuna}
          <option value={comuna.id}>{comuna.nombre}</option>
        {/each}
      </select>

      <div>
        <span>Genero</span>
        {#each generos as genero}
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">{genero}</span>
              <input
                type="radio"
                name="radio-10"
                bind:group={generoSelected}
                value={genero}
                class="radio checked:bg-red-500"
              />
            </label>
          </div>
        {/each}
      </div>
      <div class="flex justify-between">
        <button class="btn" on:click={()=>route.update(() => "")}>
          Volver
        </button>
        <button class="btn btn-primary" on:click={formReducer.goToSubmit}
          >Siguiente</button
        >
      </div>
    </form>
  {:else}
    <form class="flex flex-col gap-24">
      <input
        multiple
        type="file"
        class="file-input file-input-bordered file-input-secondary w-full max-w-xs"
      />
      <textarea
        class="textarea textarea-bordered"
        placeholder="Observacion"
        bind:value={observation}
      />
      <div class="flex justify-between">
        <button class="btn" type="button" on:click={formReducer.goToGeneral}>
          Volver
        </button>

      <button
      class="btn btn-primary self-end"
      type="submit"
      on:click={handleSubmit}>Enviar</button
    >
      </div>
    </form>
  {/if}
</div>
