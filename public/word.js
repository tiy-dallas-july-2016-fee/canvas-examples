(function(exports, CanvasObject) {

    var word = function(c, x, y) {
        this.c = c;
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 30;
    };

    word.prototype = new CanvasObject();

    word.prototype.draw = function() {
        var c = this.c;

        c.fillStyle = '#F00';
        c.font = '20px serif';
        c.fillText('Hello Mark', this.x, this.y + 20);

        this.drawSelectedState();
    };

    exports.Word = word;


})(window.Diag, window.Diag.CanvasObject);
