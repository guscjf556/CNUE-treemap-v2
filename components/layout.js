const layout = function(body) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Jua&subset=korean'>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Do Hyeon'>

        <link rel="stylesheet" href="/map.css">
    </head>
    <body>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#0d3e1e">
      <div class="container">
        <a class="navbar-brand theme" href="/" style="color:#d1ebe0">🌳 청주교대 나무지도<small></small></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02" >
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="/" style="color:#d1ebe0">🗺️ 나무지도<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/leaf" style="color:#d1ebe0">🍃 나뭇잎</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/bird" tabindex="-1" aria-disabled="true" style="color:#d1ebe0">🦉 새</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/stat" tabindex="-1" aria-disabled="true" style="color:#d1ebe0">📊 통계</a>
            </li>
        </ul>
        <a class="float-right"href="/info" tabindex="-1" aria-disabled="true" style="color:#d1ebe0">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 18">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
        </a>
        </div>
      </div>
    </nav>
    ${body}
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};

module.exports = layout