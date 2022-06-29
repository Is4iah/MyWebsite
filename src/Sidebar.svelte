<script>
	export let open = false
</script>

<aside class="absolute w-full h-full bg-gray-300 border-r-2 shadow-lg" class:open>
	<nav class="p-12 text-xl">
		<a  class="block" href="#about">About</a>
		<a  class="block" href="#contact">Contact</a>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.5s ease-in-out
	}
	
	.open {
		left: 0
	}

    .link {
        color:black;
        size: 10cm;
        font-family: "Times New Roman", Times, serif;
    }

</style>