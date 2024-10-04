<script>
    export let sets;
    export let work;
    export let rest;
    let workSec = 0;
    let workMin = 0;
    let restSec = 0;
    let restMin = 0;

    // Format rest and work as ms time
    $: rest = (restMin * 60 + restSec) * 1000;
    $: work = (workMin * 60 + workSec) * 1000;
</script>


<div id="grid-container">
  <input type="number" min=0 max="100" bind:value={sets} id="sets" class="input">
  
  <input type="number" min=0 max="100" bind:value={workMin} id="workMin" class="input">
  
  <input type="number" min=0 max="60" bind:value={workSec} id="workSec" class="input">
  
  <input type="number" min=0 max="100" bind:value={restMin} id="restMin" class="input">

  <input type="number" min=0 max="60" bind:value={restSec} id="restSec" class="input"> 
</div>

<style>
  #grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
  }

  #sets {
    grid-area: 1 / 1 / 2 / span 2;
    height: 100px;
  }
  #workMin {
    grid-area: 2 / 1 / 3 / span 1;
    height: 100px;
  }
  #workSec {
    grid-area: 2 / 2 / 3 / span 1;
    height: 100px;
  }
  #restMin {
    grid-area: 3 / 1 / 4 / span 1;
    height: 100px;
  }
  #restSec {
    grid-area: 3 / 2 / 4 / span 1;
    height: 100px;
  }

  .input {
    color: white;
    background-color: black;
    appearance: textfield;
  }
</style>
