<script>
	import DataPoints from "$lib/DataPoints.svelte";
	import ProjectItem from "$lib/ProjectItem.svelte";

    const showoff = [
        { text: "Pixel Art", image: "/pixelart/ricewyellowcurry.png", link: "/pixelart" },
        { text: "Games", image: "/pixelart/ricewyellowcurry.png", link: "/games" },
        { text: "Music", image: "/pixelart/notes.gif", link: "/music" },
    ];
</script>


<div class="pl-5 pr-3 pt-3 relative bg-linear-to-b from-green-600 to-[100vh] to-green-950 min-h-[100vh]">
    <DataPoints></DataPoints>

    <h1 class="text-6xl">quantumkya.dev</h1>
    <p>This is my new site, full of projects and games and stuff.</p>

    <div>
        {#each showoff as off}
            <div class="w-fit">
                <a href={off.link}>
                    <img src={off.image} alt={off.text} class="cool-image w-[150px]">
                    <p class="font-[Deltarune] text-center -mt-6 text-shadow-black text-shadow-md">{off.text}</p>
                </a>
            </div>
        {/each}
    </div>


    <div class="-ml-5 -mr-3 mt-[70vh] pl-4 w-full">
        <h1 class="text-6xl pl-2 pb-2 mb-4">Old Projects</h1>

        <div class="flex flex-row flex-wrap gap-10">
            <ProjectItem name="DNA-Cryption" link="https://quantumkya.github.io/DNA-cryption/" date="Jun. 30th, 2025">
                {#snippet contents()}
                    <span class="flex flex-row text-[450%]">
                        <img src="/dna_question.png" alt="DNA Question" class="h-[100px]">
                        <p>?</p>
                    </span>
                    <p>In other words...</p>
                    <p>Have you ever wanted to share a message using DNA?</p>
                {/snippet}
            </ProjectItem>

            <ProjectItem name="Differential Equation Visualizer" link="https://rohanqk6028.vercel.app/slopefield/index.html" date="Mar/Apr 2025">
                {#snippet contents()}
                    <p>Enter a function of x and y, and recieve a slope field diagram of your DE!</p>
                    <pre>dy/dx = &lbrace;given function&rbrace;</pre>
                    <p>Includes points and lines that follow the slope field.</p>
                {/snippet}
            </ProjectItem>

            <ProjectItem name="Ruby Mine" link="https://ruby.quantumkya.dev" date="Jul. 23rd, 2025">
                {#snippet contents()}
                    <p>A Cookie Clicker-inspired incremental game!</p>
                    <p>I made it in Ruby on Rails for the Railway YSWS.</p>
                {/snippet}
            </ProjectItem>
        </div>

        <div class="relative h-fit mt-[700px] pb-10">
            <h1 class="text-6xl font-extrabold text-center">The Dump</h1>
            <p class="text-xl text-center mt-1">stuff I've given up on</p>
            
            <img src="/trash-pile.png" alt="Trash Pile" class="bottom-0" style="image-rendering: pixelated; width: 75%;">
            
            <ProjectItem name="Stupid Toggle Puzzle" link="https://rohanqk6028.vercel.app/lights_out.html" date="A long time ago" css="absolute -translate-y-[300px] translate-x-[180px] rotate-[-10deg]">
                {#snippet contents()}
                    <p>That annoying puzzle from Link's Awakening.</p>
                {/snippet}
            </ProjectItem>

            <ProjectItem name="Sandwich Clicker" link="https://rohanqk6028.vercel.app/sandwich/main.html" date="A long time ago" css="absolute -translate-y-[350px] translate-x-[600px] rotate-[30deg]">
                {#snippet contents()}
                    <p>Another Cookie Clicker clone.</p>
                {/snippet}
            </ProjectItem>

            <a class="absolute right-0 bottom-0 -mr-3" href="https://rohanqk6028.vercel.app/"><img src="/old-site.png" alt="Old Site Link" class="w-[160px]" style="image-rendering: pixelated;"></a>
        </div>
    </div>
</div>