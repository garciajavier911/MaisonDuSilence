document.addEventListener("DOMContentLoaded", () => {

  const basePath = window.location.pathname.includes("/views/") ? "../" : "./";

  const loadHTML = (id, file) => {
    fetch(file)
      .then(resp => {
        if (!resp.ok) throw new Error(`No se pudo cargar ${file}`);
        return resp.text();
      })
      .then(data => {
        const el = document.getElementById(id);
        if (!el) return console.warn(`No existe #${id}`);
        el.innerHTML = data;

        if (id === "header") {
          marcarNavActivo();
        }
      })
      .catch(err => console.error(err));
  };

  const normalizePath = (path) => {
    if (!path) return "";
    path = path.split("?")[0].split("#")[0];
    path = path.replace(/^\/+|\/+$/g, "");
    path = path.replace(/\.html$/, "");
    return path;
  };

  const marcarNavActivo = () => {
    const currentPage = normalizePath(window.location.pathname.split("/").pop()) || "index";

    const navLinks = document.querySelectorAll("#header .nav-link, #header .dropdown-item");

    navLinks.forEach(link => {
      const href = link.getAttribute("href") || "";
      let linkPath = "";

      try {
        linkPath = new URL(href, window.location.origin).pathname;
      } catch {
        linkPath = href;
      }

      linkPath = normalizePath(linkPath.split("/").pop());

      if (linkPath === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  

  loadHTML("header", `${basePath}partials/header.html`);
  loadHTML("footer", `${basePath}partials/footer.html`);
});