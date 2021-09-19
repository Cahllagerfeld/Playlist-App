<h1>Welcome to SvelteKit</h1>
{#if !code}
<a href={url}>Login</a>
{:else}
<p>{code}</p>
{/if}

<script lang="ts">
     import { page } from '$app/stores'

    const code = $page.query.get('code')
    const clientID = import.meta.env.VITE_CLIENT_ID
    const redirectURI = import.meta.env.VITE_REDIRECT_URI
    

    const url = 'https://accounts.spotify.com/authorize' +  '?response_type=code' +  '&client_id=' + clientID +  '&redirect_uri=' + redirectURI

</script>
