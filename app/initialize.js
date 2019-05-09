var app = {

  init: function() {

    console.log('init');

    // Mise en place de Rellax
    // https://github.com/dixonandmoe/rellax
    var rellax = new Rellax('.header', {
      speed: 5,
    });

    // Mise en place de scrollex
    // Je cible mes sections
    $('main > section').each(function() {

      // Pour chaque section (each)...

      // $(this) = ma section;

      // J'isole l'id de l'element (=la section), car il correspond à mon ancre
      var id = $(this).attr('id');

      // J'applique scrollex sur mon element (=ma section)
      $(this).scrollex({

        // Je dit à scrollex de se baser sur le milieu de la page
        mode: 'middle',

        // Lorsque mon élément entre sur la page...
        enter: function () {

          // Je cible le lien qui pointe vers ma section
          // puis je lui ajoute la classe "active"
          $('nav a[href="#'+id+'"]').addClass('active');
        },

        // Lorsque mon élément quitte la page...
        leave: function() {

          // Je cible le lien qui pointe vers ma section
          // puis je lui ajoute la classe "active"
          $('nav a[href="#'+id+'"]').removeClass('active');
        }
      });

    });

    // Smoothscroll
    // Je cible tout les liens avec une ancre (ex: href="#toto")
    // mais pas ceux qui ont une ancre vide (ex: href="#")
    // (autrement dit les liens avec une ancre & du texte)
    $('a[href*="#"]:not([href="#"])').on('click', app.smoothScroll);

  },

  smoothScroll: function(evt) {

    // Je supprime l'évenement par défaut de l'ancre
    evt.preventDefault();

    // this => element sur lequel j'ai cliqué (= qui a déclenché l'évenement)
    // this.hash => la valeur du href (ex: #toto)

    // Je transforme la cible de l'ancre en objet jQuery
    // (= je récupere mes sections ciblées)
    var target = $(this.hash);

    // console.log(this.hash);
    // console.log(target);

    // Je vérifie bien l'existance de mon element
    if (target.length) {

      // Je viens calculer la position de l'élement ciblé
      // par rapport au haut de ma page
      var targetPosition = target.offset().top;

      // Je viens animer le scroll
      $('html, body').animate({
        scrollTop: targetPosition
      }, 2000);
    }
  }
};

$(app.init);