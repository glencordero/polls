<script>
    export let data
    const {questions} = data
</script>

<h1>
    {data.title}
</h1>

<main>
    <ul>
      {#each questions as question, index}
      <a href="polls/{index + 1 }/take"><li>{question}</li></a>
      {/each}
    </ul>
  </main>