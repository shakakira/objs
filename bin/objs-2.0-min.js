var Objs;new function(){Objs=function(o,u,s){var r,p=typeof u,t,q,n;if(typeof o!=d){throw Error(j+o)}if(p==d){if(!b[u]){throw Error(g+u)}u=b[u]}else{if(p=="object"){s=u;u=null}}if(!u&&!s&&b[o]){return b[o]}r=b[o]=function(){var v=arguments.callee;if(!v[f]){if(v[i]){v[i][m]=1;v[i].call(this);delete v[i][m]}if(!v[m]&&v[k][a]){v[k][a].apply(this,arguments)}}};if(u){u[f]=1;r[k]=new u();delete u[f];r[i]=u;r[l]=u[k]}if(s){n=h.slice(0);for(t in s){if(s.hasOwnProperty(t)){n.push(t)}}for(q=0;q<n.length;q++){t=n[q];
r[k][t]=s[t]}}return r};var d="string",l="$super",e="class",i=l+e,k="prototype",a="initialize",c="$Objs$",m=c+"c",f=c+"e",g="Unexistent super"+e+": ",j="Invalid "+e+"path: ",b={},h=["toString","valueOf","toLocaleString"]};