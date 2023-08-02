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

{#each poll.options as option, index}
<input type="radio" name="choice" >
<label for="{index + 1}">{option.answer}</label><br>
{/each}

<br>
<button type=button>Submit</button>
  