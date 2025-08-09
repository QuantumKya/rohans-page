<script lang="ts">
    const { name, link } = $props();
</script>

<div class="bg-linear-to-b from-green-800 to-70% to-green-950 w-fit rounded-md p-3">

    <div class="font-[Deltarune] text-3xl flex flex-row">
        <h1><a href={link}>{name}</a></h1>
        <img src="/click_me.png" alt="Click Me!" class="h-[100%]">
    </div>

    <span class="flex flex-row gap-2 p-2 w-full">
        <div class="bg-white rounded-full w-[10px]"></div>
        <div class="bg-green-700 rounded-xl p-5 w-full">
            <slot></slot>
        </div>
    </span>
    
</div>