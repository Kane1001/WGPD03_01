


var Kane03Layer = cc.Layer.extend({
    sprite: null,
    //預設拖曳動作false
    isDragging:false,

    ctor: function () {

        this._super();

        this.sprite =new cc.Sprite(res.HelloWorld_png);
        //指定精靈起始所在的位置
        this.sprite.attr({
            x:cc.winSize.width/2,
            y:cc.winSize.height/2,
        });
        this.addChild(this.sprite);

        //設定圖片的矩形位置，寬高
        this.spriteRect= cc.rect(
        this.sprite.x-this.sprite.width/2,
        this.sprite.y-this.sprite.height/2,
            this.sprite.width,
            this.sprite.height,
    )






        this.setupMouse();

        return true;

    },

    //設定滑鼠功能
    setupMouse: function () {
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            //設定原始的,x,y位置
            dx:0,
            dy:0,


            onMouseDown: function (e) {
                //設定 目標抓取當下點擊的目標
                var target = e.getCurrentTarget();
                //設定x,為當下點擊的x,y
                var x = e.getLocationX();
                var y = e.getLocationY();

                //設定p的座標為當下點擊的x,y
                var p = new cc.Point(x,y);
                if(cc.rectContainsPoint(target.spriteRect,p)){
                    //設定滑鼠點擊下去，拖曳事件開始
                    target.isDragging = true;
                    //設定滑鼠的偏差值，避免拖曳圖片時有跳動的狀況
                    this.dx = x - target.sprite.x;
                    this.dy = y - target.sprite.y;
                }


            },
            onMouseUp: function (e) {
                var target = e.getCurrentTarget();
                //當滑鼠放開，拖曳事件結束
                target.isDragging = false;

                //並且圖片的起始位置會改到拖曳放開的點
                target.spriteRect=cc.rect(
                    target.sprite.x-target.sprite.width/2,
                    target.sprite.y-target.sprite.height/2,
                    target.sprite.width,
                    target.sprite.height,

                )


            },
            onMouseMove: function (e) {
                var target = e.getCurrentTarget();
                if (target.isDragging){
                    var x = e.getLocationX();
                    var y = e.getLocationY();
                    target.sprite.x = x - this.dx;
                    target.sprite.y = y - this.dy;
                }

            }


        },this);


    }


});





var Kane03Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Kane03Layer();
        this.addChild(layer);
    }
});

