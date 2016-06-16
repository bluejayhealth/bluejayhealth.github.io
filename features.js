$(function() {
    $(window).scroll( function(){
    
       
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            bottom_of_window = bottom_of_window - 1000;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1200);
                    
            }
        }); 
    
    });
});

$(function() {
    $(window).scroll( function(){
    
       
        $('.fadeInBlock2').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            bottom_of_window = bottom_of_window - 2000;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1200);
                    
            }
        }); 
    
    });
});