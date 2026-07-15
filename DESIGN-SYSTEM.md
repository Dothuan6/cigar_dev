# DESIGN SYSTEM — Vinataba's Cigar

> Hệ thiết kế cho website xì gà (HTML/CSS/JS tĩnh).
> **UI** tham chiếu `xiganghiepdu.com` · **UX** tham chiếu `cigarhouse.vn` · Tông màu **vàng gold + nâu gỗ**.
> Toàn bộ token nằm ở `:root` trong `assets/css/styles.css` — sửa token là đổi toàn site.

---

## 1. Nguồn tham chiếu & quyết định nền tảng

| Hạng mục | Kết luận |
|---|---|
| Font gốc của XGND | **SFUFuturaBook / SFUFuturaBold** (Futura tiếng Việt) — đo bằng computed style trên site thật |
| Thông số đo được | Body 14px · weight 300 · line-height 1.6 (22.4px) · letter-spacing 0.5px · màu #333 · H1 32px · Nav/Nút 14px Bold IN HOA |
| Vấn đề | SFUFutura là font **bản quyền**, không dùng cho web công khai |
| Font thay thế | **Montserrat** — geometric sans gần Futura, **hỗ trợ đầy đủ tiếng Việt** (Jost bị loại vì thiếu subset tiếng Việt → vỡ dấu) |
| Font phụ | **Dancing Script** (chữ ký "Feel the smoke" trên banner) · **Font Awesome 6.5.2** (icon) |

---

## 2. Design tokens

### 2.1 Màu sắc

| Token | Mã | Dùng cho |
|---|---|---|
| `--gold` | `#C6A15B` | Màu chủ đạo: nút, tiêu đề phụ, viền, icon |
| `--gold-bright` | `#D4AF37` | Trạng thái hover, điểm nhấn |
| `--gold-soft` | `#E8D6A8` | Chữ trên nền tối, đường kẻ nhạt |
| `--wood-900` | `#1A120B` | Nâu gỗ đậm nhất: topbar, footer, chữ trên nền gold |
| `--wood-800` | `#2A1E14` | Nền header, mega menu mobile |
| `--wood-700` | `#3B2A1A` | Nền nav, tiêu đề section, giá |
| `--wood-500` | `#5C4033` | Nâu trung, gradient |
| `--cream` | `#FAF6EF` | Nền trang |
| `--paper` | `#FFFFFF` | Nền khối sáng (trust bar) |
| `--ink` | `#22190F` | Chữ chính |
| `--muted` | `#8A7A66` | Chữ phụ, ngày tháng |
| `--line` | `#ECE3D2` | Đường viền nhạt |

**Nền phụ (hard-code):** `#f3ead6` — nền section "Xì gà hiếm" và "Tin tức".

### 2.2 Đổ bóng

| Token | Giá trị |
|---|---|
| `--shadow` | `0 6px 24px rgba(26,18,11,.10)` |
| `--shadow-sm` | `0 2px 10px rgba(26,18,11,.08)` |
| Sticky header | `0 6px 20px rgba(26,18,11,.28)` (class `.stuck`) |

### 2.3 Typography

| Token | Giá trị |
|---|---|
| `--font-base` / `--font-display` | `"Montserrat","Helvetica Neue",Helvetica,Arial,sans-serif` |
| Thang size | `--fs-11` → `--fs-40`: 11, 12, 13, **14 (base)**, 16, 18, 22, 26, 32, 40 px |
| Weight | `--fw-light:300` · `--fw-regular:400` · `--fw-medium:500` · `--fw-semibold:600` · `--fw-bold:700` |
| Line-height | `--lh-body:1.6` (nội dung) · `--lh-tight:1.2` (tiêu đề) |
| Letter-spacing | `--ls-base:.5px` · `--ls-wide:1px` · `--ls-btn:.5px` |

### 2.4 Bo góc & layout

| Token | Giá trị | Ghi chú |
|---|---|---|
| `--radius` | `6px` | Ô tìm kiếm, badge, input |
| `--radius-lg` | `8px` | Thẻ, hộp |
| `--container` | `1200px` | `.wrap` = max-width 1200 + padding ngang 20px |
| Bo góc 0 | — | **Banner (slider + 2 promo)** và **nút Thêm giỏ / Xem nhanh** dùng góc vuông |

---

## 3. Nguyên tắc typography (chất Futura)

Quy tắc rút từ site gốc, áp dụng nhất quán:

- **Body:** 14px, weight 300, line-height 1.6, letter-spacing 0.5px.
- **Tiêu đề (h1–h5):** display font, **weight 700, IN HOA, letter-spacing 0.5px**, line-height 1.2. Kích thước: h1 32 · h2 26 · h3 18.
- **Nav & nút:** 14px, weight 600–700, **IN HOA**, letter-spacing 0.5px.
- **Nhãn nhỏ** (tên danh mục trên thẻ SP, tiêu đề cột mega): 11–12px, IN HOA, màu gold, letter-spacing 0.5–1px.
- **Ngoại lệ cố ý:** tên sản phẩm và tiêu đề tin dùng `text-transform:none` + `letter-spacing:normal` để dễ đọc chuỗi dài.

**Tiêu đề section:** căn giữa, IN HOA 26px, kèm gạch chân gold `70×3px` bo 2px (`.sec-title::after`).

---

## 4. Thư viện component

### 4.1 Nút — `.btn`
Nền gold, chữ `--wood-900`, IN HOA 14px bold, padding `11px 26px`, radius `--radius`, hover → `--gold-bright` + nhích lên 1px.

| Biến thể | Mô tả |
|---|---|
| `.btn` | Nút chính (gold đặc) |
| `.btn-outline` | Nền trong suốt, viền 1.5px gold, chữ gold; hover đảo nền gold |
| `.card .actions .btn` | Trong thẻ SP: 12px, padding 9px, **radius 0**, chia đều 2 cột |
| "Xem tất cả" | `.btn-outline` + inline `color:var(--wood-700); border:none` (không viền) |

### 4.2 Sticky header — `.site-header`
Bọc `header + nav`, `position:sticky; top:0; z-index:50`. Topbar cuộn mất, header + menu luôn dính.

- JS thêm class `.stuck` khi `scrollY > 10` → đổ bóng + **thu gọn** (padding 8px, logo 46px), transition 0.25s.
- Mobile: `.stuck` logo còn 40px.

### 4.3 Ô tìm kiếm expand — `.search`
Mặc định **chỉ hiện nút gold**; bấm → input trượt mở **từ phải sang trái**.

- Kỹ thuật: container `margin-left:auto` (neo phải) + input `width:0 → 300px`, `opacity 0 → 1`, transition 0.35s. Vì neo phải nên container nở về trái, **nút đứng yên**.
- Class trạng thái: `.search.open` (desktop) · `.search.show` (mobile, full chiều rộng).
- Tương tác: bấm mở + focus → Enter/bấm nút để tìm → Esc, bấm ra ngoài, hoặc bấm nút khi rỗng để đóng.

### 4.4 Nav + Mega menu — `.nav`, `.has-mega`, `.mega`
Nền `--wood-700`, link IN HOA 14px. Một mục **"Sản phẩm"** duy nhất chứa 3 nhóm: Danh mục · Thương hiệu · Phụ kiện.

- Desktop: mega `position:absolute`, hiện khi **hover**, lưới 3 cột, `min-width:640px`, viền trên gold 2px, `h4` chiếm trọn hàng (`grid-column:1/-1`).
- Mobile (≤900): mega `position:static`, hiện khi **bấm** (`.has-mega.open`), lưới 2 cột → 1 cột (≤380).

### 4.5 Hero — `.slider` + `.promos`
Bố cục Cigar House: slider lớn (2fr) + 2 banner promo xếp dọc (1fr), gap 14px.

- `.slider`: `aspect-ratio:855/499` (**bắt buộc** — slide `position:absolute` nên không có chiều cao tự nhiên; thiếu sẽ sập về 0).
- Slide đổi bằng `opacity` 0.7s, class `.on`. Tự chạy 6s/slide + mũi tên + chấm (`.dots span.on` biến thành thanh gold 22px).
- Banner bo góc **0**, ảnh `object-fit:cover`.

### 4.6 Thẻ sản phẩm — `.card`
**Không nền trắng, không viền** — ảnh nổi trực tiếp trên nền kem.

- Ảnh dùng **`mix-blend-mode:multiply`** để nền trắng của ảnh sản phẩm tan vào nền kem (không cần tách nền từng ảnh).
- ⚠️ **Tuyệt đối không đặt `transform` lên `.card`/`.thumb` khi hover** — sẽ tạo stacking context mới làm hỏng blend → lộ nền trắng. Hover **chỉ zoom ảnh**: `.card:hover .thumb img{transform:scale(1.08)}`, clip bằng `.thumb{overflow:hidden}`.
- Cấu trúc: `.thumb` (tỉ lệ 1:1, padding 14px) → `.catname` (gold, IN HOA 11px) → `h3` → `.price` (bold 16px, `--wood-700`) → `.actions`.
- `.thumb.noimg` → hiện chữ "Hình sản phẩm" khi ảnh lỗi (`onerror`).

### 4.7 Danh mục — `.cats` / `.cat`
6 mục, ảnh PNG **đã tách nền trắng**, cao **cố định 108px** (width auto) để mọi ảnh đồng đều, kèm `drop-shadow`. Hover nhích lên 4px. Nhãn IN HOA 13px.

> Chiều cao cố định là bắt buộc: dùng `max-height:100%` trong grid sẽ không constrain đúng → ảnh tràn đè lên nhãn.

### 4.8 Tin tức — `.news-2col`
2 cột: trái 1 tin nổi bật (`.feature`: cover 16/10, tiêu đề 22px IN HOA, ngày in nghiêng, tóm tắt, "Đọc tiếp") · phải danh sách 5 tin (`.news-list .ni`: thumb 130px 16/10 + tiêu đề 14px + ngày). Cover hiện là gradient tạm (`.c1`, `.t2`–`.t6`) — thay bằng `<img>` khi có ảnh thật.

### 4.9 Trust badges — `.trust`
Nền trắng, viền trên/dưới gold nhạt, 3 mục: icon tròn 52px (viền gold, nền kem) + tiêu đề đậm + mô tả 12px.

### 4.10 Nút nổi — `.floats` / `.chat`
- `.floats`: cố định phải, canh giữa dọc. Mỗi tab rộng 152px, `translateX(108px)` → chỉ thò ~44px (icon); **hover trượt ra** `translateX(0)`. Màu: FB `#3b5998` · IG gradient · YT `#cd201f` · Top `#7a1f1f`.
- Nút **Top** `display:none`, JS hiện khi `scrollY > 400`.
- `.chat`: Zalo `#0068ff` + Messenger `#0084ff`, tròn 54px, góc dưới phải.
- Mobile: tab thu còn icon 40px (ẩn `.lb`), chat 48px.

### 4.11 Age gate — `.agegate`
Modal xác nhận 18+, `z-index:100`. **Hiện đang tắt** bằng `style="display:none"` trên `#agegate` — bỏ thuộc tính này để bật lại.

---

## 5. Breakpoints

| Breakpoint | Thay đổi chính |
|---|---|
| **≤1024px** | Danh mục 6→3 cột · mega `min-width:520px` |
| **≤960px** | Hero xếp dọc (promo 2 cột) · SP 4→2 cột · tin tức 2→1 cột · footer 4→2 cột |
| **≤900px** | **Header 1 dòng**: `[☰][logo][🔍][giỏ hàng]` · nav thành hamburger (cao 0 khi đóng, `max-height:70vh` khi mở) · mega bấm-để-mở, 2 cột · ô tìm kiếm ẩn, mở full chiều rộng |
| **≤760px** | Trust badge 2 mục/hàng |
| **≤600px** | Section padding 30px · title 22px · danh mục 2 cột · trust 1 mục/hàng · nút thẻ SP xếp dọc · footer 1 cột · topbar căn giữa (ẩn link phụ) · nút nổi thu icon |
| **≤380px** | SP 1 cột · mega 1 cột |

**Header mobile luôn 1 dòng** nhờ: hamburger nằm trong header (nav không chiếm dòng riêng) + ô tìm kiếm ẩn sau icon 🔍.

---

## 6. Bẫy kỹ thuật đã gặp (đừng lặp lại)

| Vấn đề | Nguyên nhân | Cách xử lý |
|---|---|---|
| Hover sản phẩm lộ nền trắng | `transform` trên `.card` tạo stacking context → hỏng `mix-blend-mode` | Bỏ transform ở card, chỉ zoom `img` |
| Nút "Lên đầu" bấm không chạy | Hàm tên `scrollTop()` trùng thuộc tính `element.scrollTop` trong inline `onclick` → gọi nhầm số 0 | Đổi tên hàm → `goTop()` |
| Banner sập chiều cao, chừa khoảng trắng | Slide `position:absolute` không tạo chiều cao | Đặt `aspect-ratio` cho `.slider` |
| Ảnh danh mục tràn đè chữ | `max-height:100%` không constrain trong grid | Đặt `height` cố định cho `img` |
| Nút search bị che | Flex item mặc định `min-width:auto` | `input{min-width:0}` + `button{flex:0 0 46px}` |

---

## 7. Cấu trúc file

```
Cigar/
├─ index.html              ← trang chủ
├─ PLAN.md                 ← kế hoạch dự án
├─ DESIGN-SYSTEM.md        ← tài liệu này
├─ assets/
│  ├─ css/styles.css       ← toàn bộ style + token (:root)
│  ├─ js/main.js           ← dữ liệu SP, render, slider, cart, menu, search, goTop
│  ├─ img/                 ← logo (đã tách nền), banner, icon, cat1–6.png
│  └─ home_col/            ← ảnh danh mục gốc (.webp)
└─ Logo/                   ← file nguồn (logo, banner gốc)
```

**Thứ tự nạp trong `<head>`:** Google Fonts (Montserrat + Dancing Script) → Font Awesome CDN → `assets/css/styles.css`. JS đặt cuối `<body>`.

---

## 8. Quy ước khi mở rộng

1. **Luôn dùng token**, không hard-code màu/size mới (trừ nền phụ `#f3ead6` đã có sẵn).
2. Tiêu đề/nav/nút mới → giữ **IN HOA + letter-spacing 0.5px**; nội dung dài → `text-transform:none`.
3. Thẻ hiển thị ảnh sản phẩm nền trắng → tái dùng pattern `.thumb img{mix-blend-mode:multiply}` và **không** transform ancestor.
4. Component mới cần responsive theo đúng thang breakpoint mục 5.
5. Ảnh sản phẩm hiện **hotlink từ CDN hstatic** (`C/` = cdn.hstatic, `P/` = product.hstatic trong `main.js`) → cần internet. Muốn chạy offline thì tải về `assets/img/products/` và đổi tiền tố.
