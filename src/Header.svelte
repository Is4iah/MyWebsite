<script>
    import Hamburger from './Hamburger.svelte'

    export let sidebar = true

    import Logo from "./Logo.svelte"
</script>



<header id="header" class="header">

    

</header>


<style> 
    .list_row {
        display: inline;
        margin: 0 auto;
    }

    .header {
        /* flex: auto; */
        color: white;
        background: black;
        height:1in
        /* height: 20sm; */
    }

    .header_text {
        color: white;
        font-family: cursive;
        background-color: transparent;
    }

    .text {
        color: white;
        font-family: cursive;
        background-color: black;
    }

</style>




/*
<nav class="flex">
    <nav>
        <Logo/>
    </nav>

    <nav>
        <ul id="nav">
            <li class="list_row"><a href="https://www.adhamdannaway.com/about" class="header_text">about</a></li>
            <li class="list_row"><a href="andablo.me" class="header_text">book</a></li>
            <li class="list_row"><a href="andablo.me">portfolio</a></li>
            <li class="list_row"><a href="andablo.me">blog</a></li>
            <li class="list_row"><a href="andablo.me">contact</a></li>
            <!-- <li> -->
                <!-- <ul > -->
                    <!-- <li class="email"><span id="email-tooltip" tooltip="Click to copy my email address to your clipboard 😀"><a id="email" data-clipboard-text="email address goes here">email</a></span></li> -->
                    <!-- <li ><a href="https://www.https://twitter.com/AndabloIsaiah" title="Follow me on Twitter" target="_blank">twitter</a></li> -->
                    <!-- <li ><a href="https://au.linkedin.com/in/andablo" title="Connect with me on Linkedin" target="_blank">linkedin</a></li> -->
                    <!-- <li ><a href="https://www.facebook.com/Gucci.Scuzzy" title="Like me on Facebook" target="_blank">facebook</a></li> -->
                    <!-- <li ><a href="https://www.instagram.com/isaiah._.ii/" title="Follow me on Instagram" target="_blank">instagram</a></li> -->
                <!-- </ul> -->
            <!-- </li> -->
        </ul>

    </nav>
</nav>
<!-- we want to use <nav> since we will be directing to other links -->
<!-- <li> creates a list for us -->
<!--  use <a href= " <link> " for refrences -->

*/