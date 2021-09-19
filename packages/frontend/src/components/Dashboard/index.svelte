<script lang="ts">
import { onMount } from "svelte";
import LoginService from "./handleLogin";


    export let code: string;
    let data;

    const authService = new LoginService(code)

    onMount(async()=>{
        history.pushState({}, null, '/')
        data = await authService.getAccessToken()

    })
</script>
{#if !data}
<p>Loading</p>
{:else}
{JSON.stringify(data)}
{/if}


