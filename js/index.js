(function(global) {
    var portfolio = {
        init: function() {
            this.cacheDOM();
            this.introAnimate(this);
        },
        cacheDOM: function() {
            this.$container = $('.container');
            this.$header = this.$container.find(".header");
                this.$header__title = this.$header.find(".header__title");
                this.$header__name  = this.$header.find(".header__name");

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