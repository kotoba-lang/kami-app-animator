goog.provide('kami.animator.app');
kami.animator.app.cube_geo = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(1)], null)], null),new cljs.core.Keyword(null,"normals","normals",-1508109067),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__19990_SHARP_){
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((4),p1__19990_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], null)], 0))),new cljs.core.Keyword(null,"indices","indices",-1218138343),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (i){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(i + (1)),(i + (2)),i,(i + (2)),(i + (3))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(24),(4))], 0)))], null);
kami.animator.app.channel_defs = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("cube","x","cube/x",2085386470),new cljs.core.Keyword(null,"label","label",1718410804),"Location X",new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("cube","y","cube/y",-1754370939),new cljs.core.Keyword(null,"label","label",1718410804),"Location Y",new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("cube","z","cube/z",-792622802),new cljs.core.Keyword(null,"label","label",1718410804),"Location Z",new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("cube","rotation-x","cube/rotation-x",387065608),new cljs.core.Keyword(null,"label","label",1718410804),"Rotation X",new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("cube","rotation-y","cube/rotation-y",-1436611113),new cljs.core.Keyword(null,"label","label",1718410804),"Rotation Y",new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("cube","rotation-z","cube/rotation-z",-1098433303),new cljs.core.Keyword(null,"label","label",1718410804),"Rotation Z",new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("cube","scale-x","cube/scale-x",-16604843),new cljs.core.Keyword(null,"label","label",1718410804),"Scale X",new cljs.core.Keyword(null,"default","default",-1987822328),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("cube","scale-y","cube/scale-y",1327114498),new cljs.core.Keyword(null,"label","label",1718410804),"Scale Y",new cljs.core.Keyword(null,"default","default",-1987822328),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("cube","scale-z","cube/scale-z",138682925),new cljs.core.Keyword(null,"label","label",1718410804),"Scale Z",new cljs.core.Keyword(null,"default","default",-1987822328),(1)], null)], null);
kami.animator.app.channels = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721),kami.animator.app.channel_defs);
kami.animator.app.initial = kami.animation.timeline.cljs$core$IFn$_invoke$arity$2((2),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__19991){
var map__19992 = p__19991;
var map__19992__$1 = cljs.core.__destructure_map(map__19992);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19992__$1,new cljs.core.Keyword(null,"target","target",253001721));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19992__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
return kami.animation.track(target,(function (){var G__19993 = target;
var G__19993__$1 = (((G__19993 instanceof cljs.core.Keyword))?G__19993.fqn:null);
switch (G__19993__$1) {
case "cube/x":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kami.animation.keyframe.cljs$core$IFn$_invoke$arity$2((0),(-2)),kami.animation.keyframe.cljs$core$IFn$_invoke$arity$3((2),(2),new cljs.core.Keyword(null,"smooth","smooth",-809843519))], null);

break;
case "cube/y":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kami.animation.keyframe.cljs$core$IFn$_invoke$arity$2((0),(0)),kami.animation.keyframe.cljs$core$IFn$_invoke$arity$3((1),(1),new cljs.core.Keyword(null,"smooth","smooth",-809843519)),kami.animation.keyframe.cljs$core$IFn$_invoke$arity$3((2),(0),new cljs.core.Keyword(null,"smooth","smooth",-809843519))], null);

break;
case "cube/rotation-z":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kami.animation.keyframe.cljs$core$IFn$_invoke$arity$2((0),(0)),kami.animation.keyframe.cljs$core$IFn$_invoke$arity$3((2),((2) * Math.PI),new cljs.core.Keyword(null,"smooth","smooth",-809843519))], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kami.animation.keyframe.cljs$core$IFn$_invoke$arity$2((0),default$),kami.animation.keyframe.cljs$core$IFn$_invoke$arity$2((2),default$)], null);

}
})());
}),kami.animator.app.channel_defs));
if((typeof kami !== 'undefined') && (typeof kami.animator !== 'undefined') && (typeof kami.animator.app !== 'undefined') && (typeof kami.animator.app.state !== 'undefined')){
} else {
kami.animator.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"active-target","active-target",-904731712),new cljs.core.Keyword(null,"project-name","project-name",1486861539),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"future","future",1877842724),new cljs.core.Keyword(null,"revision","revision",-1350113114),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"frame-snap?","frame-snap?",-1940431763),new cljs.core.Keyword(null,"fps","fps",683533296),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"timeline","timeline",192903161),new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword(null,"profile","profile",-545963874)],[new cljs.core.Keyword("cube","x","cube/x",2085386470),"Untitled Animation",null,cljs.core.PersistentVector.EMPTY,(0),(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kami.animator.app.initial], null),true,(24),false,new cljs.core.Keyword(null,"clean","clean",41534079),kami.animator.app.initial,"untitled-animation",new cljs.core.Keyword(null,"maya","maya",-2121079392)]));
}
if((typeof kami !== 'undefined') && (typeof kami.animator !== 'undefined') && (typeof kami.animator.app !== 'undefined') && (typeof kami.animator.app.viewport !== 'undefined')){
} else {
kami.animator.app.viewport = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
kami.animator.app.frames = (function kami$animator$app$frames(var_args){
var G__19996 = arguments.length;
switch (G__19996) {
case 0:
return kami.animator.app.frames.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return kami.animator.app.frames.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kami.animator.app.frames.cljs$core$IFn$_invoke$arity$0 = (function (){
return kami.animator.app.frames.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)));
}));

(kami.animator.app.frames.cljs$core$IFn$_invoke$arity$1 = (function (target){
return new cljs.core.Keyword("track","keyframes","track/keyframes",-1597879575).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19994_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,new cljs.core.Keyword("track","target","track/target",481079510).cljs$core$IFn$_invoke$arity$1(p1__19994_SHARP_));
}),new cljs.core.Keyword("timeline","tracks","timeline/tracks",1673581642).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state))))));
}));

(kami.animator.app.frames.cljs$lang$maxFixedArity = 1);

kami.animator.app.render_keys_BANG_ = (function kami$animator$app$render_keys_BANG_(){
var lane = document.getElementById("lane");
var seq__19997_20087 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(lane.querySelectorAll(".key")));
var chunk__19998_20088 = null;
var count__19999_20089 = (0);
var i__20000_20090 = (0);
while(true){
if((i__20000_20090 < count__19999_20089)){
var n_20091 = chunk__19998_20088.cljs$core$IIndexed$_nth$arity$2(null, i__20000_20090);
n_20091.remove();


var G__20092 = seq__19997_20087;
var G__20093 = chunk__19998_20088;
var G__20094 = count__19999_20089;
var G__20095 = (i__20000_20090 + (1));
seq__19997_20087 = G__20092;
chunk__19998_20088 = G__20093;
count__19999_20089 = G__20094;
i__20000_20090 = G__20095;
continue;
} else {
var temp__5825__auto___20096 = cljs.core.seq(seq__19997_20087);
if(temp__5825__auto___20096){
var seq__19997_20097__$1 = temp__5825__auto___20096;
if(cljs.core.chunked_seq_QMARK_(seq__19997_20097__$1)){
var c__5525__auto___20098 = cljs.core.chunk_first(seq__19997_20097__$1);
var G__20099 = cljs.core.chunk_rest(seq__19997_20097__$1);
var G__20100 = c__5525__auto___20098;
var G__20101 = cljs.core.count(c__5525__auto___20098);
var G__20102 = (0);
seq__19997_20087 = G__20099;
chunk__19998_20088 = G__20100;
count__19999_20089 = G__20101;
i__20000_20090 = G__20102;
continue;
} else {
var n_20103 = cljs.core.first(seq__19997_20097__$1);
n_20103.remove();


var G__20104 = cljs.core.next(seq__19997_20097__$1);
var G__20105 = null;
var G__20106 = (0);
var G__20107 = (0);
seq__19997_20087 = G__20104;
chunk__19998_20088 = G__20105;
count__19999_20089 = G__20106;
i__20000_20090 = G__20107;
continue;
}
} else {
}
}
break;
}

var seq__20001 = cljs.core.seq(kami.animator.app.frames.cljs$core$IFn$_invoke$arity$0());
var chunk__20002 = null;
var count__20003 = (0);
var i__20004 = (0);
while(true){
if((i__20004 < count__20003)){
var k = chunk__20002.cljs$core$IIndexed$_nth$arity$2(null, i__20004);
var b_20108 = document.createElement("button");
(b_20108.className = ["key",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state))))?" selected":null)].join(''));

(b_20108.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(k) / new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)))))),"%"].join(''));

b_20108.addEventListener("click",((function (seq__20001,chunk__20002,count__20003,i__20004,b_20108,k,lane){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(k));

return (kami.animator.app.update_ui_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.animator.app.update_ui_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.animator.app.update_ui_BANG_.call(null, ));
});})(seq__20001,chunk__20002,count__20003,i__20004,b_20108,k,lane))
);

lane.appendChild(b_20108);


var G__20109 = seq__20001;
var G__20110 = chunk__20002;
var G__20111 = count__20003;
var G__20112 = (i__20004 + (1));
seq__20001 = G__20109;
chunk__20002 = G__20110;
count__20003 = G__20111;
i__20004 = G__20112;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__20001);
if(temp__5825__auto__){
var seq__20001__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20001__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20001__$1);
var G__20113 = cljs.core.chunk_rest(seq__20001__$1);
var G__20114 = c__5525__auto__;
var G__20115 = cljs.core.count(c__5525__auto__);
var G__20116 = (0);
seq__20001 = G__20113;
chunk__20002 = G__20114;
count__20003 = G__20115;
i__20004 = G__20116;
continue;
} else {
var k = cljs.core.first(seq__20001__$1);
var b_20117 = document.createElement("button");
(b_20117.className = ["key",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state))))?" selected":null)].join(''));

(b_20117.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(k) / new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)))))),"%"].join(''));

b_20117.addEventListener("click",((function (seq__20001,chunk__20002,count__20003,i__20004,b_20117,k,seq__20001__$1,temp__5825__auto__,lane){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(k));

return (kami.animator.app.update_ui_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.animator.app.update_ui_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.animator.app.update_ui_BANG_.call(null, ));
});})(seq__20001,chunk__20002,count__20003,i__20004,b_20117,k,seq__20001__$1,temp__5825__auto__,lane))
);

lane.appendChild(b_20117);


var G__20118 = cljs.core.next(seq__20001__$1);
var G__20119 = null;
var G__20120 = (0);
var G__20121 = (0);
seq__20001 = G__20118;
chunk__20002 = G__20119;
count__20003 = G__20120;
i__20004 = G__20121;
continue;
}
} else {
return null;
}
}
break;
}
});
kami.animator.app.update_ui_BANG_ = (function kami$animator$app$update_ui_BANG_(){
var map__20010 = cljs.core.deref(kami.animator.app.state);
var map__20010__$1 = cljs.core.__destructure_map(map__20010);
var timeline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20010__$1,new cljs.core.Keyword(null,"timeline","timeline",192903161));
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20010__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var active_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20010__$1,new cljs.core.Keyword(null,"active-target","active-target",-904731712));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20010__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var future = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20010__$1,new cljs.core.Keyword(null,"future","future",1877842724));
var revision = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20010__$1,new cljs.core.Keyword(null,"revision","revision",-1350113114));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20010__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20010__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var frame_snap_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20010__$1,new cljs.core.Keyword(null,"frame-snap?","frame-snap?",-1940431763));
var fps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20010__$1,new cljs.core.Keyword(null,"fps","fps",683533296));
var save_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20010__$1,new cljs.core.Keyword(null,"save-status","save-status",-2046612873));
var k = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20005_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(p1__20005_SHARP_));
}),kami.animator.app.frames.cljs$core$IFn$_invoke$arity$0()));
(document.getElementById("scrub").value = time);

(document.getElementById("playhead").style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (time / new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(timeline)))),"%"].join(''));

(document.getElementById("scrub").max = new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(timeline));

(document.getElementById("scrub").step = ((1) / fps));

(document.getElementById("time").textContent = ["Frame ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((time * fps)))," \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(time.toFixed((3)))," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(timeline).toFixed((3)))," s"].join(''));

(document.getElementById("undo").disabled = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(history__$1)));

(document.getElementById("redo").disabled = cljs.core.empty_QMARK_(future));

(document.getElementById("play").textContent = (cljs.core.truth_(new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)))?"\u275A\u275A Pause":"\u25B6 Play"));

(document.getElementById("profile-hint").textContent = (function (){var G__20011 = profile;
var G__20011__$1 = (((G__20011 instanceof cljs.core.Keyword))?G__20011.fqn:null);
switch (G__20011__$1) {
case "blender":
return "I Insert Key \u00B7 Space Play \u00B7 X Delete";

break;
case "max":
return "K Set Key \u00B7 / Play \u00B7 Delete Key";

break;
case "c4d":
return "F9 Record \u00B7 F8 Play \u00B7 Delete Key";

break;
default:
return "S Set Key \u00B7 Alt+V Play \u00B7 Delete Key";

}
})());

var seq__20012_20123 = cljs.core.seq(kami.animator.app.channels);
var chunk__20013_20124 = null;
var count__20014_20125 = (0);
var i__20015_20126 = (0);
while(true){
if((i__20015_20126 < count__20014_20125)){
var target_20127 = chunk__20013_20124.cljs$core$IIndexed$_nth$arity$2(null, i__20015_20126);
document.getElementById(["channel-",cljs.core.name(target_20127)].join('')).classList.toggle("primary",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_20127,active_target));


var G__20128 = seq__20012_20123;
var G__20129 = chunk__20013_20124;
var G__20130 = count__20014_20125;
var G__20131 = (i__20015_20126 + (1));
seq__20012_20123 = G__20128;
chunk__20013_20124 = G__20129;
count__20014_20125 = G__20130;
i__20015_20126 = G__20131;
continue;
} else {
var temp__5825__auto___20132 = cljs.core.seq(seq__20012_20123);
if(temp__5825__auto___20132){
var seq__20012_20133__$1 = temp__5825__auto___20132;
if(cljs.core.chunked_seq_QMARK_(seq__20012_20133__$1)){
var c__5525__auto___20134 = cljs.core.chunk_first(seq__20012_20133__$1);
var G__20135 = cljs.core.chunk_rest(seq__20012_20133__$1);
var G__20136 = c__5525__auto___20134;
var G__20137 = cljs.core.count(c__5525__auto___20134);
var G__20138 = (0);
seq__20012_20123 = G__20135;
chunk__20013_20124 = G__20136;
count__20014_20125 = G__20137;
i__20015_20126 = G__20138;
continue;
} else {
var target_20139 = cljs.core.first(seq__20012_20133__$1);
document.getElementById(["channel-",cljs.core.name(target_20139)].join('')).classList.toggle("primary",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_20139,active_target));


var G__20140 = cljs.core.next(seq__20012_20133__$1);
var G__20141 = null;
var G__20142 = (0);
var G__20143 = (0);
seq__20012_20123 = G__20140;
chunk__20013_20124 = G__20141;
count__20014_20125 = G__20142;
i__20015_20126 = G__20143;
continue;
}
} else {
}
}
break;
}

(document.getElementById("active-channel").textContent = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20006_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_target,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(p1__20006_SHARP_));
}),kami.animator.app.channel_defs))));

if(cljs.core.truth_(k)){
(document.getElementById("key-time").value = new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(k));

(document.getElementById("key-value").value = new cljs.core.Keyword("keyframe","value","keyframe/value",813467611).cljs$core$IFn$_invoke$arity$1(k));

(document.getElementById("interpolation").value = cljs.core.name(new cljs.core.Keyword("keyframe","interpolation","keyframe/interpolation",1047526581).cljs$core$IFn$_invoke$arity$1(k)));

(document.getElementById("tangent-in").value = new cljs.core.Keyword("keyframe","tangent-in","keyframe/tangent-in",-1606835433).cljs$core$IFn$_invoke$arity$2(k,(0)));

(document.getElementById("tangent-out").value = new cljs.core.Keyword("keyframe","tangent-out","keyframe/tangent-out",804934652).cljs$core$IFn$_invoke$arity$2(k,(0)));
} else {
}

(document.getElementById("loop").checked = new cljs.core.Keyword("timeline","loop?","timeline/loop?",-1753211093).cljs$core$IFn$_invoke$arity$1(timeline));

(document.getElementById("loop-start").value = new cljs.core.Keyword("timeline","loop-start","timeline/loop-start",-1139768638).cljs$core$IFn$_invoke$arity$2(timeline,(0)));

(document.getElementById("loop-end").value = new cljs.core.Keyword("timeline","loop-end","timeline/loop-end",1987742648).cljs$core$IFn$_invoke$arity$2(timeline,new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(timeline)));

(document.getElementById("playback-rate").value = new cljs.core.Keyword("timeline","playback-rate","timeline/playback-rate",-1892838771).cljs$core$IFn$_invoke$arity$2(timeline,(1)));

(document.getElementById("fps").value = fps);

(document.getElementById("frame-snap").checked = frame_snap_QMARK_);

(document.getElementById("duration").value = new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(timeline));

(document.getElementById("debug-state").textContent = JSON.stringify(cljs.core.clj__GT_js(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"projectVersion","projectVersion",412999009),new cljs.core.Keyword(null,"keyCount","keyCount",914542082),new cljs.core.Keyword(null,"frameSnap","frameSnap",12666244),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"revision","revision",-1350113114),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"saveStatus","saveStatus",-284043285),new cljs.core.Keyword(null,"trackCount","trackCount",1597528429),new cljs.core.Keyword(null,"fps","fps",683533296),new cljs.core.Keyword(null,"activeTarget","activeTarget",1437919092),new cljs.core.Keyword(null,"translation","translation",-701621547),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"profile","profile",-545963874)],[kami.animator.project.current_version,cljs.core.count(kami.animator.app.frames.cljs$core$IFn$_invoke$arity$0()),frame_snap_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20008_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(kami.animation.evaluate(timeline,time),p1__20008_SHARP_,(0));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),kami.animator.app.channels))),(function (){var G__20016 = selected;
if((G__20016 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20016);
}
})(),Math.round((time * fps)),revision,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20009_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(kami.animation.evaluate(timeline,time),p1__20009_SHARP_,(1));
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((6),kami.animator.app.channels)),time,cljs.core.name(save_status),cljs.core.count(kami.animator.app.channels),fps,cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_target),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20007_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(kami.animation.evaluate(timeline,time),p1__20007_SHARP_,(0));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),kami.animator.app.channels)),new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),cljs.core.name(profile)]))));

return kami.animator.app.render_keys_BANG_();
});
kami.animator.app.commit_BANG_ = (function kami$animator$app$commit_BANG_(tl){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kami.animator.app.state,(function (p1__20017_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__20017_SHARP_,new cljs.core.Keyword(null,"timeline","timeline",192903161),tl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"dirty","dirty",729553281)], 0)),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,tl),new cljs.core.Keyword(null,"revision","revision",-1350113114),cljs.core.inc);
}));

return kami.animator.app.update_ui_BANG_();
});
kami.animator.app.snap_time = (function kami$animator$app$snap_time(time){
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame-snap?","frame-snap?",-1940431763).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)))){
return (Math.round((time * new cljs.core.Keyword(null,"fps","fps",683533296).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)))) / new cljs.core.Keyword(null,"fps","fps",683533296).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)));
} else {
return time;
}
});
kami.animator.app.add_key_BANG_ = (function kami$animator$app$add_key_BANG_(){
var target = new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
var time = kami.animator.app.snap_time(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(kami.animation.evaluate(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),time),target,(0));
var existing = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20018_SHARP_){
return (Math.abs((new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(p1__20018_SHARP_) - time)) < 1.0E-6);
}),kami.animator.app.frames.cljs$core$IFn$_invoke$arity$0()));
if(cljs.core.truth_(existing)){
kami.animator.app.commit_BANG_(kami.animation.update_keyframe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),target,new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(existing),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keyframe","value","keyframe/value",813467611),value], 0)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(existing));

return kami.animator.app.update_ui_BANG_();
} else {
var k = kami.animation.keyframe.cljs$core$IFn$_invoke$arity$2(time,value);
kami.animator.app.commit_BANG_(kami.animation.add_keyframe(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),target,k));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(k));

return kami.animator.app.update_ui_BANG_();
}
});
kami.animator.app.delete_key_BANG_ = (function kami$animator$app$delete_key_BANG_(){
var temp__5825__auto__ = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
if((cljs.core.count(kami.animator.app.frames.cljs$core$IFn$_invoke$arity$0()) > (1))){
kami.animator.app.commit_BANG_(kami.animation.delete_keyframe(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),id));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),null);

return kami.animator.app.update_ui_BANG_();
} else {
return null;
}
});
kami.animator.app.undo_BANG_ = (function kami$animator$app$undo_BANG_(){
if((cljs.core.count(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state))) > (1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kami.animator.app.state,(function (s){
var h = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(s);
var cur = cljs.core.peek(h);
var h2 = cljs.core.pop(h);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"history","history",-247395220),h2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"timeline","timeline",192903161),cljs.core.peek(h2),new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"future","future",1877842724).cljs$core$IFn$_invoke$arity$1(s),cur)], 0));
}));

return kami.animator.app.update_ui_BANG_();
} else {
return null;
}
});
kami.animator.app.redo_BANG_ = (function kami$animator$app$redo_BANG_(){
var temp__5825__auto__ = cljs.core.peek(new cljs.core.Keyword(null,"future","future",1877842724).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)));
if(cljs.core.truth_(temp__5825__auto__)){
var tl = temp__5825__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kami.animator.app.state,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"timeline","timeline",192903161),tl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(s),tl),new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.pop(new cljs.core.Keyword(null,"future","future",1877842724).cljs$core$IFn$_invoke$arity$1(s))], 0));
}));

return kami.animator.app.update_ui_BANG_();
} else {
return null;
}
});
kami.animator.app.toggle_play_BANG_ = (function kami$animator$app$toggle_play_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.animator.app.state,cljs.core.update,new cljs.core.Keyword(null,"playing?","playing?",-1884542863),cljs.core.not);

if(cljs.core.truth_(new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)))){
var G__20019_20144 = performance.now();
(kami.animator.app.tick_BANG_.cljs$core$IFn$_invoke$arity$1 ? kami.animator.app.tick_BANG_.cljs$core$IFn$_invoke$arity$1(G__20019_20144) : kami.animator.app.tick_BANG_.call(null, G__20019_20144));
} else {
}

return kami.animator.app.update_ui_BANG_();
});
kami.animator.app.set_time_BANG_ = (function kami$animator$app$set_time_BANG_(time){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"time","time",1385887882),(function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (function (){var x__5090__auto__ = new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)));
var y__5091__auto__ = time;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false], 0));

return kami.animator.app.update_ui_BANG_();
});
kami.animator.app.editable_target_QMARK_ = (function kami$animator$app$editable_target_QMARK_(event){
var target = event.target;
var tag = (function (){var G__20020 = target;
var G__20020__$1 = (((G__20020 == null))?null:G__20020.tagName);
if((G__20020__$1 == null)){
return null;
} else {
return G__20020__$1.toLowerCase();
}
})();
var or__5002__auto__ = (function (){var fexpr__20021 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["select",null,"input",null,"textarea",null], null), null);
return (fexpr__20021.cljs$core$IFn$_invoke$arity$1 ? fexpr__20021.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__20021.call(null, tag));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return target.isContentEditable;
}
});
kami.animator.app.command_for_event = (function kami$animator$app$command_for_event(event){
var key = event.key.toLowerCase();
var ctrl = (function (){var or__5002__auto__ = event.ctrlKey;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return event.metaKey;
}
})();
var alt = event.altKey;
var profile = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
if(cljs.core.truth_((function (){var and__5000__auto__ = ctrl;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"z");
if(and__5000__auto____$1){
return event.shiftKey;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.Keyword(null,"redo","redo",501190664);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = ctrl;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"z");
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.Keyword(null,"undo","undo",-1818036302);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = ctrl;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"y");
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.Keyword(null,"redo","redo",501190664);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"arrowright")){
return new cljs.core.Keyword(null,"next-frame","next-frame",-636070893);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"arrowleft")){
return new cljs.core.Keyword(null,"previous-frame","previous-frame",-801526391);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"home")){
return new cljs.core.Keyword(null,"start","start",-355208981);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"end")){
return new cljs.core.Keyword(null,"end","end",-268185958);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"delete")){
return new cljs.core.Keyword(null,"delete-key","delete-key",1385635171);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(profile,new cljs.core.Keyword(null,"maya","maya",-2121079392))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"s")){
return new cljs.core.Keyword(null,"add-key","add-key",909996182);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = alt;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"v");
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.Keyword(null,"play","play",-580418022);
} else {
return null;
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(profile,new cljs.core.Keyword(null,"blender","blender",354426016))){
var fexpr__20022 = new cljs.core.PersistentArrayMap(null, 3, ["i",new cljs.core.Keyword(null,"add-key","add-key",909996182),"x",new cljs.core.Keyword(null,"delete-key","delete-key",1385635171)," ",new cljs.core.Keyword(null,"play","play",-580418022)], null);
return (fexpr__20022.cljs$core$IFn$_invoke$arity$1 ? fexpr__20022.cljs$core$IFn$_invoke$arity$1(key) : fexpr__20022.call(null, key));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(profile,new cljs.core.Keyword(null,"max","max",61366548))){
var fexpr__20023 = new cljs.core.PersistentArrayMap(null, 2, ["k",new cljs.core.Keyword(null,"add-key","add-key",909996182),"/",new cljs.core.Keyword(null,"play","play",-580418022)], null);
return (fexpr__20023.cljs$core$IFn$_invoke$arity$1 ? fexpr__20023.cljs$core$IFn$_invoke$arity$1(key) : fexpr__20023.call(null, key));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(profile,new cljs.core.Keyword(null,"c4d","c4d",-1613090238))){
var fexpr__20024 = new cljs.core.PersistentArrayMap(null, 2, ["f9",new cljs.core.Keyword(null,"add-key","add-key",909996182),"f8",new cljs.core.Keyword(null,"play","play",-580418022)], null);
return (fexpr__20024.cljs$core$IFn$_invoke$arity$1 ? fexpr__20024.cljs$core$IFn$_invoke$arity$1(key) : fexpr__20024.call(null, key));
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});
kami.animator.app.execute_command_BANG_ = (function kami$animator$app$execute_command_BANG_(command){
var G__20025 = command;
var G__20025__$1 = (((G__20025 instanceof cljs.core.Keyword))?G__20025.fqn:null);
switch (G__20025__$1) {
case "add-key":
return kami.animator.app.add_key_BANG_();

break;
case "delete-key":
return kami.animator.app.delete_key_BANG_();

break;
case "play":
return kami.animator.app.toggle_play_BANG_();

break;
case "undo":
return kami.animator.app.undo_BANG_();

break;
case "redo":
return kami.animator.app.redo_BANG_();

break;
case "next-frame":
return kami.animator.app.set_time_BANG_((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)) + ((1) / new cljs.core.Keyword(null,"fps","fps",683533296).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)))));

break;
case "previous-frame":
return kami.animator.app.set_time_BANG_((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)) - ((1) / new cljs.core.Keyword(null,"fps","fps",683533296).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)))));

break;
case "start":
return kami.animator.app.set_time_BANG_((0));

break;
case "end":
return kami.animator.app.set_time_BANG_(new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state))));

break;
default:
return null;

}
});
kami.animator.app.storage_key = "kami.animator.project.v2";
kami.animator.app.backup_key = "kami.animator.project.backup";
kami.animator.app.project_document = (function kami$animator$app$project_document(){
var map__20026 = cljs.core.deref(kami.animator.app.state);
var map__20026__$1 = cljs.core.__destructure_map(map__20026);
var timeline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20026__$1,new cljs.core.Keyword(null,"timeline","timeline",192903161));
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20026__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20026__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var active_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20026__$1,new cljs.core.Keyword(null,"active-target","active-target",-904731712));
var project_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20026__$1,new cljs.core.Keyword(null,"project-name","project-name",1486861539));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20026__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20026__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var frame_snap_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20026__$1,new cljs.core.Keyword(null,"frame-snap?","frame-snap?",-1940431763));
var fps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20026__$1,new cljs.core.Keyword(null,"fps","fps",683533296));
return kami.animator.project.document(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),project_id,new cljs.core.Keyword(null,"name","name",1843675177),project_name,new cljs.core.Keyword(null,"timeline","timeline",192903161),timeline,new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"active-target","active-target",-904731712),active_target,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"profile","profile",-545963874),profile,new cljs.core.Keyword(null,"fps","fps",683533296),fps,new cljs.core.Keyword(null,"frame-snap?","frame-snap?",-1940431763),frame_snap_QMARK_], null)], null));
});
kami.animator.app.save_project_BANG_ = (function kami$animator$app$save_project_BANG_(){
var data = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kami.animator.app.project_document()], 0));
var previous = localStorage.getItem(kami.animator.app.storage_key);
if(cljs.core.truth_(previous)){
localStorage.setItem(kami.animator.app.backup_key,previous);
} else {
}

localStorage.setItem(kami.animator.app.storage_key,data);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"saved","saved",288760660));

return kami.animator.app.update_ui_BANG_();
});
kami.animator.app.apply_project_BANG_ = (function kami$animator$app$apply_project_BANG_(value){
var p = kami.animator.project.open(value);
var tl = new cljs.core.Keyword("project","timeline","project/timeline",-1125219086).cljs$core$IFn$_invoke$arity$1(p);
var editor = new cljs.core.Keyword("project","editor","project/editor",-1449754765).cljs$core$IFn$_invoke$arity$1(p);
var target = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(editor);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("track","target","track/target",481079510).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("timeline","tracks","timeline/tracks",1673581642).cljs$core$IFn$_invoke$arity$1(tl)));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword("project","id","project/id",-791740645).cljs$core$IFn$_invoke$arity$1(p),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"project-name","project-name",1486861539),new cljs.core.Keyword("project","name","project/name",2022968152).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"timeline","timeline",192903161),tl,new cljs.core.Keyword(null,"time","time",1385887882),(function (){var x__5090__auto__ = new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$2(editor,(0));
var y__5091__auto__ = new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(tl);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})(),new cljs.core.Keyword(null,"active-target","active-target",-904731712),target,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(editor),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$2(editor,new cljs.core.Keyword(null,"maya","maya",-2121079392)),new cljs.core.Keyword(null,"fps","fps",683533296),new cljs.core.Keyword(null,"fps","fps",683533296).cljs$core$IFn$_invoke$arity$2(editor,(24)),new cljs.core.Keyword(null,"frame-snap?","frame-snap?",-1940431763),new cljs.core.Keyword(null,"frame-snap?","frame-snap?",-1940431763).cljs$core$IFn$_invoke$arity$2(editor,true),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tl], null),new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"saved","saved",288760660)], 0));

(document.getElementById("profile").value = cljs.core.name(new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$2(editor,new cljs.core.Keyword(null,"maya","maya",-2121079392))));

return kami.animator.app.update_ui_BANG_();
});
kami.animator.app.load_project_BANG_ = (function kami$animator$app$load_project_BANG_(){
var temp__5825__auto__ = localStorage.getItem(kami.animator.app.storage_key);
if(cljs.core.truth_(temp__5825__auto__)){
var data = temp__5825__auto__;
try{return kami.animator.app.apply_project_BANG_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(data));
}catch (e20027){var _ = e20027;
var temp__5825__auto____$1 = localStorage.getItem(kami.animator.app.backup_key);
if(cljs.core.truth_(temp__5825__auto____$1)){
var backup = temp__5825__auto____$1;
return kami.animator.app.apply_project_BANG_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(backup));
} else {
return null;
}
}} else {
return null;
}
});
kami.animator.app.download_project_BANG_ = (function kami$animator$app$download_project_BANG_(){
var a = document.createElement("a");
var url = URL.createObjectURL((new Blob([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kami.animator.app.project_document()], 0))],({"type": "application/edn"}))));
(a.href = url);

(a.download = "animation.kami-animator.edn");

a.click();

return setTimeout((function (){
return URL.revokeObjectURL(url);
}),(0));
});
kami.animator.app.import_project_BANG_ = (function kami$animator$app$import_project_BANG_(event){
var temp__5825__auto__ = (event.target.files[(0)]);
if(cljs.core.truth_(temp__5825__auto__)){
var file = temp__5825__auto__;
return file.text().then((function (p1__20028_SHARP_){
return kami.animator.app.apply_project_BANG_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__20028_SHARP_));
}));
} else {
return null;
}
});
kami.animator.app.draw_BANG_ = (function kami$animator$app$draw_BANG_(){
var temp__5825__auto___20146 = cljs.core.deref(kami.animator.app.viewport);
if(cljs.core.truth_(temp__5825__auto___20146)){
var map__20032_20147 = temp__5825__auto___20146;
var map__20032_20148__$1 = cljs.core.__destructure_map(map__20032_20147);
var v_20149 = map__20032_20148__$1;
var buffers_20150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20032_20148__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
var values_20151 = kami.animation.evaluate(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)));
kami.webgpu.mesh.render_frame_BANG_.cljs$core$IFn$_invoke$arity$6(v_20149,buffers_20150,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),2.8,(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.45,0.65,1.0], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"translation","translation",-701621547),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20029_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(values_20151,p1__20029_SHARP_,(0));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),kami.animator.app.channels)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20030_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(values_20151,p1__20030_SHARP_,(0));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),kami.animator.app.channels))),new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20031_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(values_20151,p1__20031_SHARP_,(1));
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((6),kami.animator.app.channels))], null));
} else {
}

return requestAnimationFrame(kami.animator.app.draw_BANG_);
});
kami.animator.app.tick_BANG_ = (function kami$animator$app$tick_BANG_(last_ms){
if(cljs.core.truth_(new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)))){
var now = performance.now();
var timeline = new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
var dt = (((now - last_ms) / (1000)) * new cljs.core.Keyword("timeline","playback-rate","timeline/playback-rate",-1892838771).cljs$core$IFn$_invoke$arity$2(timeline,(1)));
var t = (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)) + dt);
var end = (cljs.core.truth_(new cljs.core.Keyword("timeline","loop?","timeline/loop?",-1753211093).cljs$core$IFn$_invoke$arity$1(timeline))?new cljs.core.Keyword("timeline","loop-end","timeline/loop-end",1987742648).cljs$core$IFn$_invoke$arity$1(timeline):new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(timeline));
var next_time = (((t > end))?(cljs.core.truth_(new cljs.core.Keyword("timeline","loop?","timeline/loop?",-1753211093).cljs$core$IFn$_invoke$arity$1(timeline))?new cljs.core.Keyword("timeline","loop-start","timeline/loop-start",-1139768638).cljs$core$IFn$_invoke$arity$1(timeline):end):t);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"time","time",1385887882),next_time,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"playing?","playing?",-1884542863),(function (){var or__5002__auto__ = new cljs.core.Keyword("timeline","loop?","timeline/loop?",-1753211093).cljs$core$IFn$_invoke$arity$1(timeline);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (next_time < end);
}
})()], 0));

kami.animator.app.update_ui_BANG_();

if(cljs.core.truth_(new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)))){
return requestAnimationFrame((function (){
return (kami.animator.app.tick_BANG_.cljs$core$IFn$_invoke$arity$1 ? kami.animator.app.tick_BANG_.cljs$core$IFn$_invoke$arity$1(now) : kami.animator.app.tick_BANG_.call(null, now));
}));
} else {
return null;
}
} else {
return null;
}
});
kami.animator.app.init_BANG_ = (function kami$animator$app$init_BANG_(){
var canvas = document.getElementById("gpu-canvas");
kami.webgpu.mesh.init_canvas_BANG_(canvas).then((function (v){
var b = kami.webgpu.mesh.upload_mesh_BANG_(new cljs.core.Keyword(null,"mesh-context","mesh-context",832369712).cljs$core$IFn$_invoke$arity$1(v),kami.animator.app.cube_geo);
cljs.core.reset_BANG_(kami.animator.app.viewport,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"buffers","buffers",471409492),b));

(document.getElementById("gpu-status").textContent = "");

return kami.animator.app.draw_BANG_();
}));

document.getElementById("play").addEventListener("click",kami.animator.app.toggle_play_BANG_);

document.getElementById("scrub").addEventListener("input",(function (p1__20033_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"time","time",1385887882),parseFloat(p1__20033_SHARP_.target.value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false], 0));

return kami.animator.app.update_ui_BANG_();
}));

document.getElementById("fps").addEventListener("change",(function (p1__20034_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"fps","fps",683533296),parseInt(p1__20034_SHARP_.target.value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"dirty","dirty",729553281)], 0));

return kami.animator.app.update_ui_BANG_();
}));

document.getElementById("frame-snap").addEventListener("change",(function (p1__20035_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"frame-snap?","frame-snap?",-1940431763),p1__20035_SHARP_.target.checked,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"dirty","dirty",729553281)], 0));

return kami.animator.app.update_ui_BANG_();
}));

document.getElementById("duration").addEventListener("change",(function (p1__20036_SHARP_){
var requested = (function (){var x__5087__auto__ = 0.1;
var y__5088__auto__ = parseFloat(p1__20036_SHARP_.target.value);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var latest = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("keyframe","time","keyframe/time",903489080),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("track","keyframes","track/keyframes",-1597879575),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("timeline","tracks","timeline/tracks",1673581642).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)))], 0))));
var duration = (function (){var x__5087__auto__ = requested;
var y__5088__auto__ = latest;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
kami.animator.app.commit_BANG_(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823),duration),new cljs.core.Keyword("timeline","loop-end","timeline/loop-end",1987742648),cljs.core.min,duration));

return (p1__20036_SHARP_.target.value = duration);
}));

var seq__20045_20152 = cljs.core.seq(kami.animator.app.channels);
var chunk__20046_20153 = null;
var count__20047_20154 = (0);
var i__20048_20155 = (0);
while(true){
if((i__20048_20155 < count__20047_20154)){
var target_20156 = chunk__20046_20153.cljs$core$IIndexed$_nth$arity$2(null, i__20048_20155);
document.getElementById(["channel-",cljs.core.name(target_20156)].join('')).addEventListener("click",((function (seq__20045_20152,chunk__20046_20153,count__20047_20154,i__20048_20155,target_20156,canvas){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"active-target","active-target",-904731712),target_20156,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected","selected",574897764),null], 0));

return kami.animator.app.update_ui_BANG_();
});})(seq__20045_20152,chunk__20046_20153,count__20047_20154,i__20048_20155,target_20156,canvas))
);


var G__20157 = seq__20045_20152;
var G__20158 = chunk__20046_20153;
var G__20159 = count__20047_20154;
var G__20160 = (i__20048_20155 + (1));
seq__20045_20152 = G__20157;
chunk__20046_20153 = G__20158;
count__20047_20154 = G__20159;
i__20048_20155 = G__20160;
continue;
} else {
var temp__5825__auto___20161 = cljs.core.seq(seq__20045_20152);
if(temp__5825__auto___20161){
var seq__20045_20162__$1 = temp__5825__auto___20161;
if(cljs.core.chunked_seq_QMARK_(seq__20045_20162__$1)){
var c__5525__auto___20163 = cljs.core.chunk_first(seq__20045_20162__$1);
var G__20164 = cljs.core.chunk_rest(seq__20045_20162__$1);
var G__20165 = c__5525__auto___20163;
var G__20166 = cljs.core.count(c__5525__auto___20163);
var G__20167 = (0);
seq__20045_20152 = G__20164;
chunk__20046_20153 = G__20165;
count__20047_20154 = G__20166;
i__20048_20155 = G__20167;
continue;
} else {
var target_20168 = cljs.core.first(seq__20045_20162__$1);
document.getElementById(["channel-",cljs.core.name(target_20168)].join('')).addEventListener("click",((function (seq__20045_20152,chunk__20046_20153,count__20047_20154,i__20048_20155,target_20168,seq__20045_20162__$1,temp__5825__auto___20161,canvas){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"active-target","active-target",-904731712),target_20168,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected","selected",574897764),null], 0));

return kami.animator.app.update_ui_BANG_();
});})(seq__20045_20152,chunk__20046_20153,count__20047_20154,i__20048_20155,target_20168,seq__20045_20162__$1,temp__5825__auto___20161,canvas))
);


var G__20169 = cljs.core.next(seq__20045_20162__$1);
var G__20170 = null;
var G__20171 = (0);
var G__20172 = (0);
seq__20045_20152 = G__20169;
chunk__20046_20153 = G__20170;
count__20047_20154 = G__20171;
i__20048_20155 = G__20172;
continue;
}
} else {
}
}
break;
}

document.getElementById("add-key").addEventListener("click",kami.animator.app.add_key_BANG_);

document.getElementById("delete-key").addEventListener("click",kami.animator.app.delete_key_BANG_);

document.getElementById("profile").addEventListener("change",(function (p1__20037_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__20037_SHARP_.target.value));

return kami.animator.app.update_ui_BANG_();
}));

window.addEventListener("keydown",(function (p1__20038_SHARP_){
if(cljs.core.truth_(kami.animator.app.editable_target_QMARK_(p1__20038_SHARP_))){
return null;
} else {
var temp__5825__auto__ = kami.animator.app.command_for_event(p1__20038_SHARP_);
if(cljs.core.truth_(temp__5825__auto__)){
var command = temp__5825__auto__;
p1__20038_SHARP_.preventDefault();

return kami.animator.app.execute_command_BANG_(command);
} else {
return null;
}
}
}));

document.getElementById("key-time").addEventListener("change",(function (p1__20039_SHARP_){
var temp__5825__auto__ = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return kami.animator.app.commit_BANG_(kami.animation.move_keyframe(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),id,kami.animator.app.snap_time(parseFloat(p1__20039_SHARP_.target.value))));
} else {
return null;
}
}));

document.getElementById("key-value").addEventListener("change",(function (p1__20040_SHARP_){
var temp__5825__auto__ = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return kami.animator.app.commit_BANG_(kami.animation.update_keyframe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),id,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keyframe","value","keyframe/value",813467611),parseFloat(p1__20040_SHARP_.target.value)], 0)));
} else {
return null;
}
}));

document.getElementById("interpolation").addEventListener("change",(function (p1__20041_SHARP_){
var temp__5825__auto__ = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return kami.animator.app.commit_BANG_(kami.animation.update_keyframe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),id,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keyframe","interpolation","keyframe/interpolation",1047526581),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__20041_SHARP_.target.value)], 0)));
} else {
return null;
}
}));

var seq__20049_20173 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tangent-in",new cljs.core.Keyword("keyframe","tangent-in","keyframe/tangent-in",-1606835433)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tangent-out",new cljs.core.Keyword("keyframe","tangent-out","keyframe/tangent-out",804934652)], null)], null));
var chunk__20050_20174 = null;
var count__20051_20175 = (0);
var i__20052_20176 = (0);
while(true){
if((i__20052_20176 < count__20051_20175)){
var vec__20059_20177 = chunk__20050_20174.cljs$core$IIndexed$_nth$arity$2(null, i__20052_20176);
var id_20178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20059_20177,(0),null);
var field_20179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20059_20177,(1),null);
document.getElementById(id_20178).addEventListener("change",((function (seq__20049_20173,chunk__20050_20174,count__20051_20175,i__20052_20176,vec__20059_20177,id_20178,field_20179,canvas){
return (function (p1__20042_SHARP_){
var temp__5825__auto__ = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
if(cljs.core.truth_(temp__5825__auto__)){
var frame_id = temp__5825__auto__;
return kami.animator.app.commit_BANG_(kami.animation.update_keyframe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),frame_id,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_20179,parseFloat(p1__20042_SHARP_.target.value)], 0)));
} else {
return null;
}
});})(seq__20049_20173,chunk__20050_20174,count__20051_20175,i__20052_20176,vec__20059_20177,id_20178,field_20179,canvas))
);


var G__20180 = seq__20049_20173;
var G__20181 = chunk__20050_20174;
var G__20182 = count__20051_20175;
var G__20183 = (i__20052_20176 + (1));
seq__20049_20173 = G__20180;
chunk__20050_20174 = G__20181;
count__20051_20175 = G__20182;
i__20052_20176 = G__20183;
continue;
} else {
var temp__5825__auto___20184 = cljs.core.seq(seq__20049_20173);
if(temp__5825__auto___20184){
var seq__20049_20185__$1 = temp__5825__auto___20184;
if(cljs.core.chunked_seq_QMARK_(seq__20049_20185__$1)){
var c__5525__auto___20186 = cljs.core.chunk_first(seq__20049_20185__$1);
var G__20187 = cljs.core.chunk_rest(seq__20049_20185__$1);
var G__20188 = c__5525__auto___20186;
var G__20189 = cljs.core.count(c__5525__auto___20186);
var G__20190 = (0);
seq__20049_20173 = G__20187;
chunk__20050_20174 = G__20188;
count__20051_20175 = G__20189;
i__20052_20176 = G__20190;
continue;
} else {
var vec__20062_20191 = cljs.core.first(seq__20049_20185__$1);
var id_20192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20062_20191,(0),null);
var field_20193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20062_20191,(1),null);
document.getElementById(id_20192).addEventListener("change",((function (seq__20049_20173,chunk__20050_20174,count__20051_20175,i__20052_20176,vec__20062_20191,id_20192,field_20193,seq__20049_20185__$1,temp__5825__auto___20184,canvas){
return (function (p1__20042_SHARP_){
var temp__5825__auto____$1 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
if(cljs.core.truth_(temp__5825__auto____$1)){
var frame_id = temp__5825__auto____$1;
return kami.animator.app.commit_BANG_(kami.animation.update_keyframe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),frame_id,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_20193,parseFloat(p1__20042_SHARP_.target.value)], 0)));
} else {
return null;
}
});})(seq__20049_20173,chunk__20050_20174,count__20051_20175,i__20052_20176,vec__20062_20191,id_20192,field_20193,seq__20049_20185__$1,temp__5825__auto___20184,canvas))
);


var G__20194 = cljs.core.next(seq__20049_20185__$1);
var G__20195 = null;
var G__20196 = (0);
var G__20197 = (0);
seq__20049_20173 = G__20194;
chunk__20050_20174 = G__20195;
count__20051_20175 = G__20196;
i__20052_20176 = G__20197;
continue;
}
} else {
}
}
break;
}

document.getElementById("auto-tangents").addEventListener("click",(function (){
var target = new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
var timeline = new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
var tracks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (track){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,new cljs.core.Keyword("track","target","track/target",481079510).cljs$core$IFn$_invoke$arity$1(track))){
return kami.animation.auto_tangents(track);
} else {
return track;
}
}),new cljs.core.Keyword("timeline","tracks","timeline/tracks",1673581642).cljs$core$IFn$_invoke$arity$1(timeline));
return kami.animator.app.commit_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(timeline,new cljs.core.Keyword("timeline","tracks","timeline/tracks",1673581642),tracks));
}));

document.getElementById("loop").addEventListener("change",(function (p1__20043_SHARP_){
return kami.animator.app.commit_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword("timeline","loop?","timeline/loop?",-1753211093),p1__20043_SHARP_.target.checked));
}));

var seq__20065_20198 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loop-start",new cljs.core.Keyword("timeline","loop-start","timeline/loop-start",-1139768638)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loop-end",new cljs.core.Keyword("timeline","loop-end","timeline/loop-end",1987742648)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["playback-rate",new cljs.core.Keyword("timeline","playback-rate","timeline/playback-rate",-1892838771)], null)], null));
var chunk__20066_20199 = null;
var count__20067_20200 = (0);
var i__20068_20201 = (0);
while(true){
if((i__20068_20201 < count__20067_20200)){
var vec__20077_20202 = chunk__20066_20199.cljs$core$IIndexed$_nth$arity$2(null, i__20068_20201);
var id_20203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20077_20202,(0),null);
var field_20204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20077_20202,(1),null);
document.getElementById(id_20203).addEventListener("change",((function (seq__20065_20198,chunk__20066_20199,count__20067_20200,i__20068_20201,vec__20077_20202,id_20203,field_20204,canvas){
return (function (p1__20044_SHARP_){
var timeline = new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
var raw = parseFloat(p1__20044_SHARP_.target.value);
var value = (function (){var G__20080 = field_20204;
var G__20080__$1 = (((G__20080 instanceof cljs.core.Keyword))?G__20080.fqn:null);
switch (G__20080__$1) {
case "timeline/loop-start":
var x__5087__auto__ = (0);
var y__5088__auto__ = (function (){var x__5090__auto__ = raw;
var y__5091__auto__ = (new cljs.core.Keyword("timeline","loop-end","timeline/loop-end",1987742648).cljs$core$IFn$_invoke$arity$1(timeline) - 0.01);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);

break;
case "timeline/loop-end":
var x__5090__auto__ = new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(timeline);
var y__5091__auto__ = (function (){var x__5087__auto__ = raw;
var y__5088__auto__ = (new cljs.core.Keyword("timeline","loop-start","timeline/loop-start",-1139768638).cljs$core$IFn$_invoke$arity$1(timeline) + 0.01);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);

break;
case "timeline/playback-rate":
var x__5087__auto__ = 0.1;
var y__5088__auto__ = (function (){var x__5090__auto__ = (4);
var y__5091__auto__ = raw;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20080__$1)].join('')));

}
})();
return kami.animator.app.commit_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(timeline,field_20204,value));
});})(seq__20065_20198,chunk__20066_20199,count__20067_20200,i__20068_20201,vec__20077_20202,id_20203,field_20204,canvas))
);


var G__20206 = seq__20065_20198;
var G__20207 = chunk__20066_20199;
var G__20208 = count__20067_20200;
var G__20209 = (i__20068_20201 + (1));
seq__20065_20198 = G__20206;
chunk__20066_20199 = G__20207;
count__20067_20200 = G__20208;
i__20068_20201 = G__20209;
continue;
} else {
var temp__5825__auto___20210 = cljs.core.seq(seq__20065_20198);
if(temp__5825__auto___20210){
var seq__20065_20211__$1 = temp__5825__auto___20210;
if(cljs.core.chunked_seq_QMARK_(seq__20065_20211__$1)){
var c__5525__auto___20212 = cljs.core.chunk_first(seq__20065_20211__$1);
var G__20213 = cljs.core.chunk_rest(seq__20065_20211__$1);
var G__20214 = c__5525__auto___20212;
var G__20215 = cljs.core.count(c__5525__auto___20212);
var G__20216 = (0);
seq__20065_20198 = G__20213;
chunk__20066_20199 = G__20214;
count__20067_20200 = G__20215;
i__20068_20201 = G__20216;
continue;
} else {
var vec__20081_20217 = cljs.core.first(seq__20065_20211__$1);
var id_20218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20081_20217,(0),null);
var field_20219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20081_20217,(1),null);
document.getElementById(id_20218).addEventListener("change",((function (seq__20065_20198,chunk__20066_20199,count__20067_20200,i__20068_20201,vec__20081_20217,id_20218,field_20219,seq__20065_20211__$1,temp__5825__auto___20210,canvas){
return (function (p1__20044_SHARP_){
var timeline = new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
var raw = parseFloat(p1__20044_SHARP_.target.value);
var value = (function (){var G__20084 = field_20219;
var G__20084__$1 = (((G__20084 instanceof cljs.core.Keyword))?G__20084.fqn:null);
switch (G__20084__$1) {
case "timeline/loop-start":
var x__5087__auto__ = (0);
var y__5088__auto__ = (function (){var x__5090__auto__ = raw;
var y__5091__auto__ = (new cljs.core.Keyword("timeline","loop-end","timeline/loop-end",1987742648).cljs$core$IFn$_invoke$arity$1(timeline) - 0.01);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);

break;
case "timeline/loop-end":
var x__5090__auto__ = new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(timeline);
var y__5091__auto__ = (function (){var x__5087__auto__ = raw;
var y__5088__auto__ = (new cljs.core.Keyword("timeline","loop-start","timeline/loop-start",-1139768638).cljs$core$IFn$_invoke$arity$1(timeline) + 0.01);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);

break;
case "timeline/playback-rate":
var x__5087__auto__ = 0.1;
var y__5088__auto__ = (function (){var x__5090__auto__ = (4);
var y__5091__auto__ = raw;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20084__$1)].join('')));

}
})();
return kami.animator.app.commit_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(timeline,field_20219,value));
});})(seq__20065_20198,chunk__20066_20199,count__20067_20200,i__20068_20201,vec__20081_20217,id_20218,field_20219,seq__20065_20211__$1,temp__5825__auto___20210,canvas))
);


var G__20221 = cljs.core.next(seq__20065_20211__$1);
var G__20222 = null;
var G__20223 = (0);
var G__20224 = (0);
seq__20065_20198 = G__20221;
chunk__20066_20199 = G__20222;
count__20067_20200 = G__20223;
i__20068_20201 = G__20224;
continue;
}
} else {
}
}
break;
}

document.getElementById("undo").addEventListener("click",kami.animator.app.undo_BANG_);

document.getElementById("redo").addEventListener("click",kami.animator.app.redo_BANG_);

document.getElementById("save-project").addEventListener("click",kami.animator.app.save_project_BANG_);

document.getElementById("load-project").addEventListener("click",kami.animator.app.load_project_BANG_);

document.getElementById("import").addEventListener("click",(function (){
return document.getElementById("import-file").click();
}));

document.getElementById("import-file").addEventListener("change",kami.animator.app.import_project_BANG_);

document.getElementById("export").addEventListener("click",kami.animator.app.download_project_BANG_);

return kami.animator.app.update_ui_BANG_();
});
goog.exportSymbol('kami.animator.app.init_BANG_', kami.animator.app.init_BANG_);

//# sourceMappingURL=kami.animator.app.js.map
