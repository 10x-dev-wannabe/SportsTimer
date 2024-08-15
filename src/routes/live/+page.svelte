<script>
    import { timer } from "../stores";
    let time = 6000;
    let sets = $timer.sets;
    $: m = Math.trunc(time / 60000);
    $: s = Math.trunc(time % 60000 / 1000);

    let bg = "#55bbdd";
    let interval;
    let status = "GET READY";

    function start(){
        interval = setInterval(clock, 10)
    }
    function clock(){
        time-= 10;
    }
    $: if(time<=0){
        bg = "#0c0";
        clearInterval(interval);
    }


    $: style="background-color:"+bg;
</script>


<whomp style={style}>


<a id="stop" href="/" style="margin: 0; padding-top:0; line-height:1px yindex=-1">
        &#10799;
</a>

<br>
<br>
    <time style="color: #fff;" on:load={start()}>
        {m}:{s}<br>
    </time>
    <status>
        {status}
    </status>
</whomp>

<style>
    status {
        font-size:10vh;
        font-weight: 600;
        position: absolute;
        left:auto;
        bottom:10vh;
        transform: translateX(-50%);
    }

    whomp {
        width: 100vw;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
    }
    
    time {
        font-size: 25vw;
        position: absolute;
        top: 50%;
        left: auto;
        transform: translateX(-50%) translateY(-70%);

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