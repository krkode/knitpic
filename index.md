<html>
  <head>
    <meta charset="utf-8">

    <title>Landing Page</title>
  <script src="upload.js"></script> 
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
        <p>Convert jpeg or png into customisable knitting chart and remember how to write javascript somewhere along the way</p>
        <input type="file" accept="image/*" onchange="preview_image(event)">
        <img id="input_image">
      </article>     
    </main>

    <!-- And here is our main footer that is used across all the pages of our website -->

    <footer>
      <p>Happy knitting</p>
    </footer>

  </body>
</html>