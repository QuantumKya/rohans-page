<script lang="ts">
    const CWIDTH = 800;
    const CHEIGHT = 600;

    let ctx: CanvasRenderingContext2D;

    function init() {
        let canvas = document.querySelector('canvas');
        if (canvas?.getContext('2d'))
            ctx = canvas.getContext('2d') ?? ctx;
        if (ctx === null || ctx === undefined) throw new Error('canvas context not found');

        draw();
    }

    function draw() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, CWIDTH, CHEIGHT);

        requestAnimationFrame(draw);
    }
</script>

<canvas width={CWIDTH} height={CHEIGHT}></canvas>
<button onclick={init}>Open Canvas</button>