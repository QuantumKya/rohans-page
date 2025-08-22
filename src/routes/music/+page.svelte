<script lang="ts">
    const songModes = {
        shortlong: {
            short: [
                { name: "Cool-Sounding Loop", filename: "song1.wav", date: "1/9/2025" },
                { name: "Card Get", filename: "card_get.mp3", date: "7/2/2025" },
            ],
            long: [
                { name: "Kirby Plaigarism", filename: "band_comp_8th.mp3", date: "5/23/2024" },
                { name: "Epic Battle", filename: "EpicBattle.mp3", date: "12/21/2022" },
            ]
        },
        chrono: [
            { name: "Epic Battle", filename: "EpicBattle.mp3", date: "12/21/2022" },
            { name: "Kirby Plaigarism", filename: "band_comp_8th.mp3", date: "5/23/2024" },
            { name: "Cool-Sounding Loop", filename: "song1.wav", date: "1/9/2025" },
            { name: "Card Get", filename: "card_get.mp3", date: "7/2/2025" },
        ]
    };

    let viewMode = $state();
</script>

<div class="pl-5 pr-3 pt-3 relative bg-linear-to-b from-green-600 to-[100vh] to-green-950 min-h-[100vh]">
    <h1 class="text-6xl">music</h1>
    <p>Music I've made.</p>

    <span class="bg-neutral-700 text-white p-1 rounded-md">
        <label for="view-select">Select layout mode:</label>
        <select bind:value={viewMode} id="view-select" class="bg-neutral-700 text-white">
            <option value=0 selected>Default</option>
            <option value=1>Chronologically</option>
            <option value=2>Reverse Chrono.</option>
        </select>
    </span>

    <div class="flex flex-row gap-5 mt-10">

        {#if viewMode == 0}

            <div class="p-3 pb-5 flex flex-col gap-4 border-4 rounded-lg border-gray-700 bg-gray-500 w-fit">
                <p class="text-2xl">short snippets</p>
            {#each songModes.shortlong.short as song}
                <div class="pl-2">
                    <p>{song.name}</p>
                    <p class="text-sm">"{song.filename}" - {song.date}</p>
                    <audio controls src="/music/{song.filename}"></audio>
                </div>
            {/each}
            </div>
        
            <div class="p-3 pb-5 flex flex-col gap-4 border-4 rounded-lg border-gray-700 bg-gray-500 w-fit">
                <p class="text-2xl">full(er) songs</p>
            {#each songModes.shortlong.long as song}
                <div class="pl-2">
                    <p>{song.name}</p>
                    <p class="text-sm">"{song.filename}" - {song.date}</p>
                    <audio controls src="/music/{song.filename}"></audio>
                </div>
            {/each}
            </div>
        
        {:else if viewMode == 1}

            <div>
            {#each songModes.chrono as song}
                <div class="pl-2">
                    <p>{song.name}</p>
                    <p class="text-sm">"{song.filename}" - {song.date}</p>
                    <audio controls src="/music/{song.filename}"></audio>
                </div>
            {/each}
            </div>

        {:else if viewMode == 2}

            <div>
            {#each songModes.chrono.toReversed() as song}
                <div class="pl-2">
                    <p>{song.name}</p>
                    <p class="text-sm">"{song.filename}" - {song.date}</p>
                    <audio controls src="/music/{song.filename}"></audio>
                </div>
            {/each}
            </div>

        {/if}

    </div>

</div>