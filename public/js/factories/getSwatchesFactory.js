angular.module('getSwatchesFactory', [])

  .factory('allSwatches', allSwatches);

  function allSwatches(){
    getSwatches = function(){
      var swatches = {
        fabrics: {
          cotton_voile: {
            url: "http://cdn.shopify.com/s/files/1/0400/5101/products/FFseernavy_grande.jpg?v=1437514918"
            ,description: "Voile is a lightweight, semi-sheer fabric with a great drape."
            ,colors: {
              red: '#A80000'
              ,blue: "#58ACFA"
              ,white: "#FFFFFF"
              ,black: "#000000"
              ,green: "#458B00"
              ,yellow: "#F2F5A9"
            }
          }
          ,cotton_lawn: {
            url: "http://i.ebayimg.com/images/g/EB8AAOSwk5FUvXtS/s-l300.jpg"
            ,description: "Lawn is very similar to cotton voile but is slightly crisper."
            ,colors: {
              red: '#A80000'
              ,blue: "#58ACFA"
              ,white: "#FFFFFF"
              ,black: "#000000"
              ,green: "#458B00"
              ,yellow: "#F2F5A9"
            }
          }
          ,rayon_challis: {
            url: "https://dtpmhvbsmffsz.cloudfront.net/posts/2015/05/08/554d8bdbbcd4a73a1d00565b/s_554d8bdbbcd4a73a1d00565c.jpg"
            ,description: "Rayon challis is a smooth, lightweight fabric. It drapes well and is slightly heavier than other lightweight fabrics, like cotton voile and cotton lawn."
            ,colors: {
              red: '#A80000'
              ,blue: "#58ACFA"
              ,white: "#FFFFFF"
              ,black: "#000000"
              ,green: "#458B00"
              ,yellow: "#F2F5A9"
            }
          }
          ,double_gauze: {
            url: "http://wiganhydroprinting.co.uk/wp-content/uploads/2014/04/clear-camo-300x3001.jpg"
            ,description: "The double layer of Double gauze eradicates the main problem of gauze (the sheerness), while being light and breathabler."
            ,colors: {
              red: '#A80000'
              ,blue: "#58ACFA"
              ,white: "#FFFFFF"
              ,black: "#000000"
              ,green: "#458B00"
              ,yellow: "#F2F5A9"
            }
          }
          ,knit: {
            url: "http://www.arrow.gb.net/images/pages/finish-colours/material-finishes/veneer/walnut-r.jpg"
            ,description: "Knit fabric is your go-to for any garment that needs to have a great deal of stretch."
            ,colors: {
              red: '#A80000'
              ,blue: "#58ACFA"
              ,white: "#FFFFFF"
              ,black: "#000000"
              ,green: "#458B00"
              ,yellow: "#F2F5A9"
            }
          }
          ,silk: {
            url: "http://static1.squarespace.com/static/52965deee4b0f580c1fe0b7d/52c88375e4b03b30610b4a0a/52c8845be4b0268360ddfb8c/1388874157418/LightRoyalNylon.jpg?format=300w"
            ,description: "Silk is a lightweight, delicate fabric that drapes well. It has a slightly shimmery appearance. It also makes a great lining fabric."
            ,colors: {
              red: '#A80000'
              ,blue: "#58ACFA"
              ,white: "#FFFFFF"
              ,black: "#000000"
              ,green: "#458B00"
              ,yellow: "#F2F5A9"
            }
          }
          ,satin: {
            url: "http://demandware.edgesuite.net/aakh_prd/on/demandware.static/-/Sites-main/default/dwa303e31f/images/large/L7871.jpg"
            ,description: "Satin can vary from lightweight to heavyweight, depending on the type of satin. Like silk, it has a glossy appearance."
            ,colors: {
              red: '#A80000'
              ,blue: "#58ACFA"
              ,white: "#FFFFFF"
              ,black: "#000000"
              ,green: "#458B00"
              ,yellow: "#F2F5A9"
            }
          }
          ,linen:{
            url: "http://d6lw7to1547c3.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/308744.jpg"
            ,description: "Linen is a medium-weight fabric with little elasticity (hence the wrinkles), and is a popular choice for warm-weather anything."
            ,colors: {
              red: '#A80000'
              ,blue: "#58ACFA"
              ,white: "#FFFFFF"
              ,black: "#000000"
              ,green: "#458B00"
              ,yellow: "#F2F5A9"
            }
          }
          ,wool: {
            url: "https://www.shoponeonline.com/wp-content/uploads/denim-swatch.png"
            ,description: "Wool is extremely hard-wearing and versatile. It’s also very warm and a good choice for colder weather garments."
            ,colors: {
              red: '#A80000'
              ,blue: "#58ACFA"
              ,white: "#FFFFFF"
              ,black: "#000000"
              ,green: "#458B00"
              ,yellow: "#F2F5A9"
            }
          }
        }
        ,accessories: {
          drawCords: {
            cotton: "http://www.keepyourpantson.com/image/cache/data/product-by-category/belt-buckles/center-bar/womens-belt-buckles-5691-500x500.jpg"
            ,polyester: 'http://www.keepyourpantson.com/image/cache/data/product-by-category/belt-buckles/center-bar/womens-belt-buckles-5691-500x500.jpg'
            ,nylon: 'http://www.keepyourpantson.com/image/cache/data/product-by-category/belt-buckles/center-bar/womens-belt-buckles-5691-500x500.jpg'
          }
          ,metalTrims: {
            buttons: 'http://www.keepyourpantson.com/image/cache/data/product-by-category/belt-buckles/center-bar/womens-belt-buckles-5691-500x500.jpg'
            ,rivets: "http://www.keepyourpantson.com/image/cache/data/product-by-category/belt-buckles/center-bar/womens-belt-buckles-5691-500x500.jpg"
            ,eyelets: "http://www.keepyourpantson.com/image/cache/data/product-by-category/belt-buckles/center-bar/womens-belt-buckles-5691-500x500.jpg"
            ,buckles: "http://www.keepyourpantson.com/image/cache/data/product-by-category/belt-buckles/center-bar/womens-belt-buckles-5691-500x500.jpg"
            ,zippers: "http://www.keepyourpantson.com/image/cache/data/product-by-category/belt-buckles/center-bar/womens-belt-buckles-5691-500x500.jpg"
            ,hooksStoppers: "http://www.keepyourpantson.com/image/cache/data/product-by-category/belt-buckles/center-bar/womens-belt-buckles-5691-500x500.jpg"
          }
        }
        ,seasons: {
          spring: "http://organically.server276.com/blog/wp-content/uploads/2014/03/18_spring-300x300.jpg"
          ,summer: "http://r2rdesigns.com/wp-content/uploads/2014/06/summer-beach-hd-desktop-wallpaper-300x300.jpg"
          ,fall: "http://img.thrfun.com/img/083/036/autumn_trees_s1.jpg"
          ,winter: "http://pixelshok.com/wp-content/uploads/2011/01/Winter-300x300.png"
        }
        ,types: {
          shirt: "http://secretenergy.com/wp-content/uploads/2014/07/SOUL-WARS-shirt-21.jpg"
          ,pants: "https://bonobos-prod-s3.imgix.net/products/10163/original/PNT_Golf_Maide_HighlandPant_Blackwatch_category.jpg?1423867714&w=300&q=74&h=300&fit=crop"
          ,dress: "http://www.kirnazabete.com/media/catalog/product/cache/1/image/300x/5e06319eda06f020e43594a9c230972d/1/1/11218940_5802764_1000/KirnaZabete-Dolce-and-Gabbana-Rose-Print-Dress-31.jpg"
          ,jacket: "http://images.motorcycle-superstore.com/productimages/300/2016-dainese-womens-michelle-leather-jacket-mcss.jpg"
          ,tee: "http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=140393304"
          ,skirt: "http://stylishcurves.com/wp-content/uploads/2014/01/burnt-orange-godet-skirt-300x300.jpg"
          ,shorts: "https://images.bigcartel.com/bigcartel/product_images/163340455/-/shorts-0175.jpg"
          ,scarf: "http://onwardpullzone.onwardreserve.netdna-cdn.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/o/r/or-camel-check-reversible-cashmere-scarf.jpg"
          ,hat: "http://ep.yimg.com/ay/oaklandraiders/oakland-raiders-girls-tailsweep-hat-3.jpg"
        }
        ,colors: {
          red: '#A80000'
          ,blue: "#58ACFA"
          ,white: "#FFFFFF"
          ,black: "#000000"
          ,green: "#458B00"
          ,yellow: "#F2F5A9"
        }
        ,stitch: {
          straight: ''
          ,right: ''
          ,double: ''
          ,hooklsine: ''
          ,righst: ''
          ,dousble: ''
          ,hooklsinekline: ''
          ,hooskline: ''
        }
      }
      return swatches;
    }

    return getSwatches();
  }
