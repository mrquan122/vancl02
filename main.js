 require.config({
            paths : {
                "jquery" : "jquery/jquery-1.7.1.min.js",
                "zoom":"js/zoom" ,
                "list_delegate":"js/list_delegate",
                "navigate":"js/navigate"
            },
            shim:{
                  "zoom":["jquery"],
                  "list_delegate":["jquery"],
                  "navigate":["jquery"]
            }
        });


    require(["jquery","zoom","list_delegate","navigate"],function($){

      $(function(){ 
              
              $('.danpinColCenter').zoom();
              $('.size').list_delegate({method:size_change});
              $('.color').list_delegate({method:color_change});
              $('.smallImg').list_delegate({method:change});

              $('.sideBarSettabArea').navigate();

            

              function change(i,that){
                var direction= $('.bigImg img').attr('src').charAt(7);

                console.log("direction"+direction);
             
               $('.bigImg img').attr('src', 'vanimg/'+direction+'_'+ i+'small.jpg');
               $('.big_zoom').attr('background-image','url(vanimg/'+direction+'_'+i+'big.jpg)'); 
              }

              function color_change(j,that){

                $(that).toggleClass('active').siblings().removeClass('active');
                        
                $('.smallImg li').css('background-image', 'url(vanimg/'+j+'_left.jpg)');
                $('.bigImg img').attr('src', 'vanimg/'+j+'_1small.jpg');
                $('.big_zoom').css('background-image','url(vanimg/'+j+'_1big.jpg');
 
                        
                var info = $(that).text();

                $('.form .state span:first-child ').text( info );  
              }

              function size_change(k,that){

                     var info = $(that).find('p').text();
                
                     $('.form .state span ').eq(1).css('display', 'inline').text(info);  
                        console.log('文本替换' +info );
              }





   

    });

   });   

