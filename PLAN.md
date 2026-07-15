# PLAN — Vinataba's Cigar (Clone & kết hợp XGND + Cigar House)

> Website bán xì gà tĩnh (HTML/CSS/JS), lấy **giao diện (UI)** từ `xiganghiepdu.com`, **trải nghiệm/bố cục (UX)** từ `cigarhouse.vn`, tông màu chủ đạo **vàng gold + nâu gỗ**, có **hero banner** kiểu Cigar House ở đầu trang.
>
> 📐 Chi tiết token, component, breakpoint → xem **`DESIGN-SYSTEM.md`**.

**Trạng thái:** Giai đoạn 0–2 ✅ hoàn thành — đã có trang chủ hoàn chỉnh, tách CSS/JS, responsive, dữ liệu + ảnh sản phẩm thật. Đang ở ngưỡng GĐ 3.

---

## 1. Mục tiêu

| # | Mục tiêu | Nguồn | Trạng thái |
|---|----------|-------|-----------|
| 1 | Bố cục UI trang chủ (header, lưới SP, section, footer) | XGND | ✅ |
| 2 | Trải nghiệm UX (mega menu, hero + 2 banner phụ, trust badge, quick-view) | Cigar House | ✅ |
| 3 | Tông màu **gold `#C6A15B` + nâu gỗ `#3B2A1A`** thay đỏ `#C51230` của XGND | Yêu cầu | ✅ |
| 4 | **Hero banner** đầu trang (slider trái + 2 promo phải) | Cigar House | ✅ |
| 5 | Thương hiệu **Vinataba's Cigar** (logo, favicon, thông tin liên hệ thật) | Yêu cầu | ✅ |
| 6 | Bán hàng thật trên nền tĩnh → cần luồng đặt hàng phù hợp | Yêu cầu | ⏳ mục 8 |

---

## 2. Phân tích 2 site nguồn

### 2.1 XGND — `xiganghiepdu.com` (lấy UI)
- Nền tảng: Haravan. Tông đỏ đô `#C51230`. Font gốc **SFUFutura** (Futura tiếng Việt).
- **Top bar:** "LIÊN HỆ: 0919803825 (09:00-21:00)".
- **Header:** logo XGND · ô tìm kiếm có dropdown danh mục · nút search đỏ.
- **Nav:** Trang chủ · Sản phẩm (submenu) · Blog · Giới thiệu · Liên hệ · Kiểm tra đơn hàng.
- **Hero:** 1 banner slider lớn.
- **Dải icon danh mục:** 6 mục — Quà Tặng · Loại Nhỏ · Hiếm · Phụ Kiện · Combo · Thuốc Lá.
- **Section sản phẩm:** Chính Hãng · Mini · Hiếm · Phụ Kiện — lưới 4 cột, card có badge điểm + nút "LIÊN HỆ".
- **Tin tức:** slider 3 card. **Footer tối:** logo · liên hệ · cột Sản phẩm/Chính sách · fanpage.

### 2.2 Cigar House — `cigarhouse.vn` (lấy UX)
- Nền tảng: WooCommerce. Tông tối nâu/gold sang trọng.
- **HERO (điểm chính bê sang):** slider lớn ~2/3 trái + **2 banner promo xếp chồng** phải.
- **Dải trust badge** dưới hero: Thanh toán linh hoạt · Ship toàn quốc · Chính hãng.
- **Mega menu** phân loại theo thương hiệu / độ mạnh / wrapper / đóng gói.
- **Sản phẩm:** hiện giá + "Thêm vào giỏ" + "Xem nhanh".

### 2.3 Kết hợp (đã triển khai)

| Thành phần | Lấy từ | Ghi chú |
|-----------|--------|---------|
| Khung header + search + lưới SP + footer | XGND | Giữ bố cục quen thuộc |
| Hero (slider + 2 promo) + trust badge | Cigar House | Điểm nhấn đầu trang |
| Mega menu phân loại | Cigar House | Gộp vào **1 mục "Sản phẩm"** |
| Hiện giá + thêm giỏ + xem nhanh | Cigar House | Thay nút "Liên hệ" của XGND |
| Tông màu gold + nâu gỗ | **Mới** | Thay đỏ đô |
| Font Montserrat (thay SFUFutura) | **Mới** | Giữ đúng "chất Futura", đủ tiếng Việt |

---

## 3. Design System

Tóm tắt — **chi tiết đầy đủ ở `DESIGN-SYSTEM.md`**.

| Nhóm | Giá trị chính |
|---|---|
| Màu | gold `#C6A15B` · gold-bright `#D4AF37` · gold-soft `#E8D6A8` · wood 900/800/700/500 `#1A120B`/`#2A1E14`/`#3B2A1A`/`#5C4033` · cream `#FAF6EF` · ink `#22190F` · muted `#8A7A66` |
| Font | **Montserrat** (thay SFUFutura bản quyền) + Dancing Script (chữ ký banner) + Font Awesome 6.5.2 |
| Quy tắc chữ | Body 14px/300/1.6/0.5px · Tiêu đề & nav & nút: **700, IN HOA, 0.5px** |
| Bo góc | `--radius` 6px · `--radius-lg` 8px · **banner và nút thẻ SP = 0** |
| Container | 1200px + padding ngang 20px |

Toàn bộ token nằm ở `:root` trong `assets/css/styles.css` — sửa token là đổi toàn site.

---

## 4. Sitemap

```
/ (Trang chủ)                     ← ✅ đã dựng
/collections/all                  (Tất cả sản phẩm)
/collections/:category            (điếu lớn, mini, hiếm, phụ kiện, thuốc lá, combo)
/brand/:brand                     (Cohiba, Montecristo, Partagas, ...)
/product/:slug                    (Chi tiết SP)
/blog, /blog/:slug                (Tin tức)
/gioi-thieu, /lien-he
/gio-hang, /thanh-toan
/kiem-tra-don-hang
```

---

## 5. Cấu trúc thư mục (thực tế)

```
Cigar/
├─ index.html               ← trang chủ (hoàn chỉnh)
├─ favicon.ico              ← favicon đa cỡ 16/32/48
├─ PLAN.md                  ← file này
├─ DESIGN-SYSTEM.md         ← tài liệu hệ thiết kế
├─ assets/
│  ├─ css/styles.css        ← toàn bộ style + token (:root)
│  ├─ js/main.js            ← data SP, render, slider, cart, menu, search, goTop
│  ├─ img/                  ← logo & cat1–6 (đã tách nền), banner, icon, favicon-*
│  └─ home_col/             ← ảnh danh mục gốc (.webp)
└─ Logo/                    ← file nguồn (logo, banner gốc)
```

**Sẽ thêm ở GĐ sau:** `pages/` (collection, product, blog, about, contact, cart) và `data/products.json`.

---

## 6. Cấu trúc trang chủ (đã dựng)

1. **Top bar** — LIÊN HỆ 0989 128 507 + Kiểm tra đơn hàng · Tài khoản.
2. **Sticky header** — hamburger (mobile) · logo Vinataba · **ô tìm kiếm expand** · giỏ hàng. Dính khi cuộn, tự thu gọn.
3. **Nav** — Trang chủ · **Sản phẩm** (mega: Danh mục / Thương hiệu / Phụ kiện) · Tin tức · Giới thiệu · Liên hệ.
4. **HERO** — slider 2 banner thật (Chinh phục giới quý tộc / Sang trọng đẳng cấp) + 2 promo phải.
5. **Trust badges** — Thanh toán linh hoạt · Ship toàn quốc · Chính hãng.
6. **Dải 6 danh mục** — ảnh sản phẩm tách nền.
7. **Xì Gà Chính Hãng** — lưới 4 cột (8 SP thật).
8. **Xì Gà Mini** — lưới 4 cột (8 SP thật).
9. **Xì Gà Hiếm** — lưới 4 cột (8 SP thật).
10. **Phụ Kiện Xì Gà** — lưới 4 cột (8 SP thật).
11. **Tin tức** — 2 cột: 1 tin nổi bật + danh sách 5 tin.
12. **Đăng ký nhận tin.**
13. **Footer** tối, điểm nhấn gold, liên hệ thật.
14. **Nút nổi** — Facebook/Instagram/YouTube (hover trượt ra), Lên đầu (hiện khi cuộn), Zalo + Messenger.

> Đã bỏ so với bản đầu: dải tên thương hiệu giữa trang, mục "Combo trải nghiệm" trên nav, "Hệ thống cửa hàng" trên topbar, dropdown "Tất cả" ở ô tìm kiếm.

---

## 7. Roadmap

| GĐ | Nội dung | Kết quả | Trạng thái |
|----|----------|---------|-----------|
| **0** | Plan + design system | `PLAN.md`, `DESIGN-SYSTEM.md` | ✅ |
| **1** | Trang chủ demo có banner | `index.html` | ✅ |
| **2** | Tách CSS/JS · responsive · ảnh + data SP thật · logo/favicon | `assets/*` | ✅ |
| **3** | Dựng trang danh mục + chi tiết SP · `products.json` render động · tìm kiếm/lọc thật | `pages/*`, `data/` | ⏳ tiếp theo |
| **4** | Giỏ hàng + luồng đặt hàng (mục 8) | cart + checkout | ⏳ |
| **5** | Blog, Giới thiệu, Liên hệ, SEO, QA | hoàn thiện | ⏳ |
| **6** | Deploy (GitHub Pages/Netlify/Vercel) + domain | live | ⏳ repo: `github.com/Dothuan6/cigar_dev` |

**Việc tồn đọng (nice-to-have):**
- Ảnh SP đang **hotlink CDN hstatic** → cần internet. Muốn offline: tải về `assets/img/products/`.
- Ảnh tin tức đang là gradient tạm → thay ảnh bài viết thật.
- Bật lại modal 18+ (đang tắt bằng `display:none`).
- Gắn link thật cho Facebook / Instagram / YouTube / Zalo / Messenger.

---

## 8. Bán hàng thật với site tĩnh — phương án

Site tĩnh không có backend, nên để **bán thật** cần một trong các luồng:

1. **Đặt hàng qua form + Messenger/Zalo (đơn giản nhất)** — khách bấm đặt → gửi form (Formspree/Google Form) hoặc chat. *Không cần backend.*
2. **Giỏ hàng client + checkout dịch vụ ngoài** — cart `localStorage`, đơn đẩy sang Google Sheet (Apps Script) hoặc email API.
3. **Headless commerce** — nhúng Snipcart / Ecwid / Shopify Buy Button để có giỏ hàng + thanh toán thật.
4. **Chuyển nền tảng** khi cần đầy đủ (kho, đơn, khuyến mãi): WooCommerce / Haravan — giữ giao diện này làm theme.

> **Khuyến nghị:** hiện cart mới đếm số lượng (demo). GĐ 4 làm **phương án 1–2** để chạy được ngay; cần thanh toán online thật thì gắn **Snipcart/Ecwid** (phương án 3) — ít công, không phá giao diện.

---

## 9. Lưu ý pháp lý

Xì gà/thuốc lá là mặt hàng hạn chế: cần **cổng xác nhận đủ 18 tuổi**, cảnh báo sức khỏe, và tuân thủ quy định quảng cáo thuốc lá tại VN.

Modal 18+ **đã dựng sẵn** (`.agegate`) nhưng đang tắt tạm bằng `style="display:none"` trên `#agegate` — **bật lại trước khi lên production**. Footer đã có dòng cảnh báo "Hút thuốc lá có hại cho sức khỏe".
