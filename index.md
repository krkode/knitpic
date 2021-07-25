<html>
  <head>
    <meta charset="utf-8">

    <title>Landing Page</title>
  <script src="generate_chart.js"></script> 
  <script src="create_color_histogram.js"></script> 
  <link rel="stylesheet" type="text/css" href="main.css">
  </head>

  <body>
    <!-- main header across all the pages of our website -->

    <header>
      <h1>Knit Pic</h1>
    </header>

    <!-- Here is our page's main content -->
    <main>

      <!-- It contains an article -->
      <article>
        <h2>Description</h2>
        <p>Convert jpeg or png into customisable knitting chart</p>
        <label for="chart_width">Width(number of stitches):</label>
        <input type="number" id="chart_width" name="chart_width">
        <input type="file" accept="image/*" onchange="generate_chart(event)">
        <img id="input_image">
        <canvas id="knit_chart">
        </canvas>
        <table id="color_legend"></table>
        <table id="color_chart"></table>
      </article>
    </main>

    <!-- And here is our main footer that is used across all the pages of our website -->

    <footer>
      <p>Happy knitting</p>
    </footer>

  </body>
</html>