YUI.add("event-move",function(D){var I=("ontouchstart" in D.config.win&&!D.UA.chrome)?{start:"touchstart",move:"touchmove",end:"touchend"}:{start:"mousedown",move:"mousemove",end:"mouseup"},U="start",Z="move",G="end",K="gesture"+Z,A=K+G,H=K+U,X="_msh",L="_mh",T="_meh",O="_dmsh",M="_dmh",B="_dmeh",F="_ms",P="_m",W="minTime",Q="minDistance",R="preventDefault",S="ownerDocument",N="nodeType",J=function(d,b,c){var Y=(c)?4:3,a=(b.length>Y)?D.merge(b.splice(Y,1)[0]):{};if(!(R in a)){a[R]=d.PREVENT_DEFAULT;}return a;},E=function(a,Y){return Y._extra.root||(a.get(N)===9)?a:a.get(S);},V=function(Y,b,a){Y.pageX=b.pageX;Y.pageY=b.pageY;Y.screenX=b.screenX;Y.screenY=b.screenY;Y.clientX=b.clientX;Y.clientY=b.clientY;Y.target=b.target||Y.target;Y.currentTarget=b.currentTarget||Y.currentTarget;Y.button=(a&&a.button)||1;},C=D.Event.define;C(H,{on:function(a,Y,b){Y[X]=a.on(I[U],this._onStart,this,a,Y,b);},delegate:function(b,a,d,Y){var c=this;a[O]=b.delegate(I[U],function(f){c._onStart(f,b,a,d,true);},Y);},detachDelegate:function(b,a,d,Y){var c=a[O];if(c){c.detach();a[O]=null;}},detach:function(a,Y,c){var b=Y[X];if(b){b.detach();Y[X]=null;}},processArgs:function(Y,a){var b=J(this,Y,a);if(!(W in b)){b[W]=this.MIN_TIME;}if(!(Q in b)){b[Q]=this.MIN_DISTANCE;}return b;},_onStart:function(g,a,m,Y,i){if(i){a=g.currentTarget;}var b=m._extra,l=true,c=b[W],k=b[Q],d=b.button,f=b[R],j=E(a,m),h;if(g.touches){if(g.touches.length===1){V(g,g.touches[0],b);}else{l=false;}}else{l=(d===undefined)||(d===g.button);}if(l){if(f){if(!f.call||f(g)){g.preventDefault();}}if(c===0||k===0){this._start(g,a,Y,b);}else{h=[g.pageX,g.pageY];if(c>0){b._ht=D.later(c,this,this._start,[g,a,Y,b]);b._hme=j.on(I[G],D.bind(function(){this._cancel(b);},this));}if(k>0){b._hm=j.on(I[Z],D.bind(function(e){if(Math.abs(e.pageX-h[0])>k||Math.abs(e.pageY-h[1])>k){this._start(g,a,Y,b);}},this));}}}},_cancel:function(Y){if(Y._ht){Y._ht.cancel();Y._ht=null;}if(Y._hme){Y._hme.detach();Y._hme=null;}if(Y._hm){Y._hm.detach();Y._hm=null;}},_start:function(b,Y,a,c){if(c){this._cancel(c);}b.type=H;Y.setData(F,b);a.fire(b);},MIN_TIME:0,MIN_DISTANCE:0,PREVENT_DEFAULT:false});C(K,{on:function(b,a,d){var Y=E(b,a),c=Y.on(I[Z],this._onMove,this,b,a,d);a[L]=c;},delegate:function(b,a,d,Y){var c=this;a[M]=b.delegate(I[Z],function(f){c._onMove(f,b,a,d,true);},Y);},detach:function(a,Y,c){var b=Y[L];if(b){b.detach();Y[L]=null;}},detachDelegate:function(b,a,d,Y){var c=a[M];if(c){c.detach();a[M]=null;}},processArgs:function(Y,a){return J(this,Y,a);},_onMove:function(g,d,c,f,b){if(b){d=g.currentTarget;}var Y=c._extra.standAlone||d.getData(F),a=c._extra.preventDefault;if(Y){if(g.touches){if(g.touches.length===1){V(g,g.touches[0]);}else{Y=false;}}if(Y){if(a){if(!a.call||a(g)){g.preventDefault();}}g.type=K;f.fire(g);}}},PREVENT_DEFAULT:false});C(A,{on:function(c,b,d){var a=E(c,b),Y=a.on(I[G],this._onEnd,this,c,b,d);b[T]=Y;},delegate:function(b,a,d,Y){var c=this;a[B]=b.delegate(I[G],function(f){c._onEnd(f,b,a,d,true);},Y);},detachDelegate:function(b,a,d,Y){var c=a[B];if(c){c.detach();a[B]=null;}},detach:function(b,a,c){var Y=a[T];if(Y){Y.detach();a[T]=null;}},processArgs:function(Y,a){return J(this,Y,a);},_onEnd:function(g,d,b,f,a){if(a){d=g.currentTarget;}var c=b._extra.standAlone||d.getData(P)||d.getData(F),Y=b._extra.preventDefault;if(c){if(g.changedTouches){if(g.changedTouches.length===1){V(g,g.changedTouches[0]);}else{c=false;}}if(c){if(Y){if(!Y.call||Y(g)){g.preventDefault();}}g.type=A;f.fire(g);d.clearData(F);d.clearData(P);}}},PREVENT_DEFAULT:false});},"@VERSION@",{requires:["node-base","event-touch","event-synthetic"]});