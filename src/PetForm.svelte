<script>
  import { formReducer } from "./formStore";
  import { route } from "./routeStore";
  import { animalService } from "./services";
  let error;
  let isSubmitting;
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
  async function handleFileChange(event) {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      console.log(file);
    }
  }
  async function handleSubmit(event) {
    event.preventDefault();
    isSubmitting = true;
    try {
      await animalService.createPet({
        nombre: name,
        edad: String(edad),
        esterilizado: esterilizado === true ? 1 : 0,
        genero: generoSelected,
        comuna: comunaSelected,
      });
      route.update(() => "");
    } catch (e) {
      error = e.message;
    }
    isSubmitting = false;
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
        <button class="btn" on:click={() => route.update(() => "")}>
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
        on:change={handleFileChange}
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

        <div class="h-12 flex flex-col text-error">
          {error}
        </div>
        <button
          class="btn btn-primary self-end"
          type="submit"
          on:click={handleSubmit}
          disabled={isSubmitting}
        >
          {#if isSubmitting}
            <span class="loading loading-spinner" />
          {/if}

          Enviar</button
        >
      </div>
    </form>
  {/if}
</div>
