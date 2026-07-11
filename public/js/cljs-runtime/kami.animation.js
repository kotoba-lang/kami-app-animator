goog.provide('kami.animation');
kami.animation.keyframe = (function kami$animation$keyframe(var_args){
var G__21574 = arguments.length;
switch (G__21574) {
case 2:
return kami.animation.keyframe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kami.animation.keyframe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return kami.animation.keyframe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kami.animation.keyframe.cljs$core$IFn$_invoke$arity$2 = (function (time,value){
return kami.animation.keyframe.cljs$core$IFn$_invoke$arity$3(time,value,new cljs.core.Keyword(null,"linear","linear",872268697));
}));

(kami.animation.keyframe.cljs$core$IFn$_invoke$arity$3 = (function (time,value,interpolation){
return kami.animation.keyframe.cljs$core$IFn$_invoke$arity$4(time,value,interpolation,cljs.core.PersistentArrayMap.EMPTY);
}));

(kami.animation.keyframe.cljs$core$IFn$_invoke$arity$4 = (function (time,value,interpolation,p__21575){
var map__21576 = p__21575;
var map__21576__$1 = cljs.core.__destructure_map(map__21576);
var tangent_in = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21576__$1,new cljs.core.Keyword(null,"tangent-in","tangent-in",-1023829627),0.0);
var tangent_out = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21576__$1,new cljs.core.Keyword(null,"tangent-out","tangent-out",-1850073618),0.0);
var broken_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21576__$1,new cljs.core.Keyword(null,"broken?","broken?",513311397),false);
if((time < (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("keyframe time cannot be negative",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time","time",1385887882),time], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866),cljs.core.random_uuid(),new cljs.core.Keyword("keyframe","time","keyframe/time",903489080),time,new cljs.core.Keyword("keyframe","value","keyframe/value",813467611),value,new cljs.core.Keyword("keyframe","interpolation","keyframe/interpolation",1047526581),interpolation,new cljs.core.Keyword("keyframe","tangent-in","keyframe/tangent-in",-1606835433),tangent_in,new cljs.core.Keyword("keyframe","tangent-out","keyframe/tangent-out",804934652),tangent_out,new cljs.core.Keyword("keyframe","broken?","keyframe/broken?",5795835),broken_QMARK_], null);
}));

(kami.animation.keyframe.cljs$lang$maxFixedArity = 4);

kami.animation.track = (function kami$animation$track(target,keyframes){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("track","target","track/target",481079510),target,new cljs.core.Keyword("track","keyframes","track/keyframes",-1597879575),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("keyframe","time","keyframe/time",903489080),keyframes))], null);
});
kami.animation.lerp = (function kami$animation$lerp(a,b,t){
return (a + ((b - a) * t));
});
kami.animation.smoothstep = (function kami$animation$smoothstep(t){
return ((t * t) * ((3) - ((2) * t)));
});
kami.animation.hermite = (function kami$animation$hermite(a,b,p,tangent_out,tangent_in,duration){
var p2 = (p * p);
var p3 = (p2 * p);
var h00 = ((((2) * p3) + ((-3) * p2)) + (1));
var h10 = ((p3 + ((-2) * p2)) + p);
var h01 = (((-2) * p3) + ((3) * p2));
var h11 = (p3 - p2);
return ((((h00 * a) + ((h10 * duration) * tangent_out)) + (h01 * b)) + ((h11 * duration) * tangent_in));
});
kami.animation.interpolate = (function kami$animation$interpolate(a,b,p,kind,tangent_out,tangent_in,duration){
var G__21579 = kind;
var G__21579__$1 = (((G__21579 instanceof cljs.core.Keyword))?G__21579.fqn:null);
switch (G__21579__$1) {
case "step":
return a;

break;
case "smooth":
return kami.animation.lerp(a,b,kami.animation.smoothstep(p));

break;
case "bezier":
return kami.animation.hermite(a,b,p,tangent_out,tangent_in,duration);

break;
case "hermite":
return kami.animation.hermite(a,b,p,tangent_out,tangent_in,duration);

break;
default:
return kami.animation.lerp(a,b,p);

}
});
/**
 * Sample a scalar track at time. Values clamp outside its keyframe range.
 */
kami.animation.sample = (function kami$animation$sample(p__21584,time){
var map__21585 = p__21584;
var map__21585__$1 = cljs.core.__destructure_map(map__21585);
var keyframes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21585__$1,new cljs.core.Keyword("track","keyframes","track/keyframes",-1597879575));
if(cljs.core.seq(keyframes)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("track needs a keyframe",cljs.core.PersistentArrayMap.EMPTY);
}

var first_k = cljs.core.first(keyframes);
var last_k = cljs.core.last(keyframes);
if((time <= new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(first_k))){
return new cljs.core.Keyword("keyframe","value","keyframe/value",813467611).cljs$core$IFn$_invoke$arity$1(first_k);
} else {
if((time >= new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(last_k))){
return new cljs.core.Keyword("keyframe","value","keyframe/value",813467611).cljs$core$IFn$_invoke$arity$1(last_k);
} else {
var vec__21588 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__21591){
var vec__21592 = p__21591;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21592,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21592,(1),null);
return (((new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(a) <= time)) && ((time <= new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(b))));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),keyframes)));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21588,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21588,(1),null);
var duration = (new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(a));
var p = ((time - new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(a)) / duration);
return kami.animation.interpolate(new cljs.core.Keyword("keyframe","value","keyframe/value",813467611).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword("keyframe","value","keyframe/value",813467611).cljs$core$IFn$_invoke$arity$1(b),p,new cljs.core.Keyword("keyframe","interpolation","keyframe/interpolation",1047526581).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword("keyframe","tangent-out","keyframe/tangent-out",804934652).cljs$core$IFn$_invoke$arity$2(a,0.0),new cljs.core.Keyword("keyframe","tangent-in","keyframe/tangent-in",-1606835433).cljs$core$IFn$_invoke$arity$2(b,0.0),duration);

}
}
});
kami.animation.timeline = (function kami$animation$timeline(var_args){
var G__21596 = arguments.length;
switch (G__21596) {
case 2:
return kami.animation.timeline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kami.animation.timeline.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kami.animation.timeline.cljs$core$IFn$_invoke$arity$2 = (function (duration,tracks){
return kami.animation.timeline.cljs$core$IFn$_invoke$arity$3(duration,tracks,cljs.core.PersistentArrayMap.EMPTY);
}));

(kami.animation.timeline.cljs$core$IFn$_invoke$arity$3 = (function (duration,tracks,p__21597){
var map__21598 = p__21597;
var map__21598__$1 = cljs.core.__destructure_map(map__21598);
var loop_start = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21598__$1,new cljs.core.Keyword(null,"loop-start","loop-start",937031439),(0));
var loop_end = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21598__$1,new cljs.core.Keyword(null,"loop-end","loop-end",-88908047),duration);
var loop_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21598__$1,new cljs.core.Keyword(null,"loop?","loop?",457687798),false);
var playback_rate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21598__$1,new cljs.core.Keyword(null,"playback-rate","playback-rate",318154446),1.0);
if((((!((duration > (0))))) || ((((loop_start < (0))) || ((((loop_end > duration)) || ((loop_start >= loop_end)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid timeline or loop range",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"duration","duration",1444101068),duration,new cljs.core.Keyword(null,"loop-start","loop-start",937031439),loop_start,new cljs.core.Keyword(null,"loop-end","loop-end",-88908047),loop_end], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823),duration,new cljs.core.Keyword("timeline","tracks","timeline/tracks",1673581642),cljs.core.vec(tracks),new cljs.core.Keyword("timeline","loop-start","timeline/loop-start",-1139768638),loop_start,new cljs.core.Keyword("timeline","loop-end","timeline/loop-end",1987742648),loop_end,new cljs.core.Keyword("timeline","loop?","timeline/loop?",-1753211093),loop_QMARK_,new cljs.core.Keyword("timeline","playback-rate","timeline/playback-rate",-1892838771),playback_rate], null);
}));

(kami.animation.timeline.cljs$lang$maxFixedArity = 3);

kami.animation.evaluate = (function kami$animation$evaluate(timeline,time){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("track","target","track/target",481079510).cljs$core$IFn$_invoke$arity$1(t),kami.animation.sample(t,time)], null);
}),new cljs.core.Keyword("timeline","tracks","timeline/tracks",1673581642).cljs$core$IFn$_invoke$arity$1(timeline)));
});
kami.animation.playback_time = (function kami$animation$playback_time(timeline,elapsed){
var scaled = (elapsed * new cljs.core.Keyword("timeline","playback-rate","timeline/playback-rate",-1892838771).cljs$core$IFn$_invoke$arity$2(timeline,1.0));
var start = new cljs.core.Keyword("timeline","loop-start","timeline/loop-start",-1139768638).cljs$core$IFn$_invoke$arity$2(timeline,(0));
var end = new cljs.core.Keyword("timeline","loop-end","timeline/loop-end",1987742648).cljs$core$IFn$_invoke$arity$2(timeline,new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(timeline));
if(cljs.core.truth_(new cljs.core.Keyword("timeline","loop?","timeline/loop?",-1753211093).cljs$core$IFn$_invoke$arity$1(timeline))){
return (start + cljs.core.mod((scaled - start),(end - start)));
} else {
var x__5087__auto__ = (0);
var y__5088__auto__ = (function (){var x__5090__auto__ = new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823).cljs$core$IFn$_invoke$arity$1(timeline);
var y__5091__auto__ = scaled;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
}
});
kami.animation.evaluate_playback = (function kami$animation$evaluate_playback(timeline,elapsed){
return kami.animation.evaluate(timeline,kami.animation.playback_time(timeline,elapsed));
});
/**
 * Calculate Catmull-Rom-style scalar slopes for a track, preserving key IDs.
 */
kami.animation.auto_tangents = (function kami$animation$auto_tangents(p__21619){
var map__21620 = p__21619;
var map__21620__$1 = cljs.core.__destructure_map(map__21620);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21620__$1,new cljs.core.Keyword("track","target","track/target",481079510));
var keyframes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21620__$1,new cljs.core.Keyword("track","keyframes","track/keyframes",-1597879575));
return kami.animation.track(target,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (i,k){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(keyframes,(function (){var x__5087__auto__ = (0);
var y__5088__auto__ = (i - (1));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(keyframes,(function (){var x__5090__auto__ = (cljs.core.count(keyframes) - (1));
var y__5091__auto__ = (i + (1));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})());
var dt = (new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword("keyframe","time","keyframe/time",903489080).cljs$core$IFn$_invoke$arity$1(a));
var slope = (((dt === (0)))?0.0:((new cljs.core.Keyword("keyframe","value","keyframe/value",813467611).cljs$core$IFn$_invoke$arity$1(b) - new cljs.core.Keyword("keyframe","value","keyframe/value",813467611).cljs$core$IFn$_invoke$arity$1(a)) / dt));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(k,new cljs.core.Keyword("keyframe","tangent-in","keyframe/tangent-in",-1606835433),slope,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keyframe","tangent-out","keyframe/tangent-out",804934652),slope], 0));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(keyframes)),keyframes));
});
kami.animation.add_keyframe = (function kami$animation$add_keyframe(timeline,target,frame){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(timeline,new cljs.core.Keyword("timeline","tracks","timeline/tracks",1673581642),(function (tracks){
var temp__5823__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__21624_SHARP_,p2__21623_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,new cljs.core.Keyword("track","target","track/target",481079510).cljs$core$IFn$_invoke$arity$1(p2__21623_SHARP_))){
return p1__21624_SHARP_;
} else {
return null;
}
}),tracks));
if(cljs.core.truth_(temp__5823__auto__)){
var i = temp__5823__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(tracks,i,(function (p1__21625_SHARP_){
return kami.animation.track(target,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("track","keyframes","track/keyframes",-1597879575).cljs$core$IFn$_invoke$arity$1(p1__21625_SHARP_),frame));
}));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tracks,kami.animation.track(target,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame], null)));
}
}));
});
kami.animation.update_keyframe = (function kami$animation$update_keyframe(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21749 = arguments.length;
var i__5727__auto___21779 = (0);
while(true){
if((i__5727__auto___21779 < len__5726__auto___21749)){
args__5732__auto__.push((arguments[i__5727__auto___21779]));

var G__21780 = (i__5727__auto___21779 + (1));
i__5727__auto___21779 = G__21780;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return kami.animation.update_keyframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(kami.animation.update_keyframe.cljs$core$IFn$_invoke$arity$variadic = (function (timeline,target,frame_id,f,args){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(timeline,new cljs.core.Keyword("timeline","tracks","timeline/tracks",1673581642),(function (tracks){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,new cljs.core.Keyword("track","target","track/target",481079510).cljs$core$IFn$_invoke$arity$1(t))){
return kami.animation.track(target,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21626_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frame_id,new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(p1__21626_SHARP_))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__21626_SHARP_,args);
} else {
return p1__21626_SHARP_;
}
}),new cljs.core.Keyword("track","keyframes","track/keyframes",-1597879575).cljs$core$IFn$_invoke$arity$1(t)));
} else {
return t;
}
}),tracks);
}));
}));

(kami.animation.update_keyframe.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(kami.animation.update_keyframe.cljs$lang$applyTo = (function (seq21627){
var G__21628 = cljs.core.first(seq21627);
var seq21627__$1 = cljs.core.next(seq21627);
var G__21629 = cljs.core.first(seq21627__$1);
var seq21627__$2 = cljs.core.next(seq21627__$1);
var G__21630 = cljs.core.first(seq21627__$2);
var seq21627__$3 = cljs.core.next(seq21627__$2);
var G__21631 = cljs.core.first(seq21627__$3);
var seq21627__$4 = cljs.core.next(seq21627__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21628,G__21629,G__21630,G__21631,seq21627__$4);
}));

kami.animation.move_keyframe = (function kami$animation$move_keyframe(timeline,target,frame_id,time){
return kami.animation.update_keyframe.cljs$core$IFn$_invoke$arity$variadic(timeline,target,frame_id,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("keyframe","time","keyframe/time",903489080),time], 0));
});
kami.animation.delete_keyframe = (function kami$animation$delete_keyframe(timeline,target,frame_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(timeline,new cljs.core.Keyword("timeline","tracks","timeline/tracks",1673581642),(function (tracks){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21643_SHARP_){
return cljs.core.empty_QMARK_(new cljs.core.Keyword("track","keyframes","track/keyframes",-1597879575).cljs$core$IFn$_invoke$arity$1(p1__21643_SHARP_));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,new cljs.core.Keyword("track","target","track/target",481079510).cljs$core$IFn$_invoke$arity$1(t))){
return kami.animation.track(target,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21642_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(frame_id,new cljs.core.Keyword("keyframe","id","keyframe/id",-1946231866).cljs$core$IFn$_invoke$arity$1(p1__21642_SHARP_));
}),new cljs.core.Keyword("track","keyframes","track/keyframes",-1597879575).cljs$core$IFn$_invoke$arity$1(t)));
} else {
return t;
}
}),tracks)));
}));
});

//# sourceMappingURL=kami.animation.js.map
