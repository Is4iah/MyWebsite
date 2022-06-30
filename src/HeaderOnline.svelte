<script>
    import Hamburger from './Hamburger.svelte'
    export let open = false
</script> 



<header>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <title> </title>
    <div class="logo_container"> 

        <button class:open on:click={() => open = !open}>
            <svg width=32 height=20>
                <line id="top" x1=0 y1=30  x2=20 y2=0/>
                <line id="middle" x1=11 y1=12 x2=30 y2=12/>
                <line id="bottom" x1=20 y1=0 x2=32 y2=30/>
            </svg>
        </button>

        <h1>Isaiah<span>Andablo</span></h1>
    </div>
    <div class="inner_header"> 
        <ul class="navigation">
            <a><li>home</li></a>
            <a><li>about</li></a>
            <a><li>Portfolio</li></a>
            <a><li>contact</li></a>
        </ul>
    </div>


</header>




<style>
    /* you want to use 100% so it is responsive to all monitors */
    * {
        margin: 0;
        padding: 0;
        list-style: none; 
        text-decoration: none;
    }

    header {
        width: 100%;
        height: 80px;
        display: block;
        background-color: black;
    }

    .inner_header {
        width: 90%;
        height: 100%;
        display: block;
        margin: 0 auto;
        /* background-color: red; */
        
    }

    .logo_container {
        height: 100%;
        display: table;
        float: left;
        padding-left: 5%;
        /* padding: 20px; */
    }

    .logo_container h1{
        color: white;
        height: 100%;
        display: table-cell;
        vertical-align: middle;
        font-family: 'Montserrat';
        font-size: 32px;
        font-weight: 100;
    }

    .logo_container button{
        color: white;
        height: 100%;
        display: table-cell;
        vertical-align: middle;
        padding-right: 30px;
    }


    .logo_container h1 span{
        font-weight: 1000;
    }

    .navigation {
        float: right;
        height: 100%;
        cursor: pointer;
    }

    .navigation a {
        height: 100%;
        display: table;
        float: left;
        padding: 0px 20px;
    }

    .navigation a:last-child {
        padding-right: 0%;
    }

    .navigation a li{
        display: table-cell;
        vertical-align: middle;
        height: 100%;
        color: white;
        font-family: 'Montserrat';
        font-size: 16px;
    }

    button {
		cursor: pointer;
		/* text-emphasis-color: white; */
		color: white;
		border: none;
		outline: none;
	}
	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
        
	}
	
	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out
	}
	
	button {
		z-index: 20;
	}
	
	/* .open svg {
		transform: scale(0.7)
	} */
	
	.open #top {
		transform: translate(6px, 0px) rotate(120deg)
	}
	
	.open #middle {
		transform: translate(4px, 40px) rotate(-90deg) scale(1.3) scaleY(.8)
	}
	
  .open #bottom {
		transform: translate(-12px, 9px) rotate(-90deg)
	}

</style>