var canvas, stage, exportRoot, progress, bdrLine, loadingText, textCon;
var sndInstance;
var objRef = this;
var maxFrames = 0, crntFrame = 0,minTime;
var blnRest=false;
var __nCount=0,currentCount=0,nLoadSound=0;
var animFrame=["240","299","344","425"];
var blnReset=false;
var blnDone = false;
function init() {
	canvas = document.getElementById("canvas");
	if (!createjs.Sound.initializeDefaultPlugins()) {return;};
	images = images||{};
	var manifest = [
		{src:"images/Bitmap10.png", id:"Bitmap10"},
		{src:"images/Bitmap11.png", id:"Bitmap11"},
		{src:"images/Bitmap12.png", id:"Bitmap12"},
		{src:"images/Bitmap13.png", id:"Bitmap13"},
		{src:"images/Bitmap14.png", id:"Bitmap14"},
		{src:"images/Bitmap15.png", id:"Bitmap15"},
		{src:"images/Bitmap15_1.png", id:"Bitmap15_1"},
		{src:"images/Bitmap16.png", id:"Bitmap16"},
		{src:"images/Bitmap17.png", id:"Bitmap17"},
		{src:"images/Bitmap18.png", id:"Bitmap18"},
		{src:"images/Bitmap19.png", id:"Bitmap19"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap20.png", id:"Bitmap20"},
		{src:"images/Bitmap20_1.png", id:"Bitmap20_1"},
		{src:"images/Bitmap21.png", id:"Bitmap21"},
		{src:"images/Bitmap21_1.png", id:"Bitmap21_1"},
		{src:"images/Bitmap22.png", id:"Bitmap22"},
		{src:"images/Bitmap23.png", id:"Bitmap23"},
		{src:"images/Bitmap24.png", id:"Bitmap24"},
		{src:"images/Bitmap25.png", id:"Bitmap25"},
		{src:"images/Bitmap26.png", id:"Bitmap26"},
		{src:"images/Bitmap27.png", id:"Bitmap27"},
		{src:"images/Bitmap28.png", id:"Bitmap28"},
		{src:"images/Bitmap29.png", id:"Bitmap29"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/Bitmap30.png", id:"Bitmap30"},
		{src:"images/Bitmap31.png", id:"Bitmap31"},
		{src:"images/Bitmap32.png", id:"Bitmap32"},
		{src:"images/Bitmap33.png", id:"Bitmap33"},
		{src:"images/Bitmap34.png", id:"Bitmap34"},
		{src:"images/Bitmap35.png", id:"Bitmap35"},
		{src:"images/Bitmap36.png", id:"Bitmap36"},
		{src:"images/Bitmap37.png", id:"Bitmap37"},
		{src:"images/Bitmap38.png", id:"Bitmap38"},
		{src:"images/Bitmap39.png", id:"Bitmap39"},
		{src:"images/Bitmap4.png", id:"Bitmap4"},
		{src:"images/Bitmap40.png", id:"Bitmap40"},
		{src:"images/Bitmap41.png", id:"Bitmap41"},
		{src:"images/Bitmap42.png", id:"Bitmap42"},
		{src:"images/Bitmap43.png", id:"Bitmap43"},
		{src:"images/Bitmap44.png", id:"Bitmap44"},
		{src:"images/Bitmap45.png", id:"Bitmap45"},
		{src:"images/Bitmap46.png", id:"Bitmap46"},
		{src:"images/Bitmap47.png", id:"Bitmap47"},
		{src:"images/Bitmap48.png", id:"Bitmap48"},
		{src:"images/Bitmap49.png", id:"Bitmap49"},
		{src:"images/Bitmap5.png", id:"Bitmap5"},
		{src:"images/Bitmap50.png", id:"Bitmap50"},
		{src:"images/Bitmap51.png", id:"Bitmap51"},
		{src:"images/Bitmap52.png", id:"Bitmap52"},
		{src:"images/Bitmap53.png", id:"Bitmap53"},
		{src:"images/Bitmap54.png", id:"Bitmap54"},
		{src:"images/Bitmap55.png", id:"Bitmap55"},
		{src:"images/Bitmap56.png", id:"Bitmap56"},
		{src:"images/Bitmap57.png", id:"Bitmap57"},
		{src:"images/Bitmap58.png", id:"Bitmap58"},
		{src:"images/Bitmap6.png", id:"Bitmap6"},
		{src:"images/Bitmap7.png", id:"Bitmap7"},
		{src:"images/Bitmap8_1.png", id:"Bitmap8_1"},
		{src:"images/Bitmap9.png", id:"Bitmap9"},
		{src:"images/Bitmap1.jpg", id:"Bitmap1"},
		{src:"images/Bitmap8.png", id:"Bitmap8"},
		{src:"images/WELLDONE.png", id:"WELLDONE"}
	];
	stage = new createjs.Stage(canvas);
	createjs.Ticker.setFPS(25);
	createjs.Ticker.addEventListener("tick", stage);
	showProgressBar();
	var loader = new createjs.LoadQueue(false);
	createjs.MotionGuidePlugin.install();		
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", imageLoadComplete);
	loader.addEventListener("progress", handleProgress);
	loader.loadManifest(manifest);
}

function imageLoadComplete(e){
	var sounds = [		
		{src:"sounds/audio.mp3", id:"audio"},
		{src:"sounds/bg.mp3", id:"bg"},
		{src:"sounds/right.mp3", id:"right"},
		{src:"sounds/wrong.mp3", id:"wrong"},
		{src:"sounds/star.mp3", id:"star"}
	];
	loadingText.text = "loading sounds...";
	createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashAudioPlugin]);
	createjs.Sound.alternateExtensions = ["mp3"];
 	createjs.Sound.on("fileload", createjs.proxy(this.loadHandler, this));
 	createjs.Sound.registerSounds(sounds);
}

function loadHandler(event) {
	 nLoadSound++;
    sndInstance = createjs.Sound.play("audio");
	sndInstance.stop();
  if(nLoadSound > 4)
	 {
		handleComplete();	 
	 }
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function showProgressBar(){
	bdrLine = new createjs.Shape(); 
	bdrLine.graphics.beginStroke("#000000").drawRect(-3,-3,156,16);
	stage.addChild(bdrLine);
	bdrLine.x = (canvas.width/2) - (156/2);
	bdrLine.y = (canvas.height/2) - (16/2);
	progress = new createjs.Shape();
	progress.graphics.beginStroke("#000000").drawRect(0,0,150,10);
	stage.addChild(progress);
	progress.x = bdrLine.x;
	progress.y = bdrLine.y;
	loadingText = new createjs.Text("loading graphics...","20px Calibri","#000000");
	textCon = new createjs.Container(); 
	textCon.addChild(loadingText);
	stage.addChild(textCon);
	loadingText.x = (canvas.width/2) - (textCon.getBounds().width/2);
	loadingText.y = bdrLine.y - 30;
	createjs.Sound.stop();	
}

function handleProgress(evt) {
	progress.graphics.clear();
	if(evt.target.progress <= 1){
		progress.graphics.beginFill("#000000").drawRect(0,0,(150*evt.target.progress),10);
	}else{
		progress.graphics.beginFill("#000000").drawRect(0,0,(150*1),10);
	}
	stage.update();
}


function handleComplete() {
	if(sndInstance != undefined)
	{
		sndInstance.stop();
	}
	exportRoot = new lib.u1_screen3();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	stage.enableMouseOver(10);
	createjs.Touch.enable(stage);
	createjs.Ticker.setFPS(24);
	maxFrames = exportRoot.timeline.duration - 1 
	createjs.Ticker.addEventListener("tick", stage);
	fEnableStart();
}
function getIE() {
	if(navigator.userAgent.indexOf('MSIE') == -1)
	{
		return false;
	}
	else
	{
		return true;
	}
}


function fEnableStart(){
	
	exportRoot.mcStart.cursor = 'pointer';
	exportRoot.mcStart.mouseEnabled = true;
	exportRoot.mcStart.addEventListener("click", clickStart);		
}

function clickStart(e){
	__nCount=0;
	currentCount=0;
	canvas.style.cursor = 'default';
	exportRoot.mcStart.mouseEnabled = false;
	if(exportRoot.currentFrame == 0){
		setTimeout(initSoundPlay, 100);
	}
}
function initSoundPlay(){
	playSound("bg",-1);
	createjs.Ticker.addEventListener("tick", updateDragPointPos);
	sndInstance.setPosition(0);
	sndInstance.play();	
}

function updateDragPointPos()
{
	crntFrame = Math.round((sndInstance.getPosition()/ sndInstance.getDuration()) * maxFrames);
	if(sndInstance.getPosition()>10038&&sndInstance.getPosition()<10098&&!blnReset){
		__nQues=1;
		blnReset=true;
		sndInstance.pause();
		sndInstance.setPosition(10068);
		fSartActivity();
		return;
	}
	if(sndInstance.getPosition()>12406&&sndInstance.getPosition()<12466&&!blnReset){
		__nQues=2;
		sndInstance.pause();
		sndInstance.setPosition(12436);
		blnReset=true;
		fSartActivity();
		return;
	}
	if(sndInstance.getPosition()>14415&&sndInstance.getPosition()<14475&&!blnReset){
		__nQues=3;
		sndInstance.pause();
		sndInstance.setPosition(14445);
		blnReset=true;
		fSartActivity();
		return;
	}
	if(sndInstance.getPosition()>17801&&sndInstance.getPosition()<17861&&!blnReset){
		__nQues=4;
		sndInstance.pause();
		sndInstance.setPosition(17831);
		blnReset=true;
		fSartActivity();
		return;
	}
	if(!blnDone)
	{
		exportRoot.gotoAndPlay(crntFrame);	
	}
}
var __nQues=0;
function fSartActivity(){
		for(var j=1;j<=2;j++){
		var mcDrag = exportRoot["mcDrag"+__nQues+"_"+j];
			mcDrag.cursor = "pointer";
			mcDrag.id=j;
			mcDrag.toX = mcDrag.x;
			mcDrag.toY = mcDrag.y;
			mcDrag.addEventListener("mousedown", mcDragMouseDownEvent);
		}
		for(var i=1;i<=2;i++){
			mcDrop = exportRoot["mcDrop"+i];
			mcDrop.dropId = 0;
			mcDrop.BlnDrop=false;	
			mcDrop.id=i;
			mcDrop.Dropped=false;
	}
}

function mcDragMouseDownEvent(e){

	dragObj = e.currentTarget;
	exportRoot.addChild(dragObj);
	e.addEventListener("mousemove", mcDragMouseMoveEvent);
	e.addEventListener("mouseup", mcDragMouseUpEvent);	
	sX = dragObj.x-e.stageX;
	sY = dragObj.y-e.stageY;
}
function mcDragMouseMoveEvent(e){	
	dragObj.x = e.stageX+sX;
	dragObj.y = e.stageY+sY;
}

function mcDragMouseUpEvent(e){
	e.removeEventListener("mousemove", mcDragMouseMoveEvent);
	e.removeEventListener("mouseup", mcDragMouseUpEvent);
	fCheckHitTest();
	
}

function fCheckHitTest(){
	for(var i=1;i<=2;i++){
		var mcDrop = exportRoot["mcDrop"+i];
		if((stage.mouseX >= mcDrop.x)&&(stage.mouseY >= mcDrop.y )&& (stage.mouseX <= (mcDrop.x+227)) && (	stage.mouseY <= (mcDrop.y+271))){
			dragObj.x=exportRoot["mcTray"+mcDrop.id].x;
			dragObj.y=exportRoot["mcTray"+mcDrop.id].y;
			dragObj.mouseEnabled=false;
			currentCount++;	
			if(currentCount==2){
				currentCount=0;
				if(mcDrop.id==dragObj.id){
					__nCount++;		
					snd = new createjs.Sound.play("star");
					snd = new createjs.Sound.play("right");
					exportRoot.mcPanda1.gotoAndPlay("right");
					exportRoot.mcPanda2.gotoAndPlay("right");
					exportRoot.mcStar["mcStar"+__nCount].gotoAndPlay(1);
					setTimeout(fPlayNext,5500);
				}
				else{
					exportRoot.mcPanda1.gotoAndPlay("wrong");
					exportRoot.mcPanda2.gotoAndPlay("wrong");
					snd = new createjs.Sound.play("wrong");
					setTimeout(fEnableAll,5500);
				}
		    }
			 return;
		}
	}
	createjs.Tween.get(dragObj).to({x:dragObj.toX,y:dragObj.toY}, 500, createjs.Ease.cubicOut);
}


function fEnableAll(){
	fDisableAll(true);
	exportRoot.mcPanda1.gotoAndPlay(0);
	exportRoot.mcPanda2.gotoAndPlay(0);
	for(var j=1;j<=2;j++){
		var mcDrag = exportRoot["mcDrag"+__nQues+"_"+j];
		createjs.Tween.get(mcDrag).to({x:mcDrag.toX,y:mcDrag.toY}, 500, createjs.Ease.cubicOut);
	}
}
function fPlayNext()
{
	currentCount=0;
	if(__nCount>3){
		blnDone  =true;
		createjs.Ticker.removeEventListener("tick", updateDragPointPos);
		fFeedBackComplete();
		sndInstance.setPosition(17831);
		sndInstance.stop();
		return;
	}	
	for(var j=1;j<=2;j++)
	{
		var mcDrag = exportRoot["mcDrag"+__nQues+"_"+j];
		createjs.Tween.get(mcDrag).to({scaleX:0,scaleY:0,alpha:0}, 800, createjs.Ease.cubicOut);		
	}
	var sndPos = (animFrame[__nCount-1]/maxFrames)*sndInstance.getDuration();
	exportRoot.mcPanda1.gotoAndPlay(0);
	exportRoot.mcPanda2.gotoAndPlay(0);
	sndInstance.setPosition(sndPos);
	sndInstance.play();
	setTimeout(fReset,1000);	
}
function fReset()
{
	blnReset=false;
}
function fDisableAll(bValue)
{
	for(var j=1;j<=2;j++){
		var mcDrag = exportRoot["mcDrag"+__nQues+"_"+j];
		mcDrag.mouseEnabled=bValue;
	}
}
function playSound(id, loop) {
	createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}

function fFeedBackComplete()
{	
	stage.addChild(exportRoot.mcWellDone);
	exportRoot.mcWellDone.gotoAndPlay(1);
	createjs.Sound.stop();
}

function setMute(b){
	createjs.Sound.setMute(b);
}