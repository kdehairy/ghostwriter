jQuery(function($) {

    /* ============================================================ */
    /* Responsive Videos */
    /* ============================================================ */

    $(".post-content").fitVids();

    /* ============================================================ */
    /* Scroll To Top */
    /* ============================================================ */

    $('.js-jump-top').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({'scrollTop': 0});
    });

	if ( $.hugo.Markup == "rst" ) {
		$('pre.code').wrapInner( "<code></code>" );
	}
});

hljs.initHighlightingOnLoad();
