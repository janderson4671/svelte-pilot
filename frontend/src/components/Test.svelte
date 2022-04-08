<script>

    export let data = {
        text: "merp"
    }

    
</script>

<h1>{data.text}</h1>
<input bind:value={data.text}>