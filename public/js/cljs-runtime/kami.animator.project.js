goog.provide('kami.animator.project');
kami.animator.project.current_version = (2);
kami.animator.project.document = (function kami$animator$project$document(p__21658){
var map__21659 = p__21658;
var map__21659__$1 = cljs.core.__destructure_map(map__21659);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var timeline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"timeline","timeline",192903161));
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21659__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("kami","document","kami/document",-1333247185),new cljs.core.Keyword(null,"animator-project","animator-project",-1777679911),new cljs.core.Keyword("kami","version","kami/version",428545552),kami.animator.project.current_version,new cljs.core.Keyword("project","id","project/id",-791740645),(function (){var or__5002__auto__ = id;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "untitled-animation";
}
})(),new cljs.core.Keyword("project","name","project/name",2022968152),(function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "Untitled Animation";
}
})(),new cljs.core.Keyword("project","timeline","project/timeline",-1125219086),timeline,new cljs.core.Keyword("project","editor","project/editor",-1449754765),editor], null);
});
kami.animator.project.migrate = (function kami$animator$project$migrate(value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"animator-project","animator-project",-1777679911),new cljs.core.Keyword("kami","document","kami/document",-1333247185).cljs$core$IFn$_invoke$arity$1(value))){
var G__21663 = new cljs.core.Keyword("kami","version","kami/version",428545552).cljs$core$IFn$_invoke$arity$1(value);
switch (G__21663) {
case (2):
return value;

break;
case (1):
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(value,new cljs.core.Keyword("kami","version","kami/version",428545552),(2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("project","editor","project/editor",-1449754765),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(0),new cljs.core.Keyword(null,"active-target","active-target",-904731712),new cljs.core.Keyword("cube","x","cube/x",2085386470),new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"maya","maya",-2121079392)], null)], 0)),new cljs.core.Keyword("project","version","project/version",132630599));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unsupported Animator project version",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword("kami","version","kami/version",428545552).cljs$core$IFn$_invoke$arity$1(value)], null));

}
} else {
if(cljs.core.truth_(new cljs.core.Keyword("timeline","tracks","timeline/tracks",1673581642).cljs$core$IFn$_invoke$arity$1(value))){
return kami.animator.project.document(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeline","timeline",192903161),value,new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),(0),new cljs.core.Keyword(null,"active-target","active-target",-904731712),(function (){var G__21666 = value;
var G__21666__$1 = (((G__21666 == null))?null:new cljs.core.Keyword("timeline","tracks","timeline/tracks",1673581642).cljs$core$IFn$_invoke$arity$1(G__21666));
var G__21666__$2 = (((G__21666__$1 == null))?null:cljs.core.first(G__21666__$1));
if((G__21666__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("track","target","track/target",481079510).cljs$core$IFn$_invoke$arity$1(G__21666__$2);
}
})(),new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"maya","maya",-2121079392)], null)], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not an Animator project or timeline",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null));

}
}
});
kami.animator.project.valid_QMARK_ = (function kami$animator$project$valid_QMARK_(p){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"animator-project","animator-project",-1777679911),new cljs.core.Keyword("kami","document","kami/document",-1333247185).cljs$core$IFn$_invoke$arity$1(p))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kami.animator.project.current_version,new cljs.core.Keyword("kami","version","kami/version",428545552).cljs$core$IFn$_invoke$arity$1(p))) && (((typeof new cljs.core.Keyword("project","id","project/id",-791740645).cljs$core$IFn$_invoke$arity$1(p) === 'string') && (((typeof new cljs.core.Keyword("project","name","project/name",2022968152).cljs$core$IFn$_invoke$arity$1(p) === 'string') && (((typeof cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("project","timeline","project/timeline",-1125219086),new cljs.core.Keyword("timeline","duration","timeline/duration",-967560823)], null)) === 'number') && (((cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("project","timeline","project/timeline",-1125219086),new cljs.core.Keyword("timeline","tracks","timeline/tracks",1673581642)], null)))) && (cljs.core.map_QMARK_(new cljs.core.Keyword("project","editor","project/editor",-1449754765).cljs$core$IFn$_invoke$arity$1(p))))))))))))));
});
kami.animator.project.open = (function kami$animator$project$open(value){
var p = kami.animator.project.migrate(value);
if(kami.animator.project.valid_QMARK_(p)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid Animator project",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),p], null));
}

return p;
});

//# sourceMappingURL=kami.animator.project.js.map
