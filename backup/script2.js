function toggleDaftarIsi() {
  const daftarIsi = document.getElementById("daftarIsi");

  if (daftarIsi.style.display === "none") {
    daftarIsi.style.display = "block";
  } else {
    daftarIsi.style.display = "none";
  }
}

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

document.addEventListener("DOMContentLoaded", function () {

  const sidebar = document.getElementById("sidebarCategory");
  const toggleBtn = document.getElementById("toggleCategory");

  const sidebarLinks = document.querySelectorAll(".sidebar-menu-category a, .dropdown-menu-custom a");
  const productGroups = document.querySelectorAll(".product-group");

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

  // jalankan pertama kali
  showCategory(kategori);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      sidebar.classList.toggle("show");
    });
  }

  sidebarLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const category = this.getAttribute("data-category");

      showCategory(category);

      // tutup sidebar mobile
      if (sidebar) {
        sidebar.classList.remove("show");
      }

      history.replaceState(null, null, "?kategori=" + category);

      // scroll ke produk (offset navbar)
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