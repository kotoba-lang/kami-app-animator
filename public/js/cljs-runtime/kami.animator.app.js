goog.provide('kami.animator.app');
kami.animator.app.cube_geo = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(1)], null)], null),new cljs.core.Keyword(null,"normals","normals",-1508109067),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__22521_SHARP_){
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((4),p1__22521_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], null)], 0))),new cljs.core.Keyword(null,"indices","indices",-1218138343),cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (i){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(i + (1)),(i + (2)),i,(i + (2)),(i + (3))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(24),(4))], 0)))], null);
kami.animator.app.channel_defs = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("cube","x","cube/x",2085386470),new cljs.core.Keyword(null,"label","label",1718410804),"Location X",new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("cube","y","cube/y",-1754370939),new cljs.core.Keyword(null,"label","label",1718410804),"Location Y",new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("cube","z","cube/z",-792622802),new cljs.core.Keyword(null,"label","label",1718410804),"Location Z",new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("cube","rotation-x","cube/rotation-x",387065608),new cljs.core.Keyword(null,"label","label",1718410804),"Rotation X",new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("cube","rotation-y","cube/rotation-y",-1436611113),new cljs.core.Keyword(null,"label","label",1718410804),"Rotation Y",new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("cube","rotation-z","cube/rotation-z",-1098433303),new cljs.core.Keyword(null,"label","label",1718410804),"Rotation Z",new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("cube","scale-x","cube/scale-x",-16604843),new cljs.core.Keyword(null,"label","label",1718410804),"Scale X",new cljs.core.Keyword(null,"default","default",-1987822328),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("cube","scale-y","cube/scale-y",1327114498),new cljs.core.Keyword(null,"label","label",1718410804),"Scale Y",new cljs.core.Keyword(null,"default","default",-1987822328),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword("cube","scale-z","cube/scale-z",138682925),new cljs.core.Keyword(null,"label","label",1718410804),"Scale Z",new cljs.core.Keyword(null,"default","default",-1987822328),(1)], null)], null);
kami.animator.app.channels = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721),kami.animator.app.channel_defs);
kami.animator.app.initial = kami.animation.timeline.cljs$core$IFn$_invoke$arity$2((2),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__22523){
var map__22524 = p__22523;
var map__22524__$1 = cljs.core.__destructure_map(map__22524);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22524__$1,new cljs.core.Keyword(null,"target","target",253001721));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22524__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
return kami.animation.track(target,(function (){var G__22525 = target;
var G__22525__$1 = (((G__22525 instanceof cljs.core.Keyword))?G__22525.fqn:null);
switch (G__22525__$1) {
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
kami.animator.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"active-target","active-target",-904731712),new cljs.core.Keyword(null,"project-name","project-name",1486861539),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"future","future",1877842724),new cljs.core.Keyword(null,"revision","revision",-1350113114),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"timeline","timeline",192903161),new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword(null,"profile","profile",-545963874)],[new cljs.core.Keyword("cube","x","cube/x",2085386470),"Untitled Animation",null,cljs.core.PersistentVector.EMPTY,(0),(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kami.animator.app.initial], null),false,new cljs.core.Keyword(null,"clean","clean",41534079),kami.animator.app.initial,"untitled-animation",new cljs.core.Keyword(null,"maya","maya",-2121079392)]));
}
if((typeof kami !== 'undefined') && (typeof kami.animator !== 'undefined') && (typeof kami.animator.app !== 'undefined') && (typeof kami.animator.app.viewport !== 'undefined')){
} else {
kami.animator.app.viewport = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
kami.animator.app.frames = (function kami$animator$app$frames(var_args){
var G__22529 = arguments.length;
switch (G__22529) {
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
return new cljs.core.Keyword("track","keyframes","track/keyframes",-1597879575).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22526_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,new cljs.core.Keyword("track","target","track/target",481079510).cljs$core$IFn$_invoke$arity$1(p1__22526_SHARP_));
}),new cljs.core.Keyword("timeline","tracks","timeline/tracks",1673581642).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state))))));
}));

(kami.animator.app.frames.cljs$lang$maxFixedArity = 1);

kami.animator.app.render_keys_BANG_ = (function kami$animator$app$render_keys_BANG_(){
var lane = document.getElementById("lane");
var seq__22530_22694 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(lane.querySelectorAll(".key")));
var chunk__22531_22695 = null;
var count__22532_22696 = (0);
var i__22533_22697 = (0);
while(true){
if((i__22533_22697 < count__22532_22696)){
var n_22698 = chunk__22531_22695.cljs$core$IIndexed$_nth$arity$2(null, i__22533_22697);
n_22698.remove();


var G__22699 = seq__22530_22694;
var G__22700 = chunk__22531_22695;
var G__22701 = count__22532_22696;
var G__22702 = (i__22533_22697 + (1));
seq__22530_22694 = G__22699;
chunk__22531_22695 = G__22700;
count__22532_22696 = G__22701;
i__22533_22697 = G__22702;
continue;
} else {
var temp__5825__auto___22703 = cljs.core.seq(seq__22530_22694);
if(temp__5825__auto___22703){
var seq__22530_22704__$1 = temp__5825__auto___22703;
if(cljs.core.chunked_seq_QMARK_(seq__22530_22704__$1)){
var c__5525__auto___22705 = cljs.core.chunk_first(seq__22530_22704__$1);
var G__22706 = cljs.core.chunk_rest(seq__22530_22704__$1);
var G__22707 = c__5525__auto___22705;
var G__22708 = cljs.core.count(c__5525__auto___22705);
var G__22709 = (0);
seq__22530_22694 = G__22706;
chunk__22531_22695 = G__22707;
count__22532_22696 = G__22708;
i__22533_22697 = G__22709;
continue;
} else {
var n_22710 = cljs.core.first(seq__22530_22704__$1);
n_22710.remove();


var G__22711 = cljs.core.next(seq__22530_22704__$1);
var G__22712 = null;
var G__22713 = (0);
var G__22714 = (0);
seq__22530_22694 = G__22711;
chunk__22531_22695 = G__22712;
count__22532_22696 = G__22713;
i__22533_22697 = G__22714;
continue;
}
} else {
}
}
break;
}

var seq__22543 = cljs.core.seq(kami.animator.app.frames.cljs$core$IFn$_invoke$arity$0());
var chunk__22544 = null;
var count__22545 = (0);
var i__22546 = (0);
while(true){
if((i__22546 < count__22545)){
var k = chunk__22544.cljs$core$IIndexed$_nth$arity$2(null, i__22546);
var b_22715 = document.createElement("button");
(b_22715.className = ["key",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state))))?" selected":null)].join(''));

(b_22715.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(k) / (2)))),"%"].join(''));

b_22715.addEventListener("click",((function (seq__22543,chunk__22544,count__22545,i__22546,b_22715,k,lane){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(k));

return (kami.animator.app.update_ui_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.animator.app.update_ui_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.animator.app.update_ui_BANG_.call(null, ));
});})(seq__22543,chunk__22544,count__22545,i__22546,b_22715,k,lane))
);

lane.appendChild(b_22715);


var G__22716 = seq__22543;
var G__22717 = chunk__22544;
var G__22718 = count__22545;
var G__22719 = (i__22546 + (1));
seq__22543 = G__22716;
chunk__22544 = G__22717;
count__22545 = G__22718;
i__22546 = G__22719;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__22543);
if(temp__5825__auto__){
var seq__22543__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22543__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22543__$1);
var G__22720 = cljs.core.chunk_rest(seq__22543__$1);
var G__22721 = c__5525__auto__;
var G__22722 = cljs.core.count(c__5525__auto__);
var G__22723 = (0);
seq__22543 = G__22720;
chunk__22544 = G__22721;
count__22545 = G__22722;
i__22546 = G__22723;
continue;
} else {
var k = cljs.core.first(seq__22543__$1);
var b_22724 = document.createElement("button");
(b_22724.className = ["key",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state))))?" selected":null)].join(''));

(b_22724.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(k) / (2)))),"%"].join(''));

b_22724.addEventListener("click",((function (seq__22543,chunk__22544,count__22545,i__22546,b_22724,k,seq__22543__$1,temp__5825__auto__,lane){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(k));

return (kami.animator.app.update_ui_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.animator.app.update_ui_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.animator.app.update_ui_BANG_.call(null, ));
});})(seq__22543,chunk__22544,count__22545,i__22546,b_22724,k,seq__22543__$1,temp__5825__auto__,lane))
);

lane.appendChild(b_22724);


var G__22725 = cljs.core.next(seq__22543__$1);
var G__22726 = null;
var G__22727 = (0);
var G__22728 = (0);
seq__22543 = G__22725;
chunk__22544 = G__22726;
count__22545 = G__22727;
i__22546 = G__22728;
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
var map__22590 = cljs.core.deref(kami.animator.app.state);
var map__22590__$1 = cljs.core.__destructure_map(map__22590);
var timeline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22590__$1,new cljs.core.Keyword(null,"timeline","timeline",192903161));
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22590__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var active_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22590__$1,new cljs.core.Keyword(null,"active-target","active-target",-904731712));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22590__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var future = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22590__$1,new cljs.core.Keyword(null,"future","future",1877842724));
var revision = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22590__$1,new cljs.core.Keyword(null,"revision","revision",-1350113114));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22590__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22590__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var save_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22590__$1,new cljs.core.Keyword(null,"save-status","save-status",-2046612873));
var k = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22581_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(p1__22581_SHARP_));
}),kami.animator.app.frames.cljs$core$IFn$_invoke$arity$0()));
(document.getElementById("scrub").value = time);

(document.getElementById("playhead").style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (time / (2)))),"%"].join(''));

(document.getElementById("time").textContent = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(time.toFixed((2)))," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(timeline)),".00 s"].join(''));

(document.getElementById("undo").disabled = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(history__$1)));

(document.getElementById("redo").disabled = cljs.core.empty_QMARK_(future));

(document.getElementById("play").textContent = (cljs.core.truth_(new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)))?"\u275A\u275A Pause":"\u25B6 Play"));

(document.getElementById("profile-hint").textContent = (function (){var G__22591 = profile;
var G__22591__$1 = (((G__22591 instanceof cljs.core.Keyword))?G__22591.fqn:null);
switch (G__22591__$1) {
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

var seq__22592_22730 = cljs.core.seq(kami.animator.app.channels);
var chunk__22593_22731 = null;
var count__22594_22732 = (0);
var i__22595_22733 = (0);
while(true){
if((i__22595_22733 < count__22594_22732)){
var target_22734 = chunk__22593_22731.cljs$core$IIndexed$_nth$arity$2(null, i__22595_22733);
document.getElementById(["channel-",cljs.core.name(target_22734)].join('')).classList.toggle("primary",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_22734,active_target));


var G__22735 = seq__22592_22730;
var G__22736 = chunk__22593_22731;
var G__22737 = count__22594_22732;
var G__22738 = (i__22595_22733 + (1));
seq__22592_22730 = G__22735;
chunk__22593_22731 = G__22736;
count__22594_22732 = G__22737;
i__22595_22733 = G__22738;
continue;
} else {
var temp__5825__auto___22739 = cljs.core.seq(seq__22592_22730);
if(temp__5825__auto___22739){
var seq__22592_22740__$1 = temp__5825__auto___22739;
if(cljs.core.chunked_seq_QMARK_(seq__22592_22740__$1)){
var c__5525__auto___22741 = cljs.core.chunk_first(seq__22592_22740__$1);
var G__22742 = cljs.core.chunk_rest(seq__22592_22740__$1);
var G__22743 = c__5525__auto___22741;
var G__22744 = cljs.core.count(c__5525__auto___22741);
var G__22745 = (0);
seq__22592_22730 = G__22742;
chunk__22593_22731 = G__22743;
count__22594_22732 = G__22744;
i__22595_22733 = G__22745;
continue;
} else {
var target_22746 = cljs.core.first(seq__22592_22740__$1);
document.getElementById(["channel-",cljs.core.name(target_22746)].join('')).classList.toggle("primary",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_22746,active_target));


var G__22747 = cljs.core.next(seq__22592_22740__$1);
var G__22748 = null;
var G__22749 = (0);
var G__22750 = (0);
seq__22592_22730 = G__22747;
chunk__22593_22731 = G__22748;
count__22594_22732 = G__22749;
i__22595_22733 = G__22750;
continue;
}
} else {
}
}
break;
}

(document.getElementById("active-channel").textContent = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22586_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_target,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(p1__22586_SHARP_));
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

(document.getElementById("debug-state").textContent = JSON.stringify(cljs.core.clj__GT_js(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"projectVersion","projectVersion",412999009),new cljs.core.Keyword(null,"keyCount","keyCount",914542082),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"revision","revision",-1350113114),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"saveStatus","saveStatus",-284043285),new cljs.core.Keyword(null,"trackCount","trackCount",1597528429),new cljs.core.Keyword(null,"activeTarget","activeTarget",1437919092),new cljs.core.Keyword(null,"translation","translation",-701621547),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"profile","profile",-545963874)],[kami.animator.project.current_version,cljs.core.count(kami.animator.app.frames.cljs$core$IFn$_invoke$arity$0()),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__22588_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(kami.animation.evaluate(timeline,time),p1__22588_SHARP_,(0));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),kami.animator.app.channels))),(function (){var G__22601 = selected;
if((G__22601 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22601);
}
})(),revision,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__22589_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(kami.animation.evaluate(timeline,time),p1__22589_SHARP_,(1));
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((6),kami.animator.app.channels)),time,cljs.core.name(save_status),cljs.core.count(kami.animator.app.channels),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_target),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__22587_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(kami.animation.evaluate(timeline,time),p1__22587_SHARP_,(0));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),kami.animator.app.channels)),new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),cljs.core.name(profile)]))));

return kami.animator.app.render_keys_BANG_();
});
kami.animator.app.commit_BANG_ = (function kami$animator$app$commit_BANG_(tl){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kami.animator.app.state,(function (p1__22602_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__22602_SHARP_,new cljs.core.Keyword(null,"timeline","timeline",192903161),tl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"dirty","dirty",729553281)], 0)),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,tl),new cljs.core.Keyword(null,"revision","revision",-1350113114),cljs.core.inc);
}));

return kami.animator.app.update_ui_BANG_();
});
kami.animator.app.add_key_BANG_ = (function kami$animator$app$add_key_BANG_(){
var target = new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
var time = new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(kami.animation.evaluate(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),time),target,(0));
var existing = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22604_SHARP_){
return (Math.abs((new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(p1__22604_SHARP_) - time)) < 1.0E-6);
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
var G__22619_22751 = performance.now();
(kami.animator.app.tick_BANG_.cljs$core$IFn$_invoke$arity$1 ? kami.animator.app.tick_BANG_.cljs$core$IFn$_invoke$arity$1(G__22619_22751) : kami.animator.app.tick_BANG_.call(null, G__22619_22751));
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
var tag = (function (){var G__22622 = target;
var G__22622__$1 = (((G__22622 == null))?null:G__22622.tagName);
if((G__22622__$1 == null)){
return null;
} else {
return G__22622__$1.toLowerCase();
}
})();
var or__5002__auto__ = (function (){var fexpr__22623 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["select",null,"input",null,"textarea",null], null), null);
return (fexpr__22623.cljs$core$IFn$_invoke$arity$1 ? fexpr__22623.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__22623.call(null, tag));
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
var fexpr__22624 = new cljs.core.PersistentArrayMap(null, 3, ["i",new cljs.core.Keyword(null,"add-key","add-key",909996182),"x",new cljs.core.Keyword(null,"delete-key","delete-key",1385635171)," ",new cljs.core.Keyword(null,"play","play",-580418022)], null);
return (fexpr__22624.cljs$core$IFn$_invoke$arity$1 ? fexpr__22624.cljs$core$IFn$_invoke$arity$1(key) : fexpr__22624.call(null, key));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(profile,new cljs.core.Keyword(null,"max","max",61366548))){
var fexpr__22625 = new cljs.core.PersistentArrayMap(null, 2, ["k",new cljs.core.Keyword(null,"add-key","add-key",909996182),"/",new cljs.core.Keyword(null,"play","play",-580418022)], null);
return (fexpr__22625.cljs$core$IFn$_invoke$arity$1 ? fexpr__22625.cljs$core$IFn$_invoke$arity$1(key) : fexpr__22625.call(null, key));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(profile,new cljs.core.Keyword(null,"c4d","c4d",-1613090238))){
var fexpr__22627 = new cljs.core.PersistentArrayMap(null, 2, ["f9",new cljs.core.Keyword(null,"add-key","add-key",909996182),"f8",new cljs.core.Keyword(null,"play","play",-580418022)], null);
return (fexpr__22627.cljs$core$IFn$_invoke$arity$1 ? fexpr__22627.cljs$core$IFn$_invoke$arity$1(key) : fexpr__22627.call(null, key));
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
var G__22628 = command;
var G__22628__$1 = (((G__22628 instanceof cljs.core.Keyword))?G__22628.fqn:null);
switch (G__22628__$1) {
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
return kami.animator.app.set_time_BANG_((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)) + ((1) / (24))));

break;
case "previous-frame":
return kami.animator.app.set_time_BANG_((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)) - ((1) / (24))));

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
var map__22630 = cljs.core.deref(kami.animator.app.state);
var map__22630__$1 = cljs.core.__destructure_map(map__22630);
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22630__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
var project_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22630__$1,new cljs.core.Keyword(null,"project-name","project-name",1486861539));
var timeline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22630__$1,new cljs.core.Keyword(null,"timeline","timeline",192903161));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22630__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var active_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22630__$1,new cljs.core.Keyword(null,"active-target","active-target",-904731712));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22630__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22630__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
return kami.animator.project.document(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),project_id,new cljs.core.Keyword(null,"name","name",1843675177),project_name,new cljs.core.Keyword(null,"timeline","timeline",192903161),timeline,new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"active-target","active-target",-904731712),active_target,new cljs.core.Keyword(null,"selected","selected",574897764),selected,new cljs.core.Keyword(null,"profile","profile",-545963874),profile], null)], null));
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
})(),new cljs.core.Keyword(null,"active-target","active-target",-904731712),target,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(editor),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$2(editor,new cljs.core.Keyword(null,"maya","maya",-2121079392)),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false,new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tl], null),new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"saved","saved",288760660)], 0));

(document.getElementById("profile").value = cljs.core.name(new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$2(editor,new cljs.core.Keyword(null,"maya","maya",-2121079392))));

return kami.animator.app.update_ui_BANG_();
});
kami.animator.app.load_project_BANG_ = (function kami$animator$app$load_project_BANG_(){
var temp__5825__auto__ = localStorage.getItem(kami.animator.app.storage_key);
if(cljs.core.truth_(temp__5825__auto__)){
var data = temp__5825__auto__;
try{return kami.animator.app.apply_project_BANG_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(data));
}catch (e22634){var _ = e22634;
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
return file.text().then((function (p1__22636_SHARP_){
return kami.animator.app.apply_project_BANG_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__22636_SHARP_));
}));
} else {
return null;
}
});
kami.animator.app.draw_BANG_ = (function kami$animator$app$draw_BANG_(){
var temp__5825__auto___22753 = cljs.core.deref(kami.animator.app.viewport);
if(cljs.core.truth_(temp__5825__auto___22753)){
var map__22641_22754 = temp__5825__auto___22753;
var map__22641_22755__$1 = cljs.core.__destructure_map(map__22641_22754);
var v_22756 = map__22641_22755__$1;
var buffers_22757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22641_22755__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
var values_22758 = kami.animation.evaluate(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)));
kami.webgpu.mesh.render_frame_BANG_.cljs$core$IFn$_invoke$arity$6(v_22756,buffers_22757,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),2.8,(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.45,0.65,1.0], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"translation","translation",-701621547),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__22637_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(values_22758,p1__22637_SHARP_,(0));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),kami.animator.app.channels)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__22638_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(values_22758,p1__22638_SHARP_,(0));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),kami.animator.app.channels))),new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__22639_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(values_22758,p1__22639_SHARP_,(1));
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

document.getElementById("scrub").addEventListener("input",(function (p1__22643_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"time","time",1385887882),parseFloat(p1__22643_SHARP_.target.value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false], 0));

return kami.animator.app.update_ui_BANG_();
}));

var seq__22652_22760 = cljs.core.seq(kami.animator.app.channels);
var chunk__22653_22761 = null;
var count__22654_22762 = (0);
var i__22655_22763 = (0);
while(true){
if((i__22655_22763 < count__22654_22762)){
var target_22764 = chunk__22653_22761.cljs$core$IIndexed$_nth$arity$2(null, i__22655_22763);
document.getElementById(["channel-",cljs.core.name(target_22764)].join('')).addEventListener("click",((function (seq__22652_22760,chunk__22653_22761,count__22654_22762,i__22655_22763,target_22764,canvas){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"active-target","active-target",-904731712),target_22764,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected","selected",574897764),null], 0));

return kami.animator.app.update_ui_BANG_();
});})(seq__22652_22760,chunk__22653_22761,count__22654_22762,i__22655_22763,target_22764,canvas))
);


var G__22765 = seq__22652_22760;
var G__22766 = chunk__22653_22761;
var G__22767 = count__22654_22762;
var G__22768 = (i__22655_22763 + (1));
seq__22652_22760 = G__22765;
chunk__22653_22761 = G__22766;
count__22654_22762 = G__22767;
i__22655_22763 = G__22768;
continue;
} else {
var temp__5825__auto___22769 = cljs.core.seq(seq__22652_22760);
if(temp__5825__auto___22769){
var seq__22652_22770__$1 = temp__5825__auto___22769;
if(cljs.core.chunked_seq_QMARK_(seq__22652_22770__$1)){
var c__5525__auto___22771 = cljs.core.chunk_first(seq__22652_22770__$1);
var G__22772 = cljs.core.chunk_rest(seq__22652_22770__$1);
var G__22773 = c__5525__auto___22771;
var G__22774 = cljs.core.count(c__5525__auto___22771);
var G__22775 = (0);
seq__22652_22760 = G__22772;
chunk__22653_22761 = G__22773;
count__22654_22762 = G__22774;
i__22655_22763 = G__22775;
continue;
} else {
var target_22776 = cljs.core.first(seq__22652_22770__$1);
document.getElementById(["channel-",cljs.core.name(target_22776)].join('')).addEventListener("click",((function (seq__22652_22760,chunk__22653_22761,count__22654_22762,i__22655_22763,target_22776,seq__22652_22770__$1,temp__5825__auto___22769,canvas){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"active-target","active-target",-904731712),target_22776,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected","selected",574897764),null], 0));

return kami.animator.app.update_ui_BANG_();
});})(seq__22652_22760,chunk__22653_22761,count__22654_22762,i__22655_22763,target_22776,seq__22652_22770__$1,temp__5825__auto___22769,canvas))
);


var G__22777 = cljs.core.next(seq__22652_22770__$1);
var G__22778 = null;
var G__22779 = (0);
var G__22780 = (0);
seq__22652_22760 = G__22777;
chunk__22653_22761 = G__22778;
count__22654_22762 = G__22779;
i__22655_22763 = G__22780;
continue;
}
} else {
}
}
break;
}

document.getElementById("add-key").addEventListener("click",kami.animator.app.add_key_BANG_);

document.getElementById("delete-key").addEventListener("click",kami.animator.app.delete_key_BANG_);

document.getElementById("profile").addEventListener("change",(function (p1__22644_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__22644_SHARP_.target.value));

return kami.animator.app.update_ui_BANG_();
}));

window.addEventListener("keydown",(function (p1__22645_SHARP_){
if(cljs.core.truth_(kami.animator.app.editable_target_QMARK_(p1__22645_SHARP_))){
return null;
} else {
var temp__5825__auto__ = kami.animator.app.command_for_event(p1__22645_SHARP_);
if(cljs.core.truth_(temp__5825__auto__)){
var command = temp__5825__auto__;
p1__22645_SHARP_.preventDefault();

return kami.animator.app.execute_command_BANG_(command);
} else {
return null;
}
}
}));

document.getElementById("key-time").addEventListener("change",(function (p1__22646_SHARP_){
var temp__5825__auto__ = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return kami.animator.app.commit_BANG_(kami.animation.move_keyframe(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),id,parseFloat(p1__22646_SHARP_.target.value)));
} else {
return null;
}
}));

document.getElementById("key-value").addEventListener("change",(function (p1__22647_SHARP_){
var temp__5825__auto__ = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return kami.animator.app.commit_BANG_(kami.animation.update_keyframe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),id,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keyframe","value","keyframe/value",813467611),parseFloat(p1__22647_SHARP_.target.value)], 0)));
} else {
return null;
}
}));

document.getElementById("interpolation").addEventListener("change",(function (p1__22648_SHARP_){
var temp__5825__auto__ = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return kami.animator.app.commit_BANG_(kami.animation.update_keyframe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),id,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keyframe","interpolation","keyframe/interpolation",1047526581),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__22648_SHARP_.target.value)], 0)));
} else {
return null;
}
}));

var seq__22656_22785 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tangent-in",new cljs.core.Keyword("keyframe","tangent-in","keyframe/tangent-in",-1606835433)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tangent-out",new cljs.core.Keyword("keyframe","tangent-out","keyframe/tangent-out",804934652)], null)], null));
var chunk__22657_22786 = null;
var count__22658_22787 = (0);
var i__22659_22788 = (0);
while(true){
if((i__22659_22788 < count__22658_22787)){
var vec__22666_22789 = chunk__22657_22786.cljs$core$IIndexed$_nth$arity$2(null, i__22659_22788);
var id_22790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22666_22789,(0),null);
var field_22791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22666_22789,(1),null);
document.getElementById(id_22790).addEventListener("change",((function (seq__22656_22785,chunk__22657_22786,count__22658_22787,i__22659_22788,vec__22666_22789,id_22790,field_22791,canvas){
return (function (p1__22649_SHARP_){
var temp__5825__auto__ = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
if(cljs.core.truth_(temp__5825__auto__)){
var frame_id = temp__5825__auto__;
return kami.animator.app.commit_BANG_(kami.animation.update_keyframe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),frame_id,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_22791,parseFloat(p1__22649_SHARP_.target.value)], 0)));
} else {
return null;
}
});})(seq__22656_22785,chunk__22657_22786,count__22658_22787,i__22659_22788,vec__22666_22789,id_22790,field_22791,canvas))
);


var G__22792 = seq__22656_22785;
var G__22793 = chunk__22657_22786;
var G__22794 = count__22658_22787;
var G__22795 = (i__22659_22788 + (1));
seq__22656_22785 = G__22792;
chunk__22657_22786 = G__22793;
count__22658_22787 = G__22794;
i__22659_22788 = G__22795;
continue;
} else {
var temp__5825__auto___22796 = cljs.core.seq(seq__22656_22785);
if(temp__5825__auto___22796){
var seq__22656_22797__$1 = temp__5825__auto___22796;
if(cljs.core.chunked_seq_QMARK_(seq__22656_22797__$1)){
var c__5525__auto___22798 = cljs.core.chunk_first(seq__22656_22797__$1);
var G__22799 = cljs.core.chunk_rest(seq__22656_22797__$1);
var G__22800 = c__5525__auto___22798;
var G__22801 = cljs.core.count(c__5525__auto___22798);
var G__22802 = (0);
seq__22656_22785 = G__22799;
chunk__22657_22786 = G__22800;
count__22658_22787 = G__22801;
i__22659_22788 = G__22802;
continue;
} else {
var vec__22669_22803 = cljs.core.first(seq__22656_22797__$1);
var id_22804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22669_22803,(0),null);
var field_22805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22669_22803,(1),null);
document.getElementById(id_22804).addEventListener("change",((function (seq__22656_22785,chunk__22657_22786,count__22658_22787,i__22659_22788,vec__22669_22803,id_22804,field_22805,seq__22656_22797__$1,temp__5825__auto___22796,canvas){
return (function (p1__22649_SHARP_){
var temp__5825__auto____$1 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
if(cljs.core.truth_(temp__5825__auto____$1)){
var frame_id = temp__5825__auto____$1;
return kami.animator.app.commit_BANG_(kami.animation.update_keyframe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),frame_id,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_22805,parseFloat(p1__22649_SHARP_.target.value)], 0)));
} else {
return null;
}
});})(seq__22656_22785,chunk__22657_22786,count__22658_22787,i__22659_22788,vec__22669_22803,id_22804,field_22805,seq__22656_22797__$1,temp__5825__auto___22796,canvas))
);


var G__22808 = cljs.core.next(seq__22656_22797__$1);
var G__22809 = null;
var G__22810 = (0);
var G__22811 = (0);
seq__22656_22785 = G__22808;
chunk__22657_22786 = G__22809;
count__22658_22787 = G__22810;
i__22659_22788 = G__22811;
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

document.getElementById("loop").addEventListener("change",(function (p1__22650_SHARP_){
return kami.animator.app.commit_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword("timeline","loop?","timeline/loop?",-1753211093),p1__22650_SHARP_.target.checked));
}));

var seq__22672_22812 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loop-start",new cljs.core.Keyword("timeline","loop-start","timeline/loop-start",-1139768638)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loop-end",new cljs.core.Keyword("timeline","loop-end","timeline/loop-end",1987742648)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["playback-rate",new cljs.core.Keyword("timeline","playback-rate","timeline/playback-rate",-1892838771)], null)], null));
var chunk__22673_22813 = null;
var count__22674_22814 = (0);
var i__22675_22815 = (0);
while(true){
if((i__22675_22815 < count__22674_22814)){
var vec__22684_22816 = chunk__22673_22813.cljs$core$IIndexed$_nth$arity$2(null, i__22675_22815);
var id_22817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22684_22816,(0),null);
var field_22818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22684_22816,(1),null);
document.getElementById(id_22817).addEventListener("change",((function (seq__22672_22812,chunk__22673_22813,count__22674_22814,i__22675_22815,vec__22684_22816,id_22817,field_22818,canvas){
return (function (p1__22651_SHARP_){
var timeline = new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
var raw = parseFloat(p1__22651_SHARP_.target.value);
var value = (function (){var G__22687 = field_22818;
var G__22687__$1 = (((G__22687 instanceof cljs.core.Keyword))?G__22687.fqn:null);
switch (G__22687__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22687__$1)].join('')));

}
})();
return kami.animator.app.commit_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(timeline,field_22818,value));
});})(seq__22672_22812,chunk__22673_22813,count__22674_22814,i__22675_22815,vec__22684_22816,id_22817,field_22818,canvas))
);


var G__22822 = seq__22672_22812;
var G__22823 = chunk__22673_22813;
var G__22824 = count__22674_22814;
var G__22825 = (i__22675_22815 + (1));
seq__22672_22812 = G__22822;
chunk__22673_22813 = G__22823;
count__22674_22814 = G__22824;
i__22675_22815 = G__22825;
continue;
} else {
var temp__5825__auto___22826 = cljs.core.seq(seq__22672_22812);
if(temp__5825__auto___22826){
var seq__22672_22827__$1 = temp__5825__auto___22826;
if(cljs.core.chunked_seq_QMARK_(seq__22672_22827__$1)){
var c__5525__auto___22829 = cljs.core.chunk_first(seq__22672_22827__$1);
var G__22830 = cljs.core.chunk_rest(seq__22672_22827__$1);
var G__22831 = c__5525__auto___22829;
var G__22832 = cljs.core.count(c__5525__auto___22829);
var G__22833 = (0);
seq__22672_22812 = G__22830;
chunk__22673_22813 = G__22831;
count__22674_22814 = G__22832;
i__22675_22815 = G__22833;
continue;
} else {
var vec__22688_22834 = cljs.core.first(seq__22672_22827__$1);
var id_22835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22688_22834,(0),null);
var field_22836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22688_22834,(1),null);
document.getElementById(id_22835).addEventListener("change",((function (seq__22672_22812,chunk__22673_22813,count__22674_22814,i__22675_22815,vec__22688_22834,id_22835,field_22836,seq__22672_22827__$1,temp__5825__auto___22826,canvas){
return (function (p1__22651_SHARP_){
var timeline = new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
var raw = parseFloat(p1__22651_SHARP_.target.value);
var value = (function (){var G__22691 = field_22836;
var G__22691__$1 = (((G__22691 instanceof cljs.core.Keyword))?G__22691.fqn:null);
switch (G__22691__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22691__$1)].join('')));

}
})();
return kami.animator.app.commit_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(timeline,field_22836,value));
});})(seq__22672_22812,chunk__22673_22813,count__22674_22814,i__22675_22815,vec__22688_22834,id_22835,field_22836,seq__22672_22827__$1,temp__5825__auto___22826,canvas))
);


var G__22838 = cljs.core.next(seq__22672_22827__$1);
var G__22839 = null;
var G__22840 = (0);
var G__22841 = (0);
seq__22672_22812 = G__22838;
chunk__22673_22813 = G__22839;
count__22674_22814 = G__22840;
i__22675_22815 = G__22841;
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
