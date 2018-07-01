


var Kane06Layer = cc.Layer.extend({

    ctor:function () {
        this._super();

        cc.eventManager.addListener({
            event:cc.EventListener.KEYBOARD,
            onKeyPressed:function (keycode,event) {
            cc.log("press"+keycode);

            },
            onKeyReleased: function (keycode,event) {
                cc.log("release"+keycode);
            }

        },this);

        return true;
    },





});

var Kane06Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Kane06Layer();
        this.addChild(layer);
    }
});