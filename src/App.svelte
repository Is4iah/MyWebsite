<script>
	let name = 'my friends';
    const channel = '<b>for now this is empty but in a couple of days this will look awesome :D<br></br></b>'
    const headingID = 'heading'
    const id = 'headingId'
    let words = "<b> COLORS!! </b>"
    const disabled = false
    let status = true
    let promoted = false
    let br = "<br></br>"
    function changeStatus() {
        if (promoted == false)  {
            promoted = true;
        }
        else {
            promoted = false;
        }
        if (status == false)  {
            status = true;
        }
        else {
            status = false;
        }
    }

    // import Header from "./Header.svelte"
    import Navbar from './Navbar.svelte'
	import Sidebar from './Sidebar.svelte'
	import Main from './Main.svelte'
    import Text from './Text.svelte'

    import HeaderOnline from './HeaderOnline.svelte'

    let open = false

    

</script>

<main>
    <!-- <h2 class='underline'> Underlined text </h2> -->
    <!-- <h2 {id}> {headingID} </h2>  -->
    <!-- <h2 class={!promoted ? 'promoted' : ''}> Promoted </h2>
    <h2 class:promoted> Promoted </h2> -->
    
    <HeaderOnline/>

    <!-- <Sidebar bind:open/>
    <Navbar bind:sidebar={open}/>
    <Main/>
    <Text/> -->


   

	<h1>Hello {name}!</h1>
    <div>{@html channel}</div> 
    <h2 class={status ? 'win' : 'danger'} > WE ADDED A HEADER!! {@html br} </h2> 

    <button on:click={changeStatus} class='button'> {@html words} </button>


</main>


<svelte:head>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
</svelte:head>      

<style>

    .danger { 
        color: rgb(236, 13, 180);
    }

    .button{
        color: purple;
    }

    .win {
        color: blue;
        text-decoration: underline;
    }


	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #00d0ff;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>