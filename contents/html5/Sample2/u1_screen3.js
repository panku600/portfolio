(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.u1_screen3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_441 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(441).call(this.frame_441));

	// Layer 2
	this.mcWellDone = new lib.welldone_strip();
	this.mcWellDone.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcWellDone}]}).wait(442));

	// Layer 33
	this.mcDrag4_2 = new lib.pear();
	this.mcDrag4_2.setTransform(289.4,597.7,1,1,0,0,0,13,70.5);

	this.mcDrag4_1 = new lib.pear();
	this.mcDrag4_1.setTransform(574.5,597.9,0.719,0.719,0,0,0,14.3,73.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mcDrag4_1},{t:this.mcDrag4_2}]},365).wait(77));

	// Layer 36
	this.mcDrag3_1 = new lib.banaa();
	this.mcDrag3_1.setTransform(287.8,601.9,0.701,0.701,-99.9,0,0,-69.6,-1.1);

	this.mcDrag3_2 = new lib.banaa();
	this.mcDrag3_2.setTransform(550,607.1,0.999,0.999,-99.9,0,0,-69.6,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mcDrag3_2},{t:this.mcDrag3_1}]},316).to({state:[]},31).to({state:[]},94).wait(1));

	// Layer 39
	this.mcDrag2_1 = new lib.apple();
	this.mcDrag2_1.setTransform(565.9,596,0.64,0.639,0,0,0,7.5,81.3);

	this.mcDrag2_2 = new lib.apple();
	this.mcDrag2_2.setTransform(304.8,597.2,1,1,0,0,0,2.5,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mcDrag2_2},{t:this.mcDrag2_1}]},260).to({state:[]},39).wait(143));

	// Layer 42
	this.mcDrag1_1 = new lib.straw_final();
	this.mcDrag1_1.setTransform(573.6,605.5,0.629,0.668,0,0,0,-0.2,88.5);

	this.mcDrag1_2 = new lib.straw_final();
	this.mcDrag1_2.setTransform(306,611,1,1,0,0,0,0.5,78);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mcDrag1_2},{t:this.mcDrag1_1}]},74).to({state:[]},170).wait(198));

	// Layer 45
	this.mcDrop2 = new lib.Symbol1();
	this.mcDrop2.setTransform(431.5,187);

	this.mcDrop1 = new lib.Symbol1();
	this.mcDrop1.setTransform(162.5,205);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mcDrop1},{t:this.mcDrop2}]},74).wait(368));

	// cam
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhtIBYRMAAAiwhMDaRAAAMAAACwhgEg+gAu2MB89AAAMAAAhdtMh89AAAg");
	this.shape.setTransform(400.3,300.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(442));

	// Layer 20
	this.mcStart = new lib.StartHit();
	this.mcStart.setTransform(396.2,289.6,1.094,1);
	this.mcStart.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.mcStart).to({_off:true},1).wait(441));

	// patch
	this.StartImage = new lib.StartPatch();
	this.StartImage.setTransform(347.6,230);

	this.timeline.addTween(cjs.Tween.get(this.StartImage).to({alpha:0.012},6).to({_off:true},1).wait(435));

	// Layer 1
	this.mcPanda2 = new lib.B_panda_new();
	this.mcPanda2.setTransform(274.4,402.5);

	this.mcPanda1 = new lib.panda();
	this.mcPanda1.setTransform(344.5,527.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mcPanda1},{t:this.mcPanda2}]},86).wait(356));

	// B_panda_new
	this.instance = new lib.B_panda_new();
	this.instance.setTransform(274.4,287);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).to({y:419,alpha:1},12,cjs.Ease.get(1)).to({y:402.5},4,cjs.Ease.get(1)).to({_off:true},29).wait(356));

	// panda
	this.instance_1 = new lib.panda();
	this.instance_1.setTransform(344.5,411.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({y:543.7,alpha:1},12,cjs.Ease.get(1)).to({y:527.2},4,cjs.Ease.get(1)).to({_off:true},46).wait(356));

	// pear
	this.mcDrag4_2_1 = new lib.pear();
	this.mcDrag4_2_1.setTransform(289.4,581.7,0.1,0.1,0,0,0,13,70.5);
	this.mcDrag4_2_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcDrag4_2_1).wait(347).to({_off:false},0).to({scaleX:1,scaleY:1,y:597.7},17,cjs.Ease.get(1)).to({_off:true},1).wait(77));

	// pear2
	this.mcDrag4_1_1 = new lib.pear();
	this.mcDrag4_1_1.setTransform(574.5,580.9,0.1,0.1,0,0,0,14,73);
	this.mcDrag4_1_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcDrag4_1_1).wait(315).wait(32).to({_off:false},0).to({regX:14.3,regY:73.2,scaleX:0.72,scaleY:0.72,y:597.9},17,cjs.Ease.get(1)).to({_off:true},1).wait(77));

	// banaa2
	this.mcDrag3_1_1 = new lib.banaa();
	this.mcDrag3_1_1.setTransform(287.8,582,0.1,0.1,-99.9,0,0,-69.8,-1.1);
	this.mcDrag3_1_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcDrag3_1_1).wait(299).to({_off:false},0).to({regX:-69.5,scaleX:0.7,scaleY:0.7,y:601.9},16,cjs.Ease.get(1)).to({_off:true},1).wait(126));

	// banaa
	this.mcDrag3_2_1 = new lib.banaa();
	this.mcDrag3_2_1.setTransform(550,581.2,0.1,0.1,-99.9,0,0,-69.5,0);
	this.mcDrag3_2_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcDrag3_2_1).wait(299).to({_off:false},0).to({regX:-69.5,regY:-0.1,scaleX:1,scaleY:1,y:607.1},16,cjs.Ease.get(1)).to({_off:true},1).wait(126));

	// Layer 40
	this.mcDrag2_1_1 = new lib.apple();
	this.mcDrag2_1_1.setTransform(565.9,582,0.1,0.1,0,0,0,7.5,81.5);
	this.mcDrag2_1_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcDrag2_1_1).wait(244).to({_off:false},0).to({regY:81.3,scaleX:0.64,scaleY:0.64,y:596},15,cjs.Ease.get(1)).to({_off:true},1).wait(182));

	// Layer 41
	this.mcDrag2_2_1 = new lib.apple();
	this.mcDrag2_2_1.setTransform(304.8,583.2,0.1,0.1,0,0,0,2.5,77.5);
	this.mcDrag2_2_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcDrag2_2_1).wait(244).to({_off:false},0).to({scaleX:1,scaleY:1,y:597.2},15,cjs.Ease.get(1)).to({_off:true},1).wait(182));

	// Layer 49
	this.mcTray2 = new lib.mat();
	this.mcTray2.setTransform(547.5,478,1,1,0,0,0,2,32.6);

	this.mcTray1 = new lib.mat();
	this.mcTray1.setTransform(274.6,478,1,1,0,0,0,-0.9,32.6);

	this.mcStar = new lib.stars();
	this.mcStar.setTransform(670.6,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},74).to({state:[{t:this.mcStar},{t:this.mcTray1},{t:this.mcTray2}]},12).wait(356));

	// star
	this.instance_2 = new lib.stars();
	this.instance_2.setTransform(670.6,-48.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).to({y:43},11,cjs.Ease.get(1)).to({_off:true},1).wait(356));

	// straw_final1
	this.mcDrag1_1_1 = new lib.straw_final();
	this.mcDrag1_1_1.setTransform(573.5,584.5,0.1,0.106,0,0,0,0,88.9);
	this.mcDrag1_1_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcDrag1_1_1).wait(60).to({_off:false},0).to({regX:-0.1,regY:88.5,scaleX:0.63,scaleY:0.67,x:573.6,y:605.5},13,cjs.Ease.get(1)).to({_off:true},1).wait(368));

	// straw_final
	this.mcDrag1_2_1 = new lib.straw_final();
	this.mcDrag1_2_1.setTransform(306,581,0.1,0.1,0,0,0,0.5,78);
	this.mcDrag1_2_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcDrag1_2_1).wait(60).to({_off:false},0).to({scaleX:1,scaleY:1,y:611},13,cjs.Ease.get(1)).to({_off:true},1).wait(368));

	// soze]
	this.instance_3 = new lib.soze();
	this.instance_3.setTransform(98.3,87.6,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(429));

	// sort by
	this.instance_4 = new lib.sortby();
	this.instance_4.setTransform(91.7,39,1.728,1.728);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(429));

	// stone
	this.instance_5 = new lib.stone();
	this.instance_5.setTransform(424.7,678.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({_off:false},0).to({y:618.9},15,cjs.Ease.get(1)).wait(386));

	// mat
	this.instance_6 = new lib.mat();
	this.instance_6.setTransform(1025.5,445.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40).to({_off:false},0).to({x:545.5},15,cjs.Ease.get(1)).to({_off:true},31).wait(356));

	// mat
	this.instance_7 = new lib.mat();
	this.instance_7.setTransform(-204.4,445.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).to({x:275.5},15,cjs.Ease.get(1)).to({_off:true},47).wait(356));

	// Layer 46
	this.instance_8 = new lib.Bitmap1();
	this.instance_8.setTransform(-125.9,-18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).wait(442));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-298.2,-264.7,1397.1,1129.8);


// symbols:
(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,95);


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,236);


(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,62);


(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,20);


(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,18);


(lib.Bitmap15 = function() {
	this.initialize(img.Bitmap15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,18);


(lib.Bitmap15_1 = function() {
	this.initialize(img.Bitmap15_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,65);


(lib.Bitmap16 = function() {
	this.initialize(img.Bitmap16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,20);


(lib.Bitmap17 = function() {
	this.initialize(img.Bitmap17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,19);


(lib.Bitmap18 = function() {
	this.initialize(img.Bitmap18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,22);


(lib.Bitmap19 = function() {
	this.initialize(img.Bitmap19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,24);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,126);


(lib.Bitmap20 = function() {
	this.initialize(img.Bitmap20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,22);


(lib.Bitmap20_1 = function() {
	this.initialize(img.Bitmap20_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,54);


(lib.Bitmap21 = function() {
	this.initialize(img.Bitmap21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,22);


(lib.Bitmap21_1 = function() {
	this.initialize(img.Bitmap21_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,57);


(lib.Bitmap22 = function() {
	this.initialize(img.Bitmap22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,22);


(lib.Bitmap23 = function() {
	this.initialize(img.Bitmap23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,22);


(lib.Bitmap24 = function() {
	this.initialize(img.Bitmap24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,24);


(lib.Bitmap25 = function() {
	this.initialize(img.Bitmap25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,24);


(lib.Bitmap26 = function() {
	this.initialize(img.Bitmap26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,22);


(lib.Bitmap27 = function() {
	this.initialize(img.Bitmap27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,22);


(lib.Bitmap28 = function() {
	this.initialize(img.Bitmap28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,14);


(lib.Bitmap29 = function() {
	this.initialize(img.Bitmap29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,22);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,151);


(lib.Bitmap30 = function() {
	this.initialize(img.Bitmap30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,192);


(lib.Bitmap31 = function() {
	this.initialize(img.Bitmap31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,26);


(lib.Bitmap32 = function() {
	this.initialize(img.Bitmap32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,20);


(lib.Bitmap33 = function() {
	this.initialize(img.Bitmap33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,22);


(lib.Bitmap34 = function() {
	this.initialize(img.Bitmap34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,21);


(lib.Bitmap35 = function() {
	this.initialize(img.Bitmap35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,23);


(lib.Bitmap36 = function() {
	this.initialize(img.Bitmap36);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,26);


(lib.Bitmap37 = function() {
	this.initialize(img.Bitmap37);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,23);


(lib.Bitmap38 = function() {
	this.initialize(img.Bitmap38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,23);


(lib.Bitmap39 = function() {
	this.initialize(img.Bitmap39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,23);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,59);


(lib.Bitmap40 = function() {
	this.initialize(img.Bitmap40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,23);


(lib.Bitmap41 = function() {
	this.initialize(img.Bitmap41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,23);


(lib.Bitmap42 = function() {
	this.initialize(img.Bitmap42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,25);


(lib.Bitmap43 = function() {
	this.initialize(img.Bitmap43);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,23);


(lib.Bitmap44 = function() {
	this.initialize(img.Bitmap44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,24);


(lib.Bitmap45 = function() {
	this.initialize(img.Bitmap45);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,27);


(lib.Bitmap46 = function() {
	this.initialize(img.Bitmap46);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,15);


(lib.Bitmap47 = function() {
	this.initialize(img.Bitmap47);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,23);


(lib.Bitmap48 = function() {
	this.initialize(img.Bitmap48);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,252);


(lib.Bitmap49 = function() {
	this.initialize(img.Bitmap49);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,239);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,62);


(lib.Bitmap50 = function() {
	this.initialize(img.Bitmap50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,104);


(lib.Bitmap51 = function() {
	this.initialize(img.Bitmap51);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,104);


(lib.Bitmap52 = function() {
	this.initialize(img.Bitmap52);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,92);


(lib.Bitmap53 = function() {
	this.initialize(img.Bitmap53);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,92);


(lib.Bitmap54 = function() {
	this.initialize(img.Bitmap54);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,161);


(lib.Bitmap55 = function() {
	this.initialize(img.Bitmap55);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,137);


(lib.Bitmap56 = function() {
	this.initialize(img.Bitmap56);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,180);


(lib.Bitmap57 = function() {
	this.initialize(img.Bitmap57);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,111);


(lib.Bitmap58 = function() {
	this.initialize(img.Bitmap58);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,568,98);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,158);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,95);


(lib.Bitmap8_1 = function() {
	this.initialize(img.Bitmap8_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,95);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,93);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1074,702);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib.WELLDONE = function() {
	this.initialize(img.WELLDONE);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,814,109);


(lib.well = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg+eAu3MAAAhdtMB89AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-399.9,-299.9,800,600);


(lib.Symbol1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap20_1();
	this.instance.setTransform(-24,-25.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24,-25.2,52,54);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AxwVNMAAAgqZMAjhAAAMAAAAqZg");
	this.shape.setTransform(113.7,135.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,227.4,271.6);


(lib.straw_final = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap54();
	this.instance.setTransform(-81.9,-83.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81.9,-83.7,165,161);


(lib.stone = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap58();
	this.instance.setTransform(-283.9,-49.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-283.9,-49.9,568,98);


(lib.StartPatch = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap8();
	this.instance.setTransform(-347.4,-229.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-347.4,-229.9,800,600);


(lib.StartHit = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D99900").s().p("Ar0FqQhtAAABh4IAAnkQgBh3BtAAIXoAAQBtAAAAB3IAAHkQAAB4htAAg");
	this.shape.setTransform(6,11.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.6,-24.7,173.2,72.4);


(lib.soze = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-105.9,-71.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-105.9,-71.9,217,151);


(lib.sortby = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-110.9,-59.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.9,-59.9,212,126);


(lib.pink_new = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(-9.9,-17.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.9,-17.8,20,18);


(lib.pink = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(-9.8,-17.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.8,-17.7,20,18);


(lib.pear = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap57();
	this.instance.setTransform(-37.9,-50.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.9,-50.9,103,111);


(lib.panda_eyessad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F161C").s().p("AjoCJQAbh/A/hUQBIhjBigMQBkgMAnBWQAnBVAVCDQAHArgBAnQiwiKkhBYg");
	this.shape.setTransform(-58.9,-12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F161C").s().p("AjuDFQgDgkAIgtIAEgWIADgPQAch9A/hWQBHhjBigMQBkgMAoBWQAnBVAVCDQAGArAAAnQAAASgCARQgFArgOAmQiyhbkXArg");
	this.shape_1.setTransform(-59.6,-6.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F161C").s().p("AilEDQheg5AaiXIAEgWIADgPQAch9A/hWQBHhjBigMQBkgMAoBWQAnBVAVCFQAGApAAAnQAAASgCARQgHA8gZAyQgxBehzAHIgXAAQhjAAhVgzg");
	this.shape_2.setTransform(-59.6,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0F161C").s().p("AjoCJQAbh/A/hUQBIhjBigMQBkgMAnBWQAnBVAVCDQAHArgBAnQiqiDknBRg");
	this.shape_3.setTransform(-58.9,-12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0F161C").s().p("AjNBWQAXgyAdgnQBIhiBigMQBkgMAoBVQAdA/ATBdQiwigjqCCg");
	this.shape_4.setTransform(-57.9,-19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},18).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[]},1).wait(45));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_5.setTransform(-62.4,24.2,0.7,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_6.setTransform(-56.9,14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgtAuQgTgTAAgbQAAgaATgUQATgSAaAAQAbAAATASQAUAUgBAaQABAbgUATQgTATgbABQgagBgTgTg");
	this.shape_7.setTransform(-59.7,19.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#02CBFD","#03719E","#011821"],[0,0.886,1],-0.5,0.1,0,0,0.1,15.1).s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape_8.setTransform(-58.4,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(76));

	// Layer 3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0F161C").s().p("AjoCJIAAgDQAYhrAxhMIARgZQBIhjBigMQBkgMAnBWQAnBVAVCDQAHArgBAnQiwiKkhBYg");
	this.shape_9.setTransform(-58.9,-12.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#233541").s().p("AilByQheg5AaiWIAEgVIADgPQEihYCwCKQAAARgCARQgHA6gZAyQgxBehzAHIgXABQhjAAhVgzg");
	this.shape_10.setTransform(-59.6,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.6,-31,48.1,62.2);


(lib.panda_eyescopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F161C").s().p("AjNBWQAXgyAdgnQBIhiBigMQBkgMAoBVQAdA/ATBdQiwigjqCCg");
	this.shape.setTransform(-57.9,-19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F161C").s().p("AjoCJQAbh/A/hUQBIhjBigMQBkgMAnBWQAnBVAVCDQAHArgBAnQiqiDknBRg");
	this.shape_1.setTransform(-58.9,-12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F161C").s().p("AjuDFQgDgkAIgtIAEgWIADgPQAch9A/hWQBHhjBigMQBkgMAoBWQAnBVAVCDQAGArAAAnQAAASgCARQgFArgOAmQiyhbkXArg");
	this.shape_2.setTransform(-59.6,-6.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0F161C").s().p("AilEDQheg5AaiXIAEgWIADgPQAch9A/hWQBHhjBigMQBkgMAoBWQAnBVAVCFQAGApAAAnQAAASgCARQgHA8gZAyQgxBehzAHIgXAAQhjAAhVgzg");
	this.shape_3.setTransform(-59.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},16).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape}]},2).to({state:[]},1).wait(45));

	// Layer 2
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(-83.9,-30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.9,-30.9,48,62);


(lib.panda_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F161C").s().p("AjNBWQAXgyAdgnQBIhiBigMQBkgMAoBVQAdA/ATBdQiwigjqCCg");
	this.shape.setTransform(-57.9,-19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F161C").s().p("AjoCJQAbh/A/hUQBIhjBigMQBkgMAnBWQAnBVAVCDQAHArgBAnQiqiDknBRg");
	this.shape_1.setTransform(-58.9,-12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F161C").s().p("AjuDFQgDgkAIgtIAEgWIADgPQAch9A/hWQBHhjBigMQBkgMAoBWQAnBVAVCDQAGArAAAnQAAASgCARQgFArgOAmQiyhbkXArg");
	this.shape_2.setTransform(-59.6,-6.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0F161C").s().p("AilEDQheg5AaiXIAEgWIADgPQAch9A/hWQBHhjBigMQBkgMAoBWQAnBVAVCFQAGApAAAnQAAASgCARQgHA8gZAyQgxBehzAHIgXAAQhjAAhVgzg");
	this.shape_3.setTransform(-59.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},16).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape}]},2).to({state:[]},1).wait(45));

	// Layer 3
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-83.6,-31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.6,-31,48,62);


(lib.panda_bodypart_new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap48();
	this.instance.setTransform(-114.9,-268.9);

	this.instance_1 = new lib.Bitmap49();
	this.instance_1.setTransform(-120.9,-267.9);

	this.instance_2 = new lib.Bitmap50();
	this.instance_2.setTransform(-145.9,-124.9);

	this.instance_3 = new lib.Bitmap51();
	this.instance_3.setTransform(63,-124.9);

	this.instance_4 = new lib.Bitmap52();
	this.instance_4.setTransform(97,-91.9);

	this.instance_5 = new lib.Bitmap53();
	this.instance_5.setTransform(-183.9,-91.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.9,-268.9,229,252);


(lib.panda_bodypart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(-80.7,-174);

	this.instance_1 = new lib.Bitmap7();
	this.instance_1.setTransform(-131.4,-155.9);

	this.instance_2 = new lib.Bitmap8_1();
	this.instance_2.setTransform(48.1,-156.1);

	this.instance_3 = new lib.Bitmap9();
	this.instance_3.setTransform(-113,-95.9);

	this.instance_4 = new lib.Bitmap10();
	this.instance_4.setTransform(31.2,-95.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.7,-174,161,158);


(lib.panda_lipssad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap15();
	this.instance.setTransform(-15.9,-17.9);

	this.instance_1 = new lib.Bitmap28();
	this.instance_1.setTransform(-19.9,-17.9);

	this.instance_2 = new lib.Bitmap29();
	this.instance_2.setTransform(-21.9,-17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(331));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-17.9,32,18);


(lib.mat = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-120.9,-29.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120.9,-29.9,243,59);


(lib.blur_ = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2848F").s().p("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");
	this.shape.setTransform(60.4,-0.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.2,-117.5,271.3,233.6);


(lib.banaa = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap56();
	this.instance.setTransform(-57.9,-89.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.9,-89.9,103,180);


(lib.B_panda_lipssad_new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap32();
	this.instance.setTransform(-16.9,-18.9);

	this.instance_1 = new lib.Bitmap46();
	this.instance_1.setTransform(-20.9,-18.9);

	this.instance_2 = new lib.Bitmap47();
	this.instance_2.setTransform(-22.9,-18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(331));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-18.9,34,20);


(lib.B_panda_eye_new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F2E36").s().p("AhiA0IgBgLIgBgIQgCgTACgOQADgVAWgXQAVgYAiAAIALAAIAAAAQANABAOAEQAjAKAxAwQh6gihLBsIgDgRg");
	this.shape.setTransform(-2.1,-20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F2E36").s().p("AhsApIgCgRIgCgLIgBgIQgCgSACgOQADgWAWgYQAWgXAhgBIALAAIABAAQAOACAMAEIAFACQAmAMAgAhIAJAKQAQATAKASQiMgShDBwQgLgbgFgdg");
	this.shape_1.setTransform(-0.8,-17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F2E36").s().p("AhkBPIAAgBQgNgkgFglIgBgJIgBgJQgCgTACgOQADgWAWgYQAVgXAigBIALAAIAAAAQAPACAOAEQAnAMAiAjQAVAXANAaIAJASIAAABIAGAUIgCgIQhJBZiCAFIAEAGQgMgQgJgWg");
	this.shape_2.setTransform(-0.1,-15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F2E36").s().p("AhPBkIgCgCQgLgPgJgWIAAgBQgNgkgFgjIgBgLIgBgJQgCgTACgOQACgWAWgYQAWgXAhgBIALAAIABAAQAPACAOAEQAnAMAiAjQAVAXANAaIAJAUIAAABIAGARIAAAEQAIAngUAdQgXAkhDARQgRAEgNAAQgpAAgbgjg");
	this.shape_3.setTransform(0,-13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},16).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_2}]},4).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape}]},2).to({state:[]},2).wait(48));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhlA9IAAgBQgNgkgFgjIgBgLIgBgJQgCgTACgOQACgWAWgYQAWgXAhgBIALAAIABAAQAPACAOAEQAnAMAiAjQAdAfAOAmIAAABQAUA0gaAlQgXAkhDARQgRAEgNAAQg9AAgdhKg");
	mask.setTransform(0,-13.4);

	// Layer 2
	this.instance = new lib.Bitmap45();
	this.instance.setTransform(-11.9,-26.9);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-26.9,25,27);


(lib.B_panda_eyesad_new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F2E36").s().p("AhsApIgCgRIgCgLIgBgIQgCgSACgOQADgWAWgYQAWgXAhgBIALAAIABAAQAOACAMAEIAFACQAmAMAgAhIAJAKQAQATAKASQiMgShDBwQgLgbgFgdg");
	this.shape.setTransform(-0.8,-17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F2E36").s().p("AhkBPIAAgBQgNgkgFglIgBgJIgBgJQgCgTACgOQADgWAWgYQAVgXAigBIALAAIAAAAQAPACAOAEQAnAMAiAjQAVAXANAaIAJASIAAABIAGAUIgCgIQhJBZiCAFIAEAGQgMgQgJgWg");
	this.shape_1.setTransform(-0.1,-15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F2E36").s().p("AhPBkIgCgCQgLgPgJgWIAAgBQgNgkgFgjIgBgLIgBgJQgCgTACgOQACgWAWgYQAWgXAhgBIALAAIABAAQAPACAOAEQAnAMAiAjQAVAXANAaIAJAUIAAABIAGARIAAAEQAIAngUAdQgXAkhDARQgRAEgNAAQgpAAgbgjg");
	this.shape_2.setTransform(0,-13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},18).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},2).to({state:[]},2).to({state:[]},48).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgBACgDQACgCACAAQACAAACACQADADAAABQAAADgDACQgCACgCAAQgCAAgCgCg");
	this.shape_3.setTransform(0.9,-6,0.59,0.59);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgBACgDQACgCACAAQACAAACACQADADAAABQAAADgDACQgCACgCAAQgCAAgCgCg");
	this.shape_4.setTransform(3.3,-9.4,0.9,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSATQgHgIgBgLQABgKAHgHQAIgIAKAAQALAAAHAIQAJAHgBAKQABALgJAIQgHAIgLAAQgKAAgIgIgAACgKIABAAIgBAAg");
	this.shape_5.setTransform(2,-7.9,0.9,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#02CBFD","#03719E","#011821"],[0,0.886,1],-0.1,-0.1,0,0,-0.1,7).s().p("AgwAyQgVgWAAgcQAAgOAGgOQAFgLAKgJQAUgVAcAAIAAAAQAdAAAVAVQAUAUAAAcQAAAcgUAWQgVAUgdAAQgcAAgUgUg");
	this.shape_6.setTransform(2,-7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(79));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F2E36").s().p("AhsApIgCgRIgCgLIgBgIQgCgSACgOQADgWAWgYQAWgXAhgBIALAAIABAAQAOACAMAEIAFACQAmAMAgAhIAJAKQAQATAKASQiMgShDBwQgLgbgFgdg");
	this.shape_7.setTransform(-0.8,-17.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFFFFF","#C7C7C7","#7B7B7B"],[0.506,0.824,0.929],-1,0.2,0,-1,0.2,12.3).s().p("AhlA9IAAgBQgNgkgFgjIgBgLIgBgJQgCgTACgOQACgWAWgYQAWgXAhgBIALAAIABAAQAPACAOAEQAnAMAiAjQAdAfAOAmIAAABQAUA0gaAlQgXAkhDARQgRAEgNAAQg9AAgdhKg");
	this.shape_8.setTransform(0,-13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-27,24.8,27.1);


(lib.welldone_strip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_44 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("AgIIgIAAw/IASAAIAAQ/g");
	var mask_graphics_5 = new cjs.Graphics().p("AmeIgIAAw/IM9AAIAAQ/g");
	var mask_graphics_6 = new cjs.Graphics().p("AszIgIAAw/IZnAAIAAQ/g");
	var mask_graphics_7 = new cjs.Graphics().p("AzJIgIAAw/MAmTAAAIAAQ/g");
	var mask_graphics_8 = new cjs.Graphics().p("A5eIgIAAw/MAy9AAAIAAQ/g");
	var mask_graphics_9 = new cjs.Graphics().p("A/0IgIAAw/MA/pAAAIAAQ/g");
	var mask_graphics_10 = new cjs.Graphics().p("EgmJAIgIAAw/MBMTAAAIAAQ/g");
	var mask_graphics_11 = new cjs.Graphics().p("EgsfAIgIAAw/MBY/AAAIAAQ/g");
	var mask_graphics_12 = new cjs.Graphics().p("Egy0AIgIAAw/MBlpAAAIAAQ/g");
	var mask_graphics_13 = new cjs.Graphics().p("Eg5KAIgIAAw/MByVAAAIAAQ/g");
	var mask_graphics_14 = new cjs.Graphics().p("Eg/fAIgIAAw/MB+/AAAIAAQ/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:-2.9,y:0}).wait(1).to({graphics:mask_graphics_5,x:-2.6,y:0}).wait(1).to({graphics:mask_graphics_6,x:-2.3,y:0}).wait(1).to({graphics:mask_graphics_7,x:-2,y:0}).wait(1).to({graphics:mask_graphics_8,x:-1.7,y:0}).wait(1).to({graphics:mask_graphics_9,x:-1.4,y:0}).wait(1).to({graphics:mask_graphics_10,x:-1.1,y:0}).wait(1).to({graphics:mask_graphics_11,x:-0.8,y:0}).wait(1).to({graphics:mask_graphics_12,x:-0.5,y:0}).wait(1).to({graphics:mask_graphics_13,x:-0.2,y:0}).wait(1).to({graphics:mask_graphics_14,x:0,y:0}).wait(31));

	// strip
	this.instance = new lib.WELLDONE();
	this.instance.setTransform(-406.8,-54.4);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},4).wait(41));

	// white patch
	this.instance_1 = new lib.well();
	this.instance_1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.441},9).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-399.9,-299.9,800,600);


(lib.Symbol9copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14));

	// Layer 1
	this.instance = new lib.Symbol1_1();
	this.instance.setTransform(0,0,1.5,1.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:360,alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,-37.8,78,81);


(lib.Symbol9copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14));

	// Layer 1
	this.instance = new lib.Symbol1_1();
	this.instance.setTransform(0,0,1.5,1.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:360,alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,-37.8,78,81);


(lib.Symbol9copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14));

	// Layer 1
	this.instance = new lib.Symbol1_1();
	this.instance.setTransform(0,0,1.5,1.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:360,alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,-37.8,78,81);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14));

	// Layer 1
	this.instance = new lib.Symbol1_1();
	this.instance.setTransform(0,0,1.5,1.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:360,alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,-37.8,78,81);


(lib.stars = function() {
	this.initialize();

	// Layer 1
	this.mcStar4 = new lib.Symbol9copy3();
	this.mcStar4.setTransform(81.8,-0.6);

	this.mcStar3 = new lib.Symbol9copy2();
	this.mcStar3.setTransform(27.9,-0.6);

	this.mcStar2 = new lib.Symbol9copy();
	this.mcStar2.setTransform(-25.9,-0.6);

	this.mcStar1 = new lib.Symbol9();
	this.mcStar1.setTransform(-79.8,-0.6);

	// Layer 3
	this.instance = new lib.Bitmap21_1();
	this.instance.setTransform(-104.7,-26.4);

	// Layer 2
	this.instance_1 = new lib.Bitmap15_1();
	this.instance_1.setTransform(-117.9,-32.4);

	this.addChild(this.instance_1,this.instance,this.mcStar1,this.mcStar2,this.mcStar3,this.mcStar4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.9,-38.4,241.7,81);


(lib.panda_lips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap15();
	this.instance.setTransform(-15.9,-17.9);

	this.instance_1 = new lib.Bitmap16();
	this.instance_1.setTransform(-24.8,-18.9);

	this.instance_2 = new lib.Bitmap17();
	this.instance_2.setTransform(-32.9,-18.9);

	this.instance_3 = new lib.pink();
	this.instance_3.setTransform(-31.1,-13.1,1,1,0,0,0,0,-8.8);

	this.instance_4 = new lib.pink();
	this.instance_4.setTransform(36.8,-16.6,1,1,0,0,0,0,-8.8);

	this.instance_5 = new lib.Bitmap18();
	this.instance_5.setTransform(-28.9,-18.9);

	this.instance_6 = new lib.Bitmap19();
	this.instance_6.setTransform(-28.9,-18.9);

	this.instance_7 = new lib.Bitmap20();
	this.instance_7.setTransform(-28.9,-18.9);

	this.instance_8 = new lib.Bitmap21();
	this.instance_8.setTransform(-28.9,-18.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D88778").s().p("AhZA1QAeggAZgTIAEgCIABAAIABAAIAGgFQARgOALgMQAPgPAPgFQAPgFATAEQATAEABAeIAAAFIAAACQgEAZgqAfIgBABIgIACQgKACgSACIgoACIgLAAIgtgBg");
	this.shape.setTransform(3.3,-5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#802B2B").s().p("AhtAjIgDgBQg6gWg4guQAaAHAaAGQA3ALA2ADQAYABApgBIgBABIgBAAIgDACIAAABQgZARgeAgQgigGgPgFgAB3gSQA2gKA2gQQhQA8hLAWQAqgfAFgZg");
	this.shape_1.setTransform(0.4,-4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C4A55").s().p("Ak1giQB+AjA3gHQA2gJAVgsQAWgrABgHIAaAAQAjBnBUgDQBUgDBvgtQiuCnifAAQiVAAiJiQg");
	this.shape_2.setTransform(1.8,-7.8);

	this.instance_9 = new lib.Bitmap22();
	this.instance_9.setTransform(-28.9,-18.9);

	this.instance_10 = new lib.Bitmap23();
	this.instance_10.setTransform(-28.9,-18.9);

	this.instance_11 = new lib.Bitmap24();
	this.instance_11.setTransform(-28.9,-18.9);

	this.instance_12 = new lib.Bitmap25();
	this.instance_12.setTransform(-28.9,-18.9);

	this.instance_13 = new lib.Bitmap26();
	this.instance_13.setTransform(-28.9,-18.9);

	this.instance_14 = new lib.Bitmap27();
	this.instance_14.setTransform(-27.9,-18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},2).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_5}]},68).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_6}]},3).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_7}]},3).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_8}]},3).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_9}]},3).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_10}]},3).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_11}]},3).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_12}]},3).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_13}]},3).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_14}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance}]},3).wait(162));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-17.9,32,18);


(lib.B_panda_lips_new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_122 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(122).call(this.frame_122));

	// Layer 1
	this.instance = new lib.Bitmap32();
	this.instance.setTransform(-16.9,-18.9);

	this.instance_1 = new lib.Bitmap33();
	this.instance_1.setTransform(-26.9,-19.9);

	this.instance_2 = new lib.Bitmap34();
	this.instance_2.setTransform(-35.9,-19.9);

	this.instance_3 = new lib.pink_new();
	this.instance_3.setTransform(-33.2,-13.3,1.061,1.061,0,0,0,0,-8.7);

	this.instance_4 = new lib.pink_new();
	this.instance_4.setTransform(38.9,-17.1,1.061,1.061,0,0,0,0,-8.9);

	this.instance_5 = new lib.Bitmap35();
	this.instance_5.setTransform(-30.9,-19.9);

	this.instance_6 = new lib.Bitmap36();
	this.instance_6.setTransform(-30.9,-19.9);

	this.instance_7 = new lib.Bitmap37();
	this.instance_7.setTransform(-30.9,-19.9);

	this.instance_8 = new lib.Bitmap38();
	this.instance_8.setTransform(-30.9,-19.9);

	this.instance_9 = new lib.Bitmap39();
	this.instance_9.setTransform(-30.9,-19.9);

	this.instance_10 = new lib.Bitmap40();
	this.instance_10.setTransform(-30.9,-19.9);

	this.instance_11 = new lib.Bitmap41();
	this.instance_11.setTransform(-30.9,-19.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#802B2B").s().p("AgrAzQglgFgkgMIgCgBQg/gXg7gxIA3ANQA7AMA5ADQA3ADA1gDIB+gUIAAABIAEgCQAkgHAkgMQgeAZgbAQIhWAoQgQgVgPgEQgJgEgLgBQgJAAgMABQgYADgIALQgLAKgOAbIgMgBg");
	this.shape.setTransform(0.5,-4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D88778").s().p("AgbAvQgOgXgIgEIAAgBIgBAAIgNACIgNAAIgWAAQAOgYALgLQAKgLAZgCQALgCAJABQALAAAHAEQAPAFARATIADAFIAHALQAGAKgCANQgCAMgeAJQgIADgGAAQgSAAgJgQgABig+IABAAIgBABg");
	this.shape_1.setTransform(7.1,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C4A55").s().p("AlIgkQCHAlA4gIQA6gJAXguQAXgvABgGIAcgBQAWBGAvAYQAZANAggBIAagBQBQgJBlgpQi5CyioAAQifAAiRiZg");
	this.shape_2.setTransform(2,-8.2);

	this.instance_12 = new lib.Bitmap42();
	this.instance_12.setTransform(-30.9,-19.9);

	this.instance_13 = new lib.Bitmap43();
	this.instance_13.setTransform(-30.9,-19.9);

	this.instance_14 = new lib.Bitmap44();
	this.instance_14.setTransform(-29.9,-19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},2).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_5}]},68).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_6}]},3).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_7}]},3).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_8}]},3).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_9}]},3).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_10}]},3).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_11}]},3).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_12}]},3).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_13}]},3).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_14}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance}]},3).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-18.9,34,20);


(lib.apple = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Bitmap55();
	this.instance.setTransform(-49.2,-45.9,0.81,0.81);

	this.instance_1 = new lib.blur_();
	this.instance_1.setTransform(-20.9,13.1,0.41,0.41,0,-0.5,0);
	this.instance_1.alpha = 0.43;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.2,-45.9,112.2,111);


(lib.panda_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.panda_eyescopy();
	this.instance.setTransform(-2.5,-98.2,1,1,0,0,180);

	this.instance_1 = new lib.panda_eyes();
	this.instance_1.setTransform(-2.4,-98.2);

	this.instance_2 = new lib.panda_eyessad();
	this.instance_2.setTransform(-2.5,-98.2,1,1,0,0,180);

	this.instance_3 = new lib.panda_eyessad();
	this.instance_3.setTransform(-2.4,-98.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	// Layer 3
	this.instance_4 = new lib.Bitmap13();
	this.instance_4.setTransform(-17.9,-81.9);

	this.instance_5 = new lib.panda_lips("single",0);
	this.instance_5.setTransform(-2.4,-43.3);

	this.instance_6 = new lib.panda_lipssad();
	this.instance_6.setTransform(-2.4,-52.4,1,1,0,0,0,0,-9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{regY:0,y:-43.3,mode:"single",startPosition:0}},{t:this.instance_4}]}).to({state:[{t:this.instance_5,p:{regY:-9.1,y:-52.4,mode:"independent",startPosition:undefined}},{t:this.instance_4}]},1).to({state:[{t:this.instance_6,p:{regY:-9.1,y:-52.4,mode:"independent",startPosition:undefined}},{t:this.instance_4}]},1).to({state:[{t:this.instance_6,p:{regY:0,y:-43.3,mode:"single",startPosition:0}},{t:this.instance_4}]},1).wait(1));

	// Layer 1
	this.instance_7 = new lib.Bitmap11();
	this.instance_7.setTransform(-125.9,-235.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.9,-235.9,253,236);


(lib.panda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ideal:0,right:100,wrong:299});

	// timeline functions:
	this.frame_94 = function() {
		exportRoot.mcPanda1.gotoAndPlay(0);
	}
	this.frame_290 = function() {
		this.stop();
	}
	this.frame_391 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(196).call(this.frame_290).wait(101).call(this.frame_391).wait(1));

	// panda_body part
	this.instance = new lib.panda_bodypart("single",3);
	this.instance.setTransform(-87.4,-126.3,0.45,0.45,0,0,0,-28.7,-22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({startPosition:3},0).to({regX:-28.7,regY:-22.7,rotation:-4.6,y:-126.1},3,cjs.Ease.get(-0.81)).wait(2).to({startPosition:3},0).to({regX:-28.6,regY:-22.6,rotation:0,y:-126.2},3,cjs.Ease.get(0.78)).wait(2).to({startPosition:3},0).to({regX:-28.5,regY:-22.7,rotation:-0.8,x:-87.2,y:-133},3,cjs.Ease.get(-0.79)).wait(2).to({startPosition:3},0).to({regX:-28.6,regY:-22.6,rotation:0,x:-87.3,y:-126.2},3,cjs.Ease.get(0.8)).wait(2).to({startPosition:3},0).to({regX:-28.7,regY:-22.7,rotation:-4.6,y:-126.1},3,cjs.Ease.get(-0.81)).wait(2).to({startPosition:3},0).to({regX:-28.6,regY:-22.6,rotation:0,y:-126.2},3,cjs.Ease.get(0.78)).wait(2).to({startPosition:3},0).to({regX:-28.5,regY:-22.7,rotation:-0.8,x:-87.2,y:-133},3,cjs.Ease.get(-0.79)).wait(2).to({startPosition:3},0).to({regX:-28.6,regY:-22.6,rotation:0,x:-87.3,y:-126.2},3,cjs.Ease.get(0.8)).wait(56).to({startPosition:3},0).wait(199).to({startPosition:3},0).to({y:-125.5},4).wait(3).to({startPosition:3},0).wait(87));

	// panda_body part
	this.instance_1 = new lib.panda_bodypart("single",4);
	this.instance_1.setTransform(-60.3,-126.3,0.45,0.45,0,0,0,31.4,-22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({startPosition:4},0).to({regX:31.3,regY:-22.7,rotation:-0.3,x:-60.4,y:-135.4},3,cjs.Ease.get(-0.81)).wait(2).to({startPosition:4},0).to({regX:31.4,regY:-22.6,rotation:0,x:-60.2,y:-126.2},3,cjs.Ease.get(0.78)).wait(2).to({startPosition:4},0).to({rotation:1.8,y:-125.8},3,cjs.Ease.get(-0.79)).wait(2).to({startPosition:4},0).to({rotation:0,y:-126.2},3,cjs.Ease.get(0.8)).wait(2).to({startPosition:4},0).to({regX:31.3,regY:-22.7,rotation:-0.3,x:-60.4,y:-135.4},3,cjs.Ease.get(-0.81)).wait(2).to({startPosition:4},0).to({regX:31.4,regY:-22.6,rotation:0,x:-60.2,y:-126.2},3,cjs.Ease.get(0.78)).wait(2).to({startPosition:4},0).to({rotation:1.8,y:-125.8},3,cjs.Ease.get(-0.79)).wait(2).to({startPosition:4},0).to({rotation:0,y:-126.2},3,cjs.Ease.get(0.8)).wait(56).to({startPosition:4},0).wait(199).to({startPosition:4},0).to({y:-125.5},4).wait(3).to({startPosition:4},0).wait(87));

	// panda_head
	this.instance_2 = new lib.panda_head("single",0);
	this.instance_2.setTransform(-73.4,-178.5,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({startPosition:0},0).to({rotation:-5.6,x:-73.8,y:-176.6},3,cjs.Ease.get(-0.81)).wait(2).to({startPosition:0},0).to({rotation:0,x:-73.3,y:-178.4},3,cjs.Ease.get(0.78)).wait(2).to({startPosition:0},0).to({rotation:6.5,x:-71.6,y:-176.5},3,cjs.Ease.get(-0.79)).wait(2).to({startPosition:0},0).to({rotation:0,x:-73.3,y:-178.4},3,cjs.Ease.get(0.8)).wait(2).to({startPosition:0},0).to({rotation:-5.6,x:-73.8,y:-176.6},3,cjs.Ease.get(-0.81)).wait(2).to({startPosition:0},0).to({rotation:0,x:-73.3,y:-178.4},3,cjs.Ease.get(0.78)).wait(2).to({startPosition:0},0).to({rotation:6.5,x:-71.6,y:-176.5},3,cjs.Ease.get(-0.79)).wait(2).to({startPosition:0},0).to({rotation:0,x:-73.3,y:-178.4},3,cjs.Ease.get(0.8)).wait(56).to({startPosition:1},0).wait(199).to({startPosition:3},0).to({scaleX:0.44,scaleY:0.44,y:-177.6},4).wait(3).to({startPosition:2},0).wait(87));

	// panda_body part
	this.instance_3 = new lib.panda_bodypart("single",0);
	this.instance_3.setTransform(-74.7,-123.4,0.45,0.45,0,0,0,-0.4,-16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({startPosition:0},0).to({regX:-0.2,regY:-16.1,rotation:-0.3,x:-74.5},3,cjs.Ease.get(-0.81)).wait(2).to({startPosition:0},0).to({regX:-0.3,regY:-16,rotation:0,x:-74.6},3,cjs.Ease.get(0.78)).wait(2).to({startPosition:0},0).to({regX:-0.2,rotation:1.8},3,cjs.Ease.get(-0.79)).wait(2).to({startPosition:0},0).to({regX:-0.3,rotation:0},3,cjs.Ease.get(0.8)).wait(2).to({startPosition:0},0).to({regX:-0.2,regY:-16.1,rotation:-0.3,x:-74.5},3,cjs.Ease.get(-0.81)).wait(2).to({startPosition:0},0).to({regX:-0.3,regY:-16,rotation:0,x:-74.6},3,cjs.Ease.get(0.78)).wait(2).to({startPosition:0},0).to({regX:-0.2,rotation:1.8},3,cjs.Ease.get(-0.79)).wait(2).to({startPosition:0},0).to({regX:-0.3,rotation:0},3,cjs.Ease.get(0.8)).wait(56).to({startPosition:0},0).wait(199).to({startPosition:0},0).to({regY:-16.1,scaleX:0.46,scaleY:0.46,y:-123.4},4).wait(3).to({startPosition:0},0).wait(87));

	// panda_body part
	this.instance_4 = new lib.panda_bodypart("single",1);
	this.instance_4.setTransform(-96.1,-186.3,0.45,0.45,0,0,0,-48,-155.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({startPosition:1},0).to({regY:-155.9,rotation:-1.1,x:-96.6,y:-186},3,cjs.Ease.get(-0.81)).wait(2).to({startPosition:1},0).to({regY:-155.8,rotation:0,x:-96,y:-186.2},3,cjs.Ease.get(0.78)).wait(2).to({startPosition:1},0).to({rotation:19.4,x:-94.1,y:-186.8},3,cjs.Ease.get(-0.79)).wait(2).to({startPosition:1},0).to({rotation:0,x:-96,y:-186.2},3,cjs.Ease.get(0.8)).wait(2).to({startPosition:1},0).to({regY:-155.9,rotation:-1.1,x:-96.6,y:-186},3,cjs.Ease.get(-0.81)).wait(2).to({startPosition:1},0).to({regY:-155.8,rotation:0,x:-96,y:-186.2},3,cjs.Ease.get(0.78)).wait(2).to({startPosition:1},0).to({rotation:19.4,x:-94.1,y:-186.8},3,cjs.Ease.get(-0.79)).wait(2).to({startPosition:1},0).to({rotation:0,x:-96,y:-186.2},3,cjs.Ease.get(0.8)).wait(56).to({startPosition:1},0).wait(199).to({startPosition:1},0).to({scaleX:0.46,scaleY:0.46,x:-96.4,y:-189},4).wait(3).to({startPosition:1},0).wait(87));

	// panda_body part
	this.instance_5 = new lib.panda_bodypart("single",2);
	this.instance_5.setTransform(-52.8,-186.4,0.45,0.45,0,0,0,48.1,-156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({startPosition:2},0).to({regX:48.2,regY:-156.1,rotation:-23.4,x:-53.3,y:-186.5},3,cjs.Ease.get(-0.81)).wait(2).to({startPosition:2},0).to({regX:48.1,regY:-156,rotation:0,x:-52.7,y:-186.3},3,cjs.Ease.get(0.78)).wait(2).to({startPosition:2},0).to({regY:-156.1,rotation:1.8,x:-50.8,y:-185.6},3,cjs.Ease.get(-0.79)).wait(2).to({startPosition:2},0).to({regY:-156,rotation:0,x:-52.7,y:-186.3},3,cjs.Ease.get(0.8)).wait(2).to({startPosition:2},0).to({regX:48.2,regY:-156.1,rotation:-23.4,x:-53.3,y:-186.5},3,cjs.Ease.get(-0.81)).wait(2).to({startPosition:2},0).to({regX:48.1,regY:-156,rotation:0,x:-52.7,y:-186.3},3,cjs.Ease.get(0.78)).wait(2).to({startPosition:2},0).to({regY:-156.1,rotation:1.8,x:-50.8,y:-185.6},3,cjs.Ease.get(-0.79)).wait(2).to({startPosition:2},0).to({regY:-156,rotation:0,x:-52.7,y:-186.3},3,cjs.Ease.get(0.8)).wait(56).to({startPosition:2},0).wait(199).to({startPosition:2},0).to({scaleX:0.46,scaleY:0.46,x:-52.3,y:-189.1},4).wait(3).to({startPosition:2},0).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.7,-284.7,118.2,168.4);


(lib.B_panda_face_new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.B_panda_eye_new();
	this.instance.setTransform(-34.9,-86.6,1,1,0,0,180,0,-13.5);

	this.instance_1 = new lib.B_panda_eye_new();
	this.instance_1.setTransform(30.6,-86.6,1,1,0,0,0,0,-13.5);

	this.instance_2 = new lib.B_panda_eyesad_new();
	this.instance_2.setTransform(-34.9,-86.6,1,1,0,0,180,0,-13.5);

	this.instance_3 = new lib.B_panda_eyesad_new();
	this.instance_3.setTransform(30.6,-86.6,1,1,0,0,0,0,-13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	// Layer 2
	this.instance_4 = new lib.Bitmap31();
	this.instance_4.setTransform(-21.9,-72.9);

	this.instance_5 = new lib.B_panda_lips_new("single",0);
	this.instance_5.setTransform(0.4,-32.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.482)").s().p("AjzAmQD9itDqCoQjChrjZBUIg/Aog");
	this.shape.setTransform(0,-67.2,0.729,0.729);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#151515").s().p("AAABRIAAgDIAAAAIgDAAIAAADIgJAAQhCgDhCgpQhIgrgGgtQgBgPAGgOQAOAlA7AlQBCAnBCADIAJAAIAAgDIADAAIAAAAIAAADIAJAAQBEgDBGgmQA6ggAOglQAFANgBANQgCAvhKAnQhGAohEADg");
	this.shape_1.setTransform(0.3,-54.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E1E1E").s().p("AAABsIAAgDIAAAAIgDAAIAAADIgJAAQhCgDhCgpQg7glgPgjQAJgVAYgVIASgNIAVgNQA4gdBOgCQBUgBBFAkIAMAIQAWAMAPANQAVASAIAUQgOAig6AgQhGAohFADg");
	this.shape_2.setTransform(0.4,-62.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#151515").s().p("AgMBRQhCgEhCgpQhIgqgGgtQgBgPAGgOQAOAlA7AkQBCAnBCAEIAJAAIAAgDIADAAIAAAAIAAADIAJAAQBEgDBGgmQA6ggAOglQAFANgBAMQgCAwhKAnQhGAohEADIgIAAIAAAAgAAABOIAAAAIAAAAg");
	this.shape_3.setTransform(0.3,-54.8);

	this.instance_6 = new lib.B_panda_lipssad_new();
	this.instance_6.setTransform(0.2,-41.3,1,1,0,0,0,0,-9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{mode:"single",startPosition:0}},{t:this.instance_4}]}).to({state:[{t:this.instance_5,p:{mode:"independent",startPosition:undefined}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_6,p:{regY:-9.1,y:-41.3,mode:"independent",startPosition:undefined}},{t:this.shape_3},{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.instance_6,p:{regY:0,y:-32.3,mode:"single",startPosition:0}},{t:this.shape_3},{t:this.shape_2},{t:this.shape}]},1).wait(1));

	// Layer 1
	this.instance_7 = new lib.Bitmap30();
	this.instance_7.setTransform(-98.9,-191.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.9,-191.9,197,192);


(lib.B_panda_new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"ideal":0,"right":199,"wrong":328});

	// timeline functions:
	this.frame_191 = function() {
		exportRoot.mcPanda2.gotoAndPlay(0);
	}
	this.frame_319 = function() {
		this.stop();
	}
	this.frame_420 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(191).call(this.frame_191).wait(128).call(this.frame_319).wait(101).call(this.frame_420).wait(8));

	// panda_body part
	this.instance = new lib.panda_bodypart_new("single",4);
	this.instance.setTransform(337.6,2.4,0.656,0.656,0,0,0,101.6,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({startPosition:4},0).to({regY:-8.8,rotation:4.8,x:335.2,y:2.7},7,cjs.Ease.get(-0.99)).wait(7).to({startPosition:4},0).to({startPosition:4},7,cjs.Ease.get(-0.89)).wait(6).to({startPosition:4},0).to({startPosition:4},7,cjs.Ease.get(1)).wait(7).to({startPosition:4},0).to({regY:-8.7,rotation:0,x:337.6,y:2.4},7,cjs.Ease.get(1)).wait(10).to({startPosition:4},0).to({regX:101.5,regY:-8.8,rotation:-5.6,x:339.2,y:2.1},7,cjs.Ease.get(-0.99)).wait(8).to({startPosition:4},0).to({startPosition:4},7,cjs.Ease.get(-0.99)).wait(7).to({startPosition:4},0).to({startPosition:4},7,cjs.Ease.get(1)).wait(6).to({startPosition:4},0).to({regX:101.6,regY:-8.7,rotation:0,x:337.6,y:2.4},7,cjs.Ease.get(1)).wait(87).to({startPosition:4},0).wait(129).to({startPosition:4},0).to({startPosition:4},6).wait(3).to({startPosition:4},0).wait(92));

	// panda_body part
	this.instance_1 = new lib.panda_bodypart_new("single",5);
	this.instance_1.setTransform(204.4,-1.4,0.656,0.656,0,0,0,-101.4,-14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({startPosition:5},0).to({regY:-14.4,rotation:6.6,x:203.1,y:-1.6},7,cjs.Ease.get(-0.99)).wait(7).to({startPosition:5},0).to({startPosition:5},7,cjs.Ease.get(-0.89)).wait(6).to({startPosition:5},0).to({startPosition:5},7,cjs.Ease.get(1)).wait(7).to({startPosition:5},0).to({regY:-14.5,rotation:0,x:204.4,y:-1.3},7,cjs.Ease.get(1)).wait(10).to({startPosition:5},0).to({regX:-101.2,regY:-14.3,rotation:-3.8,x:207.1,y:-0.7},7,cjs.Ease.get(-0.99)).wait(8).to({startPosition:5},0).to({startPosition:5},7,cjs.Ease.get(-0.99)).wait(7).to({startPosition:5},0).to({startPosition:5},7,cjs.Ease.get(1)).wait(6).to({startPosition:5},0).to({regX:-101.3,regY:-14.5,rotation:0,x:204.4,y:-1.3},7,cjs.Ease.get(1)).wait(87).to({startPosition:5},0).wait(129).to({startPosition:5},0).to({startPosition:5},6).wait(3).to({startPosition:5},0).wait(92));

	// B_panda_face
	this.instance_2 = new lib.B_panda_eye_new();
	this.instance_2.setTransform(248.7,-181.8,0.656,0.656,0,0,180,0,-13.5);

	this.instance_3 = new lib.B_panda_eye_new();
	this.instance_3.setTransform(291.7,-181.8,0.656,0.656,0,0,0,0,-13.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.482)").s().p("AjzAmQD9itDqCoQjChrjZBUIg/Aog");
	this.shape.setTransform(271.6,-169.1,0.478,0.478);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E1E1E").s().p("AAABHIAAgCIAAAAIgCAAIAAACIgFAAQgsgDgrgbQgngXgJgXQAFgOAQgNIAMgJIAOgJQAkgTA0gBQA2gBAuAYIAIAFQAOAIAJAJQAOAMAGANQgKAVgmAVQguAbgtACg");
	this.shape_1.setTransform(271.9,-165.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#151515").s().p("AAAA1IAAgCIAAAAIgBAAIAAACIgGAAQgsgCgrgbQgvgcgEgdQgBgKAEgJQAJAZAnAXQArAZAsACIAGAAIAAgBIABAAIAAAAIAAABIAFAAQAtgCAugYQAmgVAKgYQADAJgBAIQgBAfgxAYQguAbgtACg");
	this.shape_2.setTransform(271.8,-161.1);

	this.instance_4 = new lib.B_panda_lips_new("synched",1,false);
	this.instance_4.setTransform(271.9,-146.4,0.656,0.656);

	this.instance_5 = new lib.Bitmap30();
	this.instance_5.setTransform(206.7,-251,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2}]},199).to({state:[]},129).wait(101));

	// B_panda_face
	this.instance_6 = new lib.B_panda_face_new("single",0);
	this.instance_6.setTransform(271.6,-125,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({startPosition:0},0).to({rotation:13.7,x:275.2,y:-123},7,cjs.Ease.get(-0.99)).wait(7).to({startPosition:0},0).to({scaleX:0.67,scaleY:0.67,rotation:20.6},7,cjs.Ease.get(-0.89)).wait(6).to({startPosition:0},0).to({scaleX:0.66,scaleY:0.66,rotation:13.7},7,cjs.Ease.get(1)).wait(7).to({startPosition:0},0).to({rotation:0,x:271.6,y:-124.9},7,cjs.Ease.get(1)).wait(10).to({startPosition:0},0).to({rotation:-12.9,x:267,y:-124.6},7,cjs.Ease.get(-0.99)).wait(8).to({startPosition:0},0).to({scaleX:0.67,scaleY:0.67,rotation:-18.9},7,cjs.Ease.get(-0.99)).wait(7).to({startPosition:0},0).to({scaleX:0.66,scaleY:0.66,rotation:-12.9},7,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({rotation:0,x:271.6,y:-124.9},7,cjs.Ease.get(1)).to({_off:true},87).wait(129).to({startPosition:3,_off:false},0).to({scaleX:0.64,scaleY:0.64,x:271.7,y:-122.9},6).wait(3).to({startPosition:2},0).wait(92));

	// panda_body part
	this.instance_7 = new lib.panda_bodypart_new("single",0);
	this.instance_7.setTransform(271.9,-166,0.656,0.656,0,0,0,1.5,-265.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({startPosition:0},0).to({regX:1.3,scaleX:0.66,scaleY:0.66,rotation:3.1,x:276.8,y:-163.9},7,cjs.Ease.get(-0.99)).wait(7).to({startPosition:0},0).to({regX:1.4,regY:-265.3,x:278.5,y:-164.8},7,cjs.Ease.get(-0.89)).wait(6).to({startPosition:0},0).to({regX:1.3,regY:-265.4,x:276.8,y:-163.9},7,cjs.Ease.get(1)).wait(7).to({startPosition:0},0).to({regX:1.5,scaleX:0.66,scaleY:0.66,rotation:0,x:271.9,y:-165.9},7,cjs.Ease.get(1)).wait(10).to({startPosition:0},0).to({regX:1.4,regY:-265.2,rotation:-4.3,x:265.7,y:-163.6},7,cjs.Ease.get(-0.99)).wait(8).to({startPosition:0},0).to({regX:1.5,regY:-265.3,scaleX:0.67,scaleY:0.67,rotation:-5.3,x:265.6,y:-167},7,cjs.Ease.get(-0.99)).wait(7).to({startPosition:0},0).to({regX:1.4,regY:-265.2,scaleX:0.66,scaleY:0.66,rotation:-4.3,x:265.7,y:-163.6},7,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({regX:1.5,regY:-265.4,rotation:0,x:271.9,y:-165.9},7,cjs.Ease.get(1)).wait(87).to({startPosition:0},0).wait(129).to({startPosition:0},0).to({regX:1.4,scaleX:0.64,scaleY:0.64,x:272.1,y:-167.2},6).wait(3).to({startPosition:0},0).wait(92));

	// panda_body part
	this.instance_8 = new lib.panda_bodypart_new("single",1);
	this.instance_8.setTransform(279.3,-11.5,0.656,0.656,0,0,0,12.8,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({startPosition:1},0).to({regY:-30,rotation:1.8,x:279.4,y:-11.2},7,cjs.Ease.get(-0.99)).wait(7).to({startPosition:1},0).to({regY:-29.9,y:-12.9},7,cjs.Ease.get(-0.89)).wait(6).to({startPosition:1},0).to({regY:-30,y:-11.2},7,cjs.Ease.get(1)).wait(7).to({startPosition:1},0).to({regY:-29.9,rotation:0,x:279.3,y:-11.4},7,cjs.Ease.get(1)).wait(10).to({startPosition:1},0).to({regX:12.7,regY:-29.7,rotation:-2.1,x:279.2},7,cjs.Ease.get(-0.99)).wait(8).to({startPosition:1},0).to({regY:-29.9,scaleX:0.67,scaleY:0.67,x:279.3,y:-11.7},7,cjs.Ease.get(-0.99)).wait(7).to({startPosition:1},0).to({regY:-29.7,scaleX:0.66,scaleY:0.66,x:279.2,y:-11.4},7,cjs.Ease.get(1)).wait(6).to({startPosition:1},0).to({regX:12.8,regY:-29.9,rotation:0,x:279.3},7,cjs.Ease.get(1)).wait(87).to({startPosition:1},0).wait(129).to({startPosition:1},0).to({regX:12.7,scaleX:0.64,scaleY:0.64,y:-13.7},6).wait(3).to({startPosition:1},0).wait(92));

	// panda_body part
	this.instance_9 = new lib.panda_bodypart_new("single",2);
	this.instance_9.setTransform(216.5,-46.6,0.656,0.656,0,0,0,-82.9,-83.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({startPosition:2},0).to({regX:-83,rotation:1.5,x:216.2,y:-46.6},7,cjs.Ease.get(-0.99)).wait(7).to({startPosition:2},0).to({startPosition:2},7,cjs.Ease.get(-0.89)).wait(6).to({startPosition:2},0).to({startPosition:2},7,cjs.Ease.get(1)).wait(7).to({startPosition:2},0).to({regX:-82.8,rotation:0,x:216.5,y:-46.5},7,cjs.Ease.get(1)).wait(10).to({startPosition:2},0).to({regX:-83,regY:-83.6,rotation:-2.8,x:216.6,y:-46.7},7,cjs.Ease.get(-0.99)).wait(8).to({startPosition:2},0).to({startPosition:2},7,cjs.Ease.get(-0.99)).wait(7).to({startPosition:2},0).to({startPosition:2},7,cjs.Ease.get(1)).wait(6).to({startPosition:2},0).to({regX:-82.8,regY:-83.5,rotation:0,x:216.5,y:-46.5},7,cjs.Ease.get(1)).wait(87).to({startPosition:2},0).wait(129).to({startPosition:2},0).to({startPosition:2},6).wait(3).to({startPosition:2},0).wait(92));

	// panda_body part
	this.instance_10 = new lib.panda_bodypart_new("single",3);
	this.instance_10.setTransform(329.3,-48.5,0.656,0.656,0,0,0,89,-86.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5).to({startPosition:3},0).to({regX:88.9,rotation:2.8,x:329.4,y:-48.3},7,cjs.Ease.get(-0.99)).wait(7).to({startPosition:3},0).to({startPosition:3},7,cjs.Ease.get(-0.89)).wait(6).to({startPosition:3},0).to({startPosition:3},7,cjs.Ease.get(1)).wait(7).to({startPosition:3},0).to({regX:89,rotation:0,x:329.3,y:-48.4},7,cjs.Ease.get(1)).wait(10).to({startPosition:3},0).to({regX:88.9,regY:-86.2,rotation:-1.8,x:329.1,y:-48.2},7,cjs.Ease.get(-0.99)).wait(8).to({startPosition:3},0).to({startPosition:3},7,cjs.Ease.get(-0.99)).wait(7).to({startPosition:3},0).to({startPosition:3},7,cjs.Ease.get(1)).wait(6).to({startPosition:3},0).to({regX:89,regY:-86.3,rotation:0,x:329.3,y:-48.4},7,cjs.Ease.get(1)).wait(87).to({startPosition:3},0).wait(129).to({startPosition:3},0).to({startPosition:3},6).wait(3).to({startPosition:3},0).wait(92));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150.2,-251,242.1,259.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;