(function() {
    'use strict';

    let previewer = document.querySelector('[data-js="border"]');

    function init() {    
        
        var inputtop_left = document.querySelector('[data-js="top-left"]');
        var inputtop_rigth = document.querySelector('[data-js="top-rigth"]');
        var inputbottom_left = document.querySelector('[data-js="bottom-left"]');
        var inputbottom_rigth = document.querySelector('[data-js="bottom-rigth"]');
        
        
        
        on(inputtop_left, 'input', applyBorder);
        on(inputtop_rigth, 'input', applyBorder);
        on(inputbottom_left, 'input', applyBorder);
        on(inputbottom_rigth, 'input', applyBorder);
    }
        
     function applyBorder() {
         var border_side = this.getAttribute('data-js');
         var border_value = `${this.value}px`;
         var borders =  {
             'top-left' : 'borderTopLeftRadius',
             'top-rigth' : 'borderTopRightRadius',
             'bottom-left' : 'borderBottomLeftRadius',
             'bottom-rigth' : 'borderBottomRightRadius'                
         }
         previewer.style[borders[border_side]] = border_wvalue ;
     }

     function on(element,eventType,callback) {
         element.addEventListener(eventType,callback,false);
     }
     
     function handleInput() {
     }
    


    window.addEventListener('load',init,false);
})();
