<script>
    import Menu from "./menu.svelte";
    import { timer } from "./stores.js";
</script>

<Menu 
    bind:sets={$timer.sets}
    bind:work={$timer.work}
    bind:rest={$timer.rest}
/>


<a id="start" href="/live">start</a>


<style>
    #start {
        color: #fff;
        text-decoration: none;
        font-size: 10vmin;
        background-color: #00ff00;
        position: absolute;
        bottom: 4vmin;
        right: 4vmin;
        width: 20vw;
    }
    @media screen and (orientation:portrait) {
        #start {
            position:absolute;
            bottom: 4vmin;
            left: auto;
            right: auto;
            width: 50%;
            transform: translateX(-50%);
        }
    }
</style>