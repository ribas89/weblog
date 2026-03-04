let hideTimer;
let lastTop = 0;

function scrollToTop(e) {
  e.stopPropagation();
  document.querySelector("main").scrollIntoView({ behavior: "smooth" });
}

function updateHeaderTop() {
  const header = document.querySelector(".app-header");
  const backToTop = document.querySelector(".app-header-back-to-top");

  if (header && window.innerWidth > 960) {
    header.style.removeProperty("top");
    return;
  }

  if (!header || !backToTop) return;

  requestAnimationFrame(() => {
    const headerHeight = header.offsetHeight;
    const backToTopHeight = backToTop.offsetHeight;
    const topValue = -headerHeight + backToTopHeight;
    header.style.top = `${topValue}px`;
  });
}

window.addEventListener("load", updateHeaderTop);
window.addEventListener("resize", updateHeaderTop);

window.addEventListener("scroll", () => {
  const header = document.querySelector(".app-header");
  const backToTop = document.querySelector(".app-header-back-to-top");
  clearTimeout(hideTimer);

  if (header) {
    header.classList.remove("hidden");
  }

  if (window.innerWidth > 960) {
    return;
  }

  if (!header || !backToTop) {
    return;
  }

  const headerHeight = header.offsetHeight;
  const backToTopHeight = backToTop.offsetHeight;
  const topValue = Math.round(-headerHeight + backToTopHeight);
  const rect = header.getBoundingClientRect();
  const rectTop = Math.round(rect.top);

  if (rectTop > topValue) {
    clearTimeout(hideTimer);
    lastTop = rectTop;
    backToTop.style.removeProperty("opacity");
    return;
  }

  backToTop.style.opacity = "1.0";
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    header.classList.add("hidden");
  }, 1000);
});

// var remark_config = {
//   host: "https://comment.ribas89.co.uk",
//   site_id: "weblog",
//   components: ["embed", "last-comments"],
//   theme: "dark",
//   show_rss_subscription: "false",
//   no_footer: "false",
// };

// !(function (e, n) {
//   for (var o = 0; o < e.length; o++) {
//     var r = n.createElement("script"),
//       c = ".js",
//       d = n.head || n.body;
//     "noModule" in r ? ((r.type = "module"), (c = ".mjs")) : (r.async = !0), (r.defer = !0), (r.src = remark_config.host + "/web/" + e[o] + c), d.appendChild(r);
//   }
// })(remark_config.components, document);
