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

</script>

<div id="main">
    <button on:click={makeAction}>Add action</button>
    <table>
        <tr>
            <td>color</td>
            <td><input type="color" bind:value={color}></td>
        </tr>
        <tr>
            <td>text</td>
            <td><input type="textfield" bind:value={text}></td>
        </tr>
    </table>
    <table>
        <th colspan="2"><p>seconds between actions</p></th>
        <tr>
            <td><p>Min</p></td>
            <td><p>Max</p></td>
        </tr>
        <tr>
            <td><input type="number" bind:value={$mint}></td>
            <td><input type="number" bind:value={$maxt}></td>
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
        text-align: left;
    }
    tr{
        font-size: clamp(2em, 6vmin, 7em);
    }
    th {
        font-size: clamp(2em, 6vmin, 7em);
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

    button {
        width: clamp(4em, 60vw, 20cm)
    }

</style>
