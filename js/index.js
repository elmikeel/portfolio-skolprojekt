(function(global) {
    var portfolio = {
        init: function() {
            this.cacheDOM(this);
            this.introAnimate(this);
        },
        cacheDOM: function(self) {
            self.$container = $('.container');
            self.$header = self.$container.find(".header");
                self.$header__title = self.$header.find(".header__title");
                self.$header__name  = self.$header.find(".header__name");

        },
        introAnimate: function(self) {
            self.$header__title.animate({fontSize: "-=20px"}, 250, function() {
                self.$header__title.animate({fontSize: "+=20px"}, 250);
            });
            self.$header__name.animate({fontSize: "-=80px"}, 250, function() {
                self.$header__name.animate({fontSize: "+=80px"}, 250)
            });

        }
    }

    portfolio.init();
})(this); 
