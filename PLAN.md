# PLAN — Clone & Kết Hợp Website Xì Gà (XGND + Cigar House)

> Website bán xì gà tĩnh (HTML/CSS/JS), lấy **giao diện (UI)** từ `xiganghiepdu.com`, **trải nghiệm/bố cục (UX)** từ `cigarhouse.vn`, đổi tông màu chủ đạo sang **vàng gold + nâu gỗ**, và bổ sung **hero banner** kiểu Cigar House ở đầu trang.

---

## 1. Mục tiêu

| # | Mục tiêu | Nguồn tham chiếu |
|---|----------|------------------|
| 1 | Bố cục UI trang chủ (header, lưới sản phẩm, section, footer) | `xiganghiepdu.com` (XGND) |
| 2 | Trải nghiệm UX (menu mega, hero banner + 2 banner phụ, dải trust badge, quick-view) | `cigarhouse.vn` |
| 3 | Tông màu **vàng gold `#C6A15B` + nâu gỗ `#3B2A1A`** thay cho đỏ `#C51230` của XGND | Yêu cầu |
| 4 | Thêm **hero banner** đầu trang (slider lớn bên trái + 2 banner promo bên phải) | Cigar House |
| 5 | Là site **bán hàng thật** nhưng nền tảng **tĩnh** → cần luồng đặt hàng phù hợp (mục 8) | Yêu cầu |

**Bàn giao ở giai đoạn này:** tài liệu plan (file này) + trang chủ demo `index.html`.

---

## 2. Phân tích 2 site nguồn

### 2.1 XGND — `xiganghiepdu.com` (lấy UI)
- Nền tảng gốc: Haravan. Tông màu đỏ đô `#C51230`.
- **Top bar:** hotline "LIÊN HỆ: 0919803825 (09:00-21:00)".
- **Header:** logo XGND (chữ + biểu tượng lá gold) · ô tìm kiếm có dropdown danh mục · nút search đỏ.
- **Nav:** Trang chủ · Sản phẩm (submenu) · Blog (submenu) · Giới thiệu · Liên hệ · Kiểm tra đơn hàng.
- **Hero:** 1 banner slider lớn (ví dụ Opus X).
- **Dải icon danh mục:** 6 mục — Xì Gà Quà Tặng · Xì Gà Loại Nhỏ · Xì Gà Hiếm · Phụ Kiện Xì Gà · Combo Trải Nghiệm · Thuốc Lá.
- **Các section sản phẩm:** "Các Loại Xì Gà Chính Hãng", "Xì Gà Mini", "Xì Gà Hiếm", "Phụ Kiện Xì Gà" — lưới 4 cột, mỗi card có badge điểm, tên danh mục, tên SP, nút "LIÊN HỆ".
- **Tin tức:** slider 3 card blog.
- **Footer tối:** logo · địa chỉ/hotline/email · cột Sản phẩm · cột Chính sách · fanpage Facebook.

### 2.2 Cigar House — `cigarhouse.vn` (lấy UX)
- Nền tảng gốc: WooCommerce. Tông tối + nâu/gold, sang trọng.
- **Nav:** Trang chủ · Cigar cao cấp (mega menu: Thương hiệu / Độ mạnh / Màu wrapper / Kiểu đóng gói) · Phụ kiện cigar (mega menu) · Tin tức · Liên hệ · icon search + giỏ hàng.
- **HERO (điểm cần bê sang):** slider lớn chiếm ~2/3 trái ("Feel the smoke — Sang trọng, đẳng cấp" + nút Khám Phá) + **2 banner promo xếp chồng** bên phải ("Cigar cho người mới", "Ưu đãi khuyến mại").
- **Dải trust badge** ngay dưới hero: Thanh toán linh hoạt · Ship toàn quốc · Sản phẩm chính hãng.
- **Sản phẩm HOT:** lưới có giá + "Thêm vào giỏ" + "Xem nhanh" (quick-view).
- Mega menu phân loại theo thương hiệu/độ mạnh — trải nghiệm lọc tốt.

### 2.3 Kết hợp
| Thành phần | Lấy từ | Ghi chú |
|-----------|--------|---------|
| Khung header + search + lưới SP + footer | XGND | Giữ bố cục quen thuộc |
| Hero banner (slider + 2 promo) + trust badge | Cigar House | **Điểm nhấn đầu trang** |
| Mega menu phân loại thương hiệu/độ mạnh | Cigar House | Cải thiện điều hướng |
| Quick-view + hiển thị giá + nút thêm giỏ | Cigar House | Thay nút "Liên hệ" của XGND (tùy chính sách giá) |
| Tông màu | **Mới** | Vàng gold + nâu gỗ |

---

## 3. Design System (vàng gold + nâu gỗ)

**Bảng màu**
```
--gold          #C6A15B   /* vàng gold chủ đạo (nút, tiêu đề, viền) */
--gold-bright   #D4AF37   /* điểm nhấn / hover */
--gold-soft     #E8D6A8   /* nền nhạt, đường kẻ */
--wood-900      #1A120B   /* nâu gỗ đậm nhất (footer, nav) */
--wood-800      #2A1E14   /* nền tối phụ */
--wood-700      #3B2A1A   /* nâu gỗ chủ đạo */
--wood-500      #5C4033   /* nâu trung */
--cream         #FAF6EF   /* nền trang */
--paper         #FFFFFF   /* nền card */
--ink           #22190F   /* chữ chính */
--muted         #8A7A66   /* chữ phụ */
```

**Typography** *(đo từ xiganghiepdu.com — font gốc SFUFutura/Futura)*
- Font hệ thống: **Montserrat** (geometric sans gần Futura, hỗ trợ đầy đủ tiếng Việt) thay cho SFUFutura bản quyền. Fallback: Helvetica, Arial.
- Body: 14px · weight 300 · line-height 1.6 · letter-spacing 0.5px · màu #333/ink.
- Tiêu đề (h1 32px, h2 26px, h3 18px): **weight 700, IN HOA, letter-spacing 0.5px**.
- Nav / Nút: 14px · weight 600–700 · IN HOA · letter-spacing 0.5px.
- Tiêu đề section: IN HOA + đường gạch chân gold ngắn giữa (giống XGND).
- Toàn bộ token typography & màu nằm trong `assets/css/styles.css` (`:root`).

**Thành phần dùng lại**
- Nút chính: nền gold, chữ nâu đậm, bo góc nhỏ, hover sáng.
- Card sản phẩm: nền trắng, viền mảnh, badge điểm, tên danh mục (gold), tên SP, giá/nút.
- Section title: căn giữa + underline gold.
- Icon danh mục: khối tròn nền kem, viền gold.

---

## 4. Sitemap

```
/ (Trang chủ)                     ← demo dựng ở giai đoạn này
/collections/all (Tất cả sản phẩm)
/collections/:category            (Xì gà điếu lớn, mini, hiếm, phụ kiện, thuốc lá, combo)
/brand/:brand                     (Cohiba, Montecristo, Partagas, ...)
/product/:slug (Chi tiết SP)
/blog, /blog/:slug (Tin tức)
/gioi-thieu, /lien-he
/gio-hang, /thanh-toan            (giỏ hàng / đặt hàng)
/kiem-tra-don-hang
```

---

## 5. Cấu trúc thư mục code

```
Cigar/
├─ PLAN.md
├─ index.html                 ← trang chủ (demo)
├─ pages/                      ← các trang phụ (giai đoạn sau)
│   ├─ collection.html
│   ├─ product.html
│   ├─ blog.html
│   ├─ about.html
│   ├─ contact.html
│   └─ cart.html
├─ assets/
│   ├─ css/  (styles.css — biến màu + component)
│   ├─ js/   (main.js — slider, mega menu, cart, quick-view)
│   ├─ img/  (banner, sản phẩm, logo, icon)
│   └─ (các ảnh tham chiếu hiện có)
└─ data/
    └─ products.json           ← dữ liệu SP (giai đoạn sau, render động)
```
> Giai đoạn demo: gộp CSS/JS trong `index.html` (1 file) cho dễ xem trước; giai đoạn sau tách ra `assets/css`, `assets/js`.

---

## 6. Cấu trúc trang chủ (index.html)

1. **Top bar** — hotline + link nhanh (Kiểm tra đơn hàng, Tài khoản).
2. **Header** — logo gold · ô tìm kiếm (dropdown danh mục) · icon giỏ hàng.
3. **Nav** (nền nâu gỗ, chữ gold) — Trang chủ · Cigar cao cấp (mega) · Phụ kiện · Tin tức · Giới thiệu · Liên hệ.
4. **HERO** — slider lớn trái + 2 banner promo phải *(bê từ Cigar House)*.
5. **Trust badges** — 3 mục: Thanh toán linh hoạt · Ship toàn quốc · Chính hãng.
6. **Dải icon danh mục** — 6 danh mục *(XGND)*.
7. **Section "Xì Gà Chính Hãng"** — lưới 4 cột.
8. **Section "Xì Gà Mini"** — lưới 4 cột.
9. **Dải thương hiệu / khuyến mãi.**
10. **Tin tức** — 3 card.
11. **Đăng ký nhận tin.**
12. **Footer** tối, điểm nhấn gold.

---

## 7. Roadmap triển khai

| GĐ | Nội dung | Kết quả |
|----|----------|---------|
| **0** | Plan + design system | `PLAN.md` |
| **1** | Trang chủ demo có banner | `index.html` (đang làm) |
| **2** | Tách CSS/JS, dựng trang danh mục + chi tiết SP | `pages/*`, `assets/*` |
| **3** | Dữ liệu SP `products.json` + render động + tìm kiếm/lọc | JS |
| **4** | Giỏ hàng + luồng đặt hàng (mục 8) | cart + checkout |
| **5** | Blog, Giới thiệu, Liên hệ, SEO, responsive QA | hoàn thiện |
| **6** | Deploy (Netlify/Vercel/GitHub Pages) + domain | live |

---

## 8. Bán hàng thật với site tĩnh — phương án

Site tĩnh không có backend, nên để **bán thật** cần một trong các luồng:

1. **Đặt hàng qua form + Messenger/Zalo (đơn giản nhất)** — giữ mô hình "Liên hệ" của XGND: khách bấm đặt → gửi form (Formspree/Google Form) hoặc chat. *Không cần backend.*
2. **Giỏ hàng phía client + checkout qua dịch vụ ngoài** — cart lưu ở `localStorage`, thanh toán/đơn hàng đẩy sang Google Sheet (Apps Script) hoặc email API.
3. **Headless commerce** — nhúng Snipcart / Ecwid / Shopify Buy Button vào site tĩnh để có giỏ hàng + thanh toán thật mà không tự dựng backend.
4. **Chuyển nền tảng** khi cần đầy đủ (kho, đơn, khuyến mãi): WooCommerce hoặc Haravan — giữ nguyên giao diện này làm theme.

> **Khuyến nghị:** GĐ demo dùng **phương án 1–2** (form + cart localStorage) để chạy được ngay; khi cần thanh toán online thật thì gắn **Snipcart/Ecwid** (phương án 3) — ít công, không phá giao diện.

---

## 9. Lưu ý pháp lý

Xì gà/thuốc lá là mặt hàng hạn chế: cần **cổng xác nhận đủ 18 tuổi**, cảnh báo sức khỏe, và tuân thủ quy định quảng cáo thuốc lá tại VN. Sẽ bổ sung popup xác nhận tuổi ở GĐ 5.
