<script>
    export let data
    const {poll} = data
</script>

<h1>
    {data.title}
</h1>

<h2>
    {poll.question}
</h2>

{#each poll.options as option}
<p>{option.answer}</p>
{/each}

