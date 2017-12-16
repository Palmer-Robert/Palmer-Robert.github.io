<!doctype html>
<html lang="en-us">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>The Mountain Spoke | Term Website | CIT 230 | Fall 2017</title>
    <meta name="author" content="Robert E. Palmer">
    <meta name="description" content="page description placeholder">
    <!-- external style references in the proper cascading order --> 
    <link rel="stylesheet" href="css/normalize.css">
    <link href="https://fonts.googleapis.com/css?family=Spectral+SC" rel="stylesheet"> <!-- Google API font reference -->
    <link href="css/small.css" rel="stylesheet">    <!-- default styles - small/phone views -->
    <link href="css/medium.css" rel="stylesheet">  <!-- medium/tablet views -->
    <link href="css/large.css" rel="stylesheet">   <!-- large/wide/desktop views -->
    <script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
    <script>
        // jQuery begins here
    $(function() {
        // code here ...
    })
    </script>
</head>
<body>
    <div class="wrapper">
        <div id="header">
            <header>
                <a href="index.htm"><img src="img/mylogo.png" alt="My Logo"></a>
                <nav>
                    <button id="btn" class="hamburger" onclick="toggleHam()">&#9776;</button><!-- Button for the hamburger menu -->
                    <ul class="navigation">
                        <li id="products" class="myList"><a href="#tours">Products</a></li>
                        <li id="parts" class="myList"><a href="#tours">Parts</a></li>
                        <li id="services" class="myList"><a href="#tours">Services</a></li>
                        <li id="tours" class="myList"><a href="tours.html">Tours</a></li>
                        <li id="events" class="myList"><a href="events.html">Events</a></li>
                        <li id="aboutus" class="myList"><a href="#aboutus">About Us</a></li>
                    </ul>
                </nav>
            </header>
        </div>