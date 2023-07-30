<script>
    export let data
    import Brief from "$lib/components/Brief.svelte"
</script>

<Brief version={data.version} title={data.title}/>