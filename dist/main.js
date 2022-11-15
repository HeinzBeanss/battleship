(()=>{"use strict";const e=()=>{let e=!1;const t=[],a=[];return{placeShip:(e,t,s,r)=>{if("vertical"===r&&s+e>9);else if(!("horizontal"===r&&t+e>9)){const n=((e,t,a,s)=>{let r=t,n=a;const o=[];for(let t=0;t<e;t+=1){let e=`${r},${n}`;o.push(e),"vertical"===s?e=`${r},${n+=1}`:"horizontal"===s&&(e=`${r+=1},${n}`)}let l=0;return{length:e,shipsCoordinatesArray:o,hits:l,hit:()=>(l+=1,l),position:s,isSunk:(e,t)=>e<=t,sunkStatus:!1}})(e,t,s,r);return a.push(n),a}return"Error"},receiveAttack:(e,s)=>{let r=!1,n="";const o=`${e},${s}`;return t.includes(o)?"Please enter coordinates not previously attacked!":(a.forEach((e=>{e.shipsCoordinatesArray.forEach((t=>!0===r?n:o!==t?(n="attack missed",n):(r=!0,e.hits=e.hit(),e.sunkStatus=e.isSunk(e.length,e.hits),n="ship has been hit!",n)))})),t.push(o),n)},shipArray:a,SquaresHit:t,determineIfConcluded:()=>{let t=0;return a.forEach((e=>{!0===e.sunkStatus&&(t+=1)})),t!==a.length||(e=!0),e},areAllShipsSunk:e}},t=(e,t)=>({playername:e,turn:t});(()=>{const e=document.querySelector(".playerboard"),t=document.createElement("div");t.classList.add("playerboard"),e.appendChild(t);for(let e=9;e>=-1;e-=1){const a=document.createElement("div");if(a.classList.add("row"),-1===e)for(let e=-1;e<10;e+=1)if(-1===e){const e=document.createElement("div");e.classList.add("squarelabel"),a.appendChild(e)}else{const t=document.createElement("div");t.classList.add("squarelabel"),t.textContent=`${e}`,a.appendChild(t)}else for(let t=-1;t<10;t+=1)if(-1===t){const t=document.createElement("div");t.classList.add("squarelabel"),t.textContent=`${e}`,a.appendChild(t)}else{const s=document.createElement("div");s.classList.add("square"),s.setAttribute("id",`${t},${e}`),a.appendChild(s)}t.appendChild(a)}})(),t("Player 1",!0),e(),(()=>{const e=document.querySelector(".computerboard"),t=document.createElement("div");t.classList.add("playerboard"),e.appendChild(t);for(let e=9;e>=-1;e-=1){const a=document.createElement("div");if(a.classList.add("row"),-1===e)for(let e=-1;e<10;e+=1)if(-1===e){const e=document.createElement("div");e.classList.add("squarelabel"),a.appendChild(e)}else{const t=document.createElement("div");t.classList.add("squarelabel"),t.textContent=`${e}`,a.appendChild(t)}else for(let t=-1;t<10;t+=1)if(-1===t){const t=document.createElement("div");t.classList.add("squarelabel"),t.textContent=`${e}`,a.appendChild(t)}else{const s=document.createElement("div");s.classList.add("square"),s.setAttribute("id",`${t},${e}`),a.appendChild(s)}t.appendChild(a)}})();const a=e();t("Computer",!1);for(let e=1;e<7;e+=1){const t=Math.floor(Math.random()*(10-e)),s=Math.floor(Math.random()*(10-e)),r=Math.floor(2*Math.random());let n;1===r?n="vertical":0===r&&(n="horizontal"),a.placeShip(e,t,s,n)}console.log(a.shipArray),document.querySelector(".shipbay").forEach((e=>{shipone.addEventListener("dragstart",(e=>{e.dataTransfer.setData("text/plain",shipone.id),console.log("shiponedragstart"),console.log(e),console.log(e.target),e.offsetX>32?console.log("second square"):e.offsetX<33&&console.log("first square")})),document.querySelectorAll(".square").forEach((e=>{e.addEventListener("dragover",(e=>{e.preventDefault()})),e.addEventListener("drop",(e=>{e.preventDefault(),e.target.classList.add("red");const t=e.dataTransfer.getData("text/plain");console.log(t)}))}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVPLGlCQUNGUCxFQUFFSSxPQUFPNUIsVUFBVUMsSUFBSSxPQUV2QixNQUFNK0IsRUFBaUJSLEVBQUVDLGFBQWFRLFFBQVEsY0FDOUNiLFFBQVFDLElBQUlXLEVBQWUsR0FDNUIsR0FDRixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGVzaWduLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2hpcCA9IChsZW5ndGgsIHhjb29yZCwgeWNvb3JkLCBwb3NpdGlvbikgPT4ge1xuICBsZXQgdGVtcHggPSB4Y29vcmQ7XG4gIGxldCB0ZW1weSA9IHljb29yZDtcblxuICBjb25zdCBzaGlwc0Nvb3JkaW5hdGVzQXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGxldCBzaGlwQ29vcmRpbmF0ZXMgPSBgJHt0ZW1weH0sJHt0ZW1weX1gO1xuICAgIHNoaXBzQ29vcmRpbmF0ZXNBcnJheS5wdXNoKHNoaXBDb29yZGluYXRlcyk7XG5cbiAgICBpZiAocG9zaXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgc2hpcENvb3JkaW5hdGVzID0gYCR7dGVtcHh9LCR7KHRlbXB5ICs9IDEpfWA7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIHNoaXBDb29yZGluYXRlcyA9IGAkeyh0ZW1weCArPSAxKX0sJHt0ZW1weX1gO1xuICAgIH1cbiAgfVxuXG4gIGxldCBoaXRzID0gMDtcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhpdHMgKz0gMTtcbiAgICAvLyBjb25zb2xlLmxvZyhoaXRzKTtcbiAgICByZXR1cm4gaGl0cztcbiAgfTtcblxuICBjb25zdCBzdW5rU3RhdHVzID0gZmFsc2U7XG4gIGNvbnN0IGlzU3VuayA9IChsZW5ndGhPZlNoaXAsIGhpdHNPZlNoaXApID0+IHtcbiAgICBpZiAobGVuZ3RoT2ZTaGlwIDw9IGhpdHNPZlNoaXApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBsZW5ndGgsXG4gICAgc2hpcHNDb29yZGluYXRlc0FycmF5LFxuICAgIGhpdHMsXG4gICAgaGl0LFxuICAgIHBvc2l0aW9uLFxuICAgIGlzU3VuayxcbiAgICBzdW5rU3RhdHVzLFxuICB9O1xufTtcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBsZXQgYXJlQWxsU2hpcHNTdW5rID0gZmFsc2U7XG4gIGNvbnN0IFNxdWFyZXNIaXQgPSBbXTtcbiAgY29uc3Qgc2hpcEFycmF5ID0gW107XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKGxlbmd0aCwgeGNvb3JkLCB5Y29vcmQsIHBvc2l0aW9uKSA9PiB7XG4gICAgaWYgKHBvc2l0aW9uID09PSBcInZlcnRpY2FsXCIgJiYgeWNvb3JkICsgbGVuZ3RoID4gOSkge1xuICAgICAgLy9cbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSBcImhvcml6b250YWxcIiAmJiB4Y29vcmQgKyBsZW5ndGggPiA5KSB7XG4gICAgICAvL1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTT01FSFdFUkUgSEVSRSBBREQgVkFMSURBVElPTiA9IEdPSU5HIFRIUk9VR0ggQUxMIFRIRSBDT09SRFMgT0YgVEhFIFBSRVZJT1VTIFNISVBTIEFORCBDSEVDS0lORyBUSEVZIERPTlQgRVFVQUwgRUFDSCBPVEhFUi5cbiAgICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKGxlbmd0aCwgeGNvb3JkLCB5Y29vcmQsIHBvc2l0aW9uKTtcbiAgICAgIHNoaXBBcnJheS5wdXNoKG5ld1NoaXApO1xuICAgICAgcmV0dXJuIHNoaXBBcnJheTtcbiAgICB9XG4gICAgcmV0dXJuIFwiRXJyb3JcIjtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHhjb29yZCwgeWNvb3JkKSA9PiB7XG4gICAgbGV0IHdhc0hpdCA9IGZhbHNlO1xuICAgIGxldCBtZXNzYWdlID0gXCJcIjtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGAke3hjb29yZH0sJHt5Y29vcmR9YDtcbiAgICBpZiAoU3F1YXJlc0hpdC5pbmNsdWRlcyhjb29yZGluYXRlcykpIHtcbiAgICAgIHJldHVybiBcIlBsZWFzZSBlbnRlciBjb29yZGluYXRlcyBub3QgcHJldmlvdXNseSBhdHRhY2tlZCFcIjtcbiAgICB9XG4gICAgc2hpcEFycmF5LmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuc2hpcHNDb29yZGluYXRlc0FycmF5LmZvckVhY2goKHNlbGVjdGVkU2hpcENvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgIGlmICh3YXNIaXQgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb29yZGluYXRlcyA9PT0gc2VsZWN0ZWRTaGlwQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAvL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lc3NhZ2UgPSBcImF0dGFjayBtaXNzZWRcIjtcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICB3YXNIaXQgPSB0cnVlO1xuICAgICAgICBzaGlwLmhpdHMgPSBzaGlwLmhpdCgpO1xuICAgICAgICBzaGlwLnN1bmtTdGF0dXMgPSBzaGlwLmlzU3VuayhzaGlwLmxlbmd0aCwgc2hpcC5oaXRzKTtcbiAgICAgICAgbWVzc2FnZSA9IFwic2hpcCBoYXMgYmVlbiBoaXQhXCI7XG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgU3F1YXJlc0hpdC5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfTtcblxuICBjb25zdCBkZXRlcm1pbmVJZkNvbmNsdWRlZCA9ICgpID0+IHtcbiAgICBsZXQgc3Vua2VuU2hpcHMgPSAwO1xuICAgIHNoaXBBcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoc2hpcC5zdW5rU3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgIHN1bmtlblNoaXBzICs9IDE7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3Vua2VuU2hpcHMgPT09IHNoaXBBcnJheS5sZW5ndGgpIHtcbiAgICAgIGFyZUFsbFNoaXBzU3VuayA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhcmVBbGxTaGlwc1N1bms7XG4gICAgfVxuICAgIHJldHVybiBhcmVBbGxTaGlwc1N1bms7XG4gIH07XG5cbiAgLy8gY29uc3QgZ2FtZWJvYXJkID0gW107XG4gIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAvLyAgIGxldCByb3cgPSBbXTtcbiAgLy8gICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgLy8gICAgIGNvbnN0IHRlbXAgPSBbaSwgal07XG4gIC8vICAgICByb3cucHVzaCh0ZW1wKTtcbiAgLy8gICB9XG4gIC8vICAgZ2FtZWJvYXJkLnB1c2gocm93KTtcbiAgLy8gICByb3cgPSBbXTtcbiAgLy8gfVxuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgc2hpcEFycmF5LFxuICAgIFNxdWFyZXNIaXQsXG4gICAgZGV0ZXJtaW5lSWZDb25jbHVkZWQsXG4gICAgYXJlQWxsU2hpcHNTdW5rLFxuICB9O1xufTtcblxuXG5jb25zdCBQbGF5ZXIgPSAocGxheWVybmFtZSwgdHVybikgPT4gXG4gIC8vIHRoaXMucGxheWVybmFtZSA9IHBsYXllcm5hbWU7XG4gIC8vIHRoaXMudHVybiA9IHR1cm47XG4gICAoeyBwbGF5ZXJuYW1lLCB0dXJuIH0pXG47XG5cbmV4cG9ydCB7IFNoaXAsIEdhbWVib2FyZCwgUGxheWVyIH07IiwiY29uc3QgZ2V0UGxheWVyTmFtZSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBjb25zdCBuYW1lYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25maXJtbmFtZVwiKTtcbiAgICBuYW1lYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBuYW1laW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIik7XG4gICAgICBjb25zdCBkb21wbGF5ZXJuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJuYW1lXCIpO1xuXG4gICAgICBpZiAobmFtZWlucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIG5hbWVpbnB1dC52YWx1ZSA9IFwiUGxheWVyIDFcIjtcbiAgICAgIH1cblxuICAgICAgZG9tcGxheWVybmFtZS50ZXh0Q29udGVudCA9IG5hbWVpbnB1dC52YWx1ZTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICByZXR1cm4gbmFtZWlucHV0LnZhbHVlO1xuICAgIH0pXG59XG5cbmNvbnN0IGdlbmVyYXRlUGxheWVyQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllcmJvYXJkZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJib2FyZFwiKTtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwicGxheWVyYm9hcmRcIik7XG4gIHBsYXllcmJvYXJkZGl2LmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcblxuICBmb3IgKGxldCBpID0gOTsgaSA+PSAtMTsgaSAtPSAxKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAvLyBmb3JcbiAgICBpZiAoIGkgPT09IC0xKSB7XG4gICAgICBmb3IgKGxldCBqID0gLTE7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChqID09PSAtMSkge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBzcXVhcmVsYWJlbC5jbGFzc0xpc3QuYWRkKFwic3F1YXJlbGFiZWxcIik7XG4gICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZWxhYmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzcXVhcmVsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgc3F1YXJlbGFiZWwuY2xhc3NMaXN0LmFkZChcInNxdWFyZWxhYmVsXCIpO1xuICAgICAgICAgIHNxdWFyZWxhYmVsLnRleHRDb250ZW50ID0gYCR7an1gXG4gICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZWxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHsgXG4gICAgICBmb3IgKGxldCBqID0gLTE7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChqID09PSAtMSkge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBzcXVhcmVsYWJlbC5jbGFzc0xpc3QuYWRkKFwic3F1YXJlbGFiZWxcIik7XG4gICAgICAgICAgc3F1YXJlbGFiZWwudGV4dENvbnRlbnQgPSBgJHtpfWBcbiAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoc3F1YXJlbGFiZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG4gICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2p9LCR7aX1gKVxuICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgLy9cbiAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG4gIFxufVxuXG5jb25zdCBnZW5lcmF0ZUNvbXB1dGVyQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbXB1dGVyYm9hcmRkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyYm9hcmRcIik7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyQm9hcmQuY2xhc3NMaXN0LmFkZChcInBsYXllcmJvYXJkXCIpO1xuICBjb21wdXRlcmJvYXJkZGl2LmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcblxuICBmb3IgKGxldCBpID0gOTsgaSA+PSAtMTsgaSAtPSAxKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICAvLyBmb3JcbiAgICBpZiAoIGkgPT09IC0xKSB7XG4gICAgICBmb3IgKGxldCBqID0gLTE7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChqID09PSAtMSkge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBzcXVhcmVsYWJlbC5jbGFzc0xpc3QuYWRkKFwic3F1YXJlbGFiZWxcIik7XG4gICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZWxhYmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzcXVhcmVsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgc3F1YXJlbGFiZWwuY2xhc3NMaXN0LmFkZChcInNxdWFyZWxhYmVsXCIpO1xuICAgICAgICAgIHNxdWFyZWxhYmVsLnRleHRDb250ZW50ID0gYCR7an1gXG4gICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNxdWFyZWxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHsgXG4gICAgICBmb3IgKGxldCBqID0gLTE7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChqID09PSAtMSkge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBzcXVhcmVsYWJlbC5jbGFzc0xpc3QuYWRkKFwic3F1YXJlbGFiZWxcIik7XG4gICAgICAgICAgc3F1YXJlbGFiZWwudGV4dENvbnRlbnQgPSBgJHtpfWBcbiAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoc3F1YXJlbGFiZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG4gICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2p9LCR7aX1gKVxuICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgLy9cbiAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICB9XG59XG5cbmNvbnN0IGdlbmVyYXRlRmFrZVNoaXBzID0gKCkgPT4ge1xuICBjb25zdCBzaGlwYmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwYmF5XCIpO1xuICAvLyBsb2dpYyBmb3IgZXZlcnkgc2hpcCwgbG9vayBhdCB0aGUgdmlkZW9cbiAgc2hpcGJheS5mb3JFYWNoKHNoaXAgPT4ge1xuXG4gXG4gIHNoaXBvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBlID0+IHtcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBzaGlwb25lLmlkKTtcbiAgICBjb25zb2xlLmxvZyhcInNoaXBvbmVkcmFnc3RhcnRcIilcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgaWYgKGUub2Zmc2V0WCA+IDMyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInNlY29uZCBzcXVhcmVcIik7XG4gICAgfSBlbHNlIGlmIChlLm9mZnNldFggPCAzMykge1xuICAgICAgY29uc29sZS5sb2coXCJmaXJzdCBzcXVhcmVcIilcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgYWxsc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlXCIpO1xuICBhbGxzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGUgPT4ge1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICAgIC8vIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG5cbiAgICB9KVxuXG4gICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcblxuICAgICAgY29uc3QgZHJvcHBlZEVsZW1lbnQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGRyb3BwZWRFbGVtZW50KTtcbiAgICB9KVxuICB9KVxuXG5cbn0pXG5cbn1cblxuZXhwb3J0IHsgZ2V0UGxheWVyTmFtZSwgZ2VuZXJhdGVQbGF5ZXJCb2FyZCwgZ2VuZXJhdGVDb21wdXRlckJvYXJkLCAgZ2VuZXJhdGVGYWtlU2hpcHN9OyBcblxuICAvLyBmb3IgKGNvbnN0IHNxdWFyZWRyb3B6b25lIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3F1YXJlXCIpKSB7XG4gIC8vICAgc3F1YXJlZHJvcHpvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGUgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2coZSk7XG4gIC8vICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gIC8vICAgfSlcbiAgLy8gfSIsImltcG9ydCB7IEdhbWVib2FyZCwgU2hpcCwgUGxheWVyIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgZ2V0UGxheWVyTmFtZSwgZ2VuZXJhdGVQbGF5ZXJCb2FyZCwgZ2VuZXJhdGVDb21wdXRlckJvYXJkLCBnZW5lcmF0ZUZha2VTaGlwcyB9IGZyb20gXCIuL2Rlc2lnblwiO1xuXG5cblxuLy8gR2FtZSBsb29wIGJlZ2luc1xuLy8gR2V0cyB0aGUgcGxheWVyIGFuZCBjcmVhdGVzIGJvdGggZ2FtZWJvYXJkcywgYW5kIGJvdGggb2JqZWN0cy5cbmNvbnN0IHBsYXllcnNuYW1lID0gXCJQbGF5ZXIgMVwiO1xuLy8gcGxheWVyc25hbWUgPSBnZXRQbGF5ZXJOYW1lKCk7IFxuZ2VuZXJhdGVQbGF5ZXJCb2FyZCgpO1xuY29uc3QgUGxheWVyMSA9IFBsYXllcihgJHtwbGF5ZXJzbmFtZX1gLCB0cnVlKTtcbmNvbnN0IFBsYXllcmJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbmdlbmVyYXRlQ29tcHV0ZXJCb2FyZCgpO1xuY29uc3QgQ29tcHV0ZXJib2FyZCA9IEdhbWVib2FyZCgpO1xuY29uc3QgQ29tcHV0ZXIgPSBQbGF5ZXIoXCJDb21wdXRlclwiLCBmYWxzZSk7XG5cbi8vIFBsYWNpbmcgU2hpcHNcbmZvciAobGV0IGkgPSAxOyBpIDwgNzsgaSArPSAxKSB7XG4gIGNvbnN0IHRlbXB4Y29vcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBpKSk7XG4gIGNvbnN0IHRlbXB5Y29vcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBpKSk7XG4gIGNvbnN0IHRlbXBwb3MgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgbGV0IHRlbXBwb3NpdGlvbjtcbiAgXG4gIGlmICh0ZW1wcG9zID09PSAxKSB7XG4gICAgdGVtcHBvc2l0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xuICB9IGVsc2UgaWYgKHRlbXBwb3MgPT09IDApIHtcbiAgICB0ZW1wcG9zaXRpb24gPSBcImhvcml6b250YWxcIjtcbiAgfVxuXG4gIENvbXB1dGVyYm9hcmQucGxhY2VTaGlwKGksIHRlbXB4Y29vcmQsIHRlbXB5Y29vcmQsIHRlbXBwb3NpdGlvbik7XG59XG4vLyBGSVggLSBTaGlwcyBvdmVybGFwIVxuXG5jb25zb2xlLmxvZyhDb21wdXRlcmJvYXJkLnNoaXBBcnJheSk7XG5cbi8vIGNvbnNvbGUubG9nKENvbXB1dGVyYm9hcmQucGxhY2VTaGlwKDYsIDUsIDMsIFwiaG9yaXpvbnRhbFwiKSk7XG5cbmdlbmVyYXRlRmFrZVNoaXBzKCk7Il0sIm5hbWVzIjpbIkdhbWVib2FyZCIsImFyZUFsbFNoaXBzU3VuayIsIlNxdWFyZXNIaXQiLCJzaGlwQXJyYXkiLCJwbGFjZVNoaXAiLCJsZW5ndGgiLCJ4Y29vcmQiLCJ5Y29vcmQiLCJwb3NpdGlvbiIsIm5ld1NoaXAiLCJ0ZW1weCIsInRlbXB5Iiwic2hpcHNDb29yZGluYXRlc0FycmF5IiwiaSIsInNoaXBDb29yZGluYXRlcyIsInB1c2giLCJoaXRzIiwiaGl0IiwiaXNTdW5rIiwibGVuZ3RoT2ZTaGlwIiwiaGl0c09mU2hpcCIsInN1bmtTdGF0dXMiLCJTaGlwIiwicmVjZWl2ZUF0dGFjayIsIndhc0hpdCIsIm1lc3NhZ2UiLCJjb29yZGluYXRlcyIsImluY2x1ZGVzIiwiZm9yRWFjaCIsInNoaXAiLCJzZWxlY3RlZFNoaXBDb29yZGluYXRlcyIsImRldGVybWluZUlmQ29uY2x1ZGVkIiwic3Vua2VuU2hpcHMiLCJQbGF5ZXIiLCJwbGF5ZXJuYW1lIiwidHVybiIsInBsYXllcmJvYXJkZGl2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheWVyQm9hcmQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJyb3ciLCJqIiwic3F1YXJlbGFiZWwiLCJ0ZXh0Q29udGVudCIsInNxdWFyZSIsInNldEF0dHJpYnV0ZSIsImdlbmVyYXRlUGxheWVyQm9hcmQiLCJjb21wdXRlcmJvYXJkZGl2IiwiZ2VuZXJhdGVDb21wdXRlckJvYXJkIiwiQ29tcHV0ZXJib2FyZCIsInRlbXB4Y29vcmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1weWNvb3JkIiwidGVtcHBvcyIsInRlbXBwb3NpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJzaGlwb25lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiaWQiLCJ0YXJnZXQiLCJvZmZzZXRYIiwicXVlcnlTZWxlY3RvckFsbCIsInByZXZlbnREZWZhdWx0IiwiZHJvcHBlZEVsZW1lbnQiLCJnZXREYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==