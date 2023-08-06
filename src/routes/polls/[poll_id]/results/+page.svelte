<script>
    export let data
    const {poll} = data
    import Question from "$lib/components/Question.svelte"
</script>

<Question question={poll.question}/>

