<h1>Welcome to SvelteKit</h1>
{#if !code}
<a href={url}>Login</a>
{:else}
<Dashboard {code}/>
{/if}

<script lang="ts">
     import { page } from '$app/stores'
     import Dashboard from '../components/Dashboard/index.svelte';

    const code = $page.query.get('code')
    const clientID = import.meta.env.VITE_CLIENT_ID
    const redirectURI = import.meta.env.VITE_REDIRECT_URI
    

    const url = 'https://accounts.spotify.com/authorize' +  '?response_type=code' +  '&client_id=' + clientID +  '&redirect_uri=' + redirectURI

</script>
