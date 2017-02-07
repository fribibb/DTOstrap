$(function() {

  // create slug text
  function slug(str) {
    var $slug = '';
    var trimmed = $.trim(str);
    $slug = trimmed.replace(/[^a-z0-9-]/gi, '-').
    replace(/-+/g, '-').
    replace(/^-|-$/g, '');
    return $slug.toLowerCase();
  }


  var ToC =
    "<nav role='navigation' class='table-of-contents'>" +
      "<h1>On this page</h1>" +
      "<div class='col-sm-4'>" +
      "<ol class='list-unstyled well'>";

  var newLine, el, title, link;

  $("body > .container h1:not(.CoT-ignore)").each(function() {
    el = $(this);
    title = el.text();
    link = slug(title);
    $(this).attr('id', link);
    link = "#" + link;

    newLine =
      "<li>" +
        "<a href='" + link + "'>" +
          title +
        "</a>" +
      "</li>";

    ToC += newLine;
  });

  ToC +=
      "</ol>" +
     "</div>" +
    "</nav>";

  $(".ToC").prepend(ToC);


  // Smooth Scrolling
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    jQuery('.anchorHighlight').removeClass('anchorHighlight');
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 10
        }, 500);
        jQuery('#' + this.hash.slice(1)).parent().addClass('anchorHighlight');
        return false;
      }
    }
  });


}); //jQuery
