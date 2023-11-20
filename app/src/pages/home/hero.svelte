<script>
    import { onDestroy, onMount } from 'svelte';
    import { heroStore } from './store.js';

    let image;
    let sentences;
    const unsubscribe = heroStore.subscribe(value => {
        image = value.image;
        sentences = value.sentences;
    });

    onDestroy(() => unsubscribe());

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
            animatedText = sentence.slice(0, index);
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
        margin: 3rem auto 6rem;
        background-color: #1c1c1c;
        border-radius: 10px;
        padding: 3rem;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    }

    .card {
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(100% - 20px);
        box-sizing: border-box;
        gap: 5rem;
    }

    .image-column {
        flex: 0 0 50%;
    }

    .text-column {
        display: flex;
        flex-direction: row;
        flex: 1;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    p {
        font-size: 1.75rem;
        font-weight: 500;
        font-family: Consolas;
        color: #ffffff;
        margin: 0;
        text-align: left;
    }

    .text-column span {
        font-size: 1.75rem;
        font-weight: 900;
        font-family: Consolas;
        color: #ffffff;
        margin: 0;
        text-align: left;
        padding-right: 10px;
        margin-top: -2px;
    }
</style>

<div class="card-container">
    <div class="card">
        <div class="image-column">
            <img src="{image.link}" alt="{image.alt}" />
        </div>
        <div class="text-column">
            <span>&gt;</span>
            <p>{animatedText}<span style="visibility: {cursorVisible ? 'visible' : 'hidden'}">_</span></p>
        </div>
    </div>
</div>
