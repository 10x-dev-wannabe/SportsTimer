<script>
    export let sets = 0;
    export let work = 0;
    export let rest = 0;
    let workSec = 0;
    let workMin = 0;
    let restSec = 0;
    let restMin = 0;

    $: rest = (restMin * 60 + restSec) * 100;
    $: work = (workMin * 60 + workSec) * 100;
</script>


<div>
    <table style="margin-left:auto; margin-right:auto; margin-top:1em">
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
        width: 40vw;
        height: 90vh;
        background-color: #55555555;
        margin: 3em;
        overflow: hidden;
        text-align: center;
    }
    
    @media screen and (orientation:portrait) {
        div{
            margin: 0;
            width: 98vw;
        }
    }
    tr {
        font-size: 5em;
    }
    input[type="number"] {
        color: #fff;
        initial-value: 0;
        font-size: 1em;
        text-align: center;
        background-color: #ffffff11;
        border-color: #ffffff11;
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
        width: 6cm;
    }
</style>