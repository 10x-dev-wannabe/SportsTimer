<script>
    import { timer } from "../stores";
    let time = $timer.work;

    $: m = Math.trunc(time / 6000)
    $: s = time % 6000 / 100
    $: hs = time % 100
</script>

<a id="stop" href="/" style="margin: 0; padding-top:0; line-height:1px">
        &#10799;
</a>

<br>
<br>
    <time style="color: #fff;">
        {$timer.work}
        {m}:
        {s}.
        {hs}
    </time>

<style>
    time {
        font-size: 5em;
    }
    #stop {
        color: #fff;
        text-decoration: none;
        position: absolute;
        top: 6vmin;
        left: 6vmin;
        padding: none;
        background-color: #00000000;
        width: auto;
        height: auto;
        font-size: 10em;
        border: none;
    }
</style>