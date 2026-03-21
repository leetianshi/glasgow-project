document.addEventListener("DOMContentLoaded", () => {
  // 你想“新标签页打开”的文件后缀（按需增删）
  const fileExt = /\.(pdf|zip|rar|7z|docx?|xlsx?|pptx?|png|jpe?g|gif|webp|mp3|mp4|mov)$/i;

  document.querySelectorAll("a[href]").forEach(a => {
    const href = a.getAttribute("href");
    if (!href) return;

    // 跳过锚点、mailto、tel
    if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

    // 1) 外部链接：http/https 且域名不是本站
    const isHttp = href.startsWith("http://") || href.startsWith("https://");
    if (isHttp) {
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) {
        a.target = "_blank";
        a.rel = "noopener";
      }
      return;
    }

    // 2) 站内文件：相对/绝对路径，但后缀匹配
    // 去掉 query/hash 后再判断后缀
    const clean = href.split("#")[0].split("?")[0];
    if (fileExt.test(clean)) {
      a.target = "_blank";
      a.rel = "noopener";
    }
  });
});

document.addEventListener("DOMContentLoaded", addOscolaSeparator);
document.addEventListener("pjax:complete", addOscolaSeparator);

function addOscolaSeparator() {
  // 找所有左侧导航链接
  const links = document.querySelectorAll(".md-nav__link, .md-sidebar a");

  links.forEach((link) => {
    const text = link.textContent.trim();
    if (text === "OSCOLA") {
      const item = link.closest(".md-nav__item, li");
      if (item) {
        item.classList.add("oscola-separator");
      }
    }
  });
}