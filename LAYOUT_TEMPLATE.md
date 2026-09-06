# LAYOUT_TEMPLATE — copy verbatim into every page

Workers: every HTML page MUST start from this template so nav/footer/head are
byte-identical across the site. Copy the blocks below into your file, then
change ONLY: `<title>`, `<meta name="description">`, the `<main>` content,
and which nav link gets `class="active"`.

## Head block (paste inside <head>)

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PAGE TITLE | Shaner Auto Detailing LLC — Owatonna, MN</title>
<meta name="description" content="DESCRIPTION with 'auto detailing Owatonna' naturally included.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/styles.css">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚗</text></svg>">
```

## Header + nav (paste immediately after <body>; all 8 pages identical)

```html
<div class="topbar">
  <a href="gift-cards.html">🎁 Gift Cards Available — the perfect present for a fresh ride →</a>
</div>
<header class="site">
  <div class="container nav-wrap">
    <a class="brand" href="index.html">SHANER <span>AUTO DETAILING</span><small>Owatonna, MN</small></a>
    <nav class="main" aria-label="Main">
      <a href="index.html">Home</a>
      <a href="services-pricing.html">Services &amp; Pricing</a>
      <a href="gallery.html">Gallery</a>
      <a href="specials.html">Specials</a>
      <a href="gift-cards.html">Gift Cards</a>
      <a href="book.html" class="btn btn--primary btn-book">Book Now</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>
    <div class="header-cta">
      <a class="header-phone" href="tel:+15074566119">(507) 456-6119</a>
      <button class="nav-toggle" aria-label="Menu">☰</button>
    </div>
  </div>
</header>
```

Set `class="active"` on the nav link matching the current page (e.g. Home on
index.html). Do NOT put class="active" on the Book Now button link.

## Footer (paste before </body> on every page)

```html
<footer class="site">
  <div class="container">
    <div class="footer-grid">
      <div>
        <h4>Shaner Auto Detailing LLC</h4>
        <p style="color:var(--muted);font-size:.93rem">Showroom-shine results in Owatonna, MN. We don't shy away from the tough jobs — daily drivers to your hardest-working equipment.</p>
      </div>
      <div>
        <h4>Explore</h4>
        <ul>
          <li><a href="services-pricing.html">Services &amp; Pricing</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="specials.html">Specials</a></li>
          <li><a href="gift-cards.html">Gift Cards</a></li>
          <li><a href="book.html">Book Now</a></li>
          <li><a href="about.html">About</a></li>
        </ul>
      </div>
      <div>
        <h4>Visit</h4>
        <ul>
          <li>2160 Truman Ave, Owatonna, MN 55060</li>
          <li>Fri 7:30a–3p · Sat 7:30a–2p</li>
          <li>Appointments by request</li>
          <li><a href="contact.html">Get directions</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:+15074566119">(507) 456-6119</a></li>
          <li><a href="book.html">Book an appointment</a></li>
          <li><a href="contact.html">Text us a photo for a fast quote</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Shaner Auto Detailing LLC · Fully insured · Satisfaction guaranteed</span>
      <span>Site by Iron Prairie · Owatonna, MN</span>
    </div>
  </div>
</footer>
<div class="mobile-bar">
  <a class="mb-book" href="book.html">Book Now</a>
  <a class="mb-call" href="tel:+15074566119">Call (507) 456-6119</a>
</div>
<script src="js/scripts.js"></script>
</body>
</html>
```

## Closing CTA band (paste near end of <main> on every page)

```html
<section class="section--dark cta-band">
  <div class="container">
    <div class="eyebrow">Ready when you are</div>
    <h2>Ready for a showroom shine?</h2>
    <p class="lead">Book your appointment today — or call and we'll walk you through the right package for your ride.</p>
    <div class="cta-actions">
      <a class="btn btn--primary" href="book.html">Book Now</a>
      <a class="btn btn--ghost" href="services-pricing.html">View Services &amp; Pricing</a>
    </div>
    <a class="cta-phone-big" href="tel:+15074566119">(507) 456-6119</a>
  </div>
</section>
```

## Rules that apply to every page

- ONE `<h1>` per page (the page title). Section headings use h2/h3.
- Photo captions label vehicle + service (see DESIGN_SPEC §4 G-2).
- Sample testimonials labeled exactly: "Sample testimonials — your real
  reviews will take their place after launch."
- tel links: `tel:+15074566119` only (11 digits). If you see asterisks or
  PHONE_REPLACE_ME anywhere, STOP and note it in NOTES.md — never ship it.
- No inline `style=` attributes unless the shared css has no class for it
  (then note the gap in NOTES.md instead).
- All internal links lowercase: index.html, services-pricing.html, gallery.html,
  book.html, specials.html, gift-cards.html, about.html, contact.html.
