<script>
    import { goto } from "$app/navigation";
    import { timer } from "../stores";
    import {Howl, Howler} from 'howler';
    
    // Import and create the sound
    import beep from '$lib/beep.mp3';
    const beepH = new Howl({
        src: beep,
    })

    // Get-Ready time
    let time = 5000;
    // Get minutes and seconds
    $: m = Math.trunc(time / 60000);
    $: s = Math.ceil(time % 60000 / 1000);

    
    let sets = $timer.sets;
    let bg = "#55bbdd";
    let status = "GET READY";
    let interval;

    // Set an interval for the GET READY phase,
    // that decrements the time variable.
    function start(){
        interval = setInterval(()=>time-=10, 10);
    }
    function clock(){
        time-= 10;
    }


    // When phase ends, play sound, clear interval,
    // go to next phase, reset the time, start a new interval,
    // and change the background color.
    // Go back home if no sets left
    $: if(time<=0){
        beepH.play();
        clearInterval(interval);
        if (sets != 0){
            if (status === "GET READY" || status === "rest" ) {
                status = "work";
                time = $timer.work;
                interval = setInterval(()=>time-=10, 10);
                sets--;
                bg = "#3c3";
            } else if (status === "work") {
                status = "rest";
                time = $timer.rest;
                interval = setInterval(()=>time-=10, 10);
                bg = "#707"
        }} else {
            beepH.play();
            goto("/")
        }
    }

    // format bg so it works
    $: style="background-color:"+bg;
</script>

<whomp style={style}>
<a id="stop" href="/" style="margin: 0; padding-top:0; line-height:1px yindex=-1">
        &#10799;
</a>

<br>
<br>
    <sets>{sets}</sets>
    <time style="color: #fff;" on:load={start()}>
        {m<10 ? "0"+m : m}:{s<10 ? "0"+s : s}<br>
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
    
    time, sets{
        font-size: 25vmin;
        position: absolute;
        top: 50%;
        left: auto;
        transform: translateX(-50%) translateY(-70%);
    }
    sets{
        top:20vh
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