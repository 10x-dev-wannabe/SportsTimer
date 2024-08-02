<script>
    import Menu from "./menu.svelte";
    let sets
    let work
    let rest
    let working = false;
    function start() {
        working = true;
    }
    function stop() {
        working = false;
    }
</script>

<main>

{#if working}
    <button id="stop" on:click={stop}>
        <div style="height: 0;">
            <p style="margin: 0; padding-top:0; line-height:1px">
                &#10799;
            </p>
        </div>
    </button>
{:else}
    <Menu 
        bind:sets={sets}
        bind:work={work}
        bind:rest={rest}
    />

    <button id='start' on:click={start}>
        START
    </button>
{/if}

</main>

<style>
    #start {
        background-color: #00ff00;
        position: absolute;
        bottom: 4vmin;
        right: 4vmin;
    }
    #stop {
        position: absolute;
        top: 4vmin;
        left: 4vmin;
        padding: none;
        background-color: #00000000;
        width: auto;
        height: auto;
        font-size: 10em;
        border: none;
    }
</style>