


var Kane01Layer = cc.Layer.extend({
    sprite:null,
    //先設一個滑鼠拖曳物件
    isDrag:false,
    //ctor建構式
    ctor:function () {

        this._super();

        this.setupMouse();
        return true;
    },


        setupMouse: function () {
            cc.eventManager.addListener({
                //事件都是用Listener去監聽
                event: cc.EventListener.MOUSE,
                //滑鼠點擊，左鍵0，右鍵2，滾輪1
                onMouseDown: function (e) {
                    var target = e.getCurrentTarget();


                    target.isDrag = true;


                },
                onMouseUp: function (e) {

                    var target = e.getCurrentTarget();
                    target.isDrag = false;
                },
                //滑鼠移動
                onMouseMove: function (e) {
                    // cc.log("move");
                    var target = e.getCurrentTarget();
                    if (target.isDrag){
                        var x =e.getLocationX();
                        var y =e.getLocationY();
                        cc.log(x+":"+y);
                    }
                },
                //滑鼠捲動
                onMouseScroll: function (e) {
                    cc.log("scroll");
                }
             }, this);
            }
        });



                // for (var a in e) {
                //     cc.log(a);
                // }








                // Array(4) 代表裡面有0,1,2,3 四個成員
                // var ary =new Array(4);
                // ary[0]=123;
                // ary[2]=321;
                //
                // //傳統寫法，undefine也會顯示
                // // for( var i=0; i<ary.length; i++){
                // //     cc.log(ary[i]);
                // // }
                // //for in此寫法只會列出有值的項目，undefine不顯示
                // for(var v  in ary){
                //     cc.log(v + "：" + ary[v]);
                // //     cc.log(ary.length);
                // }







                // }







                //滑鼠點擊是一個物件，
                // 在js所有物件都是object，不會有其他型別//
                // var a =[0,1,2,3,4,];
                // cc.log(typeof(a));
                // for(var i in a){
                //     cc.log(i);
                // }
                // for(var i=0; i<a.length; i++){
                //     cc.log(a[i]);
                // }
                // for (var v in a){
                //     cc.log(v);
                // }







                //
                // var ex =e.getLocationX();
                // var ey =e.getLocationY();
                // var what =e.getButton();
                // cc.log(e ==this.event);
                // cc.log("down"+what);

            //滑鼠放開點擊





var Kane01Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Kane01Layer();
        this.addChild(layer);
    }
});

