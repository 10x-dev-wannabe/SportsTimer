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
  <h id="work" class="label">WORK</h> 
  <input type="number" min=0 max="100" bind:value={workMin} id="workMin" class="input">
  <input type="number" min=0 max="60" bind:value={workSec} id="workSec" class="input"> 

  <h id="rest" class="label">REST</h>
  <input type="number" min=0 max="100" bind:value={restMin} id="restMin" class="input">
  <input type="number" min=0 max="60" bind:value={restSec} id="restSec" class="input"> 

  <h id="sets" class="label">SETS</h> 
  <input type="number" min=0 max="100" bind:value={sets} id="setsNr" class="input"> 
</div>

<style>

  #grid-container {
    display: grid;
    grid-auto-columns: clamp(0, auto, 45vw);
    grid-template-columns: 3;
    grid-template-rows: 8;
    position: absolute;
    transform: translate(-50%, 0);
    top: 100px;
    left: 50%;
  }
  
  #work {
    grid-area: 1 / 1 / 2 / span 2;
  }
  #workMin {
    grid-area: 2 / 1 / 3 / span 1;
  }
  #workSec {
    grid-area: 2 / 2 / 3 / span 1;
  }

  #rest{
    grid-area: 3 / 1 / 4 / span 2;
  }
  #restMin {
    grid-area: 4 / 1 / 5 / span 1;
  }
  #restSec {
    grid-area: 4 / 2 / 5 / span 1;
  }

  #sets {
    grid-area: 5 / 1 / 6 /span 2;
  }
  #setsNr {
    grid-area: 6 / 1 / 7 / span 2;
  }
  
  .label {
    font-size: 5vh;
    font-weight: 600;
    font-family: "courier new";
  }

  .input {
    justify-self: stretch;
    text-align: center;
    font-size: 10vh;
    color: white;
    background-color: black;
    appearance: textfield;
    height: 10vh;
    border: none;
  }
</style>
