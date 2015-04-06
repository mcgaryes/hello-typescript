/**
 * Created by emcgary on 4/6/15.
 */
/// <reference path="views/Circle.ts" />
/// <reference path="views/Square.ts" />
/// <reference path="views/IShape.ts" />
/// <reference path="models/Point.ts" />
var HelloTypescript = (function () {
    // ============================================================
    // === Public Static ==========================================
    // ============================================================
    // ============================================================
    // === Private Static =========================================
    // ============================================================
    // ============================================================
    // === Constructor ============================================
    // ============================================================
    function HelloTypescript(stage) {
        var circle = new Circle(40, new Point(50, 100));
        circle.draw();
        stage.addChild(circle.contents);
        var square = new Square(82, new Point(50, 100));
        square.draw();
        stage.addChild(square.contents);
        stage.update();
    }
    return HelloTypescript;
})();
//# sourceMappingURL=HelloTypescript.js.map