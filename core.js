/* Pure geometry shared by the capture simulation and its checks. */
(function(root){
 const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
 function segmentDistance(p,a,b){const dx=b.x-a.x,dz=b.z-a.z,t=Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.z-a.z)*dz)/(dx*dx+dz*dz||1)));return Math.hypot(p.x-a.x-t*dx,p.z-a.z-t*dz)}
 function inside(p,poly){let hit=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a.z>p.z)!=(b.z>p.z)&&p.x<(b.x-a.x)*(p.z-a.z)/(b.z-a.z)+a.x)hit=!hit}return hit}
 function area(poly){let n=0;for(let i=0;i<poly.length;i++){const a=poly[i],b=poly[(i+1)%poly.length];n+=a.x*b.z-b.x*a.z}return Math.abs(n)/2}
 const api={distance,segmentDistance,inside,area};root.CaptureCore=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
