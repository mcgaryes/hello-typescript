/**
 * Created by emcgary on 4/6/15.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="AbstractShape.ts" />
/// <reference path="IShape.ts" />
/// <reference path="../models/Point.ts" />
var Square = (function (_super) {
    __extends(Square, _super);
    // ============================================================
    // === Public Static ==========================================
    // ============================================================
    // ============================================================
    // === Private Static =========================================
    // ============================================================
    // ============================================================
    // === Constructor ============================================
    // ============================================================
    function Square(size, position) {
        this.size = size;
        this.position = position;
        _super.call(this);
    }
    Square.prototype.type = function () {
        return 'square';
    };
    Square.prototype.draw = function () {
        var square = new createjs.Shape();
        square.graphics.beginFill("#00ff00").drawRect(0, 0, this.size, this.size);
        square.x = this.position.x;
        square.y = this.position.y;
        this.contents = square;
    };
    return Square;
})(AbstractShape);
//# sourceMappingURL=Square.js.map