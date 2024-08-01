<script>
    import Menu from "./menu.svelte";
    let sets
    let work
    let rest

</script>

<main>

    <Menu 
        bind:sets={sets}
        bind:work={work}
        bind:rest={rest}
    />

    <a href="/working">
        <button id='start'>
            START
        </button>
    </a>

</main>

<style>
    #start {
        background-color: #00ff00;
        position: absolute;
        bottom: 4vh;
        right: 4vh;
    }
</style>