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
      </article>
      
      <article>
        <label for="chart_width">Width(number of stitches):</label>
        <input type="number" id="chart_width" name="chart_width" onkeyup="enable_browse(event)">
        <input type="file" id="browse" disabled accept="image/*" onchange="generate_chart(event)">
      </article>

      <article class="hidden">
        <img id="input_image">
        <canvas id="scaled_input" width=0 height=0></canvas>
      </article>

      <article id="knit_chart_controllers" class="hidden">
        <table id="color_legend"></table>
        <input type="checkbox" id="display_color" checked>
          <label for="display_color"> Display Chart Colors</label><br>

        <label for="knit_chart_cell_size">Move slider to change Knitting Chart size</label>
        <input type="range" id="knit_chart_padding" min="1" max="50" value="1">
      </article>
      
      <article>
        <table id="knit_chart"></table>
      </article>
    </main>

    <footer>
      <p>Happy knitting</p>
    </footer>

  </body>
</html>