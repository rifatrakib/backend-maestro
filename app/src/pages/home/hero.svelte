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
    .card {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        box-sizing: border-box;
        gap: 5rem;
        font-family: monospace;
        color: #ffffff;
        text-align: left;
        margin: 0;
    }

    .image-column {
        flex: 0 0 50%;
    }

    .text-column {
        display: flex;
        flex-direction: row;
        flex: 1;
        font-size: 1.5rem;
        font-weight: 300;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    .text-column span {
        padding-right: 10px;
        margin-top: -2px;
    }

    .hidden {
        visibility: hidden;
    }
</style>

<section class="card">
    <section class="image-column">
        <img src=".{image.link}" alt="{image.alt}" />
    </section>
    <section class="text-column">
        <span>&gt;</span>
        <p>{animatedText}<span class:hidden={!cursorVisible}>_</span></p>
    </section>
</section>
