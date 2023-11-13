<script>
    import { onMount } from 'svelte';

    export let image;
    export let sentences;

    let animatedText = '';
    let cursorVisible = true;

    onMount(() => {
        typeText();
        startCursorBlink();
    });

    function typeText() {
        let sentenceIndex = 0;
        let index = 0;
        let timeout;

        const typeNextCharacter = () => {
            let sentence = sentences[sentenceIndex];
            animatedText = sentence.slice(0, index) + ' ';
            index++;

            if (index <= sentence.length) {
                timeout = Math.floor(Math.random() * Math.random() * (500 - 200 + 1));
                setTimeout(typeNextCharacter, timeout);
            } else {
                index = 0;
                sentenceIndex = (sentenceIndex + 1) % sentences.length;
                setTimeout(typeNextCharacter, (sentenceIndex === 0) ? 2500 : 1000);
            }
        }

        typeNextCharacter();
    }

    function startCursorBlink() {
        setInterval(() => {
            cursorVisible = !cursorVisible;
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
            <p>{animatedText}<span style="visibility: {cursorVisible ? 'visible' : 'hidden'}">_</span></p>
        </div>
    </div>
</div>
