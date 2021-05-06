/* mouse cursor */

jQuery(document).ready(function () {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;

    $(document).mousemove(function (e) {
        mouseX = e.pageX - 30;
        mouseY = e.pageY - 30;
    });

    setInterval(function () {
        xp += ((mouseX - xp) / 6);
        yp += ((mouseY - yp) / 6);
        $("#circle").css({ left: xp + 'px', top: yp + 'px' });
    }, 20);

});


/* background dots */

$(document).ready(function () {

    function freshDot() {
        this.obj = document.createElement("div");
        this.obj.classList.add("box");
        this.obj.style.top = (window.innerHeight * Math.random()) + 'px';
        this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
        this.size = Math.floor(5 * Math.random()) + 4;
        this.obj.style.height = this.size + 'px';
        this.obj.style.width = this.size + 'px';

        document.body.appendChild(this.obj);
    }
    var dot = [];
    /*this is the frequency 50 */
    for (var i = 0; i < 20; i++) {
        dot.push(new freshDot());
    }
    /*
    $(window).resize(function(){
      for(i=0;i<200;i++){
        document.body.removeChild(dot[i]);
      }
    });
    */
});