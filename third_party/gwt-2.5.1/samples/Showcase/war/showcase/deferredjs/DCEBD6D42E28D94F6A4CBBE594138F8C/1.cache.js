function wMb(a){var b,c;b=dlb(a.b.ie(lad),149);if(b==null){c=Vkb(sHb,F1c,1,[mad,nad,oad,pad]);a.b.ke(lad,c);return c}else{return b}}
function xMb(a){var b,c;b=dlb(a.b.ie(qad),149);if(b==null){c=Vkb(sHb,F1c,1,[rad,sad,tad,uad,vad,wad]);a.b.ke(qad,c);return c}else{return b}}
function c8b(a){var b,c,d,e,f,g,i;i=new GLc;DLc(i,new hwc('<b>Select your favorite color:<\/b>'));c=wMb(a.b);for(d=0;d<c.length;++d){b=c[d];e=new CFc(g7c,b);Yrc(e,'cwRadioButton-color-'+b);d==2&&(e.d.disabled=true,Ri(e,Zi(e.db)+v7c,true));DLc(i,e)}DLc(i,new hwc('<br><b>Select your favorite sport:<\/b>'));g=xMb(a.b);for(d=0;d<g.length;++d){f=g[d];e=new CFc('sport',f);Yrc(e,'cwRadioButton-sport-'+STc(f,k3c,$3c));d==2&&Zrc(e,(oSc(),oSc(),nSc));DLc(i,e)}return i}
var lad='cwRadioButtonColors',qad='cwRadioButtonSports';uIb(873,1,s2c);_.mc=function i8b(){ZKb(this.c,c8b(this.b))};f3c(wn)(1);