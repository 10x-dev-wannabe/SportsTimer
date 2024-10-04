<script>
    import Menu from "./menu.svelte";
    import SignalsMenu from "./signals-menu.svelte"
    import { timer } from "./stores.js";
    import { goto } from "$app/navigation";
    import {Howl, Howler} from 'howler';
    
    // Import and create the sound
    import select from "$lib/select.wav";
    let sound = new Howl({
        src: [select]
    })

    // Play sound and navigate to /live
    function click() {
        sound.play();
        goto("/live");
    }

    //Keyboard shortcut
    function onKeyDown(e) {
        if (e.keyCode == 13) {
            click();
        }
    }
</script>

<!--this is necessary for the keyboard shortcut to work-->
<!--<svelte:window on:keydown|preventDefault={onKeyDown} />-->

<!--Bind the menu settings to the timer object in the stores.js file-->
<Menu 
    bind:sets={$timer.sets}
    bind:work={$timer.work}
    bind:rest={$timer.rest}
/>
<!--<SignalsMenu/>

<!--start button-->
<button id="start" on:click={click}>start</button>

<style>
    #start {
        color: #fff;
        font-size: 10vh;
        background-color: #00ff00;
        position:absolute;
        bottom: 4vmin;
        left: auto;
        right: auto;
        transform: translateX(-50%);
        width: clamp(5em, 65vw, 25cm)
    }
</style>
