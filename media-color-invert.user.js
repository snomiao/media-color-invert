// ==UserScript==
// @name             [SNOLAB] Alt + i to invert color of Images / Videos Color
// @namespace        snomiao@gmail.com
// @version          1.1.0
// @description      Invert page color by Alt+i, combo with Ctrl+Windows+C to invert the color of whole screen, you can enjoy the real night mode in windows.
// @author           snomiao@gmail.com
// @match            *://*/*
// @contributionURL  https://snomiao.com/donate
// @supportURL       https://github.com/snomiao/media-color-invert/issues
// @downloadURL      https://github.com/snomiao/media-color-invert/raw/main/media-color-invert.user.js
// @grant            GM.getValue
// @grant            GM.setValue
// @run-at           document-start
// ==/UserScript==

main();
function main() {
  const ac = new AbortController();
  globalThis.MediaColorInvert?.abort();
  globalThis.MediaColorInvert = ac;

  const signal = ac.signal;
  // watch
  const debouncedScan = debounce(scan, 8); // Adjust the delay (300ms) as needed
  scan();
  // new MutationObserver((mutationList, observer) => {
  //   mutationList.forEach((mutation) =>
  //     mutation.addedNodes.forEach((e) => scan(e))
  //   );
  // }).observe(document.body, { subtree: true, childList: true });
  window.addEventListener("focus", () => scan(), { signal });

  // toggle
  window.addEventListener("keydown", (e) => isAltI(e) && toggle(), { signal });
}

async function toggle() {
  await setInvert(!(await getInvert()));
  await scan();
}
async function scan() {
  const invert = await getInvert();
  const textNode = document.createTextNode(`
.body{
filter: hue-rotate(180deg);
}
video,img{
filter: invert(1);
}
svg:not(:has(svg)){
filter: hue-rotate(180deg);
}
`);
  const style = document.createElement("style");
  style.appendChild(textNode);
  style.id = "media-color-invert";
  const s = document.head?.querySelector("&>#media-color-invert");

  if (s && !invert) s.remove();
  if (!s && invert) document.head.appendChild(style);
}

async function getInvert() {
  return (await globalThis.GM?.getValue("media-color-invert")) ?? false;
}
async function setInvert(i) {
  return await globalThis.GM?.setValue("media-color-invert", i);
}

function isAltI(e) {
  return e.altKey && !e.metaKey && !e.shiftKey && !e.ctrlKey && e.code === "KeyI";
}

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}
