(function($){


     var defaults = {    
     
        method: function() { }
        
        }

      $.fn.list_delegate=function(opthios){

            var opts = $.extend({}, defaults, opthios || {});
 
      	    return this.each(function() {

      	    	  var  $this=$(this);
      	    	  var  ul= $this.find('ul');
                var  li_list=ul.find('li');
             

            for(var i=0 ; i<li_list.length; i++){ 

               ( function(i){
            
                   li_list.eq(i).on('click',  function(event) {
                        event.preventDefault();
                        var that=this
                        opts.method(i,that);
              
                 }); 

             })(i);     

             console.log("hello:"+i);

           };

       });
    }

 })($)