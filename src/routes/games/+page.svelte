<script lang="ts">
    import { onMount } from "svelte";
    import { SwitchPuzzle } from "$lib/switchpuzzle";

    const realgames = [
        { text: "Ruby Mine", image: "games/ruby-mine-icon.png", link: "https://ruby.quantumkya.dev" },
        { text: "Euclidia", image: "games/euclidia.png", link: "https://quantumkya.itch.io/euclidia" }
    ];

    let swchcanvas: HTMLCanvasElement;
    const swchpzl = $state(new SwitchPuzzle());
    const swchpzlsolved = $derived(swchpzl.solved);

    onMount(() => {
        swchpzl.createGrid(3, 3, 50, 50, [[0, 1, 0], [1, 0, 1], [0, 1, 0]]);
        swchpzl.outline = true;
        swchpzl.runPuzzle();
    });

    $effect(() => {
        if ($swchpzlsolved) {
            swchcanvas.style.pointerEvents = 'none';
            swchcanvas.style.opacity = '0';
        }
    });
</script>

<svelte:head>
    <style>
        #kansas {
            transition: opacity 1s ease-in;
            image-rendering: pixelated;
        }
    </style>
</svelte:head>

<div class="pl-5 pr-3 pt-3 relative bg-linear-to-b from-green-600 to-[100vh] to-green-950 min-h-[100vh]">
    <h1 class="text-6xl">games</h1>
    <p>Games I've made.</p>

    <div class="mt-6">
        <div style="image-rendering: pixelated;" class="p-8 flex flex-row gap-8">
            {#each realgames as game}
                <div class="w-fit text-center items-center flex flex-col">
                    <a href={game.link}>
                        <img src={game.image} alt={game.text} class="cool-image h-[128px]">
                        <p class="font-[Deltarune] text-shadow-black text-shadow-md shrink max-w-[128px]">{game.text}</p>
                    </a>
                </div>
            {/each}
        </div>
    </div>

    <div class="h-fit w-fit absolute right-[100px] bottom-[300px]">
        <canvas width={swchpzl.cwidth} height={swchpzl.cheight} id="kansas" bind:this={swchcanvas}
        class="z-20 absolute w-fit"></canvas>

        <div style="image-rendering: pixelated;"
        class="z-10 translate-x-[65%] translate-y-[10%] w-fit flex flex-col text-center items-center">
            <a href="/games/switchpuzzle">
                <img src="games/laswitch.png" alt="Switch Puzzle" class="cool-image h-[64px]">
                <p class="font-[Deltarune] text-shadow-black text-shadow-md shrink max-w-[64px]">Switch Puzzle</p>
            </a>
        </div>
    </div>
</div>