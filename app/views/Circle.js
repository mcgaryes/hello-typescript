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
var Circle = (function (_super) {
    __extends(Circle, _super);
    // ============================================================
    // === Public Static ==========================================
    // ============================================================
    // ============================================================
    // === Private Static =========================================
    // ============================================================
    // ============================================================
    // === Constructor ============================================
    // ============================================================
    function Circle(radius, position) {
        this.radius = radius;
        this.position = position;
        _super.call(this);
    }
    Circle.prototype.type = function () {
        return "circle";
    };
    Circle.prototype.draw = function () {
        var circle = new createjs.Shape();
        circle.graphics.beginFill("#ff0000").drawCircle(0, 0, this.radius);
        circle.x = this.position.x;
        circle.y = this.position.y;
        this.contents = circle;
    };
    return Circle;
})(AbstractShape);
//# sourceMappingURL=Circle.js.map