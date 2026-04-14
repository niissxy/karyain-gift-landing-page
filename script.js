function toggleDaftarIsi() {
  const daftarIsi = document.getElementById("daftarIsi");
  daftarIsi.style.display = daftarIsi.style.display === "none" ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", function () {

  const productGroups = document.querySelectorAll(".product-group");
  if (productGroups.length === 0) return;

  // ✅ FIX TARGET SIDEBAR
  const sidebar = document.querySelector(".sidebar-category-product");
  const sidebarInner = document.getElementById("sidebarCategory");
  const toggleBtn = document.getElementById("toggleCategory");
  const overlay = document.getElementById("sidebarOverlay");

  const sidebarLinks = document.querySelectorAll(".sidebar-menu-category a, .dropdown-menu-custom a");

  function showCategory(category) {
    productGroups.forEach(group => {
      group.classList.remove("active");
    });

    const target = document.getElementById(category);
    if (target) {
      target.classList.add("active");
    }
  }

  const urlParams = new URLSearchParams(window.location.search);
  let kategori = urlParams.get("kategori") || "penFlashDrive";

  showCategory(kategori);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      sidebar.classList.toggle("show");
      if (overlay) overlay.classList.toggle("show");
    });
  }

  if (overlay) {
    overlay.addEventListener("click", function () {
      sidebar.classList.remove("show");
      overlay.classList.remove("show");
    });
  }

  sidebarLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const category = this.getAttribute("data-category");

      showCategory(category);

      // close sidebar (mobile)
      if (sidebar) sidebar.classList.remove("show");
      if (overlay) overlay.classList.remove("show");

      // update URL tanpa reload
      history.replaceState(null, null, "?kategori=" + category);

      // scroll halus
      const productSection = document.getElementById("product");
      const yOffset = -70;
      const y = productSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    });
  });

});

const productGroup = document.querySelectorAll(".product-group");

 // ambil parameter dari URL
 const urlParams = new URLSearchParams(window.location.search);
 const kategori = urlParams.get("kategori");

 if(kategori){

    productGroup.forEach(product => {

        product.classList.remove("active");

        if(product.classList.contains(kategori)){
            product.classList.add("active");
        }

    });

 }