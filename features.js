if ($(window).width() < 768) {
   var feature1 = 2600;
   var feature2 = 1200;
   var feature3 = 3000;
}
else {
   var feature1 = 2000;
   var feature2 = 1550;
   var feature3 = 2550;
}


$(function() {
    $(window).scroll( function(){
    
       
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            bottom_of_window = bottom_of_window - feature1;  
          
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
            
            bottom_of_window = bottom_of_window - feature2;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1200);
                    
            }
        }); 
    
    });
});

$(function() {
    $(window).scroll( function(){
    
       
        $('.fadeInBlock3').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            bottom_of_window = bottom_of_window - feature3;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1200);
                    
            }
        }); 
    
    });
});