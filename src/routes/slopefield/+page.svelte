<svelte:head>
    <!-- <title>Slope Field Visualisation</title> -->
    <script src="slopefield/localcode.js" defer></script>
</svelte:head>

<style>
    .update-block {
        display: block;
        border: 0.25rem solid;
        width: fit-content;
        padding-right: 20px;
        padding-left: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    #update-list {
        position: absolute;
        left: 700px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    #update-list .line {
        border-left: 0.25rem solid;
        align-content: start;
        font-size: 75%;
        vertical-align: middle;
    }

    #update-list .line div {
        display: inline-block;
        border: 2px solid;
        width: 2px;
        height: 0px;
    }
</style>

<div class="pl-5 pr-3 pt-3 relative bg-linear-to-b from-green-600 to-[100vh] to-green-950 min-h-[100vh]">
    <h1 class="text-6xl">slope field visualisation v1.2</h1>
    <p>A feature-ful differential equations visualiser.</p>

    <iframe src="/slopefield/index.html" class="mt-2 mb-4 border-2 border-white" width="1280" height="1080" title=""></iframe>

    <div id="update-list">
        <span class="update-block">
            <h2>Update 1.2 Changes</h2>
            <p>A <i>whole new type</i> of flow diagram!</p>
            <p>Added faster movement with the SHIFT key, and a reset button.</p>
            <p>You can <i>finally</i> hide the controls text by pressing C.</p>
            <p>Fixed every error I could find, so things work (near) perfectly.</p>
        </span>
        <div class="line" style="height: 50px;">
            <div></div>
            <i>4/3/25</i>
        </div>
        <span class="update-block">
            <h2>Update 1.0.1 Changes</h2>
            <p>Now allows usage of Euler's constant <i>e</i>!</p>
            <p>Made flowing lines longer to show more data!</p>
        </span>
        <div class="line" style="height: 50px;">
            <div></div>
            <i>3/29/25</i>
        </div>
        <span class="update-block">
            <h2>Update 1.0.0 Changes</h2>
            <p>I made this program!</p>
            <p>compiled to WebAssembly,</p>
            <p>Put it in this page.</p>
        </span>
        <div class="line" style="height: 20px;">
            <div></div>
            <i>3/28/25</i>
        </div>
    </div>

    <span class="reltive w-fit border-4 block pl-5 pr-5 pt-3 pb-3 bg-green-950">
        <h2 class="text-2xl">Instructions and Allowed Functions</h2>

        <hr class="border-2 border-white mt-3 mb-3">

        <p>Whatever you enter will be set equal to dy/dx.</p>
        <p>You can use x and y in your equation!</p>
        <p>Functions like sin(x) MUST have parentheses.</p>
        <p>If your input is invalid, it will return the function 0.</p>
        <br>
        <p>As of v1.0.1, the number e can be used.</p>

        <hr class="border-2 border-white mt-3 mb-3">

        <h3 class="text-xl">Allowed Functions</h3>
        <p>ordinary trig functions:</p>
        <code class="pl-3">i.e. sin, cos, tan</code>
        <p>complementary trig functions:</p>
        <code class="pl-3">i.e. sec, csc, cot</code>
        <p>inverse trig functions (only sin, cos, tan):</p>
        <code class="pl-3">i.e. asin, acos, atan</code>
        <p>exponential functions and natural logarithm:</p>
        <code class="pl-3">i.e. 2^x, e^x, log(x)</code>

        <hr class="border-2 border-white mt-3 mb-3">

        <h4>I used the <i>fparser</i> library for user input.</h4>
        <h4>Thank you to its developers!</h4>
        <p style="font-size: 75%;">Find it at <a href="http://warp.povusers.org/FunctionParser/fparser.html">http://warp.povusers.org/FunctionParser/fparser.html</a></p>
    </span>
</div>

<!--
cd C:\Programming\devisual\DEvisualisation\DEvisualisation\src
em++ main.cpp fparser/fparser.cc fparser/fpoptimizer.cc -I C:/raylib/raylib/src C:/raylib/raylib/src/libraylib.a -sASYNCIFY -sUSE_GLFW=3 -Os -o index.html
em++ -std=c++20 main.cpp fparser/fparser.cc fparser/fpoptimizer.cc -I C:/raylib/raylib/src C:/raylib/raylib/src/libraylib.a -sASYNCIFY -sUSE_GLFW=3 -Os -o index.html
-->