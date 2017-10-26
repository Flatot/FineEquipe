<html lang="en" >
<head>
  <meta charset="utf-8" />
  <meta name="author" content="Script Tutorials" />
  <title>La Fine Equipe</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
 <link href="css/bootstrap.min.css" rel="stylesheet">
 <link href="css/style.css" rel="stylesheet" />
</head>
<body>
  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-main">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">La Fine Equipe</a>
      </div>
      <div class="collapse navbar-collapse" id="navbar-collapse-main">
        <ul class="nav navbar-nav navbar-right">
  		    <li><a href="#home">Accueil</a></li>
          <li><a href="#team">L'équipe</a></li>
          <li><a href="#member">Les membres</a></li>
          <li><a href="#action">Les prestations</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

 <section id="contact">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <form method="post" action="send_mail.php" name="sentEmail" id="sentEmail">
              <div class="rst-group-title">
                <h4>Contactez-nous</h4>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <input class="rst-page-input" type="text" placeholder="Nom" name="nom" id="nom"/>
                  </div>
                  <div class="form-group">
                    <input class="rst-page-input" type="text" placeholder="Email" name="email" id="email"/>
                  </div>
                  <div class="form-group">
                    <input class="rst-page-input" type="text" placeholder="Sujet" name="subject" id="subject"/>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <textarea class="rst-page-input" name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 rst-contactsubmit">
                  <input class="btn btn-primary btn-lg" type="submit" value="Envoyer"/>
                </div>
              </div>
              </form>
          </div>
        </div>
      </div>
      <!-- <div class="rst-contact-map">
        <section id="cd-google-map">
          <div id="google-container"></div>
          <div class="rst-map-container">
            <div class="rst-contact-info">
              <h4 class="rst-page-title">La Fine Equipe</h4>
              <p></p>
              <ul class="ul_none">
                <li><a target="_blank" href="https://goo.gl/maps/sWk4fAGepwq"> 69 007 Lyon - France</a></li>
                <li><a href="mailto:fine.equipe@gmail.com">fine.equipe@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
          </section> -->
    <!--- End Content -->
  
  <script src="js/jquery.1.11.1.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCgGyzOzpWh_mTpdx-UPt92W6GI8hE7P3M"></script>
  <script src="js/main.js"></script>
</body>
</html>