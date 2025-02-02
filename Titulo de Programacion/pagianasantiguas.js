const getFrontPageHtml = noteCount => {
    return`
      <! DOCTYPE html>
      <html>
        <head>
        </head>
        <body>
          <div class='container'>
            <h1>
            <p>number of notes created ${noteCount}</p>
            <a href='/notes'>notes</a>
            <img src='kuva.png' width='200' />
          </div>
        </body>
      </html>
  `
  }
  
  app.get('/', (req, res) => {
    const page = getFrontPageHtml(notes.length)
    res.send(page);
  });