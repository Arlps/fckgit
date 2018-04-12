(function (window) {
    function changeFontSize() {
    	if(document.documentElement.clientWidth<=500){
    		var orginHtmlFontSize = document.documentElement.clientWidth / 7.5
    	}else{
    		var orginHtmlFontSize = 500 / 7.5
    	}
        
//      orginHtmlFontSize=50;
        
        var newHtmlFontSize = orginHtmlFontSize
        // if (orginHtmlFontSize > 100) {
        //     // newHtmlFontSize = 70
        //     newHtmlFontSize = 61
        // }
        // if (orginHtmlFontSize > 130) {
        //     newHtmlFontSize = 100
        // }
        document.documentElement.style.fontSize = newHtmlFontSize + 'px';
    }
    changeFontSize()
    window.addEventListener('resize', changeFontSize)

    // function stopScrolling(touchEvent){
    //     touchEvent.preventDefault();
    // }
    // document.addEventListener('touchstart',stopScrolling)
    // document.addEventListener('touchmove',stopScrolling)
})(window)