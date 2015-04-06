/**
 * Created by emcgary on 4/6/15.
 */

/// <reference path="AbstractShape.ts" />
/// <reference path="IShape.ts" />

class Circle extends AbstractShape implements IShape {

    // ============================================================
    // === Public Static ==========================================
    // ============================================================

    // ============================================================
    // === Private Static =========================================
    // ============================================================

    // ============================================================
    // === Constructor ============================================
    // ============================================================

    constructor(radius:number, position:Point){
        this.radius = radius;
        this.position = position;
        super();
    }

    // ============================================================
    // === Public API =============================================
    // ============================================================

    public contents:any;

    type() {
        return "circle";
    }

    draw():any {

        var circle = new createjs.Shape();

        circle.graphics.beginFill("#ff0000").drawCircle(0, 0, this.radius);
        circle.x = this.position.x;
        circle.y = this.position.y;

        this.contents = circle;

    }

    // ============================================================
    // === Private API ============================================
    // ============================================================

    private radius:number;
    private position:Point;

    // ============================================================
    // === Event Listeners ========================================
    // ============================================================

}