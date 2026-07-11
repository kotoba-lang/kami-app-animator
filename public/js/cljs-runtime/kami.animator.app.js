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
kami.animator.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"active-target","active-target",-904731712),new cljs.core.Keyword(null,"project-name","project-name",1486861539),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"future","future",1877842724),new cljs.core.Keyword(null,"revision","revision",-1350113114),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"frame-snap?","frame-snap?",-1940431763),new cljs.core.Keyword(null,"fps","fps",683533296),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),new cljs.core.Keyword(null,"clipboard","clipboard",398281908),new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"timeline","timeline",192903161),new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword(null,"profile","profile",-545963874)],[new cljs.core.Keyword("cube","x","cube/x",2085386470),"Untitled Animation",null,cljs.core.PersistentVector.EMPTY,(0),(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kami.animator.app.initial], null),true,(24),false,null,new cljs.core.Keyword(null,"clean","clean",41534079),kami.animator.app.initial,"untitled-animation",new cljs.core.Keyword(null,"maya","maya",-2121079392)]));
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

kami.animator.app.active_track = (function kami$animator$app$active_track(){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19997_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword("track","target","track/target",481079510).cljs$core$IFn$_invoke$arity$1(p1__19997_SHARP_));
}),new cljs.core.Keyword("timeline","tracks","timeline/tracks",1673581642).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)))));
});
kami.animator.app.render_graph_BANG_ = (function kami$animator$app$render_graph_BANG_(){
var svg = document.getElementById("curve-graph");
var track = kami.animator.app.active_track();
var duration = new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)));
var sample_count = (65);
var times = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__19998_SHARP_){
return (duration * (p1__19998_SHARP_ / (sample_count - (1))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(sample_count));
var values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__19999_SHARP_){
return kami.animation.sample(track,p1__19999_SHARP_);
}),times);
var key_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("keyframe","value","keyframe/value",813467611),new cljs.core.Keyword("track","keyframes","track/keyframes",-1597879575).cljs$core$IFn$_invoke$arity$1(track));
var min_value = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(values,key_values));
var max_value = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(values,key_values));
var span = (function (){var x__5087__auto__ = 1.0E-6;
var y__5088__auto__ = (max_value - min_value);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var padding = (span * 0.1);
var low = (min_value - padding);
var high = (max_value + padding);
var x = (function (p1__20000_SHARP_){
return ((p1__20000_SHARP_ / duration) * (800));
});
var y = (function (p1__20001_SHARP_){
return (((high - p1__20001_SHARP_) / (high - low)) * (160));
});
var svg_ns = "http://www.w3.org/2000/svg";
(svg.innerHTML = "");

var seq__20002_20231 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(80),(120)], null));
var chunk__20003_20232 = null;
var count__20004_20233 = (0);
var i__20005_20234 = (0);
while(true){
if((i__20005_20234 < count__20004_20233)){
var gy_20235 = chunk__20003_20232.cljs$core$IIndexed$_nth$arity$2(null, i__20005_20234);
var line_20236 = document.createElementNS(svg_ns,"line");
var seq__20038_20237 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x1",(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x2",(800)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y1",gy_20235], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y2",gy_20235], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["class","graph-grid"], null)], null));
var chunk__20039_20238 = null;
var count__20040_20239 = (0);
var i__20041_20240 = (0);
while(true){
if((i__20041_20240 < count__20040_20239)){
var vec__20048_20241 = chunk__20039_20238.cljs$core$IIndexed$_nth$arity$2(null, i__20041_20240);
var attr_20242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20048_20241,(0),null);
var value_20243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20048_20241,(1),null);
line_20236.setAttribute(attr_20242,value_20243);


var G__20244 = seq__20038_20237;
var G__20245 = chunk__20039_20238;
var G__20246 = count__20040_20239;
var G__20247 = (i__20041_20240 + (1));
seq__20038_20237 = G__20244;
chunk__20039_20238 = G__20245;
count__20040_20239 = G__20246;
i__20041_20240 = G__20247;
continue;
} else {
var temp__5825__auto___20248 = cljs.core.seq(seq__20038_20237);
if(temp__5825__auto___20248){
var seq__20038_20249__$1 = temp__5825__auto___20248;
if(cljs.core.chunked_seq_QMARK_(seq__20038_20249__$1)){
var c__5525__auto___20250 = cljs.core.chunk_first(seq__20038_20249__$1);
var G__20251 = cljs.core.chunk_rest(seq__20038_20249__$1);
var G__20252 = c__5525__auto___20250;
var G__20253 = cljs.core.count(c__5525__auto___20250);
var G__20254 = (0);
seq__20038_20237 = G__20251;
chunk__20039_20238 = G__20252;
count__20040_20239 = G__20253;
i__20041_20240 = G__20254;
continue;
} else {
var vec__20051_20255 = cljs.core.first(seq__20038_20249__$1);
var attr_20256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20051_20255,(0),null);
var value_20257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20051_20255,(1),null);
line_20236.setAttribute(attr_20256,value_20257);


var G__20258 = cljs.core.next(seq__20038_20249__$1);
var G__20259 = null;
var G__20260 = (0);
var G__20261 = (0);
seq__20038_20237 = G__20258;
chunk__20039_20238 = G__20259;
count__20040_20239 = G__20260;
i__20041_20240 = G__20261;
continue;
}
} else {
}
}
break;
}

svg.appendChild(line_20236);


var G__20262 = seq__20002_20231;
var G__20263 = chunk__20003_20232;
var G__20264 = count__20004_20233;
var G__20265 = (i__20005_20234 + (1));
seq__20002_20231 = G__20262;
chunk__20003_20232 = G__20263;
count__20004_20233 = G__20264;
i__20005_20234 = G__20265;
continue;
} else {
var temp__5825__auto___20266 = cljs.core.seq(seq__20002_20231);
if(temp__5825__auto___20266){
var seq__20002_20267__$1 = temp__5825__auto___20266;
if(cljs.core.chunked_seq_QMARK_(seq__20002_20267__$1)){
var c__5525__auto___20268 = cljs.core.chunk_first(seq__20002_20267__$1);
var G__20269 = cljs.core.chunk_rest(seq__20002_20267__$1);
var G__20270 = c__5525__auto___20268;
var G__20271 = cljs.core.count(c__5525__auto___20268);
var G__20272 = (0);
seq__20002_20231 = G__20269;
chunk__20003_20232 = G__20270;
count__20004_20233 = G__20271;
i__20005_20234 = G__20272;
continue;
} else {
var gy_20273 = cljs.core.first(seq__20002_20267__$1);
var line_20274 = document.createElementNS(svg_ns,"line");
var seq__20054_20275 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x1",(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x2",(800)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y1",gy_20273], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y2",gy_20273], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["class","graph-grid"], null)], null));
var chunk__20055_20276 = null;
var count__20056_20277 = (0);
var i__20057_20278 = (0);
while(true){
if((i__20057_20278 < count__20056_20277)){
var vec__20064_20279 = chunk__20055_20276.cljs$core$IIndexed$_nth$arity$2(null, i__20057_20278);
var attr_20280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20064_20279,(0),null);
var value_20281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20064_20279,(1),null);
line_20274.setAttribute(attr_20280,value_20281);


var G__20282 = seq__20054_20275;
var G__20283 = chunk__20055_20276;
var G__20284 = count__20056_20277;
var G__20285 = (i__20057_20278 + (1));
seq__20054_20275 = G__20282;
chunk__20055_20276 = G__20283;
count__20056_20277 = G__20284;
i__20057_20278 = G__20285;
continue;
} else {
var temp__5825__auto___20286__$1 = cljs.core.seq(seq__20054_20275);
if(temp__5825__auto___20286__$1){
var seq__20054_20287__$1 = temp__5825__auto___20286__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20054_20287__$1)){
var c__5525__auto___20288 = cljs.core.chunk_first(seq__20054_20287__$1);
var G__20289 = cljs.core.chunk_rest(seq__20054_20287__$1);
var G__20290 = c__5525__auto___20288;
var G__20291 = cljs.core.count(c__5525__auto___20288);
var G__20292 = (0);
seq__20054_20275 = G__20289;
chunk__20055_20276 = G__20290;
count__20056_20277 = G__20291;
i__20057_20278 = G__20292;
continue;
} else {
var vec__20067_20293 = cljs.core.first(seq__20054_20287__$1);
var attr_20294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20067_20293,(0),null);
var value_20295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20067_20293,(1),null);
line_20274.setAttribute(attr_20294,value_20295);


var G__20296 = cljs.core.next(seq__20054_20287__$1);
var G__20297 = null;
var G__20298 = (0);
var G__20299 = (0);
seq__20054_20275 = G__20296;
chunk__20055_20276 = G__20297;
count__20056_20277 = G__20298;
i__20057_20278 = G__20299;
continue;
}
} else {
}
}
break;
}

svg.appendChild(line_20274);


var G__20300 = cljs.core.next(seq__20002_20267__$1);
var G__20301 = null;
var G__20302 = (0);
var G__20303 = (0);
seq__20002_20231 = G__20300;
chunk__20003_20232 = G__20301;
count__20004_20233 = G__20302;
i__20005_20234 = G__20303;
continue;
}
} else {
}
}
break;
}

var path_20304 = document.createElementNS(svg_ns,"polyline");
path_20304.setAttribute("class","curve-path");

path_20304.setAttribute("points",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (t,value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x(t)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y(value))].join('');
}),times,values)));

svg.appendChild(path_20304);

var seq__20070 = cljs.core.seq(new cljs.core.Keyword("track","keyframes","track/keyframes",-1597879575).cljs$core$IFn$_invoke$arity$1(track));
var chunk__20071 = null;
var count__20072 = (0);
var i__20073 = (0);
while(true){
if((i__20073 < count__20072)){
var k = chunk__20071.cljs$core$IIndexed$_nth$arity$2(null, i__20073);
var circle_20305 = document.createElementNS(svg_ns,"circle");
var seq__20106_20306 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cx",x(new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(k))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cy",y(new cljs.core.Keyword("keyframe","value","keyframe/value",813467611).cljs$core$IFn$_invoke$arity$1(k))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r",(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["class",["graph-key",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state))))?" selected":null)].join('')], null)], null));
var chunk__20107_20307 = null;
var count__20108_20308 = (0);
var i__20109_20309 = (0);
while(true){
if((i__20109_20309 < count__20108_20308)){
var vec__20116_20310 = chunk__20107_20307.cljs$core$IIndexed$_nth$arity$2(null, i__20109_20309);
var attr_20311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20116_20310,(0),null);
var value_20312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20116_20310,(1),null);
circle_20305.setAttribute(attr_20311,value_20312);


var G__20313 = seq__20106_20306;
var G__20314 = chunk__20107_20307;
var G__20315 = count__20108_20308;
var G__20316 = (i__20109_20309 + (1));
seq__20106_20306 = G__20313;
chunk__20107_20307 = G__20314;
count__20108_20308 = G__20315;
i__20109_20309 = G__20316;
continue;
} else {
var temp__5825__auto___20317 = cljs.core.seq(seq__20106_20306);
if(temp__5825__auto___20317){
var seq__20106_20318__$1 = temp__5825__auto___20317;
if(cljs.core.chunked_seq_QMARK_(seq__20106_20318__$1)){
var c__5525__auto___20319 = cljs.core.chunk_first(seq__20106_20318__$1);
var G__20320 = cljs.core.chunk_rest(seq__20106_20318__$1);
var G__20321 = c__5525__auto___20319;
var G__20322 = cljs.core.count(c__5525__auto___20319);
var G__20323 = (0);
seq__20106_20306 = G__20320;
chunk__20107_20307 = G__20321;
count__20108_20308 = G__20322;
i__20109_20309 = G__20323;
continue;
} else {
var vec__20119_20324 = cljs.core.first(seq__20106_20318__$1);
var attr_20325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20119_20324,(0),null);
var value_20326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20119_20324,(1),null);
circle_20305.setAttribute(attr_20325,value_20326);


var G__20327 = cljs.core.next(seq__20106_20318__$1);
var G__20328 = null;
var G__20329 = (0);
var G__20330 = (0);
seq__20106_20306 = G__20327;
chunk__20107_20307 = G__20328;
count__20108_20308 = G__20329;
i__20109_20309 = G__20330;
continue;
}
} else {
}
}
break;
}

circle_20305.addEventListener("click",((function (seq__20070,chunk__20071,count__20072,i__20073,circle_20305,k,svg,track,duration,sample_count,times,values,key_values,min_value,max_value,span,padding,low,high,x,y,svg_ns){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(k),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(k)], 0));

return (kami.animator.app.update_ui_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.animator.app.update_ui_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.animator.app.update_ui_BANG_.call(null, ));
});})(seq__20070,chunk__20071,count__20072,i__20073,circle_20305,k,svg,track,duration,sample_count,times,values,key_values,min_value,max_value,span,padding,low,high,x,y,svg_ns))
);

svg.appendChild(circle_20305);


var G__20331 = seq__20070;
var G__20332 = chunk__20071;
var G__20333 = count__20072;
var G__20334 = (i__20073 + (1));
seq__20070 = G__20331;
chunk__20071 = G__20332;
count__20072 = G__20333;
i__20073 = G__20334;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__20070);
if(temp__5825__auto__){
var seq__20070__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20070__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20070__$1);
var G__20335 = cljs.core.chunk_rest(seq__20070__$1);
var G__20336 = c__5525__auto__;
var G__20337 = cljs.core.count(c__5525__auto__);
var G__20338 = (0);
seq__20070 = G__20335;
chunk__20071 = G__20336;
count__20072 = G__20337;
i__20073 = G__20338;
continue;
} else {
var k = cljs.core.first(seq__20070__$1);
var circle_20339 = document.createElementNS(svg_ns,"circle");
var seq__20122_20340 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cx",x(new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(k))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cy",y(new cljs.core.Keyword("keyframe","value","keyframe/value",813467611).cljs$core$IFn$_invoke$arity$1(k))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r",(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["class",["graph-key",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state))))?" selected":null)].join('')], null)], null));
var chunk__20123_20341 = null;
var count__20124_20342 = (0);
var i__20125_20343 = (0);
while(true){
if((i__20125_20343 < count__20124_20342)){
var vec__20132_20344 = chunk__20123_20341.cljs$core$IIndexed$_nth$arity$2(null, i__20125_20343);
var attr_20345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20132_20344,(0),null);
var value_20346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20132_20344,(1),null);
circle_20339.setAttribute(attr_20345,value_20346);


var G__20347 = seq__20122_20340;
var G__20348 = chunk__20123_20341;
var G__20349 = count__20124_20342;
var G__20350 = (i__20125_20343 + (1));
seq__20122_20340 = G__20347;
chunk__20123_20341 = G__20348;
count__20124_20342 = G__20349;
i__20125_20343 = G__20350;
continue;
} else {
var temp__5825__auto___20351__$1 = cljs.core.seq(seq__20122_20340);
if(temp__5825__auto___20351__$1){
var seq__20122_20352__$1 = temp__5825__auto___20351__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20122_20352__$1)){
var c__5525__auto___20353 = cljs.core.chunk_first(seq__20122_20352__$1);
var G__20354 = cljs.core.chunk_rest(seq__20122_20352__$1);
var G__20355 = c__5525__auto___20353;
var G__20356 = cljs.core.count(c__5525__auto___20353);
var G__20357 = (0);
seq__20122_20340 = G__20354;
chunk__20123_20341 = G__20355;
count__20124_20342 = G__20356;
i__20125_20343 = G__20357;
continue;
} else {
var vec__20135_20358 = cljs.core.first(seq__20122_20352__$1);
var attr_20359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20135_20358,(0),null);
var value_20360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20135_20358,(1),null);
circle_20339.setAttribute(attr_20359,value_20360);


var G__20361 = cljs.core.next(seq__20122_20352__$1);
var G__20362 = null;
var G__20363 = (0);
var G__20364 = (0);
seq__20122_20340 = G__20361;
chunk__20123_20341 = G__20362;
count__20124_20342 = G__20363;
i__20125_20343 = G__20364;
continue;
}
} else {
}
}
break;
}

circle_20339.addEventListener("click",((function (seq__20070,chunk__20071,count__20072,i__20073,circle_20339,k,seq__20070__$1,temp__5825__auto__,svg,track,duration,sample_count,times,values,key_values,min_value,max_value,span,padding,low,high,x,y,svg_ns){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(k),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(k)], 0));

return (kami.animator.app.update_ui_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.animator.app.update_ui_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.animator.app.update_ui_BANG_.call(null, ));
});})(seq__20070,chunk__20071,count__20072,i__20073,circle_20339,k,seq__20070__$1,temp__5825__auto__,svg,track,duration,sample_count,times,values,key_values,min_value,max_value,span,padding,low,high,x,y,svg_ns))
);

svg.appendChild(circle_20339);


var G__20365 = cljs.core.next(seq__20070__$1);
var G__20366 = null;
var G__20367 = (0);
var G__20368 = (0);
seq__20070 = G__20365;
chunk__20071 = G__20366;
count__20072 = G__20367;
i__20073 = G__20368;
continue;
}
} else {
return null;
}
}
break;
}
});
kami.animator.app.render_keys_BANG_ = (function kami$animator$app$render_keys_BANG_(){
var lane = document.getElementById("lane");
var seq__20138_20369 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(lane.querySelectorAll(".key")));
var chunk__20139_20370 = null;
var count__20140_20371 = (0);
var i__20141_20372 = (0);
while(true){
if((i__20141_20372 < count__20140_20371)){
var n_20373 = chunk__20139_20370.cljs$core$IIndexed$_nth$arity$2(null, i__20141_20372);
n_20373.remove();


var G__20374 = seq__20138_20369;
var G__20375 = chunk__20139_20370;
var G__20376 = count__20140_20371;
var G__20377 = (i__20141_20372 + (1));
seq__20138_20369 = G__20374;
chunk__20139_20370 = G__20375;
count__20140_20371 = G__20376;
i__20141_20372 = G__20377;
continue;
} else {
var temp__5825__auto___20378 = cljs.core.seq(seq__20138_20369);
if(temp__5825__auto___20378){
var seq__20138_20379__$1 = temp__5825__auto___20378;
if(cljs.core.chunked_seq_QMARK_(seq__20138_20379__$1)){
var c__5525__auto___20380 = cljs.core.chunk_first(seq__20138_20379__$1);
var G__20381 = cljs.core.chunk_rest(seq__20138_20379__$1);
var G__20382 = c__5525__auto___20380;
var G__20383 = cljs.core.count(c__5525__auto___20380);
var G__20384 = (0);
seq__20138_20369 = G__20381;
chunk__20139_20370 = G__20382;
count__20140_20371 = G__20383;
i__20141_20372 = G__20384;
continue;
} else {
var n_20385 = cljs.core.first(seq__20138_20379__$1);
n_20385.remove();


var G__20386 = cljs.core.next(seq__20138_20379__$1);
var G__20387 = null;
var G__20388 = (0);
var G__20389 = (0);
seq__20138_20369 = G__20386;
chunk__20139_20370 = G__20387;
count__20140_20371 = G__20388;
i__20141_20372 = G__20389;
continue;
}
} else {
}
}
break;
}

var seq__20142 = cljs.core.seq(kami.animator.app.frames.cljs$core$IFn$_invoke$arity$0());
var chunk__20143 = null;
var count__20144 = (0);
var i__20145 = (0);
while(true){
if((i__20145 < count__20144)){
var k = chunk__20143.cljs$core$IIndexed$_nth$arity$2(null, i__20145);
var b_20390 = document.createElement("button");
(b_20390.className = ["key",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state))))?" selected":null)].join(''));

(b_20390.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(k) / new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)))))),"%"].join(''));

b_20390.addEventListener("click",((function (seq__20142,chunk__20143,count__20144,i__20145,b_20390,k,lane){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(k));

return (kami.animator.app.update_ui_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.animator.app.update_ui_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.animator.app.update_ui_BANG_.call(null, ));
});})(seq__20142,chunk__20143,count__20144,i__20145,b_20390,k,lane))
);

lane.appendChild(b_20390);


var G__20391 = seq__20142;
var G__20392 = chunk__20143;
var G__20393 = count__20144;
var G__20394 = (i__20145 + (1));
seq__20142 = G__20391;
chunk__20143 = G__20392;
count__20144 = G__20393;
i__20145 = G__20394;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__20142);
if(temp__5825__auto__){
var seq__20142__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20142__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20142__$1);
var G__20395 = cljs.core.chunk_rest(seq__20142__$1);
var G__20396 = c__5525__auto__;
var G__20397 = cljs.core.count(c__5525__auto__);
var G__20398 = (0);
seq__20142 = G__20395;
chunk__20143 = G__20396;
count__20144 = G__20397;
i__20145 = G__20398;
continue;
} else {
var k = cljs.core.first(seq__20142__$1);
var b_20399 = document.createElement("button");
(b_20399.className = ["key",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state))))?" selected":null)].join(''));

(b_20399.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(k) / new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)))))),"%"].join(''));

b_20399.addEventListener("click",((function (seq__20142,chunk__20143,count__20144,i__20145,b_20399,k,seq__20142__$1,temp__5825__auto__,lane){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(k));

return (kami.animator.app.update_ui_BANG_.cljs$core$IFn$_invoke$arity$0 ? kami.animator.app.update_ui_BANG_.cljs$core$IFn$_invoke$arity$0() : kami.animator.app.update_ui_BANG_.call(null, ));
});})(seq__20142,chunk__20143,count__20144,i__20145,b_20399,k,seq__20142__$1,temp__5825__auto__,lane))
);

lane.appendChild(b_20399);


var G__20400 = cljs.core.next(seq__20142__$1);
var G__20401 = null;
var G__20402 = (0);
var G__20403 = (0);
seq__20142 = G__20400;
chunk__20143 = G__20401;
count__20144 = G__20402;
i__20145 = G__20403;
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
var map__20151 = cljs.core.deref(kami.animator.app.state);
var map__20151__$1 = cljs.core.__destructure_map(map__20151);
var timeline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151__$1,new cljs.core.Keyword(null,"timeline","timeline",192903161));
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var active_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151__$1,new cljs.core.Keyword(null,"active-target","active-target",-904731712));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var future = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151__$1,new cljs.core.Keyword(null,"future","future",1877842724));
var revision = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151__$1,new cljs.core.Keyword(null,"revision","revision",-1350113114));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var frame_snap_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151__$1,new cljs.core.Keyword(null,"frame-snap?","frame-snap?",-1940431763));
var fps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151__$1,new cljs.core.Keyword(null,"fps","fps",683533296));
var clipboard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151__$1,new cljs.core.Keyword(null,"clipboard","clipboard",398281908));
var save_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151__$1,new cljs.core.Keyword(null,"save-status","save-status",-2046612873));
var k = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20146_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(p1__20146_SHARP_));
}),kami.animator.app.frames.cljs$core$IFn$_invoke$arity$0()));
(document.getElementById("scrub").value = time);

(document.getElementById("playhead").style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * (time / new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(timeline)))),"%"].join(''));

(document.getElementById("scrub").max = new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(timeline));

(document.getElementById("scrub").step = ((1) / fps));

(document.getElementById("time").textContent = ["Frame ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round((time * fps)))," \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(time.toFixed((3)))," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(timeline).toFixed((3)))," s"].join(''));

(document.getElementById("undo").disabled = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(history__$1)));

(document.getElementById("redo").disabled = cljs.core.empty_QMARK_(future));

(document.getElementById("play").textContent = (cljs.core.truth_(new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)))?"\u275A\u275A Pause":"\u25B6 Play"));

(document.getElementById("profile-hint").textContent = (function (){var G__20152 = profile;
var G__20152__$1 = (((G__20152 instanceof cljs.core.Keyword))?G__20152.fqn:null);
switch (G__20152__$1) {
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

var seq__20153_20405 = cljs.core.seq(kami.animator.app.channels);
var chunk__20154_20406 = null;
var count__20155_20407 = (0);
var i__20156_20408 = (0);
while(true){
if((i__20156_20408 < count__20155_20407)){
var target_20409 = chunk__20154_20406.cljs$core$IIndexed$_nth$arity$2(null, i__20156_20408);
document.getElementById(["channel-",cljs.core.name(target_20409)].join('')).classList.toggle("primary",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_20409,active_target));


var G__20410 = seq__20153_20405;
var G__20411 = chunk__20154_20406;
var G__20412 = count__20155_20407;
var G__20413 = (i__20156_20408 + (1));
seq__20153_20405 = G__20410;
chunk__20154_20406 = G__20411;
count__20155_20407 = G__20412;
i__20156_20408 = G__20413;
continue;
} else {
var temp__5825__auto___20414 = cljs.core.seq(seq__20153_20405);
if(temp__5825__auto___20414){
var seq__20153_20415__$1 = temp__5825__auto___20414;
if(cljs.core.chunked_seq_QMARK_(seq__20153_20415__$1)){
var c__5525__auto___20416 = cljs.core.chunk_first(seq__20153_20415__$1);
var G__20417 = cljs.core.chunk_rest(seq__20153_20415__$1);
var G__20418 = c__5525__auto___20416;
var G__20419 = cljs.core.count(c__5525__auto___20416);
var G__20420 = (0);
seq__20153_20405 = G__20417;
chunk__20154_20406 = G__20418;
count__20155_20407 = G__20419;
i__20156_20408 = G__20420;
continue;
} else {
var target_20421 = cljs.core.first(seq__20153_20415__$1);
document.getElementById(["channel-",cljs.core.name(target_20421)].join('')).classList.toggle("primary",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_20421,active_target));


var G__20422 = cljs.core.next(seq__20153_20415__$1);
var G__20423 = null;
var G__20424 = (0);
var G__20425 = (0);
seq__20153_20405 = G__20422;
chunk__20154_20406 = G__20423;
count__20155_20407 = G__20424;
i__20156_20408 = G__20425;
continue;
}
} else {
}
}
break;
}

(document.getElementById("active-channel").textContent = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20147_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_target,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(p1__20147_SHARP_));
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

(document.getElementById("debug-state").textContent = JSON.stringify(cljs.core.clj__GT_js(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"projectVersion","projectVersion",412999009),new cljs.core.Keyword(null,"keyCount","keyCount",914542082),new cljs.core.Keyword(null,"frameSnap","frameSnap",12666244),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"revision","revision",-1350113114),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"saveStatus","saveStatus",-284043285),new cljs.core.Keyword(null,"trackCount","trackCount",1597528429),new cljs.core.Keyword(null,"fps","fps",683533296),new cljs.core.Keyword(null,"clipboard","clipboard",398281908),new cljs.core.Keyword(null,"activeTarget","activeTarget",1437919092),new cljs.core.Keyword(null,"translation","translation",-701621547),new cljs.core.Keyword(null,"graphSamples","graphSamples",1257913141),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"profile","profile",-545963874)],[kami.animator.project.current_version,cljs.core.count(kami.animator.app.frames.cljs$core$IFn$_invoke$arity$0()),frame_snap_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20149_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(kami.animation.evaluate(timeline,time),p1__20149_SHARP_,(0));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),kami.animator.app.channels))),(function (){var G__20157 = selected;
if((G__20157 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20157);
}
})(),Math.round((time * fps)),revision,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20150_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(kami.animation.evaluate(timeline,time),p1__20150_SHARP_,(1));
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((6),kami.animator.app.channels)),time,cljs.core.name(save_status),cljs.core.count(kami.animator.app.channels),fps,cljs.core.boolean$(clipboard),cljs.core.str.cljs$core$IFn$_invoke$arity$1(active_target),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20148_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(kami.animation.evaluate(timeline,time),p1__20148_SHARP_,(0));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),kami.animator.app.channels)),(65),new cljs.core.Keyword(null,"playing?","playing?",-1884542863).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),cljs.core.name(profile)]))));

kami.animator.app.render_keys_BANG_();

return kami.animator.app.render_graph_BANG_();
});
kami.animator.app.commit_BANG_ = (function kami$animator$app$commit_BANG_(tl){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(kami.animator.app.state,(function (p1__20158_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__20158_SHARP_,new cljs.core.Keyword(null,"timeline","timeline",192903161),tl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"future","future",1877842724),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"dirty","dirty",729553281)], 0)),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,tl),new cljs.core.Keyword(null,"revision","revision",-1350113114),cljs.core.inc);
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
var existing = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20159_SHARP_){
return (Math.abs((new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(p1__20159_SHARP_) - time)) < 1.0E-6);
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
kami.animator.app.selected_key = (function kami$animator$app$selected_key(){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20160_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(p1__20160_SHARP_));
}),kami.animator.app.frames.cljs$core$IFn$_invoke$arity$0()));
});
kami.animator.app.copy_key_BANG_ = (function kami$animator$app$copy_key_BANG_(){
var temp__5825__auto__ = kami.animator.app.selected_key();
if(cljs.core.truth_(temp__5825__auto__)){
var k = temp__5825__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"clipboard","clipboard",398281908),cljs.core.select_keys(k,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keyframe","value","keyframe/value",813467611),new cljs.core.Keyword("keyframe","interpolation","keyframe/interpolation",1047526581),new cljs.core.Keyword("keyframe","tangent-in","keyframe/tangent-in",-1606835433),new cljs.core.Keyword("keyframe","tangent-out","keyframe/tangent-out",804934652),new cljs.core.Keyword("keyframe","broken?","keyframe/broken?",5795835)], null)));

return kami.animator.app.update_ui_BANG_();
} else {
return null;
}
});
kami.animator.app.paste_key_BANG_ = (function kami$animator$app$paste_key_BANG_(){
var temp__5825__auto__ = new cljs.core.Keyword(null,"clipboard","clipboard",398281908).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
if(cljs.core.truth_(temp__5825__auto__)){
var data = temp__5825__auto__;
var target = new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
var time = kami.animator.app.snap_time(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)));
var existing = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20161_SHARP_){
return (Math.abs((new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(p1__20161_SHARP_) - time)) < 1.0E-7);
}),kami.animator.app.frames.cljs$core$IFn$_invoke$arity$0()));
var frame = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kami.animation.keyframe.cljs$core$IFn$_invoke$arity$3(time,new cljs.core.Keyword("keyframe","value","keyframe/value",813467611).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword("keyframe","interpolation","keyframe/interpolation",1047526581).cljs$core$IFn$_invoke$arity$1(data)),data], 0));
if(cljs.core.truth_(existing)){
kami.animator.app.commit_BANG_(kami.animation.update_keyframe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),target,new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(existing),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(existing));
} else {
kami.animator.app.commit_BANG_(kami.animation.add_keyframe(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),target,frame));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(frame));
}

return kami.animator.app.update_ui_BANG_();
} else {
return null;
}
});
kami.animator.app.cut_key_BANG_ = (function kami$animator$app$cut_key_BANG_(){
if(cljs.core.truth_(kami.animator.app.selected_key())){
kami.animator.app.copy_key_BANG_();

return kami.animator.app.delete_key_BANG_();
} else {
return null;
}
});
kami.animator.app.duplicate_key_BANG_ = (function kami$animator$app$duplicate_key_BANG_(){
if(cljs.core.truth_(kami.animator.app.selected_key())){
kami.animator.app.copy_key_BANG_();

var G__20162_20426 = (function (){var x__5090__auto__ = new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)));
var y__5091__auto__ = (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)) + ((1) / new cljs.core.Keyword(null,"fps","fps",683533296).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state))));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
(kami.animator.app.set_time_BANG_.cljs$core$IFn$_invoke$arity$1 ? kami.animator.app.set_time_BANG_.cljs$core$IFn$_invoke$arity$1(G__20162_20426) : kami.animator.app.set_time_BANG_.call(null, G__20162_20426));

return kami.animator.app.paste_key_BANG_();
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
var G__20163_20427 = performance.now();
(kami.animator.app.tick_BANG_.cljs$core$IFn$_invoke$arity$1 ? kami.animator.app.tick_BANG_.cljs$core$IFn$_invoke$arity$1(G__20163_20427) : kami.animator.app.tick_BANG_.call(null, G__20163_20427));
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
var tag = (function (){var G__20164 = target;
var G__20164__$1 = (((G__20164 == null))?null:G__20164.tagName);
if((G__20164__$1 == null)){
return null;
} else {
return G__20164__$1.toLowerCase();
}
})();
var or__5002__auto__ = (function (){var fexpr__20165 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["select",null,"input",null,"textarea",null], null), null);
return (fexpr__20165.cljs$core$IFn$_invoke$arity$1 ? fexpr__20165.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__20165.call(null, tag));
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
if(cljs.core.truth_((function (){var and__5000__auto__ = ctrl;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"c");
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.Keyword(null,"copy-key","copy-key",804638526);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = ctrl;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"x");
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.Keyword(null,"cut-key","cut-key",2081058799);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = ctrl;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"v");
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.Keyword(null,"paste-key","paste-key",1670455180);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = event.shiftKey;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"d");
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.Keyword(null,"duplicate-key","duplicate-key",-387210896);
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
var fexpr__20166 = new cljs.core.PersistentArrayMap(null, 3, ["i",new cljs.core.Keyword(null,"add-key","add-key",909996182),"x",new cljs.core.Keyword(null,"delete-key","delete-key",1385635171)," ",new cljs.core.Keyword(null,"play","play",-580418022)], null);
return (fexpr__20166.cljs$core$IFn$_invoke$arity$1 ? fexpr__20166.cljs$core$IFn$_invoke$arity$1(key) : fexpr__20166.call(null, key));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(profile,new cljs.core.Keyword(null,"max","max",61366548))){
var fexpr__20167 = new cljs.core.PersistentArrayMap(null, 2, ["k",new cljs.core.Keyword(null,"add-key","add-key",909996182),"/",new cljs.core.Keyword(null,"play","play",-580418022)], null);
return (fexpr__20167.cljs$core$IFn$_invoke$arity$1 ? fexpr__20167.cljs$core$IFn$_invoke$arity$1(key) : fexpr__20167.call(null, key));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(profile,new cljs.core.Keyword(null,"c4d","c4d",-1613090238))){
var fexpr__20168 = new cljs.core.PersistentArrayMap(null, 2, ["f9",new cljs.core.Keyword(null,"add-key","add-key",909996182),"f8",new cljs.core.Keyword(null,"play","play",-580418022)], null);
return (fexpr__20168.cljs$core$IFn$_invoke$arity$1 ? fexpr__20168.cljs$core$IFn$_invoke$arity$1(key) : fexpr__20168.call(null, key));
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
}
}
}
}
});
kami.animator.app.execute_command_BANG_ = (function kami$animator$app$execute_command_BANG_(command){
var G__20169 = command;
var G__20169__$1 = (((G__20169 instanceof cljs.core.Keyword))?G__20169.fqn:null);
switch (G__20169__$1) {
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
case "copy-key":
return kami.animator.app.copy_key_BANG_();

break;
case "cut-key":
return kami.animator.app.cut_key_BANG_();

break;
case "paste-key":
return kami.animator.app.paste_key_BANG_();

break;
case "duplicate-key":
return kami.animator.app.duplicate_key_BANG_();

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
var map__20170 = cljs.core.deref(kami.animator.app.state);
var map__20170__$1 = cljs.core.__destructure_map(map__20170);
var timeline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20170__$1,new cljs.core.Keyword(null,"timeline","timeline",192903161));
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20170__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20170__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var active_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20170__$1,new cljs.core.Keyword(null,"active-target","active-target",-904731712));
var project_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20170__$1,new cljs.core.Keyword(null,"project-name","project-name",1486861539));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20170__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20170__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var frame_snap_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20170__$1,new cljs.core.Keyword(null,"frame-snap?","frame-snap?",-1940431763));
var fps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20170__$1,new cljs.core.Keyword(null,"fps","fps",683533296));
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
}catch (e20171){var _ = e20171;
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
return file.text().then((function (p1__20172_SHARP_){
return kami.animator.app.apply_project_BANG_(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__20172_SHARP_));
}));
} else {
return null;
}
});
kami.animator.app.draw_BANG_ = (function kami$animator$app$draw_BANG_(){
var temp__5825__auto___20429 = cljs.core.deref(kami.animator.app.viewport);
if(cljs.core.truth_(temp__5825__auto___20429)){
var map__20176_20430 = temp__5825__auto___20429;
var map__20176_20431__$1 = cljs.core.__destructure_map(map__20176_20430);
var v_20432 = map__20176_20431__$1;
var buffers_20433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20176_20431__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
var values_20434 = kami.animation.evaluate(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)));
kami.webgpu.mesh.render_frame_BANG_.cljs$core$IFn$_invoke$arity$6(v_20432,buffers_20433,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),2.8,(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.45,0.65,1.0], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"translation","translation",-701621547),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20173_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(values_20434,p1__20173_SHARP_,(0));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),kami.animator.app.channels)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20174_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(values_20434,p1__20174_SHARP_,(0));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),kami.animator.app.channels))),new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20175_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(values_20434,p1__20175_SHARP_,(1));
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

document.getElementById("scrub").addEventListener("input",(function (p1__20177_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"time","time",1385887882),parseFloat(p1__20177_SHARP_.target.value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"playing?","playing?",-1884542863),false], 0));

return kami.animator.app.update_ui_BANG_();
}));

document.getElementById("fps").addEventListener("change",(function (p1__20178_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"fps","fps",683533296),parseInt(p1__20178_SHARP_.target.value),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"dirty","dirty",729553281)], 0));

return kami.animator.app.update_ui_BANG_();
}));

document.getElementById("frame-snap").addEventListener("change",(function (p1__20179_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"frame-snap?","frame-snap?",-1940431763),p1__20179_SHARP_.target.checked,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"save-status","save-status",-2046612873),new cljs.core.Keyword(null,"dirty","dirty",729553281)], 0));

return kami.animator.app.update_ui_BANG_();
}));

document.getElementById("duration").addEventListener("change",(function (p1__20180_SHARP_){
var requested = (function (){var x__5087__auto__ = 0.1;
var y__5088__auto__ = parseFloat(p1__20180_SHARP_.target.value);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var latest = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("keyframe","time","keyframe/time",903489080),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("track","keyframes","track/keyframes",-1597879575),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("timeline","tracks","timeline/tracks",1673581642).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)))], 0))));
var duration = (function (){var x__5087__auto__ = requested;
var y__5088__auto__ = latest;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
kami.animator.app.commit_BANG_(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823),duration),new cljs.core.Keyword("timeline","loop-end","timeline/loop-end",1987742648),cljs.core.min,duration));

return (p1__20180_SHARP_.target.value = duration);
}));

var seq__20189_20435 = cljs.core.seq(kami.animator.app.channels);
var chunk__20190_20436 = null;
var count__20191_20437 = (0);
var i__20192_20438 = (0);
while(true){
if((i__20192_20438 < count__20191_20437)){
var target_20439 = chunk__20190_20436.cljs$core$IIndexed$_nth$arity$2(null, i__20192_20438);
document.getElementById(["channel-",cljs.core.name(target_20439)].join('')).addEventListener("click",((function (seq__20189_20435,chunk__20190_20436,count__20191_20437,i__20192_20438,target_20439,canvas){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"active-target","active-target",-904731712),target_20439,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected","selected",574897764),null], 0));

return kami.animator.app.update_ui_BANG_();
});})(seq__20189_20435,chunk__20190_20436,count__20191_20437,i__20192_20438,target_20439,canvas))
);


var G__20440 = seq__20189_20435;
var G__20441 = chunk__20190_20436;
var G__20442 = count__20191_20437;
var G__20443 = (i__20192_20438 + (1));
seq__20189_20435 = G__20440;
chunk__20190_20436 = G__20441;
count__20191_20437 = G__20442;
i__20192_20438 = G__20443;
continue;
} else {
var temp__5825__auto___20444 = cljs.core.seq(seq__20189_20435);
if(temp__5825__auto___20444){
var seq__20189_20445__$1 = temp__5825__auto___20444;
if(cljs.core.chunked_seq_QMARK_(seq__20189_20445__$1)){
var c__5525__auto___20446 = cljs.core.chunk_first(seq__20189_20445__$1);
var G__20447 = cljs.core.chunk_rest(seq__20189_20445__$1);
var G__20448 = c__5525__auto___20446;
var G__20449 = cljs.core.count(c__5525__auto___20446);
var G__20450 = (0);
seq__20189_20435 = G__20447;
chunk__20190_20436 = G__20448;
count__20191_20437 = G__20449;
i__20192_20438 = G__20450;
continue;
} else {
var target_20451 = cljs.core.first(seq__20189_20445__$1);
document.getElementById(["channel-",cljs.core.name(target_20451)].join('')).addEventListener("click",((function (seq__20189_20435,chunk__20190_20436,count__20191_20437,i__20192_20438,target_20451,seq__20189_20445__$1,temp__5825__auto___20444,canvas){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"active-target","active-target",-904731712),target_20451,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected","selected",574897764),null], 0));

return kami.animator.app.update_ui_BANG_();
});})(seq__20189_20435,chunk__20190_20436,count__20191_20437,i__20192_20438,target_20451,seq__20189_20445__$1,temp__5825__auto___20444,canvas))
);


var G__20452 = cljs.core.next(seq__20189_20445__$1);
var G__20453 = null;
var G__20454 = (0);
var G__20455 = (0);
seq__20189_20435 = G__20452;
chunk__20190_20436 = G__20453;
count__20191_20437 = G__20454;
i__20192_20438 = G__20455;
continue;
}
} else {
}
}
break;
}

document.getElementById("add-key").addEventListener("click",kami.animator.app.add_key_BANG_);

document.getElementById("delete-key").addEventListener("click",kami.animator.app.delete_key_BANG_);

document.getElementById("copy-key").addEventListener("click",kami.animator.app.copy_key_BANG_);

document.getElementById("paste-key").addEventListener("click",kami.animator.app.paste_key_BANG_);

document.getElementById("duplicate-key").addEventListener("click",kami.animator.app.duplicate_key_BANG_);

document.getElementById("profile").addEventListener("change",(function (p1__20181_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kami.animator.app.state,cljs.core.assoc,new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__20181_SHARP_.target.value));

return kami.animator.app.update_ui_BANG_();
}));

window.addEventListener("keydown",(function (p1__20182_SHARP_){
if(cljs.core.truth_(kami.animator.app.editable_target_QMARK_(p1__20182_SHARP_))){
return null;
} else {
var temp__5825__auto__ = kami.animator.app.command_for_event(p1__20182_SHARP_);
if(cljs.core.truth_(temp__5825__auto__)){
var command = temp__5825__auto__;
p1__20182_SHARP_.preventDefault();

return kami.animator.app.execute_command_BANG_(command);
} else {
return null;
}
}
}));

document.getElementById("key-time").addEventListener("change",(function (p1__20183_SHARP_){
var temp__5825__auto__ = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return kami.animator.app.commit_BANG_(kami.animation.move_keyframe(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),id,kami.animator.app.snap_time(parseFloat(p1__20183_SHARP_.target.value))));
} else {
return null;
}
}));

document.getElementById("key-value").addEventListener("change",(function (p1__20184_SHARP_){
var temp__5825__auto__ = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return kami.animator.app.commit_BANG_(kami.animation.update_keyframe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),id,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keyframe","value","keyframe/value",813467611),parseFloat(p1__20184_SHARP_.target.value)], 0)));
} else {
return null;
}
}));

document.getElementById("interpolation").addEventListener("change",(function (p1__20185_SHARP_){
var temp__5825__auto__ = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return kami.animator.app.commit_BANG_(kami.animation.update_keyframe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),id,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keyframe","interpolation","keyframe/interpolation",1047526581),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__20185_SHARP_.target.value)], 0)));
} else {
return null;
}
}));

var seq__20193_20456 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tangent-in",new cljs.core.Keyword("keyframe","tangent-in","keyframe/tangent-in",-1606835433)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tangent-out",new cljs.core.Keyword("keyframe","tangent-out","keyframe/tangent-out",804934652)], null)], null));
var chunk__20194_20457 = null;
var count__20195_20458 = (0);
var i__20196_20459 = (0);
while(true){
if((i__20196_20459 < count__20195_20458)){
var vec__20203_20460 = chunk__20194_20457.cljs$core$IIndexed$_nth$arity$2(null, i__20196_20459);
var id_20461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20203_20460,(0),null);
var field_20462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20203_20460,(1),null);
document.getElementById(id_20461).addEventListener("change",((function (seq__20193_20456,chunk__20194_20457,count__20195_20458,i__20196_20459,vec__20203_20460,id_20461,field_20462,canvas){
return (function (p1__20186_SHARP_){
var temp__5825__auto__ = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
if(cljs.core.truth_(temp__5825__auto__)){
var frame_id = temp__5825__auto__;
return kami.animator.app.commit_BANG_(kami.animation.update_keyframe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),frame_id,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_20462,parseFloat(p1__20186_SHARP_.target.value)], 0)));
} else {
return null;
}
});})(seq__20193_20456,chunk__20194_20457,count__20195_20458,i__20196_20459,vec__20203_20460,id_20461,field_20462,canvas))
);


var G__20463 = seq__20193_20456;
var G__20464 = chunk__20194_20457;
var G__20465 = count__20195_20458;
var G__20466 = (i__20196_20459 + (1));
seq__20193_20456 = G__20463;
chunk__20194_20457 = G__20464;
count__20195_20458 = G__20465;
i__20196_20459 = G__20466;
continue;
} else {
var temp__5825__auto___20467 = cljs.core.seq(seq__20193_20456);
if(temp__5825__auto___20467){
var seq__20193_20468__$1 = temp__5825__auto___20467;
if(cljs.core.chunked_seq_QMARK_(seq__20193_20468__$1)){
var c__5525__auto___20469 = cljs.core.chunk_first(seq__20193_20468__$1);
var G__20470 = cljs.core.chunk_rest(seq__20193_20468__$1);
var G__20471 = c__5525__auto___20469;
var G__20472 = cljs.core.count(c__5525__auto___20469);
var G__20473 = (0);
seq__20193_20456 = G__20470;
chunk__20194_20457 = G__20471;
count__20195_20458 = G__20472;
i__20196_20459 = G__20473;
continue;
} else {
var vec__20206_20474 = cljs.core.first(seq__20193_20468__$1);
var id_20475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20206_20474,(0),null);
var field_20476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20206_20474,(1),null);
document.getElementById(id_20475).addEventListener("change",((function (seq__20193_20456,chunk__20194_20457,count__20195_20458,i__20196_20459,vec__20206_20474,id_20475,field_20476,seq__20193_20468__$1,temp__5825__auto___20467,canvas){
return (function (p1__20186_SHARP_){
var temp__5825__auto____$1 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
if(cljs.core.truth_(temp__5825__auto____$1)){
var frame_id = temp__5825__auto____$1;
return kami.animator.app.commit_BANG_(kami.animation.update_keyframe.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword(null,"active-target","active-target",-904731712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),frame_id,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_20476,parseFloat(p1__20186_SHARP_.target.value)], 0)));
} else {
return null;
}
});})(seq__20193_20456,chunk__20194_20457,count__20195_20458,i__20196_20459,vec__20206_20474,id_20475,field_20476,seq__20193_20468__$1,temp__5825__auto___20467,canvas))
);


var G__20477 = cljs.core.next(seq__20193_20468__$1);
var G__20478 = null;
var G__20479 = (0);
var G__20480 = (0);
seq__20193_20456 = G__20477;
chunk__20194_20457 = G__20478;
count__20195_20458 = G__20479;
i__20196_20459 = G__20480;
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

document.getElementById("loop").addEventListener("change",(function (p1__20187_SHARP_){
return kami.animator.app.commit_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state)),new cljs.core.Keyword("timeline","loop?","timeline/loop?",-1753211093),p1__20187_SHARP_.target.checked));
}));

var seq__20209_20481 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loop-start",new cljs.core.Keyword("timeline","loop-start","timeline/loop-start",-1139768638)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loop-end",new cljs.core.Keyword("timeline","loop-end","timeline/loop-end",1987742648)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["playback-rate",new cljs.core.Keyword("timeline","playback-rate","timeline/playback-rate",-1892838771)], null)], null));
var chunk__20210_20482 = null;
var count__20211_20483 = (0);
var i__20212_20484 = (0);
while(true){
if((i__20212_20484 < count__20211_20483)){
var vec__20221_20485 = chunk__20210_20482.cljs$core$IIndexed$_nth$arity$2(null, i__20212_20484);
var id_20486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20221_20485,(0),null);
var field_20487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20221_20485,(1),null);
document.getElementById(id_20486).addEventListener("change",((function (seq__20209_20481,chunk__20210_20482,count__20211_20483,i__20212_20484,vec__20221_20485,id_20486,field_20487,canvas){
return (function (p1__20188_SHARP_){
var timeline = new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
var raw = parseFloat(p1__20188_SHARP_.target.value);
var value = (function (){var G__20224 = field_20487;
var G__20224__$1 = (((G__20224 instanceof cljs.core.Keyword))?G__20224.fqn:null);
switch (G__20224__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20224__$1)].join('')));

}
})();
return kami.animator.app.commit_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(timeline,field_20487,value));
});})(seq__20209_20481,chunk__20210_20482,count__20211_20483,i__20212_20484,vec__20221_20485,id_20486,field_20487,canvas))
);


var G__20489 = seq__20209_20481;
var G__20490 = chunk__20210_20482;
var G__20491 = count__20211_20483;
var G__20492 = (i__20212_20484 + (1));
seq__20209_20481 = G__20489;
chunk__20210_20482 = G__20490;
count__20211_20483 = G__20491;
i__20212_20484 = G__20492;
continue;
} else {
var temp__5825__auto___20493 = cljs.core.seq(seq__20209_20481);
if(temp__5825__auto___20493){
var seq__20209_20494__$1 = temp__5825__auto___20493;
if(cljs.core.chunked_seq_QMARK_(seq__20209_20494__$1)){
var c__5525__auto___20495 = cljs.core.chunk_first(seq__20209_20494__$1);
var G__20496 = cljs.core.chunk_rest(seq__20209_20494__$1);
var G__20497 = c__5525__auto___20495;
var G__20498 = cljs.core.count(c__5525__auto___20495);
var G__20499 = (0);
seq__20209_20481 = G__20496;
chunk__20210_20482 = G__20497;
count__20211_20483 = G__20498;
i__20212_20484 = G__20499;
continue;
} else {
var vec__20225_20500 = cljs.core.first(seq__20209_20494__$1);
var id_20501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20225_20500,(0),null);
var field_20502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20225_20500,(1),null);
document.getElementById(id_20501).addEventListener("change",((function (seq__20209_20481,chunk__20210_20482,count__20211_20483,i__20212_20484,vec__20225_20500,id_20501,field_20502,seq__20209_20494__$1,temp__5825__auto___20493,canvas){
return (function (p1__20188_SHARP_){
var timeline = new cljs.core.Keyword(null,"timeline","timeline",192903161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(kami.animator.app.state));
var raw = parseFloat(p1__20188_SHARP_.target.value);
var value = (function (){var G__20228 = field_20502;
var G__20228__$1 = (((G__20228 instanceof cljs.core.Keyword))?G__20228.fqn:null);
switch (G__20228__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20228__$1)].join('')));

}
})();
return kami.animator.app.commit_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(timeline,field_20502,value));
});})(seq__20209_20481,chunk__20210_20482,count__20211_20483,i__20212_20484,vec__20225_20500,id_20501,field_20502,seq__20209_20494__$1,temp__5825__auto___20493,canvas))
);


var G__20504 = cljs.core.next(seq__20209_20494__$1);
var G__20505 = null;
var G__20506 = (0);
var G__20507 = (0);
seq__20209_20481 = G__20504;
chunk__20210_20482 = G__20505;
count__20211_20483 = G__20506;
i__20212_20484 = G__20507;
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
