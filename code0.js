gdjs.MenuCode = {};
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDBackgroundObjects3= [];
gdjs.MenuCode.GDLevelSelectObjects1= [];
gdjs.MenuCode.GDLevelSelectObjects2= [];
gdjs.MenuCode.GDLevelSelectObjects3= [];
gdjs.MenuCode.GDLevel1Objects1= [];
gdjs.MenuCode.GDLevel1Objects2= [];
gdjs.MenuCode.GDLevel1Objects3= [];
gdjs.MenuCode.GDLevel2Objects1= [];
gdjs.MenuCode.GDLevel2Objects2= [];
gdjs.MenuCode.GDLevel2Objects3= [];
gdjs.MenuCode.GDBoxBGObjects1= [];
gdjs.MenuCode.GDBoxBGObjects2= [];
gdjs.MenuCode.GDBoxBGObjects3= [];
gdjs.MenuCode.GDOptionsObjects1= [];
gdjs.MenuCode.GDOptionsObjects2= [];
gdjs.MenuCode.GDOptionsObjects3= [];
gdjs.MenuCode.GDCreditsObjects1= [];
gdjs.MenuCode.GDCreditsObjects2= [];
gdjs.MenuCode.GDCreditsObjects3= [];
gdjs.MenuCode.GDArtCreditObjects1= [];
gdjs.MenuCode.GDArtCreditObjects2= [];
gdjs.MenuCode.GDArtCreditObjects3= [];
gdjs.MenuCode.GDDevCreditObjects1= [];
gdjs.MenuCode.GDDevCreditObjects2= [];
gdjs.MenuCode.GDDevCreditObjects3= [];
gdjs.MenuCode.GDMusicCreditObjects1= [];
gdjs.MenuCode.GDMusicCreditObjects2= [];
gdjs.MenuCode.GDMusicCreditObjects3= [];
gdjs.MenuCode.GDSoundsCreditObjects1= [];
gdjs.MenuCode.GDSoundsCreditObjects2= [];
gdjs.MenuCode.GDSoundsCreditObjects3= [];
gdjs.MenuCode.GDNameObjects1= [];
gdjs.MenuCode.GDNameObjects2= [];
gdjs.MenuCode.GDNameObjects3= [];
gdjs.MenuCode.GDWebsiteObjects1= [];
gdjs.MenuCode.GDWebsiteObjects2= [];
gdjs.MenuCode.GDWebsiteObjects3= [];
gdjs.MenuCode.GDBothObjects1= [];
gdjs.MenuCode.GDBothObjects2= [];
gdjs.MenuCode.GDBothObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.condition3IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};
gdjs.MenuCode.condition3IsTrue_1 = {val:false};


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("HydrophobicActivated")) == 0;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("HydrophobicActivated").setNumber(-(1));
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("MoonJumpActivated")) == 0;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("MoonJumpActivated").setNumber(-(1));
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("ExpressActivated")) == 0;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("ExpressActivated").setNumber(-(1));
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("KeyActivated")) == 0;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("KeyActivated").setNumber(-(1));
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLevel1Objects1Objects = Hashtable.newFrom({"Level1": gdjs.MenuCode.GDLevel1Objects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLevel1Objects1Objects = Hashtable.newFrom({"Level1": gdjs.MenuCode.GDLevel1Objects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLevel1Objects1Objects = Hashtable.newFrom({"Level1": gdjs.MenuCode.GDLevel1Objects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLevel2Objects2Objects = Hashtable.newFrom({"Level2": gdjs.MenuCode.GDLevel2Objects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLevel2Objects2Objects = Hashtable.newFrom({"Level2": gdjs.MenuCode.GDLevel2Objects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLevel2Objects1Objects = Hashtable.newFrom({"Level2": gdjs.MenuCode.GDLevel2Objects1});gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Level2"), gdjs.MenuCode.GDLevel2Objects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLevel2Objects2Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDLevel2Objects2 */
{for(var i = 0, len = gdjs.MenuCode.GDLevel2Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLevel2Objects2[i].setColor("45;144;133");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level2"), gdjs.MenuCode.GDLevel2Objects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLevel2Objects2Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDLevel2Objects2 */
{for(var i = 0, len = gdjs.MenuCode.GDLevel2Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLevel2Objects2[i].setColor("235;230;223");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level2"), gdjs.MenuCode.GDLevel2Objects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLevel2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition2IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13584500);
}
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Second", false);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDOptionsObjects2Objects = Hashtable.newFrom({"Options": gdjs.MenuCode.GDOptionsObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDOptionsObjects2Objects = Hashtable.newFrom({"Options": gdjs.MenuCode.GDOptionsObjects2});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDOptionsObjects1Objects = Hashtable.newFrom({"Options": gdjs.MenuCode.GDOptionsObjects1});gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.MenuCode.GDOptionsObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDOptionsObjects2Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDOptionsObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDOptionsObjects2[i].setColor("45;144;133");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.MenuCode.GDOptionsObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDOptionsObjects2Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDOptionsObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDOptionsObjects2[i].setColor("235;230;223");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.MenuCode.GDOptionsObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDOptionsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition2IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13588252);
}
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Options", false);
}}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{


{
{gdjs.evtTools.window.setWindowSize(runtimeScene, 2200, 1000, true);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "319114__kev-durr__creaky-dock-underwater-hydrophone-recording.wav", true, 35, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "320526__lemoncreme__ambient-piano-music-3.wav", true, 75, 1);
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.eventsList1(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.MenuCode.GDLevel1Objects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLevel1Objects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDLevel1Objects1 */
{for(var i = 0, len = gdjs.MenuCode.GDLevel1Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLevel1Objects1[i].setColor("45;144;133");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.MenuCode.GDLevel1Objects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLevel1Objects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDLevel1Objects1 */
{for(var i = 0, len = gdjs.MenuCode.GDLevel1Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLevel1Objects1[i].setColor("235;230;223");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.MenuCode.GDLevel1Objects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDLevel1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition2IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13581292);
}
}}
}
if (gdjs.MenuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "First", false);
}}

}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Level1Complete")) == 0);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Level1Complete")) == 0;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Level2"), gdjs.MenuCode.GDLevel2Objects1);
{for(var i = 0, len = gdjs.MenuCode.GDLevel2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDLevel2Objects1[i].setColor("82;86;86");
}
}}

}


{


gdjs.MenuCode.eventsList3(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects3.length = 0;
gdjs.MenuCode.GDLevelSelectObjects1.length = 0;
gdjs.MenuCode.GDLevelSelectObjects2.length = 0;
gdjs.MenuCode.GDLevelSelectObjects3.length = 0;
gdjs.MenuCode.GDLevel1Objects1.length = 0;
gdjs.MenuCode.GDLevel1Objects2.length = 0;
gdjs.MenuCode.GDLevel1Objects3.length = 0;
gdjs.MenuCode.GDLevel2Objects1.length = 0;
gdjs.MenuCode.GDLevel2Objects2.length = 0;
gdjs.MenuCode.GDLevel2Objects3.length = 0;
gdjs.MenuCode.GDBoxBGObjects1.length = 0;
gdjs.MenuCode.GDBoxBGObjects2.length = 0;
gdjs.MenuCode.GDBoxBGObjects3.length = 0;
gdjs.MenuCode.GDOptionsObjects1.length = 0;
gdjs.MenuCode.GDOptionsObjects2.length = 0;
gdjs.MenuCode.GDOptionsObjects3.length = 0;
gdjs.MenuCode.GDCreditsObjects1.length = 0;
gdjs.MenuCode.GDCreditsObjects2.length = 0;
gdjs.MenuCode.GDCreditsObjects3.length = 0;
gdjs.MenuCode.GDArtCreditObjects1.length = 0;
gdjs.MenuCode.GDArtCreditObjects2.length = 0;
gdjs.MenuCode.GDArtCreditObjects3.length = 0;
gdjs.MenuCode.GDDevCreditObjects1.length = 0;
gdjs.MenuCode.GDDevCreditObjects2.length = 0;
gdjs.MenuCode.GDDevCreditObjects3.length = 0;
gdjs.MenuCode.GDMusicCreditObjects1.length = 0;
gdjs.MenuCode.GDMusicCreditObjects2.length = 0;
gdjs.MenuCode.GDMusicCreditObjects3.length = 0;
gdjs.MenuCode.GDSoundsCreditObjects1.length = 0;
gdjs.MenuCode.GDSoundsCreditObjects2.length = 0;
gdjs.MenuCode.GDSoundsCreditObjects3.length = 0;
gdjs.MenuCode.GDNameObjects1.length = 0;
gdjs.MenuCode.GDNameObjects2.length = 0;
gdjs.MenuCode.GDNameObjects3.length = 0;
gdjs.MenuCode.GDWebsiteObjects1.length = 0;
gdjs.MenuCode.GDWebsiteObjects2.length = 0;
gdjs.MenuCode.GDWebsiteObjects3.length = 0;
gdjs.MenuCode.GDBothObjects1.length = 0;
gdjs.MenuCode.GDBothObjects2.length = 0;
gdjs.MenuCode.GDBothObjects3.length = 0;

gdjs.MenuCode.eventsList4(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
