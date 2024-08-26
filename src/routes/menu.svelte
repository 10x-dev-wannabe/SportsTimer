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


<div>
    <table style="margin-left:auto; margin-right:auto;">
        <tr>sets</tr>
        <tr><input type="number" min=0 max="100" bind:value={sets}></tr>
        <tr>work</tr>
        <tr><input type="number" min=0 max="100" bind:value={workMin}>:<input type="number" min=0 max="60" bind:value={workSec}></tr>
        <tr>rest</tr>
        <tr><input type="number" min=0 max="100" bind:value={restMin}>:<input type="number" min=0 max="60" bind:value={restSec}></tr>
    </table>
</div>

<style>
    div {
        position: absolute;
        width: 50vw;
        height: 90vh;
        background-color: #00000000;
        margin-top: 10vh;
        overflow: hidden;
        text-align: center;
    }

    tr {
        font-size: clamp(5em, 9vmin, 10em);
    }
    input[type="number"] { 
        color: #fff;
        initial-value: 0;
        font-size: 1em;
        text-align: center;
        background-color: #ffffff22;
        border-color: #ffffff33;
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
        width: clamp(2em, 30vw, 10cm)
    }
</style>