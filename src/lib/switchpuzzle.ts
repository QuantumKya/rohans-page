//---- Setup ----\\

import { writable } from "svelte/store";

export class SwitchPuzzle {
    grid: number[][];
    resw: number;
    resh: number;
    cols: number;
    rows: number;

    solved = writable(false);

    color1: string;
    color2: string;

    outline: boolean;
    linecolor: string;

    constructor() {
        this.grid = [[0]];
        this.resw = 50;
        this.resh = 50;
        this.cols = 10;
        this.rows = 10;

        this.color1 = 'black';
        this.color2 = 'white';

        this.outline = true;
        this.linecolor = '#808080';
    }

    get cwidth() {
        return this.cols * this.resw;
    }

    get cheight() {
        return this.rows * this.resh;
    }

    createGrid(cols: number, rows: number, dw: number, dh: number, values?: number[][]) {
        this.cols = cols;
        this.rows = rows;
        this.resw = dw;
        this.resh = dh;

        for (let i = 0; i < this.cols; i++) {
            let arr: number[] = [];

            for (let j = 0; j < this.rows; j++) {
                if (!values) arr[j] = Math.floor(Math.random() * 2);
                else arr[j] = values[i][j];
            }

            this.grid[i] = arr;
        }
    }

    drawGrid(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        ctx.fillRect(0, 0, this.cwidth, this.cheight);

        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                let elem = this.grid[i][j];

                ctx.fillStyle = this.determineColor2(elem, "fill");
                ctx.fillRect(i * this.resw, j * this.resh, this.resw, this.resh);
            }
        }
        
        if (this.outline) {
            ctx.strokeStyle = this.linecolor;
            ctx.lineWidth = 1;
            for (let i = 1; i < this.cols; i++) {
                ctx.beginPath();
                ctx.moveTo(i*this.resw-0.5, 0);
                ctx.lineTo(i*this.resw+0.5, this.cheight);
                ctx.stroke();
            }
            for (let j = 1; j < this.rows; j++) {
                ctx.beginPath();
                ctx.moveTo(0, j*this.resw-0.5);
                ctx.lineTo(this.cwidth, j*this.resw-0.5);
                ctx.stroke();
            }
        };
    }

    toggleColor2(i: number, j: number) {
        this.grid[i][j] = this.grid[i][j] === 0 ? 1 : 0;
        this.solved.set(this.grid.flat().every(cell => cell === 1));
    }

    determineColor2(elem: number, type: string) {
        if (type === "fill") {
            return elem === 0 ? this.color1 : this.color2;
        }
        else {
            return "red";
        }
    }

    runPuzzle() {
        const canvas = document.getElementById("kansas") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        ctx.imageSmoothingEnabled = false;

        canvas.addEventListener("click", (event) => {
            const mouseX = event.clientX - canvas.getBoundingClientRect().left;
            const mouseY = event.clientY - canvas.getBoundingClientRect().top;
            
            let i = Math.floor(mouseX / this.resw);
            let j = Math.floor(mouseY / this.resh);

            if (i < 0 || j < 0 ||
                i >= this.cols ||
                j >= this.rows
            ) return;

            for (const z of click_toggle) {
                if (i + z.x >= this.cols ||
                    i + z.x < 0 ||
                    j + z.y >= this.rows ||
                    j + z.y < 0
                ) continue;
                this.toggleColor2(i + z.x, j + z.y);
            }

            this.drawGrid(ctx);
        });

        this.drawGrid(ctx);
    };
}



//---- Func Nation ---\\

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

/* function toggleColor3(elem: number) {
    grid[i][j] = (grid[i][j] === 2) ? 0 : elem + 1;
} */

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
