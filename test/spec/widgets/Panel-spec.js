'use strict';

describe('Panel', ()=>{
    let panel = new ST.Widgets.Panel();

    describe('#_bkgObj', ()=>{
        it('should be a sprite', ()=>{
            expect(panel._bkgObj).to.be.an.instanceof(PIXI.Sprite);
        });
    });
});
