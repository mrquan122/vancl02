  (function($,window){

   	         $.fn.navigate=function(){


                  return this.each(function() {

                  	   $this=$(this);

                  	   $items=$this.find('.item');

                  	   $nav=$this.find('.navigation');

				      $(window).scroll(function(event) {
				   
				    	  var distance=$(window).scrollTop();
				 
					      var fix=$('.sideBarSettabArea').offset().top;
				          var currentId='';
				    	  if(distance>fix){                      
				    		$('.hideTitle').css('display', 'block');
				    	   }else{
				    		$('.hideTitle').css('display','none');
				    	  }
				    
				          $items.each(function() {
                             
				       	      var itemTop=$(this).offset().top;

				       	         if(distance>itemTop-300){

				       	         	currentId=$(this).attr('id');
				       	         }else{
				       	         	return false;
				       	         }

				       	        console.log("内容高度："+ itemTop); 
				         });
				         
				          console.log("当前位置："+ currentId); 

				          var curSelect=$nav.find('.select');

				             if (currentId &&curSelect.attr('href')!=currentId) {

				                   curSelect.removeClass('select');

				                  $nav.find('[href=#'+currentId+']').addClass('select');



				             };
				         
				    	   });
				                  	
				                    });


	            }

   })($,window)
