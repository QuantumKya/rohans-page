<script lang="ts">
    let stats = [
        { label: "Projects Posted", quantity: 5 },
        { label: "- Games", quantity: 3 },
        { label: "- Math/Sci", quantity: 2 },
        { label: "- Other", quantity: 2 },
        { label: "br", quantity: 0 },
        { label: "Websites Made", quantity: 4 },
        { label: "AP Tests Taken", quantity: 3 },
    ];
</script>

<div class="font-[Undertale] pl-4 pt-4 pb-4 bg-green-900 w-[500px] min-h-[200px] h-fit float-right rounded-xl">
    <h1 class="text-xl mb-3">Statistics</h1>
    {#each stats as stat}
        {#if stat.label === "br"}
        <br>
        {:else}
        <p class="ml-5">{stat.label}: {stat.quantity}</p>
        {/if}
    {/each}
</div>