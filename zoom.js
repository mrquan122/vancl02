  (function($){
          $.fn.zoom=function(option){

           /*      var default={
                 	 
                 }


                 var option=$.extend(default,option);  */
                 
                

          	  
          	  return this.each(function() {

          	  	   
          	  	   
                       $wrap=$(this).find('.bigImg');
                       $zoom=$(this).find('#winSelector');
                       $big=$(this).find('.big_zoom');

                    

                       $wrap.on('mousemove', function(event) {
                         	event.preventDefault();

                           var offset=$wrap.offset();
                           var x=event.pageX-offset.left;
                           var y=event.pageY-offset.top;
                           var top=y-$zoom.height()/2;
    	                   var left=x-$zoom.width()/2;

				    	 if(top<0) top=0;

				    	 if(left<0) left=0;
				    	 
				    	 if(top>$(this).height()-$zoom.height()) top=$(this).height()-$zoom.height();
	                     if(left>$(this).width()-$zoom.width())  left=$(this).width()-$zoom.width();
				    	 

	
    	           var rateY=top/$(this).height();
					       var rateX=left/$(this).width();

					       var top1=$big.height()*rateY;
					       var left1=$big.width()*rateX;


					    	
					        $zoom.css({
					        	display: 'block',
					        	top: top+'px',
					        	left:left+'px',
					        });

					        $big.css({
					        	display: 'block',
					        	backgroundPosition:-parseInt(2*left1)+'px'+' '+ -parseInt(2*top1)+'px'
					        });
					     // console.log("zoom"+x);
					        console.log("rate"+rateX);
					        console.log("big"+$big.height());





                         
                       });





                    
          	  	
          	  });
          }
  })($)