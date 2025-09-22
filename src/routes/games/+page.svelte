<script lang="ts">
    const timewasters = [
        { text: "Sandwich Clicker", image: "games/sandwich/sandwich_image.png", link: "/games/sandwich" },
        { text: "Lights Out", image: "games/laswitch.png", link: "/games/lightsout" },
    ];

    const realgames = [
        { text: "Ruby Mine", image: "games/ruby-mine-icon.png", link: "https://ruby.quantumkya.dev" }
    ];
</script>

<div class="pl-5 pr-3 pt-3 relative bg-linear-to-b from-green-600 to-[100vh] to-green-950 min-h-[100vh]">
    <h1 class="text-6xl">games</h1>
    <p>Games I've made.</p>

    <div class="mt-6">
        <h1 class="text-3xl">Real Games</h1>

        <div style="image-rendering: pixelated;" class="p-8">
            {#each realgames as game}
                <div class="w-fit">
                    <a href={game.link}>
                        <img src={game.image} alt={game.text} class="cool-image w-[150px]">
                        <p class="font-[Deltarune] text-center text-shadow-black text-shadow-md">{game.text}</p>
                    </a>
                </div>
            {/each}
        </div>

        <h1 class="text-3xl mt-5">Time Wasters</h1>

        <div style="image-rendering: pixelated;" class="p-8 flex flex-row gap-5">
            {#each timewasters as game}
                <div class="w-fit">
                    <a href={game.link}>
                        <img src={game.image} alt={game.text} class="cool-image w-[125px]">
                        <p class="font-[Deltarune] text-center text-shadow-black text-shadow-md">{game.text}</p>
                    </a>
                </div>
            {/each}
        </div>
    </div>
</div>