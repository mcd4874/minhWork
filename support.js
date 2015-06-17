/**
 * Created by minh on 6/6/2015.
 */
(function(){
    var app=angular.module("gemStore",['store-product']);



    app.controller('ReviewController',function(){
        this.review={};
        this.addReview=function(product){
            this.review.createdOn=Date.now();
            product.reviews.push(this.review);
            this.review={};
        };
    });

    /*app.controller('PaneController',function(){
       this.tab=1;
        this.selectTab=function(Tab){
            this.tab=Tab;
        };
        this.isTab=function(checkTab){
          return this.tab===checkTab;
        };
    });*/
    app.controller('storeControl',function(){
        this.product=gem;
    });
    var gem= [
        {
            name:'dodecahedron',
            price: 2.95,
            description:"Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
            canPurchase:false,
            soldOut:false,
            image: [
                {
                    full:'http://xwell.org/assets/images/dodecahedron.png'
                }
            ],
            reviews: [{
                stars: 5,
                body: "I love this gem!",
                author: "joe@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "This gem sucks.",
                author: "tim@example.org",
                createdOn: 1397490980837
            }]
        },

        {
            name:'Pentagonal',
            price:5.95,
            description:"Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
            canPurchase:true,
            soldOut:false,
            image:[
                {
                    full:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2uKLVQyARg7J343blhBS_n5VRAq4CZSwL0TiryR8ZaLd-AwKESg'
                }
            ],
            reviews: [{
                stars: 3,
                body: "I think this gem was just OK, could honestly use more shine, IMO.",
                author: "JimmyDean@example.org",
                createdOn: 1397490980837
            }, {
                stars: 4,
                body: "Any gem with 12 faces is for me!",
                author: "gemsRock@example.org",
                createdOn: 1397490980837
            }]
        }];
})();