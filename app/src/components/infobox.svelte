<script>
    import { onMount } from 'svelte';

    export let image;
    export let textContent;

    let animatedText = '';
    let cursorVisible = true;
    let isComplete = false;
    let timeoutId;

    onMount(() => {
        typeText();
        startCursorBlink();
    });

    function typeText() {
        let index = 0;
        let timeout;

        function typeNextCharacter() {
            animatedText = textContent.slice(0, index);
            index++;

            if (index <= textContent.length) {
                timeout = Math.floor(Math.random() * Math.random() * (500 - 200 + 1));
                timeoutId = setTimeout(typeNextCharacter, timeout);
            } else {
                isComplete = true;
            }
        }

        typeNextCharacter();
    }

    function startCursorBlink() {
        const intervalId = setInterval(() => {
            cursorVisible = !cursorVisible;
            if (isComplete) {
                cursorVisible = false;
                clearInterval(intervalId);
                clearTimeout(timeoutId);
            }
        }, 100);
    }
</script>

<style>
    .card-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px;
    }

    .card {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        width: calc(100% - 20px);
        box-sizing: border-box;
        margin-bottom: 10px;
    }

    .image-column {
        flex: 0 0 50%;
        margin-right: 10px;
    }

    .text-column {
        flex: 1;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    p {
        font-size: 1.75rem;
        font-weight: 500;
        font-family: inherit;
        color: #ffffff;
        margin: 0;
    }
</style>

<div class="card-container">
    <div class="card">
        <div class="image-column">
            <img src="{image.link}" alt="{image.alt}" />
        </div>
        <div class="text-column">
            <p>{animatedText}<span style="visibility: {cursorVisible ? 'visible' : 'hidden'}">|</span></p>
        </div>
    </div>
</div>
