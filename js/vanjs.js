 $(function(){
    
  

   	var change=function(i,direction){
    
    	for( i ; i< $('.imageMenu li').length; i++){  //左侧图片选择

      ( function(i){
   	  
       $('.imageMenu li').eq(i).on('mouseover',  function(event) {
     	event.preventDefault();
         
     	$('.bigImg img').attr('src', 'vanimg/'+direction+'_'+ i+'small.jpg');
     	$('.big_zoom').attr('background-image','url(vanimg/'+direction+'_'+i+'big.jpg)'); 

        console.log("cur"+i);
        console.log("background-image"+$('.big_zoom').attr('background-image'));
     	
     }); 

       })(i);

     	console.log("imglength"+$('.imageMenu li').length);
     	console.log("for"+i);
     
  };

};
 
  change(0,0);

   $('.bigImg').mousemove(function(event) {
 
    	  var offset=$(this).offset();
          var x=event.pageX-offset.left;   //鼠标相对于图片展示边框的距离
          var y=event.pageY-offset.top;

    	 var top=y-$('#winSelector').height()/2;  //放大镜相对于图片展示边框的位置
    	 var left=x-$('#winSelector').width()/2;
          
        /* 限制放大镜在图片框中移动 */

    	 if(top<0){
    	 	top=0;
    	 	
    	 };

    	  if(left<0)
    	 {
    	 	left=0;
    	 };

    	 if(top>$(this).height()-$('#winSelector').height()){

    	 	top=$(this).height()-$('#winSelector').height();
    	 
    	 };
    	 if(left>$(this).width()-$('#winSelector').width())
    	 {

          left=$(this).width()-$('#winSelector').width();
    	 };
    	 var rateY=top/$(this).height();
    	 var rateX=left/$(this).width();
    	 var top1=$('.big_zoom').height()*rateY;
    	 var left1=$('.big_zoom').width()*rateX;

    	 var pos=top1+"px"+left1+"px";


    	
        $('#winSelector').css({   //放大镜跟随鼠标移动
        	display: 'block',
        	top: top+'px',
        	left:left+'px',
        });

        $('.big_zoom').css({   //放大镜跟随显示细节
        	display: 'block',
        	backgroundPosition:-parseInt(2*left1)+'px'+' '+ -parseInt(2*top1)+'px'
        });
        console.log("zoom"+x);
        console.log("rate"+rateX);
        console.log("big"+top1);
    }).mouseleave(function(event) {    //鼠标移除，放大镜隐藏
  
    	$('#winSelector').css('display', 'none');
    	 $('.big_zoom').css('display','none');
    });




  	  for(var j=0 ;j<$('.form .color li ' ).length; j++){

  	       (function(j){
  	       	           $('.form .color li ' ).eq(j).click(function(event) {   //选择颜色
  

  	                    $(this).toggleClass('active').siblings().removeClass('active');
                        
  	                   $('.smallImg li span ').css('background-image', 'url(vanimg/'+j+'_left.jpg)');
  	                   $('.bigImg img').attr('src', 'vanimg/'+j+'_1small.jpg');
  	                   $('.big_zoom').css('background-image','url(vanimg/'+j+'_1big.jpg');
  	                   change(0,j);  
                        
                        var info = $(this).text();

  	                   $('.form .state span:first-child ').text( info  );  
  	                
                          
                          console.log('文本替换' + info );
                       });

  	       })(j);

           
   
    };

      	for(var k=0; k< $('.form .size li').length; k++){  //选择尺寸

          ( function(k){
   	  
          $('.form .size li ').eq(k).on('click',  function(event) {
     	               event.preventDefault();

                     var info = $(this).find('p').text();
                
  	                 $('.form .state span ').eq(1).css('display', 'inline').text(info);  
  	                    console.log('文本替换' + info);
          
             }); 
        })(k);

        }

    /*
      窗口滚动监听，以及导航条跟随
          */

      $(window).scroll(function(event) { 
 
    	  var distance=$(document).scrollTop();
    	  var fix=$('.sideBarSettabArea').offset().top;
          var currentId='';
    	  if(distance>fix){                      
    		$('.hideTitle').css('display', 'block');
    	   }else{
    		$('.hideTitle').css('display','none');
    	  }
    
        
           $('.sideBarSettabArea .item').each(function() {  
 
       	         var itemTop=$(this).offset().top;
       	         if(distance>itemTop){

       	         	currentId=$(this).attr('id');
       	         }else{
       	         	return false;
       	         }

       	        console.log("内容高度："+ itemTop); 
         });
         
          console.log("当前高度："+ currentId); 

          var curSelect=$('#ItemTag').find('.select');

             if (currentId &&curSelect.attr('href')!=currentId) {
                   curSelect.removeClass('select');
                  $('#ItemTag').find('[href=#'+currentId+']').addClass('select');

             };
         
    	   });

});	
   