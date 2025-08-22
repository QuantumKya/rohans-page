<script lang="ts">
    let stats = [
        { label: "Projects Posted", quantity: 7 },
        { label: "- Games", quantity: 3 },
        { label: "- Math/Sci", quantity: 2 },
        { label: "- Other", quantity: 2 },
        { label: "br", quantity: 0 },
        { label: "Pages Made", quantity: 4 },
        { label: "AP Tests Taken", quantity: 3 },
    ];
</script>

<div class="p-4 pr-5 bg-green-900 max-w-[600px] min-h-[200px] h-fit float-right rounded-xl border-2 border-green-700">
    <h1 class="text-2xl mb-3">Statistics</h1>
    {#each stats as stat}
        {#if stat.label === "br"}
        <br>
        {:else}
        <p class="ml-4">{stat.label}: {stat.quantity}</p>
        {/if}
    {/each}
</div>