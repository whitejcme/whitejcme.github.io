import $ from 'jquery';

export default {
  setSelectedCardSize() {
    let setSize = function() {
      let w = $('.selectedCard').width();
      let h = $('.selectedCard').height();
      let selOuter = $('.selectedCard > .outer');
      let W; let H;
      if ((w-20) * 1.4 >= h) {
        W = h / 1.4;
        H = h;
      }
      else {
        W = w - 20;
        H = W * 1.4
      }
      selOuter.css({
        'width': W,
        'height': H
      });
    }
    setSize();
    $(window).resize(function() {
      setSize();
    });
  },
  setCardPreviewSize() {
    let setSize = function() {
      let w = $('.cardPreview').width() - 20;
      let h = $('.cardPreview').height();
      let content = $('.cardPreview > .content');
      let cards = $('.cardPreview > .content > .cards');
      let W; let H;
      if ($(window).width() > 600) {
        if ((w + 80) >= h) {
          W = h - 80;
          H = h;
        }
        else {
          W = w;
          H = w + 80;
        }
      }
      else {
        W = w <= h ? w : h;
        H = W
      }
      content.css({
        'width': W,
        'height': H
      });
      cards.css({
        'width': W,
        'height': W
      });
    }
    setSize();
    $(window).resize(function() {
      setSize();
    });
  },
}