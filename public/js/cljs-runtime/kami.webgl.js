goog.provide('kami.webgl');
kami.webgl.webgpu_available_QMARK_ = (function kami$webgl$webgpu_available_QMARK_(){
return cljs.core.boolean$((function (){var and__5000__auto__ = navigator;
if(cljs.core.truth_(and__5000__auto__)){
return navigator.gpu;
} else {
return and__5000__auto__;
}
})());
});

/**
 * A WebGL2 rendering context for the canvas (premultiplied alpha, antialias), or nil.
 */
kami.webgl.webgl2_context = (function kami$webgl$webgl2_context(canvas){
return canvas.getContext("webgl2",({"antialias": true, "premultipliedAlpha": true}));
});

/**
 * The best available GPU backend for this browser: :webgpu if WebGPU is present, else :webgl2.
 * Both consume the same render-IR; the caller routes to kami.webgpu or kami.webgl accordingly.
 */
kami.webgl.pick_backend = (function kami$webgl$pick_backend(){
if(kami.webgl.webgpu_available_QMARK_()){
return new cljs.core.Keyword(null,"webgpu","webgpu",-1928709720);
} else {
return new cljs.core.Keyword(null,"webgl2","webgl2",111927467);
}
});

/**
 * The kami.gpu capability tier for a running WebGL2 context (no compute / no storage, instancing
 * via ANGLE_instanced_arrays core in WebGL2).
 */
kami.webgl.caps = (function kami$webgl$caps(_gl){
return kami.gpu.caps_from_device(new cljs.core.Keyword(null,"webgl2","webgl2",111927467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compute","compute",1555393130),false,new cljs.core.Keyword(null,"storage","storage",1867247511),false,new cljs.core.Keyword(null,"instancing","instancing",1383407992),true], null));
});

kami.webgl.compile_shader = (function kami$webgl$compile_shader(gl,kind,src){
var s = gl.createShader(kind);
gl.shaderSource(s,src);

gl.compileShader(s);

if(cljs.core.truth_(gl.getShaderParameter(s,gl.COMPILE_STATUS))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["GLSL compile error:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gl.getShaderInfoLog(s))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),src], null));
}

return s;
});

/**
 * Compile + link a GLSL ES 3.00 program from vertex/fragment source (as produced by bb gen-glsl).
 * Throws with the info log on failure.
 */
kami.webgl.program = (function kami$webgl$program(gl,vsrc,fsrc){
var p = gl.createProgram();
var vs = kami.webgl.compile_shader(gl,gl.VERTEX_SHADER,vsrc);
var fs = kami.webgl.compile_shader(gl,gl.FRAGMENT_SHADER,fsrc);
gl.attachShader(p,vs);

gl.attachShader(p,fs);

gl.linkProgram(p);

if(cljs.core.truth_(gl.getProgramParameter(p,gl.LINK_STATUS))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["GLSL link error:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gl.getProgramInfoLog(p))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

return p;
});

kami.webgl.mesh_vertex_shader = "#version 300 es\nprecision highp float;\nlayout(location=0) in vec3 a_position;\nlayout(location=1) in vec3 a_normal;\nuniform mat4 u_mvp;\nout vec3 v_normal;\nvoid main(){ gl_Position=u_mvp*vec4(a_position,1.0); v_normal=a_normal; }";

kami.webgl.mesh_fragment_shader = "#version 300 es\nprecision highp float;\nin vec3 v_normal;\nuniform vec3 u_color;\nout vec4 out_color;\nvoid main(){ float l=0.25+0.75*max(dot(normalize(v_normal),normalize(vec3(0.4,0.8,0.6))),0.0); out_color=vec4(u_color*l,1.0); }";

/**
 * Initialize the canonical arbitrary-mesh WebGL2 fallback for a canvas.
 */
kami.webgl.init_mesh_viewport_BANG_ = (function kami$webgl$init_mesh_viewport_BANG_(canvas){
var temp__5825__auto__ = kami.webgl.webgl2_context(canvas);
if(cljs.core.truth_(temp__5825__auto__)){
var gl = temp__5825__auto__;
var width = (function (){var x__5087__auto__ = (1);
var y__5088__auto__ = canvas.clientWidth;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var height = (function (){var x__5087__auto__ = (1);
var y__5088__auto__ = canvas.clientHeight;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var prog = kami.webgl.program(gl,kami.webgl.mesh_vertex_shader,kami.webgl.mesh_fragment_shader);
(canvas.width = width);

(canvas.height = height);

gl.enable(gl.DEPTH_TEST);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"backend","backend",-847489124),new cljs.core.Keyword(null,"webgl2","webgl2",111927467),new cljs.core.Keyword(null,"gl","gl",-246422634),gl,new cljs.core.Keyword(null,"program","program",781564284),prog,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null);
} else {
return null;
}
});

/**
 * Upload {:positions :normals :indices} to a fallback viewport.
 */
kami.webgl.upload_mesh_BANG_ = (function kami$webgl$upload_mesh_BANG_(p__21946,p__21947){
var map__21948 = p__21946;
var map__21948__$1 = cljs.core.__destructure_map(map__21948);
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21948__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var map__21949 = p__21947;
var map__21949__$1 = cljs.core.__destructure_map(map__21949);
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21949__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var normals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21949__$1,new cljs.core.Keyword(null,"normals","normals",-1508109067));
var indices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21949__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343));
var vao = gl.createVertexArray();
var vertex_buffer = gl.createBuffer();
var index_buffer = gl.createBuffer();
var vertices = (new Float32Array(cljs.core.clj__GT_js(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,positions,normals)], 0)))));
var index_data = (new Uint32Array(cljs.core.clj__GT_js(indices)));
gl.bindVertexArray(vao);

gl.bindBuffer(gl.ARRAY_BUFFER,vertex_buffer);

gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);

var seq__21950_22245 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(12)], null)], null));
var chunk__21951_22246 = null;
var count__21952_22247 = (0);
var i__21953_22248 = (0);
while(true){
if((i__21953_22248 < count__21952_22247)){
var vec__21960_22249 = chunk__21951_22246.cljs$core$IIndexed$_nth$arity$2(null, i__21953_22248);
var location_22250__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21960_22249,(0),null);
var offset_22251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21960_22249,(1),null);
gl.enableVertexAttribArray(location_22250__$1);

gl.vertexAttribPointer(location_22250__$1,(3),gl.FLOAT,false,(24),offset_22251);


var G__22259 = seq__21950_22245;
var G__22260 = chunk__21951_22246;
var G__22261 = count__21952_22247;
var G__22262 = (i__21953_22248 + (1));
seq__21950_22245 = G__22259;
chunk__21951_22246 = G__22260;
count__21952_22247 = G__22261;
i__21953_22248 = G__22262;
continue;
} else {
var temp__5825__auto___22263 = cljs.core.seq(seq__21950_22245);
if(temp__5825__auto___22263){
var seq__21950_22265__$1 = temp__5825__auto___22263;
if(cljs.core.chunked_seq_QMARK_(seq__21950_22265__$1)){
var c__5525__auto___22266 = cljs.core.chunk_first(seq__21950_22265__$1);
var G__22267 = cljs.core.chunk_rest(seq__21950_22265__$1);
var G__22268 = c__5525__auto___22266;
var G__22269 = cljs.core.count(c__5525__auto___22266);
var G__22270 = (0);
seq__21950_22245 = G__22267;
chunk__21951_22246 = G__22268;
count__21952_22247 = G__22269;
i__21953_22248 = G__22270;
continue;
} else {
var vec__21963_22271 = cljs.core.first(seq__21950_22265__$1);
var location_22272__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21963_22271,(0),null);
var offset_22273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21963_22271,(1),null);
gl.enableVertexAttribArray(location_22272__$1);

gl.vertexAttribPointer(location_22272__$1,(3),gl.FLOAT,false,(24),offset_22273);


var G__22275 = cljs.core.next(seq__21950_22265__$1);
var G__22276 = null;
var G__22277 = (0);
var G__22278 = (0);
seq__21950_22245 = G__22275;
chunk__21951_22246 = G__22276;
count__21952_22247 = G__22277;
i__21953_22248 = G__22278;
continue;
}
} else {
}
}
break;
}

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,index_buffer);

gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,index_data,gl.STATIC_DRAW);

gl.bindVertexArray(null);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vao","vao",-896395446),vao,new cljs.core.Keyword(null,"vertex-buffer","vertex-buffer",-1711520881),vertex_buffer,new cljs.core.Keyword(null,"index-buffer","index-buffer",2003635709),index_buffer,new cljs.core.Keyword(null,"index-count","index-count",-907351532),cljs.core.count(indices)], null);
});

/**
 * Render several fallback mesh draws after one color/depth clear. Each draw
 *   is {:buffers :mvp :color}; MVP is a column-major Float32Array.
 */
kami.webgl.render_mesh_scene_BANG_ = (function kami$webgl$render_mesh_scene_BANG_(p__21970,draws){
var map__21971 = p__21970;
var map__21971__$1 = cljs.core.__destructure_map(map__21971);
var gl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21971__$1,new cljs.core.Keyword(null,"gl","gl",-246422634));
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21971__$1,new cljs.core.Keyword(null,"program","program",781564284));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21971__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21971__$1,new cljs.core.Keyword(null,"height","height",1025178622));
gl.viewport((0),(0),width,height);

gl.clearColor(0.035,0.055,0.1,1.0);

gl.clear((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT));

gl.useProgram(program);

var seq__21972_22285 = cljs.core.seq(draws);
var chunk__21973_22286 = null;
var count__21974_22287 = (0);
var i__21975_22288 = (0);
while(true){
if((i__21975_22288 < count__21974_22287)){
var map__21989_22289 = chunk__21973_22286.cljs$core$IIndexed$_nth$arity$2(null, i__21975_22288);
var map__21989_22290__$1 = cljs.core.__destructure_map(map__21989_22289);
var buffers_22291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21989_22290__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
var mvp_22292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21989_22290__$1,new cljs.core.Keyword(null,"mvp","mvp",-493676132));
var color_22293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21989_22290__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var map__21990_22294 = buffers_22291;
var map__21990_22295__$1 = cljs.core.__destructure_map(map__21990_22294);
var vao_22296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21990_22295__$1,new cljs.core.Keyword(null,"vao","vao",-896395446));
var index_count_22297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21990_22295__$1,new cljs.core.Keyword(null,"index-count","index-count",-907351532));
var vec__21991_22298 = color_22293;
var r_22299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21991_22298,(0),null);
var g_22300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21991_22298,(1),null);
var b_22301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21991_22298,(2),null);
gl.uniformMatrix4fv(gl.getUniformLocation(program,"u_mvp"),false,mvp_22292);

gl.uniform3f(gl.getUniformLocation(program,"u_color"),r_22299,g_22300,b_22301);

gl.bindVertexArray(vao_22296);

gl.drawElements(gl.TRIANGLES,index_count_22297,gl.UNSIGNED_INT,(0));


var G__22310 = seq__21972_22285;
var G__22311 = chunk__21973_22286;
var G__22312 = count__21974_22287;
var G__22313 = (i__21975_22288 + (1));
seq__21972_22285 = G__22310;
chunk__21973_22286 = G__22311;
count__21974_22287 = G__22312;
i__21975_22288 = G__22313;
continue;
} else {
var temp__5825__auto___22315 = cljs.core.seq(seq__21972_22285);
if(temp__5825__auto___22315){
var seq__21972_22316__$1 = temp__5825__auto___22315;
if(cljs.core.chunked_seq_QMARK_(seq__21972_22316__$1)){
var c__5525__auto___22317 = cljs.core.chunk_first(seq__21972_22316__$1);
var G__22320 = cljs.core.chunk_rest(seq__21972_22316__$1);
var G__22321 = c__5525__auto___22317;
var G__22322 = cljs.core.count(c__5525__auto___22317);
var G__22323 = (0);
seq__21972_22285 = G__22320;
chunk__21973_22286 = G__22321;
count__21974_22287 = G__22322;
i__21975_22288 = G__22323;
continue;
} else {
var map__21995_22326 = cljs.core.first(seq__21972_22316__$1);
var map__21995_22327__$1 = cljs.core.__destructure_map(map__21995_22326);
var buffers_22328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21995_22327__$1,new cljs.core.Keyword(null,"buffers","buffers",471409492));
var mvp_22329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21995_22327__$1,new cljs.core.Keyword(null,"mvp","mvp",-493676132));
var color_22330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21995_22327__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var map__21996_22332 = buffers_22328;
var map__21996_22333__$1 = cljs.core.__destructure_map(map__21996_22332);
var vao_22334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21996_22333__$1,new cljs.core.Keyword(null,"vao","vao",-896395446));
var index_count_22335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21996_22333__$1,new cljs.core.Keyword(null,"index-count","index-count",-907351532));
var vec__21997_22336 = color_22330;
var r_22337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21997_22336,(0),null);
var g_22338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21997_22336,(1),null);
var b_22339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21997_22336,(2),null);
gl.uniformMatrix4fv(gl.getUniformLocation(program,"u_mvp"),false,mvp_22329);

gl.uniform3f(gl.getUniformLocation(program,"u_color"),r_22337,g_22338,b_22339);

gl.bindVertexArray(vao_22334);

gl.drawElements(gl.TRIANGLES,index_count_22335,gl.UNSIGNED_INT,(0));


var G__22348 = cljs.core.next(seq__21972_22316__$1);
var G__22349 = null;
var G__22350 = (0);
var G__22351 = (0);
seq__21972_22285 = G__22348;
chunk__21973_22286 = G__22349;
count__21974_22287 = G__22350;
i__21975_22288 = G__22351;
continue;
}
} else {
}
}
break;
}

return gl.bindVertexArray(null);
});

/**
 * Render one fallback mesh frame.
 */
kami.webgl.render_mesh_frame_BANG_ = (function kami$webgl$render_mesh_frame_BANG_(viewport,buffers,mvp,color){
return kami.webgl.render_mesh_scene_BANG_(viewport,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"buffers","buffers",471409492),buffers,new cljs.core.Keyword(null,"mvp","mvp",-493676132),mvp,new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null));
});

kami.webgl.F4 = (4);

/**
 * Build a 2D-sprite draw fn for this WebGL2 context from the generated GLSL (sprite.vert/.frag).
 * The returned `(draw! quad-instances [w h])` packs + uploads the instances and issues one
 * instanced draw — the whole 2D frame in a single call, rendering the SDF shapes on the GPU.
 */
kami.webgl.sprite_renderer = (function kami$webgl$sprite_renderer(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22353 = arguments.length;
var i__5727__auto___22354 = (0);
while(true){
if((i__5727__auto___22354 < len__5726__auto___22353)){
args__5732__auto__.push((arguments[i__5727__auto___22354]));

var G__22355 = (i__5727__auto___22354 + (1));
i__5727__auto___22354 = G__22355;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return kami.webgl.sprite_renderer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(kami.webgl.sprite_renderer.cljs$core$IFn$_invoke$arity$variadic = (function (gl,p__22006){
var vec__22007 = p__22006;
var map__22010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22007,(0),null);
var map__22010__$1 = cljs.core.__destructure_map(map__22010);
var vert = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22010__$1,new cljs.core.Keyword(null,"vert","vert",-360932977),kami.webgl.glsl.sprite_vert);
var frag = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22010__$1,new cljs.core.Keyword(null,"frag","frag",1474317943),kami.webgl.glsl.sprite_frag);
var prog = kami.webgl.program(gl,vert,frag);
var vao = gl.createVertexArray();
var ibuf = gl.createBuffer();
var ublk = gl.getUniformBlockIndex(prog,"U_block_0Vertex");
var ubuf = gl.createBuffer();
gl.bindVertexArray(vao);

gl.bindBuffer(gl.ARRAY_BUFFER,ibuf);

var stride_22360 = (48);
var attrs_22361 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(16)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1),(20)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4),(24)], null)], null);
var seq__22012_22362 = cljs.core.seq(attrs_22361);
var chunk__22013_22363 = null;
var count__22014_22364 = (0);
var i__22015_22365 = (0);
while(true){
if((i__22015_22365 < count__22014_22364)){
var vec__22023_22366 = chunk__22013_22363.cljs$core$IIndexed$_nth$arity$2(null, i__22015_22365);
var loc_22367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22023_22366,(0),null);
var n_22368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22023_22366,(1),null);
var off_22369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22023_22366,(2),null);
gl.enableVertexAttribArray(loc_22367);

gl.vertexAttribPointer(loc_22367,n_22368,gl.FLOAT,false,stride_22360,off_22369);

gl.vertexAttribDivisor(loc_22367,(1));


var G__22370 = seq__22012_22362;
var G__22371 = chunk__22013_22363;
var G__22372 = count__22014_22364;
var G__22373 = (i__22015_22365 + (1));
seq__22012_22362 = G__22370;
chunk__22013_22363 = G__22371;
count__22014_22364 = G__22372;
i__22015_22365 = G__22373;
continue;
} else {
var temp__5825__auto___22374 = cljs.core.seq(seq__22012_22362);
if(temp__5825__auto___22374){
var seq__22012_22375__$1 = temp__5825__auto___22374;
if(cljs.core.chunked_seq_QMARK_(seq__22012_22375__$1)){
var c__5525__auto___22376 = cljs.core.chunk_first(seq__22012_22375__$1);
var G__22377 = cljs.core.chunk_rest(seq__22012_22375__$1);
var G__22378 = c__5525__auto___22376;
var G__22379 = cljs.core.count(c__5525__auto___22376);
var G__22380 = (0);
seq__22012_22362 = G__22377;
chunk__22013_22363 = G__22378;
count__22014_22364 = G__22379;
i__22015_22365 = G__22380;
continue;
} else {
var vec__22028_22381 = cljs.core.first(seq__22012_22375__$1);
var loc_22382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22028_22381,(0),null);
var n_22383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22028_22381,(1),null);
var off_22384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22028_22381,(2),null);
gl.enableVertexAttribArray(loc_22382);

gl.vertexAttribPointer(loc_22382,n_22383,gl.FLOAT,false,stride_22360,off_22384);

gl.vertexAttribDivisor(loc_22382,(1));


var G__22385 = cljs.core.next(seq__22012_22375__$1);
var G__22386 = null;
var G__22387 = (0);
var G__22388 = (0);
seq__22012_22362 = G__22385;
chunk__22013_22363 = G__22386;
count__22014_22364 = G__22387;
i__22015_22365 = G__22388;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ublk,gl.INVALID_INDEX)){
gl.uniformBlockBinding(prog,ublk,(0));
} else {
}

gl.bindVertexArray(null);

return (function kami$webgl$draw_BANG_(quad_instances,p__22031){
var vec__22032 = p__22031;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22032,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22032,(1),null);
var data = (new Float32Array(cljs.core.clj__GT_js(kami.sprite_gpu.pack_instances(quad_instances))));
var n = cljs.core.count(quad_instances);
gl.useProgram(prog);

gl.bindVertexArray(vao);

gl.bindBuffer(gl.ARRAY_BUFFER,ibuf);

gl.bufferData(gl.ARRAY_BUFFER,data,gl.DYNAMIC_DRAW);

gl.bindBuffer(gl.UNIFORM_BUFFER,ubuf);

gl.bufferData(gl.UNIFORM_BUFFER,(new Float32Array([w,h,(0),(0)])),gl.DYNAMIC_DRAW);

gl.bindBufferBase(gl.UNIFORM_BUFFER,(0),ubuf);

gl.enable(gl.BLEND);

gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);

gl.drawArraysInstanced(gl.TRIANGLES,(0),(6),n);

return gl.bindVertexArray(null);
});
}));

(kami.webgl.sprite_renderer.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kami.webgl.sprite_renderer.cljs$lang$applyTo = (function (seq22002){
var G__22003 = cljs.core.first(seq22002);
var seq22002__$1 = cljs.core.next(seq22002);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22003,seq22002__$1);
}));


/**
 * Render a 2D sprite frame on WebGL2: clear, then draw the quad instances (from
 * kami.sprite-gpu/draw-ops->quads) via the sprite pass. The :sprites pass has no kami.gpu
 * :requires, so it runs on this tier; compute passes in a richer graph are dropped by resolve.
 */
kami.webgl.render_2d_BANG_ = (function kami$webgl$render_2d_BANG_(gl,p__22037,quad_instances,p__22038){
var map__22039 = p__22037;
var map__22039__$1 = cljs.core.__destructure_map(map__22039);
var draw_sprites_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22039__$1,new cljs.core.Keyword(null,"draw-sprites!","draw-sprites!",-408140749));
var clear = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22039__$1,new cljs.core.Keyword(null,"clear","clear",1877104959));
var vec__22040 = p__22038;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22040,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22040,(1),null);
gl.viewport((0),(0),w,h);

var vec__22043_22391 = (function (){var or__5002__auto__ = clear;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.04,0.05,0.08,1.0], null);
}
})();
var r_22392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22043_22391,(0),null);
var g_22393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22043_22391,(1),null);
var b_22394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22043_22391,(2),null);
var a_22395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22043_22391,(3),null);
gl.clearColor(r_22392,g_22393,b_22394,a_22395);

gl.clear(gl.COLOR_BUFFER_BIT);

var G__22046 = quad_instances;
var G__22047 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null);
return (draw_sprites_BANG_.cljs$core$IFn$_invoke$arity$2 ? draw_sprites_BANG_.cljs$core$IFn$_invoke$arity$2(G__22046,G__22047) : draw_sprites_BANG_.call(null, G__22046,G__22047));
});

kami.webgl.SHADOW_FS = "#version 300 es\nprecision highp float;\nvoid main() {}";

/**
 * Build a whole-2D-frame draw fn from the embedded GLSL: a sky gradient pass (fullscreen triangle)
 * then the instanced sprite/text quad pass. (render! {:sky {:zenith :ground} :quads [...]} [w h])
 * draws the full kami.scene2d frame on the GPU — the Canvas2D draw-2d! replacement.
 */
kami.webgl.scene_renderer = (function kami$webgl$scene_renderer(gl){
var sky_prog = kami.webgl.program(gl,kami.webgl.glsl.sky_vert,kami.webgl.glsl.sky_frag);
var sky_ub = gl.createBuffer();
var sky_blk = gl.getUniformBlockIndex(sky_prog,"SU_block_0Fragment");
var draw_BANG_ = kami.webgl.sprite_renderer(gl);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sky_blk,gl.INVALID_INDEX)){
gl.uniformBlockBinding(sky_prog,sky_blk,(0));
} else {
}

return (function kami$webgl$scene_renderer_$_render_frame_BANG_(p__22048,p__22049){
var map__22050 = p__22048;
var map__22050__$1 = cljs.core.__destructure_map(map__22050);
var sky = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22050__$1,new cljs.core.Keyword(null,"sky","sky",1271496862));
var quads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22050__$1,new cljs.core.Keyword(null,"quads","quads",1347497505));
var vec__22051 = p__22049;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22051,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22051,(1),null);
gl.viewport((0),(0),w,h);

gl.useProgram(sky_prog);

gl.bindBuffer(gl.UNIFORM_BUFFER,sky_ub);

gl.bufferData(gl.UNIFORM_BUFFER,(new Float32Array(cljs.core.clj__GT_js(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"zenith","zenith",1165769957).cljs$core$IFn$_invoke$arity$1(sky),new cljs.core.Keyword(null,"ground","ground",1193572934).cljs$core$IFn$_invoke$arity$1(sky))))),gl.DYNAMIC_DRAW);

gl.bindBufferBase(gl.UNIFORM_BUFFER,(0),sky_ub);

gl.disable(gl.BLEND);

gl.drawArrays(gl.TRIANGLES,(0),(3));

return draw_BANG_(quads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null));
});
});

kami.webgl.mesh_vao = (function kami$webgl$mesh_vao(gl,vbuf,ibuf,inst){
var vao = gl.createVertexArray();
gl.bindVertexArray(vao);

gl.bindBuffer(gl.ARRAY_BUFFER,vbuf);

var seq__22057_22396 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(12)], null)], null));
var chunk__22058_22397 = null;
var count__22059_22398 = (0);
var i__22060_22399 = (0);
while(true){
if((i__22060_22399 < count__22059_22398)){
var vec__22068_22400 = chunk__22058_22397.cljs$core$IIndexed$_nth$arity$2(null, i__22060_22399);
var loc_22401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22068_22400,(0),null);
var off_22402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22068_22400,(1),null);
gl.enableVertexAttribArray(loc_22401);

gl.vertexAttribPointer(loc_22401,(3),gl.FLOAT,false,(24),off_22402);


var G__22403 = seq__22057_22396;
var G__22404 = chunk__22058_22397;
var G__22405 = count__22059_22398;
var G__22406 = (i__22060_22399 + (1));
seq__22057_22396 = G__22403;
chunk__22058_22397 = G__22404;
count__22059_22398 = G__22405;
i__22060_22399 = G__22406;
continue;
} else {
var temp__5825__auto___22407 = cljs.core.seq(seq__22057_22396);
if(temp__5825__auto___22407){
var seq__22057_22408__$1 = temp__5825__auto___22407;
if(cljs.core.chunked_seq_QMARK_(seq__22057_22408__$1)){
var c__5525__auto___22409 = cljs.core.chunk_first(seq__22057_22408__$1);
var G__22410 = cljs.core.chunk_rest(seq__22057_22408__$1);
var G__22411 = c__5525__auto___22409;
var G__22412 = cljs.core.count(c__5525__auto___22409);
var G__22413 = (0);
seq__22057_22396 = G__22410;
chunk__22058_22397 = G__22411;
count__22059_22398 = G__22412;
i__22060_22399 = G__22413;
continue;
} else {
var vec__22071_22414 = cljs.core.first(seq__22057_22408__$1);
var loc_22415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22071_22414,(0),null);
var off_22416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22071_22414,(1),null);
gl.enableVertexAttribArray(loc_22415);

gl.vertexAttribPointer(loc_22415,(3),gl.FLOAT,false,(24),off_22416);


var G__22420 = cljs.core.next(seq__22057_22408__$1);
var G__22421 = null;
var G__22422 = (0);
var G__22423 = (0);
seq__22057_22396 = G__22420;
chunk__22058_22397 = G__22421;
count__22059_22398 = G__22422;
i__22060_22399 = G__22423;
continue;
}
} else {
}
}
break;
}

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,ibuf);

gl.bindBuffer(gl.ARRAY_BUFFER,inst);

var seq__22076_22424 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(48)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(64)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(80)], null)], null));
var chunk__22077_22425 = null;
var count__22078_22426 = (0);
var i__22079_22427 = (0);
while(true){
if((i__22079_22427 < count__22078_22426)){
var vec__22089_22428 = chunk__22077_22425.cljs$core$IIndexed$_nth$arity$2(null, i__22079_22427);
var loc_22429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22089_22428,(0),null);
var off_22430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22089_22428,(1),null);
gl.enableVertexAttribArray(loc_22429);

gl.vertexAttribPointer(loc_22429,(4),gl.FLOAT,false,(96),off_22430);

gl.vertexAttribDivisor(loc_22429,(1));


var G__22432 = seq__22076_22424;
var G__22433 = chunk__22077_22425;
var G__22434 = count__22078_22426;
var G__22435 = (i__22079_22427 + (1));
seq__22076_22424 = G__22432;
chunk__22077_22425 = G__22433;
count__22078_22426 = G__22434;
i__22079_22427 = G__22435;
continue;
} else {
var temp__5825__auto___22436 = cljs.core.seq(seq__22076_22424);
if(temp__5825__auto___22436){
var seq__22076_22440__$1 = temp__5825__auto___22436;
if(cljs.core.chunked_seq_QMARK_(seq__22076_22440__$1)){
var c__5525__auto___22441 = cljs.core.chunk_first(seq__22076_22440__$1);
var G__22442 = cljs.core.chunk_rest(seq__22076_22440__$1);
var G__22443 = c__5525__auto___22441;
var G__22444 = cljs.core.count(c__5525__auto___22441);
var G__22445 = (0);
seq__22076_22424 = G__22442;
chunk__22077_22425 = G__22443;
count__22078_22426 = G__22444;
i__22079_22427 = G__22445;
continue;
} else {
var vec__22094_22446 = cljs.core.first(seq__22076_22440__$1);
var loc_22447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22094_22446,(0),null);
var off_22448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22094_22446,(1),null);
gl.enableVertexAttribArray(loc_22447);

gl.vertexAttribPointer(loc_22447,(4),gl.FLOAT,false,(96),off_22448);

gl.vertexAttribDivisor(loc_22447,(1));


var G__22449 = cljs.core.next(seq__22076_22440__$1);
var G__22451 = null;
var G__22452 = (0);
var G__22453 = (0);
seq__22076_22424 = G__22449;
chunk__22077_22425 = G__22451;
count__22078_22426 = G__22452;
i__22079_22427 = G__22453;
continue;
}
} else {
}
}
break;
}

gl.bindVertexArray(null);

return vao;
});

kami.webgl.depth_fbo = (function kami$webgl$depth_fbo(gl,size){
var tex = gl.createTexture();
var fbo = gl.createFramebuffer();
gl.bindTexture(gl.TEXTURE_2D,tex);

gl.texImage2D(gl.TEXTURE_2D,(0),gl.DEPTH_COMPONENT32F,size,size,(0),gl.DEPTH_COMPONENT,gl.FLOAT,null);

var seq__22105_22454 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.TEXTURE_MIN_FILTER,gl.LINEAR], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.TEXTURE_MAG_FILTER,gl.LINEAR], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.TEXTURE_COMPARE_MODE,gl.COMPARE_REF_TO_TEXTURE], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.TEXTURE_COMPARE_FUNC,gl.LEQUAL], null)], null));
var chunk__22106_22455 = null;
var count__22107_22456 = (0);
var i__22108_22457 = (0);
while(true){
if((i__22108_22457 < count__22107_22456)){
var vec__22123_22462 = chunk__22106_22455.cljs$core$IIndexed$_nth$arity$2(null, i__22108_22457);
var k_22463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22123_22462,(0),null);
var v_22464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22123_22462,(1),null);
gl.texParameteri(gl.TEXTURE_2D,k_22463,v_22464);


var G__22465 = seq__22105_22454;
var G__22466 = chunk__22106_22455;
var G__22467 = count__22107_22456;
var G__22468 = (i__22108_22457 + (1));
seq__22105_22454 = G__22465;
chunk__22106_22455 = G__22466;
count__22107_22456 = G__22467;
i__22108_22457 = G__22468;
continue;
} else {
var temp__5825__auto___22469 = cljs.core.seq(seq__22105_22454);
if(temp__5825__auto___22469){
var seq__22105_22470__$1 = temp__5825__auto___22469;
if(cljs.core.chunked_seq_QMARK_(seq__22105_22470__$1)){
var c__5525__auto___22471 = cljs.core.chunk_first(seq__22105_22470__$1);
var G__22472 = cljs.core.chunk_rest(seq__22105_22470__$1);
var G__22473 = c__5525__auto___22471;
var G__22474 = cljs.core.count(c__5525__auto___22471);
var G__22475 = (0);
seq__22105_22454 = G__22472;
chunk__22106_22455 = G__22473;
count__22107_22456 = G__22474;
i__22108_22457 = G__22475;
continue;
} else {
var vec__22129_22476 = cljs.core.first(seq__22105_22470__$1);
var k_22477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22129_22476,(0),null);
var v_22478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22129_22476,(1),null);
gl.texParameteri(gl.TEXTURE_2D,k_22477,v_22478);


var G__22479 = cljs.core.next(seq__22105_22470__$1);
var G__22480 = null;
var G__22481 = (0);
var G__22482 = (0);
seq__22105_22454 = G__22479;
chunk__22106_22455 = G__22480;
count__22107_22456 = G__22481;
i__22108_22457 = G__22482;
continue;
}
} else {
}
}
break;
}

gl.bindFramebuffer(gl.FRAMEBUFFER,fbo);

gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.TEXTURE_2D,tex,(0));

gl.bindFramebuffer(gl.FRAMEBUFFER,null);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tex","tex",1307057959),tex,new cljs.core.Keyword(null,"fbo","fbo",265702356),fbo,new cljs.core.Keyword(null,"size","size",1098693007),size], null);
});

/**
 * Build the 3D lit+shadow draw for this WebGL2 context. `shaders` {:lit {:vert :frag} :shadow {:vert}}
 * are the GLSL ES 3.00 from bb gen-glsl. Returns (draw! packed-G mesh instances [w h]) where mesh is
 * {:vbuf :ibuf :count}, instances a Float32Array (24 f32/instance) with metadata :count on the map
 * passed as the 3rd-arg wrapper {:buf :count}.
 */
kami.webgl.lit_renderer = (function kami$webgl$lit_renderer(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22494 = arguments.length;
var i__5727__auto___22495 = (0);
while(true){
if((i__5727__auto___22495 < len__5726__auto___22494)){
args__5732__auto__.push((arguments[i__5727__auto___22495]));

var G__22499 = (i__5727__auto___22495 + (1));
i__5727__auto___22495 = G__22499;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return kami.webgl.lit_renderer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(kami.webgl.lit_renderer.cljs$core$IFn$_invoke$arity$variadic = (function (gl,shaders,p__22165){
var vec__22167 = p__22165;
var map__22170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22167,(0),null);
var map__22170__$1 = cljs.core.__destructure_map(map__22170);
var shadow_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22170__$1,new cljs.core.Keyword(null,"shadow-size","shadow-size",-1197814709),(2048));
var lit_p = kami.webgl.program(gl,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shaders,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lit","lit",-561435380),new cljs.core.Keyword(null,"vert","vert",-360932977)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shaders,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lit","lit",-561435380),new cljs.core.Keyword(null,"frag","frag",1474317943)], null)));
var shd_p = kami.webgl.program(gl,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shaders,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"vert","vert",-360932977)], null)),kami.webgl.SHADOW_FS);
var sm = kami.webgl.depth_fbo(gl,shadow_size);
var gbuf = gl.createBuffer();
var ibuf = gl.createBuffer();
var bind_g = (function (prog,n){
var i = gl.getUniformBlockIndex(prog,n);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,gl.INVALID_INDEX)){
return gl.uniformBlockBinding(prog,i,(0));
} else {
return null;
}
});
bind_g(lit_p,"G_block_0Vertex");

bind_g(lit_p,"G_block_0Fragment");

bind_g(shd_p,"G_block_0Vertex");

return (function kami$webgl$draw_BANG_(packed_G,mesh,instances,p__22174){
var vec__22175 = p__22174;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22175,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22175,(1),null);
gl.bindBuffer(gl.UNIFORM_BUFFER,gbuf);

gl.bufferData(gl.UNIFORM_BUFFER,packed_G,gl.DYNAMIC_DRAW);

gl.bindBufferBase(gl.UNIFORM_BUFFER,(0),gbuf);

gl.bindBuffer(gl.ARRAY_BUFFER,ibuf);

gl.bufferData(gl.ARRAY_BUFFER,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(instances),gl.DYNAMIC_DRAW);

var vao = kami.webgl.mesh_vao(gl,new cljs.core.Keyword(null,"vbuf","vbuf",303950747).cljs$core$IFn$_invoke$arity$1(mesh),new cljs.core.Keyword(null,"ibuf","ibuf",801056512).cljs$core$IFn$_invoke$arity$1(mesh),ibuf);
var n = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(instances);
gl.enable(gl.DEPTH_TEST);

gl.bindFramebuffer(gl.FRAMEBUFFER,new cljs.core.Keyword(null,"fbo","fbo",265702356).cljs$core$IFn$_invoke$arity$1(sm));

gl.viewport((0),(0),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(sm),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(sm));

gl.clear(gl.DEPTH_BUFFER_BIT);

gl.useProgram(shd_p);

gl.bindVertexArray(vao);

gl.drawElementsInstanced(gl.TRIANGLES,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(mesh),gl.UNSIGNED_SHORT,(0),n);

gl.bindFramebuffer(gl.FRAMEBUFFER,null);

gl.viewport((0),(0),w,h);

gl.clear((gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT));

gl.useProgram(lit_p);

gl.activeTexture(gl.TEXTURE0);

gl.bindTexture(gl.TEXTURE_2D,new cljs.core.Keyword(null,"tex","tex",1307057959).cljs$core$IFn$_invoke$arity$1(sm));

gl.uniform1i(gl.getUniformLocation(lit_p,"_group_0_binding_1_fs"),(0));

gl.drawElementsInstanced(gl.TRIANGLES,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(mesh),gl.UNSIGNED_SHORT,(0),n);

return gl.bindVertexArray(null);
});
}));

(kami.webgl.lit_renderer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(kami.webgl.lit_renderer.cljs$lang$applyTo = (function (seq22132){
var G__22133 = cljs.core.first(seq22132);
var seq22132__$1 = cljs.core.next(seq22132);
var G__22134 = cljs.core.first(seq22132__$1);
var seq22132__$2 = cljs.core.next(seq22132__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22133,G__22134,seq22132__$2);
}));


//# sourceMappingURL=kami.webgl.js.map
