<script>
    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if(entry.isIntersecting){
    //             document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
    //             document.querySelectorAll(".animated")[1].classList.add("fadeInTop");
    //             document.querySelectorAll(".animated")[2].classList.add("fadeInRight");
    //         }
    //     })
    // })

    // observer.observe(document.querySelector(".container"));

</script>



<body>
    <left  class="left fadeInLeft">.WELCOME</left>
    <right class="right fadeInRight">
        .I HOPE YOU ENJOY YOUR TIME HERE
    </right>

    <div class="middle fadeInTop"> .THIS IS THE FIRST ITERATION</div>
    <!-- <div class="planet "> </div> -->

</body>



<style>

    .body {
        background-color: grey;
        height: 500px;
        padding-bottom: 90%;
        margin-top: 0em;
        z-index: 1;
    }

    .left{
        /* width: 200px; */
        /* height: 200px; */
        background-color:transparent;
        border-radius: 20px;
        float: left;
        margin-left: 15%;
        margin-top: 20%;
        font-family: fantasy;
        font-size: 40px;
    }

    .right{
        background-color:transparent;
        border-radius: 20px;
        float: right;
        margin-right: 15%;
        margin-top: 20%;
        font-family: fantasy;
        font-size: 40px;
    }

    .middle{
        background-color:transparent;
        border-radius: 20px;
        float: middle;
        font-family: fantasy;
        font-size: 40px;
    }


    .container{
        display: flex; 
        justify-content: center;
        align-items: center;
        /* height: 100vh; */
        overflow: hidden;
        gap: 100px 
    }

    .planet{
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        margin-left: 10em;
        background-image: url(https://cdn.wallpapersafari.com/67/10/JHfRwE.png)
    }

    .galaxy{
        width: 700px;
        height: 400px;
        margin-right: 5em;
        /* margin-top: 10%; */
        background-size: contain;
        background-image: url(https://www.pixel-creation.com/wp-content/uploads/space-wallpaper.jpg)
    }
    
    .fadeInLeft{
        -webkit-animation: fadeInLeft 1.2s both;
        -moz-animation: fadeInLeft 1.2s both;
        -o-animation: fadeInLeft 1.2s both;
        animation: fadeInLeft 1.2s both;
    }

    .fadeInRight{
        -webkit-animation: fadeInRight 1.2s both;
        -moz-animation: fadeInRight 1.2s both;
        -o-animation: fadeInRight 1.2s both;
        animation: fadeInRight 1.2s both;
    }

    .fadeInTop{
        -webkit-animation: fadeInTop 1.2s both;
        -moz-animation: fadeInTop 1.2s both;
        -o-animation: fadeInTop 1.2s both;
        animation: fadeInTop 1.2s both;
    }


    @-webkit-keyframes fadeInLeft {
        0%{
            opacity: 0;
            -webkit-transform: translateX(-50px);
        }
        100%{
            opacity: 1;
            -webkit-transform: translateX(0);
        }
    }
    @-webkit-keyframes fadeInRight {
        0%{
            opacity: 0;
            -webkit-transform: translateX(50px);
        }
        100%{
            opacity: 1;
            -webkit-transform: translateX(0);
        }
    }
    @-webkit-keyframes fadeInTop {
        0%{
            opacity: 0;
            -webkit-transform: translateY(-50px);
        }
        100%{
            opacity: 1;
            -webkit-transform: translateY(0);
        }
    }

    /* /////////////////////////////////////////////// */

    @-moz-keyframes fadeInLeft {
        0%{
            opacity: 0;
            -moz-transform: translateX(-50px);
        }
        100%{
            opacity: 1;
            -moz-transform: translateX(0);
        }
    }
    @-moz-keyframes fadeInRight {
        0%{
            opacity: 0;
            -moz-transform: translateX(50px);
        }
        100%{
            opacity: 1;
            -moz-transform: translateX(0);
        }
    }
    @-moz-keyframes fadeInTop {
        0%{
            opacity: 0;
            -moz-transform: translateY(-50px);
        }
        100%{
            opacity: 1;
            -moz-transform: translateY(0);
        }
    }

    /* //////////////////////////////////////////////// */

    @-o-keyframes fadeInLeft {
        0%{
            opacity: 0;
            -o-transform: translateX(-50px);
        }
        100%{
            opacity: 1;
            -o-transform: translateX(0);
        }
    }
    @-o-keyframes fadeInRight {
        0%{
            opacity: 0;
            -o-transform: translateX(50px);
        }
        100%{
            opacity: 1;
            -o-transform: translateX(0);
        }
    }
    @-o-keyframes fadeInTop {
        0%{
            opacity: 0;
            -o-transform: translateY(-50px);
        }
        100%{
            opacity: 1;
            -o-transform: translateY(0);
        }
    }

    /* /////////////////////////////////////// */
    @keyframes fadeInLeft {
        0%{
            opacity: 0;
            transform: translateX(-500px);
        }
        100%{
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes fadeInRight {
        0%{
            opacity: 0;
            transform: translateX(500px);
        }
        100%{
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes fadeInTop {
        0%{
            opacity: 0;
            transform: translateY(-500px);
        }
        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }

    
    
    /* .body middle{
        width: 800px;
        height: 800px;
        background-color: white;
        border-radius: 20px;
        float: middle;
        padding-right: 500px;
        margin-bottom: 20px;
    } */




</style>