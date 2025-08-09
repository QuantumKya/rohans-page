<script>
	import DataPoints from "$lib/DataPoints.svelte";
	import MenuGame from "$lib/MenuGame.svelte";
	import ProjectItem from "$lib/ProjectItem.svelte";
</script>


<h1 class="text-[50px]">Welcome To My Page</h1>

<DataPoints></DataPoints>

<ProjectItem name="DNA-Cryption" link="https://quantumkya.github.io/DNA-cryption/">
    <span class="flex flex-row text-[450%]">
        <img src="/dna_question.png" alt="DNA Question" class="h-[100px]">
        <p>?</p>
    </span>
    <p>In other words...</p>
    <p>Have you ever wanted to share a message using DNA?</p>
</ProjectItem>

<br>

<ProjectItem name="Template Project Block" link="">
    <p>Some stuff about the project</p>
    <p>blah blah blah</p>
</ProjectItem>