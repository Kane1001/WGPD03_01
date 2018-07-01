


var Kane02Layer = cc.Layer.extend({
    sprite: null,
    isDrawing:false,

    ctor: function () {

        this._super();

        this.drawing= new cc.DrawNode();
        this.addChild(this.drawing);

        this.setupMouse();

        return true;

    },
    setupMouse: function () {
        cc.eventManager.addListener({
            //事件都是用Listener去監聽
            event: cc.EventListener.MOUSE,
            lastx: -1,
            lasty: -1,
            //滑鼠點擊，左鍵0，右鍵2，滾輪1
            onMouseDown: function (e) {
                var target = e.getCurrentTarget();


                target.isDrawing = true;
                this.lastx=e.getLocationX();
                this.lasty=e.getLocationY();



            },
            onMouseUp: function (e) {

                var target = e.getCurrentTarget();
                target.isDrawing = false;
            },
            //滑鼠移動
            onMouseMove: function (e) {

                // cc.log("move");
                var target = e.getCurrentTarget();
                if(target.isDrawing) return;
                var target = e.getCurrentTarget();
                var x =e.getLocationX();
                var y =e.getLocationY();
                this.drawing.drawSegment(
                    cc.p(this.lastx,this.lasty),
                    cc.p(x,y),2,cc.color(255,0,0));
                this.lastx=x;
                this.lastx=y;


                },

            //滑鼠捲動
            // onMouseScroll: function (e) {
            //     cc.log("scroll");
            // }
        }, this);
}
});





var Kane02Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Kane02Layer();
        this.addChild(layer);
    }
});

