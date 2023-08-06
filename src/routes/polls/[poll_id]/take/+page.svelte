<script>
    import Question from '$lib/components/Question.svelte'
    export let data
    const {poll} = data
</script>

<h1>
    {data.title}
</h1>

<Question question={poll.question}/>

{#each poll.options as option, index}
<input type="radio" name="choice" >
<label for="{index + 1}">{option.answer}</label><br>
{/each}

<br>
<button type=button>Submit</button>


  