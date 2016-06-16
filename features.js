
if (window.width < 768 px) {
    $(function() {
        $(window).scroll( function(){
        
           
            $('.fadeInBlock2').each( function(i){
                
                var bottom_of_object = $(this).position().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                bottom_of_window = bottom_of_window - 2300;  
              
                if( bottom_of_window > bottom_of_object ){
                    
                    $(this).animate({'opacity':'1'},1200);
                        
                }
            }); 
        
        });
    });
}
else {
    $(function() {
        $(window).scroll( function(){
        
           
            $('.fadeInBlock2').each( function(i){
                
                var bottom_of_object = $(this).position().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                bottom_of_window = bottom_of_window - 2300;  
              
                if( bottom_of_window > bottom_of_object ){
                    
                    $(this).animate({'opacity':'1'},1200);
                        
                }
            }); 
        
        });
    });
}
if (window.width < 768px) {
    $(function() {
        $(window).scroll( function(){

           
            $('.fadeInBlock').each( function(i){
                
                var bottom_of_object = $(this).position().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                bottom_of_window = bottom_of_window - 1300;  
              
                if( bottom_of_window > bottom_of_object ){
                    
                    $(this).animate({'opacity':'1'},1200);
                        
                }
            }); 

        });
    });
}
else {
    $(function() {
        $(window).scroll( function(){
        
           
            $('.fadeInBlock').each( function(i){
                
                var bottom_of_object = $(this).position().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                bottom_of_window = bottom_of_window - 1300;  
              
                if( bottom_of_window > bottom_of_object ){
                    
                    $(this).animate({'opacity':'1'},1200);
                        
                }
            }); 
        
        });
    });
}