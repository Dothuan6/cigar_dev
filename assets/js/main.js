/* =====================================================================
   Vinataba's Cigar — main.js
   Dữ liệu sản phẩm thật lấy từ xiganghiepdu.com (feed products.json).
   Ảnh hotlink từ CDN hstatic; C/ = cdn.hstatic, P/ = product.hstatic.
   ===================================================================== */
const CDN = "https://cdn.hstatic.net/products/200000136259/";
const PRD = "https://product.hstatic.net/200000136259/product/";
const img = s => s.replace(/^C\//, CDN).replace(/^P\//, PRD);
const vnd = n => Number(n).toLocaleString("vi-VN") + "₫";

/* [tên, giá, ảnh] */
const DATA = {
  chinhhang: [
    ["Cigar Balmoral Añejo XO Petit Robusto", 385000, "C/balmoral-anejo-xo-petit-robusto-ft_2a29f8439cdb4d1a9875eb48f8fe5a30.jpg"],
    ["Gurkha Cellar Reserve 18 Year Koi Perfecto", 395000, "C/gurkha-cellar-reserve-aged-18-years-koi-perfecto-12_e279651bd06342d3b9c5a28278c610cd.jpg"],
    ["Gurkha Cellar Reserve 15 Year Hedonism", 475000, "C/gurkha-cellar-reserve-aged-15-years-hedonism-grand-rothchild-6_5c35e2e3b8c64a07b85820a2b010f71a.jpg"],
    ["Gurkha Cellar Reserve Platinum 12 Year Solara", 345000, "C/gurkha-cellar-reserve-aged-12-years-solara-double-robusto-13_a8fe77b3541441b2a93cb6a7c025974f.jpg"],
    ["Gurkha Grand Reserve Cognac Corona", 465000, "C/gurkha-grand-reserve-cognac-corona-6_7b56fe375d4a4ef0adee76ca28d9e0ea.jpg"],
    ["Gurkha Ghost Angel Torpedo Tubos", 405000, "C/gurkha-ghost-angel-torpedo-10_5352d3f7f9a04547888ddef98e770b0b.jpg"],
    ["Gurkha Royal Challenge Toro Tubos", 745000, "C/gurkha-royal-challenge-toro-tubos-13_5bed5a0a932441b09d1dd456d0af5c16.jpg"],
    ["Vedado Master 56 Grand Toro", 395000, "C/vedado-master-56-grand-toro_3e1156939ce9433197b1177d101af8c2.jpg"],
  ],
  mini: [
    ["Neonlis Hipster Short Mini Cigars", 420000, "C/neonlis-hipster-short_c7224bec85804882a9becd00ab699c81.jpg"],
    ["Villiger Premium Red Filter", 345000, "C/villiger-premium-red-filter_7bce43b2bec94d818d6f1af703550538.jpg"],
    ["Villiger Mini Espresso", 160000, "P/villiger_mini_espresso_aae0204e205c4b0da1146f3f3926c0d4_master_b45832b5e459441cbe78df10e67b9563.jpg"],
    ["Villiger Premium No.9 Sumatra", 345000, "P/premium-no-9-sumatra-box-of-10_173ff668a1ca4bdba89764f754271f03_master_4850bb7aacf940359a32d9dc9933f917.jpg"],
    ["Villiger Premium Red — Lốc 5 hộp", 345000, "P/villiger-mini-premium-red-pack-5-box_cbe8f696af624578a87178bca72c952a.jpg"],
    ["Villiger Premium No.7 Sumatra", 345000, "P/villiger-premium-no-7-sumatra-box-5_7e4c9b5df0b24f409f6386c7b6ced6fc.jpg"],
    ["Toscano Toscanello Rosso Caffè", 250000, "P/toscano-toscanello-rosso-caffe-box-5_30597e6fa44f4329b6dd80d76e2e1d67.jpg"],
    ["Neonlis Mini Cigars — Hộp 6 điếu", 420000, "P/neonlis-mini-cigars-box-6_1b32b06017bd4c1e99deee364009ae95.jpg"],
  ],
  hiem: [
    ["Ashton Estate Sun Grown ESG 21 Year Salute", 1400000, "P/ashton-esg-21-year-salute-box-25_637044fc04084600ac2c51129e5718d7.jpg"],
    ["Joya De Nicaragua Cinco Decadas Fundador", 1400000, "P/joya-de-nicaragua-50-aniversario-cinco-decadas-fundador-box-10_8cf31003c0254c0aa85ca083c9861b5b.jpg"],
    ["Joya De Nicaragua Cinco Decadas El General", 1400000, "P/joya-de-nicaragua-50-aniversario-cinco-decadas-el-general-box-10_8dbc8524713a40989b13191b1be861f1.jpg"],
    ["Joya De Nicaragua Cinco Decadas El Embargo", 1500000, "P/joya-de-nicaragua-50-aniversario-cinco-decadas-el-embargo-box-10_fac43767c0a34dec879ec198e6c37d75.jpg"],
    ["Joya De Nicaragua Cinco Decadas El Cumiche", 1250000, "P/joya-de-nicaragua-50-aniversario-cinco-decadas-el-cumiche-box-10_523aef3263ca4ef982045f162f222794.jpg"],
    ["Joya De Nicaragua Cinco Decadas Diadema", 1400000, "P/joya-de-nicaragua-50-aniversario-cinco-decadas-diadema-box-10_06769a4aa0f44c33a5147ff73cd6ac19.jpg"],
    ["Villiger 1888 Year of the Dragon Gran Toro LE 2024", 1200000, "P/villiger-1888-year-of-the-dragon-gran-toro-limited-edition-2024-box-10_2cfd3193b492400a9d61c5aa0d17618a.jpg"],
    ["Fuente Fuente Opus X The Lost City Robusto", 31000000, "P/fuente-fuente-opus-x-the-lost-city-robusto-box-10_ddd4cb0548a74442afc3bfbb1ea4f1c0.jpg"],
  ],
  phukien: [
    ["Gạt Tàn Cigar Liga Privada Undercrown", 2000000, "C/liga-privada-undercrown-ashtray_c16964af187940e8918406d6971dc7a7.jpg"],
    ["Bộ 3 Món Phụ Kiện Xì Gà Partagas Gift Set", 3000000, "P/partagas-cigar-gift-set-3-piece_e267a196973849e4964fd157ff19ec9a.jpg"],
    ["Gạt Tàn Cigar Ceramic 4 Điếu XGND", 600000, "P/gat-tan-xi-ga-xgnd-nguyen-khoi-4-dieu-cao-cap_9aab6a5d7d5d4a499f1faa819f33dd2b.jpg"],
    ["Ly Uống Rượu Davidoff Wine Tumblers", 2000000, "P/davidoff-grand-cru-wine-tumblers-box-of-2_47534af021e149799335124f1bb3a0f0.jpg"],
    ["Hộp Bảo Quản Xì Gà Gurkha Humidor 2024", 7500000, "P/op-bao-quan-xi-ga-gurkha-humidor-2024-tang-kem-10-xi-ga-gurkha-cao-cap_31ac920919be4cff862cb4af1834980d.jpg"],
    ["Hũ Cấp Ẩm Xì Gà Xikar Crystal Humidifier", 330000, "P/hu-cap-am-xi-ga-xikar_ce006550d14b4f3a97bd58908adbb83c.jpg"],
    ["Túi Zip Cấp Ẩm Hai Chiều Xì Gà XGND", 50000, "P/tui-zip-bao-quan-xi-ga-xgnd_9586f9c4818749e3a00f95c40f699c42.jpg"],
    ["Dao Cắt Xì Gà Inox 2 Lưỡi", 100000, "P/dao-cat-xi-ga-2-luoi-inox_0d0064368ff5412db1bceeb6d571653b.jpg"],
  ],
};

const LABEL = {
  chinhhang: "Xì Gà Điếu Lớn",
  mini: "Xì Gà Mini",
  hiem: "Xì Gà Hiếm",
  phukien: "Phụ Kiện Xì Gà",
};

function card(cat, p) {
  const [name, price, src] = p;
  return `<div class="card">
    <div class="thumb">
      <img loading="lazy" src="${img(src)}" alt="${name}" onerror="this.closest('.thumb').classList.add('noimg')">
    </div>
    <div class="body">
      <div class="catname">${LABEL[cat]}</div>
      <h3>${name}</h3>
      <div class="price">${vnd(price)}</div>
      <div class="actions">
        <button class="btn" onclick="addCart()">Thêm giỏ</button>
        <button class="btn btn-outline" onclick="alert('Xem nhanh: ${name.replace(/'/g, "")}')">Xem nhanh</button>
      </div>
    </div></div>`;
}

function render(id, cat) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = DATA[cat].map(p => card(cat, p)).join("");
}
render("grid1", "chinhhang");
render("grid2", "mini");
render("grid3", "hiem");
render("grid4", "phukien");

/* ---- Cart ---- */
let cart = 0;
function addCart() {
  cart++;
  document.getElementById("cartCount").textContent = cart;
}

/* ---- Age gate ---- */
function closeAge() {
  document.getElementById("agegate").style.display = "none";
}

/* ---- Hero slider ---- */
const _slides = [...document.querySelectorAll("#heroSlider .slide")];
const _dots = document.getElementById("heroDots");
let _si = 0;
if (_slides.length && _dots) {
  _slides.forEach((_, i) => {
    const d = document.createElement("span");
    if (!i) d.className = "on";
    d.onclick = () => goTo(i);
    _dots.appendChild(d);
  });
  setInterval(() => slide(1), 6000);
}
function goTo(i) {
  _slides[_si].classList.remove("on");
  _dots.children[_si].classList.remove("on");
  _si = (i + _slides.length) % _slides.length;
  _slides[_si].classList.add("on");
  _dots.children[_si].classList.add("on");
}
function slide(step) {
  goTo(_si + step);
}

/* ---- Nút "Lên đầu" — chỉ hiện khi cuộn xuống ---- */
const _btnTop = document.getElementById("btnTop");
window.addEventListener("scroll", () => {
  if (_btnTop) _btnTop.style.display = window.scrollY > 400 ? "flex" : "none";
});
function goTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---- Menu mobile (hamburger + mega bấm để mở) ---- */
const _navToggle = document.getElementById("navToggle");
const _navLinks = document.getElementById("navLinks");
if (_navToggle && _navLinks) {
  _navToggle.addEventListener("click", () => _navLinks.classList.toggle("open"));
}
document.querySelectorAll(".nav .has-mega > a").forEach(a => {
  a.addEventListener("click", e => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      a.parentElement.classList.toggle("open");
    }
  });
});
