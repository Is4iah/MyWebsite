<script>
	let name = 'my friends';
    const channel = '<b>for now this is empty but in a couple of days this will look awesome :D<br></br></b>'
    const headingID = 'heading'
    const id = 'headingId'
    let words = "<b> COLORS!! </b>"
    // const disabled = false
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

    

</script>

<main>
    <!-- <h2 class='underline'> Underlined text </h2> -->
    <!-- <h2 {id}> {headingID} </h2>  -->
    <!-- <h2 class={!promoted ? 'promoted' : ''}> Promoted </h2>
    <h2 class:promoted> Promoted </h2> -->




	<h1>{@html br}Hello {name}!</h1>
    <div>{@html channel}</div> 
    <h2 class={status ? 'win' : 'danger'} > AWESOME {@html br} </h2> 

    <button on:click={changeStatus} class='button'> {@html words} </button>


</main>

<style>
    .underline{ 
        text-decoration: underline;
    }

    .danger { 
        color: red;
    }

    .button{
        color: purple;
    }

    .win {
        color: blue;
        text-decoration: underline;
    }

    .promoted{
        font-style: italic;
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