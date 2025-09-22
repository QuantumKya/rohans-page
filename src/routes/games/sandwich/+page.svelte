<svelte:head>
    <script src="sandwich/script.js" defer></script>
</svelte:head>

<div class="pl-5 pr-3 pt-3 relative bg-linear-to-b from-green-600 to-[100vh] to-green-950 min-h-[100vh]">
    <h1 class="text-6xl">sandwich clicker</h1>
    <p>Cookie Clicker-like time-waster.</p>

    <button aria-label="sandwich" onclick={Game.earn(1)}>
        <img id="clickSandwich" width=400 height=400 src="sandwich/sandwich_image.png" alt="sandwich">
    </button>

    <img id="kf51" width="200" height="100" src="sandwich/kf51.png" alt="kf51">
    
    <p id="NOSdisplay" style="font-size: 200%;">0</p>
    <p id="SPSdisplay" style="font-size: 150%;">0</p>
    <p id="LoavesDisplay" style="font-size: 150%;">0</p>

    <span>
        <button id="bakeryButton" type="button" onclick={Game.buyBakery(1)}>Buy Bakery (15)</button>
    </span>

    <p id="NOBdisplay" style="font-size: 100%;"></p>

    <span>
        <button id="deliButton" type="button" onclick={Game.buyDeli(1)}>Buy Bakery (15)</button>
    </span>

    <p id="DeliDisplay" style="font-size: 100%;"></p>
</div>