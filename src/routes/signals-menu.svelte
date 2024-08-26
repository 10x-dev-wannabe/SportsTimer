<script>
    let min;
    let max;
</script>

<div id="main">
    <table>
        <th colspan="2"><p>ms between actions</p></th>
        <tr>
            <td><p>Min</p></td>
            <td><p>Max</p></td>
        </tr>
        <tr>
            <td><input type="number" bind:value={min}></td>
            <td><input type="number" bind:value={max}></td>
        </tr>
    </table>
</div>

<style>

    #main {
        position: absolute;
        width:45%;
        right: 5%;
        height: 90vh;
        background-color: #00000000;
        margin-top: 10vh;
        overflow: hidden;
        text-align: center;
    }
    tr{
        font-size: clamp(5em, 9vmin, 10em);
    }
    th {
        font-size: clamp(3em, 7vmin, 8em);
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
    
    p {
        margin: 0;
    }
</style>