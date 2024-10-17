<script>
    import { actions, mint, maxt} from "./stores";

    let color;
    let text;

    function makeAction() {
        if (color===undefined && text===undefined) {
        } else {

        if (color===undefined) {
            color = "#00ff00"
        }

        if (text===undefined) {
            text = "";
        }

        let action = {
            color: color,
            text: text
        }
        $actions.push(action)
        console.log($actions)
        
        color = undefined;
        text = undefined;
    }}
    
    let showMenu = false;
    function togleMenu() {
      if(showMenu===false) {
        showMenu = true;
      } else {
        showMenu = false;
      }
    }
</script>

<button id="menuTogle" on:click={togleMenu}>
  menu
</button>

{#if showMenu}
<div id="grid-container">
  <h id="signalslbl" class="label">SIGNALS</h> 
  <input type="color" bind:value={color} id="color" class="input" name="color">
  <input type="text" bind:value={text} id="text" class="input"> 

  <h id="timelbl" class="label">TIME</h>
  <input type="number" min=0 max="100" bind:value={$mint} id="mint" class="input">
  <input type="number" min=0 max="100" bind:value={$maxt} id="maxt" class="input"> 
  <button on:click={makeAction}>
    Add action
  </button>

</div>
{/if}

<style>
  button {
    grid-area: 5 / 1 / 6 / span 2;
    width: auto;
    font-size: 5vh;
    font-weight: 600;
    font-family: "courier new";
  }
  
  #menuTogle {
    position: absolute;
    left: 50px;
    top: 50px;
    width: 5vmax;
    height: 5vmax;
    z-index: 1;
    font-size: 2vh
  }


  #grid-container {
    background-color: #000;
    display: grid;
    grid-auto-columns: clamp(0, 20cm, 45vw);
    grid-template-columns: 3;
    grid-template-rows: 8;
    position: absolute; 
    top: 100px;
    left: 0%;
  }
  
  #signalslbl {
    grid-area: 1 / 1 / 2 / span 2;
  }
  #color {
    grid-area: 2 / 1 / 3 / span 1;
    height: 10vh;
  }
  #text {
    grid-area: 2 / 2 / 3 / span 1;
  }

  #timelbl {
    grid-area: 3 / 1 / 4 / span 2;
  }
  #mint {
    grid-area: 4 / 1 / 5 / span 1;
  }
  #maxt {
    grid-area: 4 / 2 / 5 / span 1;
  }

  .label {
    font-size: 5vh;
    font-weight: 600;
    font-family: "courier new";
  }

  .input {
    background-color: #000;
    justify-self: stretch;
    text-align: center;
    font-size: 10vh;
    color: white;
    width: clamp(1cm, 10cm, 45vw);
    }
</style>
