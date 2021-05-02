(function() {

  if ( arte.theme )
    document.body.dataset.theme = arte.theme

  function clear( ads ) {

    for ( let ad of ads ) {

      let list = document.querySelectorAll( ad )

      if ( list ) {

        for ( let item of list ) {

          item.remove()

          if ( ad == '#teste_interstitial' ) {

            let parent = item.parentNode
            let parentStyle = window.getComputedStyle( item.parentNode )
            let position = parentStyle.getPropertyValue( 'position' )

            if ( position == 'fixed' ) {
              parent.remove()
            }

          }

        }

      }

    }

  }

  if ( arte.ads == false ) {

    document.body.dataset.ads = 'false'

    const ads = [
      '.sticky-dfp-footer-navbar',
      '.publicidade',
      '.noticia.infograficos .row.taboola',
      '.teads-inread',
      '.pub-outbrain',
      '#teste_interstitial'
    ]

    clear( ads )

    setInterval( function() {

      clear( ads )

    }, 2000 )

  }

})()
