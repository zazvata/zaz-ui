var _0x3f0e=['pageMode','no-splitter','enableFlip','.zone\x20[data-zone=\x22','state','title','>\x20.zone','onBeforeFlipZone','setOrientation','main','onRestoreZone','size','split','PREFERENCE-console-layout','.zone[data-zone=','debug','handleDrag','show','right','index','closeZone','data-size','pathname','preferences','jquery.plugins','-left','zone-splitter','no-orient','css','Layout:\x20','.panel','each','.zone:first','setState','mode','stringify','CONSOLE','html','data-orientation','layout','.arrow:last','indexOf','.zone,\x20.panel','createMainZone','appendTo','settings/globals','mobile','.zone[data-zone=\x22','meta-gadget','.flip','siblings','translations','keyup','-top','>\x20.zone:last','screenY','.zone[data-zone=\x22main\x22]','setPageMode','target','.zone-meta','[data-zone=\x22','click','.zone-help,\x20.zone-logo','createSubZone','extended','bottom','.orient','data-zone','no-tab','substring','remove','loadState','enableToolbar','length','setSplitter','>\x20.zone:first','next','handleDragEnd','replace','data-script','.zone-splitter','data-gadgetid','orientation','toElement','.arrow','data-collapsed','renderLayout','flex','-right','prev','body','trigger','name','setFlip','>\x20.zone-splitter','getState','framework/layoutManager','$mainZone','setToolbar','append','left','minZoneSize','data-meta','.zone:last','flipZones','onOrientZone','no-flip','SPACE','onCloseZone','off','ENTER','onBeforeOrientZone','onFlipZone','location','.html','traverseZones','framework/preferencesManager','layoutManager','>\x20.zone-drop','enableOrientation','set','setDefaults','cssNumber','maxZoneDepth','mouseover','Flip\x20Left\x20Right','get','>\x20.zone-meta','.arrow:first','resize','-bottom','pageLoaded','collapsed','onBeforeCloseZone','updateState','\x20exceeds\x20layouts.maxZoneDepth\x20value\x20of\x20','attr','round','enableSplitter','.zone','$layout','onBeforeOpenZone','keyCode','enableTab','offset','no-toolbar','framework/languageManager','screenX','onBeforeCollapseZone','height','>\x20.zone-close','removeAttr','collapseZone','.__layout','closest','find','hide','viewer','lastIndexOf','width','onBeforeRestoreZone','top','updateZones','pageX','onCollapseZone','parent','.zone-close','pageY','removeClass','addClass','framework/uriManager','children','currentPage','hasClass'];(function(_0x3112b4,_0x3f0e88){var _0x3b4546=function(_0x49d8d1){while(--_0x49d8d1){_0x3112b4['push'](_0x3112b4['shift']());}};_0x3b4546(++_0x3f0e88);}(_0x3f0e,0x132));var _0x3b45=function(_0x3112b4,_0x3f0e88){_0x3112b4=_0x3112b4-0x0;var _0x3b4546=_0x3f0e[_0x3112b4];return _0x3b4546;};define([_0x3b45('0x42'),_0x3b45('0x26'),_0x3b45('0x9e'),_0x3b45('0xe'),_0x3b45('0x57'),'settings/layouts','handlebars-helpers'],function(_0x24fc33,_0x23f028,_0x278041,_0x23c1bf,_0x4f01f2,_0x3b0731,_0x34d4c5){var _0x5565d3={'state':{},'$layout':null,'$mainZone':null,'onBeforeCollapseZone':null,'onCollapseZone':null,'onBeforeZone':null,'onOpenZone':null,'onBeforeCloseZone':null,'onCloseZone':null,'onBeforeRestoreZone':null,'onRestoreZone':null,'onBeforeFlipZone':null,'onFlipZone':null,'onBeforeOrientZone':null,'onOrientZone':null,'init':function(){this[_0x3b45('0x8')]=_0x24fc33(_0x3b45('0x15'));this['setCurrentPage']();this[_0x3b45('0x63')]();this[_0x3b45('0xa3')]();this['bindListeners']();},'setDefaults':function(){this[_0x3b45('0x87')](_0x3b0731[_0x3b45('0x2c')]);this[_0x3b45('0x32')](_0x3b0731['enableOrientation']);this[_0x3b45('0x74')](_0x3b0731[_0x3b45('0x6')]);this[_0x3b45('0x8c')](_0x3b0731[_0x3b45('0x72')]);this['setTab'](_0x3b0731[_0x3b45('0xb')]);},'loadState':function(_0x3c7016){this['state']=_0x3c7016;this[_0x3b45('0x80')]();},'setCurrentPage':function(){var _0x4e9a5f=window[_0x3b45('0x9b')][_0x3b45('0x40')],_0x370f1d=_0x4e9a5f[_0x3b45('0x6f')](_0x4e9a5f['lastIndexOf']('/')+0x1),_0x4a5a2a;_0x4a5a2a=_0x370f1d[_0x3b45('0x78')](_0x3b45('0x9c'),'');_0x370f1d=_0x4a5a2a===_0x3b45('0x3d')?_0x4f01f2[_0x3b45('0x4e')]:_0x4a5a2a;this[_0x3b45('0x28')]=_0x370f1d['toLowerCase']()||_0x4f01f2[_0x3b45('0x4e')];window['currentPage']=this[_0x3b45('0x28')];_0x24fc33(_0x3b45('0x84'))[_0x3b45('0x25')](_0x4a5a2a);},'setPageMode':function(){var _0x3473b8=_0x23f028[_0x3b45('0xa8')]('extended')==='1';this['pageMode']=_0x3473b8?'gadget':_0x3b45('0x19');_0x24fc33(_0x3b45('0x84'))[_0x3b45('0x25')](this[_0x3b45('0x2a')]+_0x3b45('0x4c'));},'renderLayout':function(){var _0x4e4297=_0x23f028['get'](_0x3b45('0x6a'))==='1';this[_0x3b45('0x55')]();if(!_0x4e4297){if(window['name'][_0x3b45('0x53')](_0x4f01f2[_0x3b45('0x4e')]+'_0')!==-0x1){this['state']=window[_0x3b45('0x41')]['PREFERENCE-console-layout']||this[_0x3b45('0x2e')];}if(!window[_0x3b45('0x58')]){this[_0x3b45('0x4b')](this[_0x3b45('0x2e')],this[_0x3b45('0x8b')]);}}else{this[_0x3b45('0x2e')]=this[_0x3b45('0x89')]();}window['layout']=this['state'];},'bindListeners':function(){var _0x4f25c4=this;this[_0x3b45('0x8')][_0x3b45('0x97')]('click','.zone-meta')['on'](_0x3b45('0x67'),_0x3b45('0x65'),function(_0x277cdb){var _0x118d65=_0x277cdb[_0x3b45('0x7d')]||_0x277cdb[_0x3b45('0x64')];var _0x22c5bf=_0x24fc33(_0x118d65);var _0x5defa8=_0x22c5bf['closest'](_0x3b45('0x7'))[_0x3b45('0x4')](_0x3b45('0x6d'));var _0x2bf196='';var _0x33d8a9='';if(_0x22c5bf[_0x3b45('0x29')](_0x3b45('0x5a'))){_0x2bf196=_0x22c5bf[_0x3b45('0x4')](_0x3b45('0x79'));_0x33d8a9=_0x22c5bf[_0x3b45('0x4')](_0x3b45('0x7b'));}_0x4f25c4['restoreZone'](_0x5defa8,_0x2bf196,_0x33d8a9);});this[_0x3b45('0x8')][_0x3b45('0x97')]('click',_0x3b45('0x7e'))['on'](_0x3b45('0x67'),_0x3b45('0x7e'),function(){var _0x200924=_0x24fc33(this)[_0x3b45('0x21')]()[_0x3b45('0x16')](_0x3b45('0x7')),_0x2a452e=_0x24fc33(this)[_0x3b45('0x4')](_0x3b45('0x50')),_0x1eec2f=_0x200924[_0x3b45('0x4')](_0x3b45('0x6d'));_0x4f25c4['collapseZone'](_0x1eec2f+'-'+_0x2a452e);});this[_0x3b45('0x8')][_0x3b45('0x97')](_0x3b45('0x67'),_0x3b45('0x5b'))['on']('click','.flip',function(){var _0x8f8ab1=_0x24fc33(this)[_0x3b45('0x21')]()[_0x3b45('0x16')](_0x3b45('0x7')),_0x5d7e90=_0x8f8ab1[_0x3b45('0x4')](_0x3b45('0x6d'));_0x4f25c4[_0x3b45('0x92')](_0x5d7e90);});this[_0x3b45('0x8')][_0x3b45('0x97')](_0x3b45('0x67'),_0x3b45('0x6c'))['on'](_0x3b45('0x67'),_0x3b45('0x6c'),function(){var _0xe06532=_0x24fc33(this)[_0x3b45('0x21')]()[_0x3b45('0x16')](_0x3b45('0x7')),_0x1cb7c7=_0xe06532[_0x3b45('0x4')]('data-zone');_0x4f25c4['orientZones'](_0x1cb7c7);});this[_0x3b45('0x8')][_0x3b45('0x97')](_0x3b45('0x67'),_0x3b45('0x22'))['on'](_0x3b45('0x67'),_0x3b45('0x22'),function(){var _0x2bbc61=_0x24fc33(this)[_0x3b45('0x16')](_0x3b45('0x7'))[_0x3b45('0x4')](_0x3b45('0x6d'));_0x4f25c4[_0x3b45('0x3e')](_0x2bbc61);});this[_0x3b45('0x8')][_0x3b45('0x97')](_0x3b45('0xa6'),_0x3b45('0x7a'))['on'](_0x3b45('0xa6'),_0x3b45('0x7a'),function(){var _0xe51121=_0x24fc33(this)[_0x3b45('0x21')]()[_0x3b45('0x16')](_0x3b45('0x7'));var _0x506900=_0xe51121[_0x3b45('0x4')](_0x3b45('0x50'));_0x24fc33(this)['draggable']({'axis':_0x506900==='h'?'x':'y','containment':_0x3b45('0x21'),'drag':function(_0x446c87,_0x2d0c39){_0x4f25c4[_0x3b45('0x3a')](_0x446c87,_0x2d0c39);},'stop':function(_0x309122,_0x4e994b){_0x4f25c4[_0x3b45('0x77')](_0x309122,_0x4e994b);}});});this[_0x3b45('0x8')][_0x3b45('0x97')](_0x3b45('0x67'),_0x3b45('0x22'))['on']('click',_0x3b45('0x22'),function(_0x5ad990){var _0xd572c4=_0x24fc33(this)[_0x3b45('0x16')]('.zone'),_0x127b2e=_0xd572c4['attr'](_0x3b45('0x6d'));_0x4f25c4[_0x3b45('0x3e')](_0x127b2e);});this['$layout'][_0x3b45('0x97')]('keyup',_0x3b45('0x22'))['on'](_0x3b45('0x5e'),_0x3b45('0x22'),function(_0x7c91c2){if(_0x7c91c2[_0x3b45('0xa')]===_0x24fc33['ui'][_0x3b45('0xa')][_0x3b45('0x95')]||_0x7c91c2[_0x3b45('0xa')]===_0x24fc33['ui'][_0x3b45('0xa')][_0x3b45('0x98')]){_0x24fc33(this)[_0x3b45('0x85')](_0x3b45('0x67'));}});},'handleDrag':function(_0x539814){var _0x5eb1f5=_0x24fc33(_0x539814[_0x3b45('0x64')]);var _0x3395ea=_0x3b0731[_0x3b45('0x8f')];if(!_0x5eb1f5[_0x3b45('0x29')](_0x3b45('0x44'))){return![];}var _0xdb68e8=_0x5eb1f5[_0x3b45('0x21')]()[_0x3b45('0x16')](_0x3b45('0x7'));var _0x25011c=_0xdb68e8[_0x3b45('0x4')](_0x3b45('0x50'));var _0x5da7ad=_0xdb68e8['find'](_0x3b45('0x75'))[_0x3b45('0x4')](_0x3b45('0x6d'));var _0x5543f5=_0xdb68e8[_0x3b45('0x17')](_0x3b45('0x60'))['attr'](_0x3b45('0x6d'));var _0xa98eb4=_0x539814[_0x3b45('0x1f')]||_0x539814[_0x3b45('0xf')];var _0x506ff0=_0x539814[_0x3b45('0x23')]||_0x539814[_0x3b45('0x61')];var _0x419055=0x0;var _0x5ec16b=0x0;if(_0x25011c==='h'){_0x419055=_0xa98eb4-_0xdb68e8[_0x3b45('0xc')]()[_0x3b45('0x8e')];_0x5ec16b=_0xdb68e8[_0x3b45('0x1b')]()-_0x419055;}else{_0x419055=_0x506ff0-_0xdb68e8[_0x3b45('0xc')]()[_0x3b45('0x1d')];_0x5ec16b=_0xdb68e8[_0x3b45('0x11')]()-_0x419055;}if(_0x419055<_0x3395ea){this[_0x3b45('0x14')](_0x5da7ad);}if(_0x5ec16b<_0x3395ea){this[_0x3b45('0x14')](_0x5543f5);}},'handleDragEnd':function(_0x428fd0){var _0x4dbe08=_0x24fc33(_0x428fd0[_0x3b45('0x64')]);if(!_0x4dbe08[_0x3b45('0x29')](_0x3b45('0x44'))){return![];}var _0x382033=_0x428fd0[_0x3b45('0x1f')]||_0x428fd0[_0x3b45('0xf')];var _0x334f60=_0x428fd0[_0x3b45('0x23')]||_0x428fd0[_0x3b45('0x61')];var _0x228e98;var _0x428743;var _0x4ea064;var _0x452baf;var _0x24924b;var _0x276a3d;_0x228e98=_0x4dbe08[_0x3b45('0x21')]()[_0x3b45('0x16')](_0x3b45('0x7'));if(_0x228e98['attr'](_0x3b45('0x7f'))){return;}_0x428743=_0x228e98[_0x3b45('0x4')]('data-orientation');_0x4ea064=_0x228e98[_0x3b45('0x17')](_0x3b45('0x75'));_0x452baf=_0x228e98[_0x3b45('0x17')](_0x3b45('0x60'));_0x24924b=_0x428743==='h'?(_0x382033-_0x228e98[_0x3b45('0xc')]()[_0x3b45('0x8e')])*0x64/_0x228e98[_0x3b45('0x1b')]():(_0x334f60-_0x228e98[_0x3b45('0xc')]()[_0x3b45('0x1d')])*0x64/_0x228e98[_0x3b45('0x11')]();_0x276a3d=0x64-_0x24924b;_0x228e98['attr'](_0x3b45('0x3f'),_0x24924b);_0x24fc33['cssNumber']['flex']=!![];_0x4ea064[_0x3b45('0x46')]({'flex':_0x24924b});_0x452baf[_0x3b45('0x46')]({'flex':_0x276a3d});_0x4dbe08[_0x3b45('0x46')]({'left':0x0,'top':0x0,'bottom':0x0,'right':0x0});this[_0x3b45('0x2')]();},'getDeepestZone':function(_0x52c08c){var _0x2bdb70=this[_0x3b45('0x8')]['find'](_0x3b45('0x66')+_0x52c08c+'\x22]');if(_0x2bdb70[_0x3b45('0x27')](_0x3b45('0x7'))[_0x3b45('0x73')]===0x0){return _0x52c08c;}var _0x4b9562=_0x2bdb70[_0x3b45('0x27')]('.zone');var _0x10fd00=_0x4b9562;while(_0x10fd00[_0x3b45('0x73')]){_0x4b9562=_0x10fd00;_0x10fd00=_0x10fd00[_0x3b45('0x27')]('.zone');}return _0x4b9562[_0x3b45('0x4')](_0x3b45('0x6d'));},'isZoneDepthValid':function(_0x4fa37f){var _0x3528fb=_0x4fa37f[_0x3b45('0x36')]('-')['length'];if(_0x3528fb&&_0x3528fb>_0x3b0731[_0x3b45('0xa5')]){console['warn'](_0x3b45('0x47')+_0x4fa37f+_0x3b45('0x3')+_0x3b0731[_0x3b45('0xa5')]+'.');return![];}return!![];},'createMainZone':function(){var _0x481bbb=_0x34d4c5[_0x3b45('0x8a')]({'mainZone':!![],'items':_0x23c1bf[_0x3b45('0x5d')]()});this[_0x3b45('0x8')][_0x3b45('0x4f')](_0x481bbb);this[_0x3b45('0x8b')]=this[_0x3b45('0x8')][_0x3b45('0x17')](_0x3b45('0x62'));},'setState':function(_0x2b496d,_0x96c118){var _0x7340ad;_0x7340ad=_0x96c118['attr'](_0x3b45('0x6d'));if(!this['isZoneDepthValid'](_0x7340ad)){return!![];}if(_0x2b496d['orientation']){_0x96c118[_0x3b45('0x4')]('data-orientation',_0x2b496d[_0x3b45('0x7c')]);}if(_0x2b496d[_0x3b45('0x0')]){_0x96c118[_0x3b45('0x4')](_0x3b45('0x7f'),_0x2b496d[_0x3b45('0x0')]);}if(_0x2b496d[_0x3b45('0x35')]){_0x96c118[_0x3b45('0x4')](_0x3b45('0x3f'),_0x2b496d[_0x3b45('0x35')]);}if(_0x2b496d[_0x3b45('0x7c')]){_0x96c118[_0x3b45('0x17')]('>\x20.zone-drop')[_0x3b45('0x70')]();_0x96c118['find']('>\x20.zone-meta')['remove']();if(_0x7340ad===_0x3b45('0x33')){this['$layout'][_0x3b45('0x17')](_0x3b45('0x68'))[_0x3b45('0x18')]();}this['createSubZone'](_0x96c118,_0x2b496d);}if(_0x2b496d[_0x3b45('0x83')]){this[_0x3b45('0x4b')](_0x2b496d[_0x3b45('0x83')],_0x96c118['children'](_0x3b45('0x4a')));}if(_0x2b496d[_0x3b45('0x76')]){this[_0x3b45('0x4b')](_0x2b496d[_0x3b45('0x76')],_0x96c118[_0x3b45('0x27')](_0x3b45('0x91')));}},'updateState':function(){if(window[_0x3b45('0x58')]){return;}var _0x46d4c6=this[_0x3b45('0x89')]();if(window[_0x3b45('0x86')][_0x3b45('0x53')](_0x4f01f2['CONSOLE']+'_0')!==-0x1&&window[_0x3b45('0xad')]){_0x278041[_0x3b45('0xa2')]({'key':_0x3b45('0x37'),'value':JSON[_0x3b45('0x4d')](_0x46d4c6)});}window[_0x3b45('0x51')]=_0x46d4c6;_0x24fc33(window)[_0x3b45('0xab')]();},'getState':function(){var _0x4d4aac,_0x15c351,_0xb4cbca,_0x1f3b40=this[_0x3b45('0x8b')];this[_0x3b45('0x2e')]={};_0x4d4aac=_0x1f3b40[_0x3b45('0x4')]('data-orientation');_0x15c351=_0x1f3b40[_0x3b45('0x4')](_0x3b45('0x7f'));_0xb4cbca=_0x1f3b40[_0x3b45('0x4')](_0x3b45('0x3f'));if(_0x4d4aac){this[_0x3b45('0x2e')][_0x3b45('0x7c')]=_0x4d4aac;}if(_0x15c351){this[_0x3b45('0x2e')]['collapsed']=_0x15c351===_0x3b45('0x1d')||_0x15c351===_0x3b45('0x8e')?_0x3b45('0x83'):_0x3b45('0x76');}if(_0xb4cbca){this[_0x3b45('0x2e')][_0x3b45('0x35')]=_0xb4cbca;}this[_0x3b45('0x9d')](_0x1f3b40,this['state']);return this[_0x3b45('0x2e')];},'getZoneState':function(_0x290ed3,_0x424ae7,_0x5acbe5){var _0x33416f=_0x290ed3[_0x3b45('0x4')]('data-orientation'),_0x130dfe=_0x290ed3[_0x3b45('0x4')](_0x3b45('0x7f')),_0x32b622=_0x290ed3[_0x3b45('0x4')](_0x3b45('0x3f')),_0x4c0344=_0x5acbe5===0x0?_0x3b45('0x83'):_0x3b45('0x76'),_0x28cb4c=_0x290ed3[_0x3b45('0x17')](_0x3b45('0x75'));_0x424ae7[_0x4c0344]={};if(_0x33416f){_0x424ae7[_0x4c0344][_0x3b45('0x7c')]=_0x33416f;}if(_0x130dfe){_0x424ae7[_0x4c0344][_0x3b45('0x0')]=_0x130dfe===_0x3b45('0x1d')||_0x130dfe===_0x3b45('0x8e')?_0x3b45('0x83'):_0x3b45('0x76');}if(_0x32b622){_0x424ae7[_0x4c0344][_0x3b45('0x35')]=_0x32b622;}return _0x424ae7[_0x4c0344];},'traverseZones':function(_0x1d4985,_0xffe75e){var _0x4266ec=this;var _0x484a99=_0x1d4985[_0x3b45('0x27')](_0x3b45('0x7'));_0x484a99[_0x3b45('0x49')](function(_0x5ed21e,_0x2f0bf4){if(!_0x24fc33(_0x2f0bf4)[_0x3b45('0x27')](_0x3b45('0x7'))[_0x3b45('0x73')]){return!![];}var _0x5e8b7d=_0x4266ec['getZoneState'](_0x24fc33(_0x2f0bf4),_0xffe75e,_0x5ed21e);_0x4266ec[_0x3b45('0x9d')](_0x24fc33(_0x2f0bf4),_0x5e8b7d);});},'createSubZone':function(_0x897036,_0x5f3c45,_0x944cae){var _0x2a5eda='',_0x59f66f=_0x897036[_0x3b45('0x4')]('data-zone'),_0x1526fc=!![],_0x3a1972=_0x5f3c45[_0x3b45('0x7c')]==='v';_0x2a5eda=_0x34d4c5['framework/layoutManager']({'parentZone':_0x59f66f,'subZone':_0x1526fc,'layouts':_0x3b0731,'isVertical':_0x3a1972,'items':_0x23c1bf['translations']()});_0x897036['find'](_0x3b45('0xa9'))[_0x3b45('0x70')]();_0x897036[_0x3b45('0x17')]('>\x20.zone-drop')[_0x3b45('0x70')]();if(_0x59f66f===_0x3b45('0x33')){this['$layout'][_0x3b45('0x17')]('.zone-help,\x20.zone-logo')[_0x3b45('0x18')]();}var _0x1a3737=_0x897036[_0x3b45('0x27')](_0x3b45('0x48'));_0x897036[_0x3b45('0x8d')](_0x2a5eda);var _0x2708ba=_0x5565d3[_0x3b45('0x8')]['find']('.zone\x20[data-zone=\x22'+_0x944cae+'\x22]');var _0x57bc77=_0x2708ba[_0x3b45('0x5c')]('.zone');_0x1a3737[_0x3b45('0x56')](_0x57bc77);if(_0x5f3c45[_0x3b45('0x0')]){if(_0x5f3c45['collapsed']==='next'){_0x59f66f=_0x5f3c45[_0x3b45('0x7c')]==='v'?_0x59f66f+_0x3b45('0xac'):_0x59f66f+_0x3b45('0x82');}else{_0x59f66f=_0x5f3c45['orientation']==='v'?_0x59f66f+_0x3b45('0x5f'):_0x59f66f+'-left';}this[_0x3b45('0x14')](_0x59f66f);}else if(_0x5f3c45[_0x3b45('0x35')]){_0x24fc33[_0x3b45('0xa4')][_0x3b45('0x81')]=!![];_0x897036[_0x3b45('0x17')](_0x3b45('0x75'))['css'](_0x3b45('0x81'),Math[_0x3b45('0x5')](_0x5f3c45['size']));_0x897036['find'](_0x3b45('0x60'))[_0x3b45('0x46')]('flex',0x64-Math[_0x3b45('0x5')](_0x5f3c45[_0x3b45('0x35')]));}},'openZone':function(_0x32d331){if(this[_0x3b45('0x9')]&&this[_0x3b45('0x9')](_0x32d331)===![]){return;}var _0x5f5679=this;var _0x53de=_0x32d331['split']('-');var _0x2ad48d;var _0x144575;var _0x4f4307;var _0x1876c5={};if(!_0x5f5679[_0x3b45('0x8')]['find'](_0x3b45('0x62'))[_0x3b45('0x73')]){this[_0x3b45('0x71')]({});}_0x32d331='';_0x24fc33(_0x53de)[_0x3b45('0x49')](function(_0x5ad3d7,_0x1f9368){_0x144575=_0x32d331;_0x32d331=_0x32d331?_0x32d331+'-'+_0x1f9368:_0x1f9368;_0x2ad48d=_0x5f5679[_0x3b45('0x8')][_0x3b45('0x17')](_0x3b45('0x38')+_0x32d331+']');if(!_0x2ad48d[_0x3b45('0x73')]){_0x1876c5[_0x3b45('0x7c')]=_0x1f9368===_0x3b45('0x8e')||_0x1f9368===_0x3b45('0x3c')?'h':'v';_0x4f4307=_0x5f5679[_0x3b45('0x8')][_0x3b45('0x17')](_0x3b45('0x38')+_0x144575+']');_0x4f4307[_0x3b45('0x4')]('data-orientation',_0x1876c5[_0x3b45('0x7c')]);_0x5f5679[_0x3b45('0x69')](_0x4f4307,_0x1876c5,_0x32d331);}});this[_0x3b45('0x8')][_0x3b45('0x17')](_0x3b45('0x68'))[_0x3b45('0x18')]();this['updateState']();if(this['onOpenZone']){this['onOpenZone'](_0x32d331);}},'restoreZone':function(_0x36be89,_0x56d5fc,_0x2857b7){if(this[_0x3b45('0x1c')]&&this['onBeforeRestoreZone'](_0x36be89,_0x56d5fc,_0x2857b7)===![]){return;}var _0x4b7e6d=this[_0x3b45('0x8')][_0x3b45('0x17')](_0x3b45('0x59')+_0x36be89+'\x22]');var _0x2c2e98=_0x4b7e6d['parent']()[_0x3b45('0x16')](_0x3b45('0x7'));var _0x339cad=_0x2c2e98[_0x3b45('0x17')](_0x3b45('0x88'));var _0x24191e=_0x2c2e98[_0x3b45('0x4')](_0x3b45('0x3f'));_0x24fc33[_0x3b45('0xa4')][_0x3b45('0x81')]=!![];_0x2c2e98[_0x3b45('0x13')](_0x3b45('0x7f'));_0x2c2e98['find'](_0x3b45('0x75'))[_0x3b45('0x46')]({'flex':_0x24191e});_0x2c2e98['find'](_0x3b45('0x60'))['css']({'flex':0x64-_0x24191e});_0x339cad[_0x3b45('0x46')]({'left':0x0,'top':0x0,'bottom':0x0,'right':0x0});this[_0x3b45('0x2')]();if(this[_0x3b45('0x34')]){this[_0x3b45('0x34')](_0x36be89,_0x56d5fc,_0x2857b7);}},'collapseZone':function(_0x2aa90e,_0x520567){if(this[_0x3b45('0x10')]&&this[_0x3b45('0x10')](_0x2aa90e)===![]){return;}_0x520567=_0x520567||this[_0x3b45('0x8')][_0x3b45('0x17')]('.zone[data-zone=\x22'+_0x2aa90e+'\x22]');var _0x35b47c=_0x520567[_0x3b45('0x21')]()[_0x3b45('0x16')](_0x3b45('0x7'));var _0x1be703=_0x2aa90e[_0x3b45('0x6f')](_0x2aa90e[_0x3b45('0x1a')]('-')+0x1);_0x35b47c[_0x3b45('0x4')]('data-collapsed',_0x1be703);this[_0x3b45('0x2')]();if(this[_0x3b45('0x20')]){this[_0x3b45('0x20')](_0x2aa90e);}},'flipZones':function(_0x1452bd){if(this[_0x3b45('0x31')]&&this[_0x3b45('0x31')](_0x1452bd)===![]){return;}var _0x4c50c0=this[_0x3b45('0x8')][_0x3b45('0x17')](_0x3b45('0x59')+_0x1452bd+'\x22]');var _0x5c6b77=_0x4c50c0[_0x3b45('0x17')](_0x3b45('0x75'));var _0x11d8c0=_0x4c50c0[_0x3b45('0x17')](_0x3b45('0x60'));var _0x5e2b94=_0x5c6b77[_0x3b45('0x4')](_0x3b45('0x50'));var _0x30b187=_0x11d8c0[_0x3b45('0x4')](_0x3b45('0x50'));var _0x4eb602=_0x5c6b77['attr'](_0x3b45('0x7f'));var _0x514afc=_0x11d8c0[_0x3b45('0x4')](_0x3b45('0x7f'));var _0x5bc4c3=_0x5c6b77[_0x3b45('0x4')](_0x3b45('0x3f'));var _0x1753ca=_0x11d8c0[_0x3b45('0x4')](_0x3b45('0x3f'));_0x5c6b77[_0x3b45('0x13')](_0x3b45('0x50'));_0x11d8c0[_0x3b45('0x13')](_0x3b45('0x50'));_0x5c6b77[_0x3b45('0x13')](_0x3b45('0x7f'));_0x11d8c0[_0x3b45('0x13')]('data-collapsed');_0x5c6b77['removeAttr']('data-size');_0x11d8c0['removeAttr'](_0x3b45('0x3f'));if(_0x5e2b94){_0x11d8c0[_0x3b45('0x4')](_0x3b45('0x50'),_0x5e2b94);}if(_0x30b187){_0x5c6b77[_0x3b45('0x4')]('data-orientation',_0x30b187);}if(_0x4eb602){_0x11d8c0[_0x3b45('0x4')]('data-collapsed',_0x4eb602);}if(_0x514afc){_0x5c6b77[_0x3b45('0x4')](_0x3b45('0x7f'),_0x514afc);}if(_0x5bc4c3){_0x11d8c0[_0x3b45('0x4')](_0x3b45('0x3f'),_0x5bc4c3);}if(_0x1753ca){_0x5c6b77['attr']('data-size',_0x1753ca);}var _0x1e3c13=_0x5c6b77[_0x3b45('0x27')]();var _0x2aa207=_0x11d8c0['children']();_0x1e3c13[_0x3b45('0x56')](_0x11d8c0);_0x2aa207['appendTo'](_0x5c6b77);this[_0x3b45('0x1e')]();if(this[_0x3b45('0x9a')]){this['onFlipZone'](_0x1452bd);}},'orientZones':function(_0x5d5737){if(this[_0x3b45('0x99')]&&this[_0x3b45('0x99')](_0x5d5737)===![]){return;}var _0x471ace=this['$layout']['find']('.zone[data-zone=\x22'+_0x5d5737+'\x22]');var _0x5c3114=_0x471ace[_0x3b45('0x17')](_0x3b45('0x75'));var _0x240af3=_0x471ace[_0x3b45('0x17')](_0x3b45('0x60'));var _0x3d0b21=_0x471ace['find'](_0x3b45('0x88'));var _0x40c605=_0x471ace[_0x3b45('0x4')](_0x3b45('0x50'));_0x40c605=_0x40c605==='h'?'v':'h';_0x471ace[_0x3b45('0x4')](_0x3b45('0x50'),_0x40c605);if(_0x40c605==='v'){_0x5c3114[_0x3b45('0x24')](_0x3b45('0x8e'))[_0x3b45('0x25')](_0x3b45('0x1d'));_0x5c3114[_0x3b45('0x4')](_0x3b45('0x90'),_0x3b45('0x1d'));_0x240af3[_0x3b45('0x24')](_0x3b45('0x3c'))[_0x3b45('0x25')](_0x3b45('0x6b'));_0x240af3[_0x3b45('0x4')]('data-meta','bottom');_0x3d0b21[_0x3b45('0x17')](_0x3b45('0xaa'))['attr']('data-orientation',_0x3b45('0x1d'));_0x3d0b21[_0x3b45('0x17')](_0x3b45('0x52'))[_0x3b45('0x4')](_0x3b45('0x50'),_0x3b45('0x6b'));_0x3d0b21[_0x3b45('0x17')]('.flip')['attr']('title','Flip\x20Top\x20Bottom');}else{_0x5c3114['removeClass'](_0x3b45('0x1d'))[_0x3b45('0x25')](_0x3b45('0x8e'));_0x5c3114[_0x3b45('0x4')](_0x3b45('0x90'),_0x3b45('0x8e'));_0x240af3[_0x3b45('0x24')](_0x3b45('0x6b'))[_0x3b45('0x25')](_0x3b45('0x3c'));_0x240af3[_0x3b45('0x4')](_0x3b45('0x90'),_0x3b45('0x3c'));_0x3d0b21['find'](_0x3b45('0xaa'))['attr'](_0x3b45('0x50'),_0x3b45('0x8e'));_0x3d0b21[_0x3b45('0x17')](_0x3b45('0x52'))['attr'](_0x3b45('0x50'),_0x3b45('0x3c'));_0x3d0b21[_0x3b45('0x17')](_0x3b45('0x5b'))['attr'](_0x3b45('0x2f'),_0x3b45('0xa7'));}this[_0x3b45('0x1e')]();if(this[_0x3b45('0x93')]){this[_0x3b45('0x93')](_0x5d5737);}},'closeZone':function(_0x374343){if(this[_0x3b45('0x1')]&&this['onBeforeCloseZone'](_0x374343)===![]){return;}var _0x1a7d55=this[_0x3b45('0x8')][_0x3b45('0x17')](_0x3b45('0x59')+_0x374343+'\x22]');var _0x81f713=_0x1a7d55[_0x3b45('0x5c')]('.zone');var _0x7d634f=_0x1a7d55[_0x3b45('0x21')]()[_0x3b45('0x16')](_0x3b45('0x7'));var _0x339648=_0x7d634f[_0x3b45('0x4')](_0x3b45('0x6d'));var _0x3a320b=_0x1a7d55[_0x3b45('0x5c')](_0x3b45('0x7a'));var _0x4ff4e2=_0x81f713[_0x3b45('0x4')](_0x3b45('0x50'));_0x7d634f[_0x3b45('0x17')](_0x3b45('0xa9'))[_0x3b45('0x70')]();_0x7d634f[_0x3b45('0x17')](_0x3b45('0x12'))[_0x3b45('0x70')]();_0x7d634f['find'](_0x3b45('0xa0'))[_0x3b45('0x70')]();_0x81f713[_0x3b45('0x27')]()[_0x3b45('0x56')](_0x7d634f);_0x1a7d55[_0x3b45('0x70')]();_0x81f713[_0x3b45('0x70')]();_0x3a320b[_0x3b45('0x70')]();if(_0x7d634f[_0x3b45('0x17')](_0x3b45('0x30'))[_0x3b45('0x73')]>0x1){_0x7d634f[_0x3b45('0x4')](_0x3b45('0x50'),_0x4ff4e2);}else{_0x7d634f[_0x3b45('0x13')](_0x3b45('0x50'));}if(_0x339648===_0x3b45('0x33')){_0x7d634f[_0x3b45('0x17')]('>\x20.zone-close')[_0x3b45('0x70')]();_0x7d634f[_0x3b45('0x17')](_0x3b45('0xa9'))[_0x3b45('0x70')]();if(_0x7d634f['find'](_0x3b45('0x54'))[_0x3b45('0x73')]===0x0){this[_0x3b45('0x8')]['find'](_0x3b45('0x68'))[_0x3b45('0x3b')]();}}this[_0x3b45('0x1e')]();if(this[_0x3b45('0x96')]){this[_0x3b45('0x96')](_0x374343);}},'updateZones':function(){this['$layout'][_0x3b45('0x17')](_0x3b45('0x7'))[_0x3b45('0x49')](function(_0x4cb962,_0x4a723a){var _0x458516=_0x24fc33(_0x4a723a);var _0x511642=_0x458516[_0x3b45('0x21')]()[_0x3b45('0x16')]('.zone');var _0x474da9='';var _0x39f285=_0x511642[_0x3b45('0x73')]>0x0;var _0x41d835;if(_0x39f285){_0x41d835=_0x511642['attr'](_0x3b45('0x50'));_0x474da9=_0x511642[_0x3b45('0x4')](_0x3b45('0x6d'));if(_0x41d835==='v'){_0x511642[_0x3b45('0x17')]('>\x20.zone:first')['attr'](_0x3b45('0x6d'),_0x474da9+_0x3b45('0x5f'));_0x511642[_0x3b45('0x17')](_0x3b45('0x60'))[_0x3b45('0x4')](_0x3b45('0x6d'),_0x474da9+_0x3b45('0xac'));}if(_0x41d835==='h'){_0x511642['find'](_0x3b45('0x75'))['attr'](_0x3b45('0x6d'),_0x474da9+_0x3b45('0x43'));_0x511642[_0x3b45('0x17')]('>\x20.zone:last')[_0x3b45('0x4')](_0x3b45('0x6d'),_0x474da9+_0x3b45('0x82'));}}});this[_0x3b45('0x2')]();},'hasZone':function(_0x3218ab){var _0x353a67=_0x5565d3[_0x3b45('0x8')][_0x3b45('0x17')](_0x3b45('0x2d')+_0x3218ab+'\x22]');return _0x353a67[_0x3b45('0x73')]>0x0;},'setOrientation':function(_0x2ef441){if(_0x3b0731[_0x3b45('0xa1')]){_0x2ef441?_0x24fc33(_0x3b45('0x84'))[_0x3b45('0x24')](_0x3b45('0x45')):_0x24fc33(_0x3b45('0x84'))[_0x3b45('0x25')]('no-orient');}else{_0x24fc33(_0x3b45('0x84'))[_0x3b45('0x25')]('no-orient');}},'setFlip':function(_0x4fcff5){if(_0x3b0731[_0x3b45('0x2c')]){_0x4fcff5?_0x24fc33(_0x3b45('0x84'))['removeClass'](_0x3b45('0x94')):_0x24fc33(_0x3b45('0x84'))[_0x3b45('0x25')](_0x3b45('0x94'));}else{_0x24fc33('body')[_0x3b45('0x25')](_0x3b45('0x94'));}},'setSplitter':function(_0x4f20b2){if(_0x3b0731['enableSplitter']){_0x4f20b2?_0x24fc33(_0x3b45('0x84'))['removeClass'](_0x3b45('0x2b')):_0x24fc33('body')[_0x3b45('0x25')](_0x3b45('0x2b'));}else{_0x24fc33(_0x3b45('0x84'))[_0x3b45('0x25')](_0x3b45('0x2b'));}},'setToolbar':function(_0xab57ff){if(_0x3b0731[_0x3b45('0x72')]){_0xab57ff?_0x24fc33(_0x3b45('0x84'))[_0x3b45('0x24')]('no-toolbar'):_0x24fc33(_0x3b45('0x84'))[_0x3b45('0x25')](_0x3b45('0xd'));}else{_0x24fc33(_0x3b45('0x84'))['addClass']('no-toolbar');}},'setTab':function(_0xe6049){if(_0x3b0731[_0x3b45('0xb')]){_0xe6049?_0x24fc33('body')[_0x3b45('0x24')](_0x3b45('0x6e')):_0x24fc33(_0x3b45('0x84'))[_0x3b45('0x25')](_0x3b45('0x6e'));}else{_0x24fc33(_0x3b45('0x84'))[_0x3b45('0x25')](_0x3b45('0x6e'));}}};if(window['CONFIG'][_0x3b45('0x39')]){window[_0x3b45('0x9f')]=_0x5565d3;}return _0x5565d3;});