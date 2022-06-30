<script>
//    import { background_ } from 'store';
	import Navbar from './Navbar.svelte'
    
	import Sidebar from './Sidebar.svelte'
	import Main from './Main.svelte'
    import Text from './Text.svelte'
    // import { background } from 'store';
    

	let open = false
</script>

<Sidebar bind:open/>
<Navbar bind:sidebar={open}/>
<Main/>
<Text/>



<svelte:head>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
</svelte:head>

<style>
	:global(body) {
		background: white;
	}
      


    
</style>