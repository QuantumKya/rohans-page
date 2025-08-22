<script lang="ts">
  import { onMount } from "svelte";
  import { draw } from "svelte/transition";

//---- Setup ----\\

const cwidth = 500;
const cheight = 500;

const res = 50;
const cols = cwidth / res;
const rows = cheight / res;
const grid: number[][] = [];



//---- Func Nation ---\\

function createGrid(cols: number, rows: number) {
    for (let i = 0; i < cols; i++) {
        let arr: number[] = [];

        for (let j = 0; j < rows; j++) {
            arr[j] = Math.floor(Math.random() * 2);
        }

        grid[i] = arr;
    }
}

function drawGrid(ctx: CanvasRenderingContext2D) {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let elem = grid[i][j];

            ctx.fillStyle = determineColor2(elem, "fill");
            ctx.strokeStyle = determineColor2(elem, "stroke");
            ctx.fillRect(i * res, j * res, res, res);
            ctx.strokeRect(i * res, j * res, res, res);
        }
    }
}

/* function drawGrid3() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let elem = grid[i][j];

            ctx.fillStyle = determineColor3(elem);
            ctx.strokeStyle = "black";
            ctx.fillRect(i * res, j * res, res, res);
            ctx.strokeRect(i * res, j * res, res, res);
        }
    }
} */

function toggleColor2(i: number, j: number) {
    grid[i][j] = grid[i][j] === 0 ? 1 : 0;
}

/* function toggleColor3(elem: number) {
    grid[i][j] = (grid[i][j] === 2) ? 0 : elem + 1;
} */

function determineColor2(elem: number, type: string) {
    if (type === "fill") {
        return elem === 0 ? "white" : "black";
    }
    else if (type === "stroke") {
        return elem === 0 ? "black" : "white";
    }
    else {
        return "red";
    }
}

/* function determineColor3(elem: number) {
    switch (elem) {
        case 0:
            return "red";
        case 1:
            return "blue";
        case 2:
            return "yellow";
    }
} */



//---- Event Listeners ----\\

const click_toggle = [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 }
];



//---- Run ----\\

onMount(() => {
    const canvas = document.getElementById("kansas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.addEventListener("click", (event) => {
        const mouseX = event.clientX - canvas.getBoundingClientRect().left;
        const mouseY = event.clientY - canvas.getBoundingClientRect().top;
        
        let i = Math.floor(mouseX / res);
        let j = Math.floor(mouseY / res);

        for (const z of click_toggle) {
            if (i + z.x >= cols ||
                i + z.x < 0 ||
                j + z.y >= rows ||
                j + z.y < 0
            ) continue;
            toggleColor2(i + z.x, j + z.y);
        }

        drawGrid(ctx);
    });

    createGrid(cols, rows);
    drawGrid(ctx);
});
</script>

<div class="pl-5 pr-3 pt-3 relative bg-linear-to-b from-green-600 to-[100vh] to-green-950 min-h-[100vh]">
    <canvas id="kansas" width={cwidth} height={cheight}></canvas>
    <p>make all the squares black</p>
    <p>WARNING: this puzzle has a high chance to be generated in an unsolvable state. Sorry! It'll be fixed at some point.</p>
</div>