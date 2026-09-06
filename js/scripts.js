/* ============================================================
   SHANER AUTO DETAILING LLC — shared interactions
   Iron Prairie · 2026-09-06
   nav · before/after slider · gallery tabs + lightbox · modals
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector("nav.main");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      mainNav.classList.toggle("open");
    });
    document.addEventListener("click", function (e) {
      if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
        mainNav.classList.remove("open");
      }
    });
  }

  /* ---------- Before/after slider ---------- */
  function initBeforeAfter(el) {
    var after = el.querySelector(".ba-after");
    var divider = el.querySelector(".ba-divider");
    var handle = el.querySelector(".ba-handle");
    if (!after || !divider) return;
    function setPos(clientX) {
      var r = el.getBoundingClientRect();
      var pct = ((clientX - r.left) / r.width) * 100;
      pct = Math.max(4, Math.min(96, pct));
      after.style.clipPath = "inset(0 0 0 " + pct + "%)";
      divider.style.left = pct + "%";
      if (handle) handle.style.left = pct + "%";
    }
    function startDrag(e) {
      e.preventDefault();
      var move = function (ev) {
        var x = ev.touches ? ev.touches[0].clientX : ev.clientX;
        setPos(x);
      };
      var stop = function () {
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseup", stop);
        window.removeEventListener("touchmove", move);
        window.removeEventListener("touchend", stop);
      };
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", stop);
      window.addEventListener("touchmove", move, { passive: true });
      window.addEventListener("touchend", stop);
    }
    el.addEventListener("mousedown", startDrag);
    el.addEventListener("touchstart", startDrag, { passive: true });
  }
  document.querySelectorAll(".beforeafter").forEach(initBeforeAfter);

  /* ---------- Gallery tabs ---------- */
  function initGalleryTabs(root) {
    if (!root) return;
    var tabs = root.querySelectorAll(".gallery-tab");
    var items = root.querySelectorAll(".gallery-item");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");
        var f = tab.getAttribute("data-filter");
        items.forEach(function (item) {
          var show = f === "all" || item.getAttribute("data-cat") === f;
          item.classList.toggle("hidden", !show);
        });
      });
    });
  }
  document.querySelectorAll(".gallery").forEach(initGalleryTabs);

  /* ---------- Lightbox ---------- */
  function initLightbox(root) {
    if (!root) return;
    var overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.innerHTML =
      '<button class="lb-close" aria-label="Close">×</button>' +
      '<button class="lb-prev" aria-label="Previous">‹</button>' +
      '<img alt="">' +
      '<button class="lb-next" aria-label="Next">›</button>' +
      '<div class="lb-cap"></div>';
    document.body.appendChild(overlay);
    var img = overlay.querySelector("img");
    var cap = overlay.querySelector(".lb-cap");
    var items = Array.prototype.slice.call(root.querySelectorAll(".proof-item img, .lightbox-item img"));
    var idx = 0;
    function show(i) {
      idx = (i + items.length) % items.length;
      var src = items[idx].getAttribute("data-full") || items[idx].getAttribute("src");
      img.src = src;
      cap.textContent = items[idx].getAttribute("alt") || "";
    }
    function open(i) {
      if (!items.length) return;
      show(i);
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }
    root.addEventListener("click", function (e) {
      var t = e.target.closest(".proof-item img, .lightbox-item img");
      if (t) { e.preventDefault(); open(items.indexOf(t)); }
    });
    overlay.querySelector(".lb-close").addEventListener("click", close);
    overlay.querySelector(".lb-prev").addEventListener("click", function () { show(idx - 1); });
    overlay.querySelector(".lb-next").addEventListener("click", function () { show(idx + 1); });
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) close();
    });
    document.addEventListener("keydown", function (e) {
      if (!overlay.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    });
  }
  document.querySelectorAll(".gallery").forEach(initLightbox);

  /* ---------- Demo modals (gift card / booking preview) ---------- */
  function initDemoModal(root) {
    if (!root) return;
    var overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML =
      '<div class="modal" role="dialog" aria-modal="true">' +
      '<button class="close-modal" aria-label="Close">×</button>' +
      '<div class="demo-content"></div>' +
      "</div>";
    document.body.appendChild(overlay);
    var content = overlay.querySelector(".demo-content");
    var modalTitle = overlay.querySelector(".modal h3");
    function close() { overlay.classList.remove("open"); }
    overlay.querySelector(".close-modal").addEventListener("click", close);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") overlay.classList.remove("open");
    });
    root.addEventListener("click", function (e) {
      var trig = e.target.closest("[data-demo]");
      if (!trig) return;
      e.preventDefault();
      var kind = trig.getAttribute("data-demo");
      var html = "";
      if (kind === "gift") {
        var amt = trig.getAttribute("data-amount") || "any amount";
        html =
          '<span class="demo-badge">DEMO — checkout activates at launch</span>' +
          '<h3 style="margin-top:12px">Send a gift card</h3>' +
          '<p style="margin-top:6px">Amount: <b style="color:var(--amber)">' + amt + "</b></p>" +
          '<div class="demo-fields">' +
          '<input type="email" placeholder="Recipient email" aria-label="Recipient email">' +
          '<input type="text" placeholder="Your message (optional)" aria-label="Message">' +
          '<button class="btn btn--primary btn--block">Continue to checkout</button>' +
          "</div>" +
          '<p class="modal-note">Online checkout activates at launch — pay by card and the gift code is emailed to your recipient instantly.</p>';
      } else if (kind === "book") {
        html =
          '<span class="demo-badge">Demo preview — online booking activates at launch</span>' +
          '<h3 style="margin-top:12px">Book your appointment</h3>' +
          '<div class="demo-calendar" aria-hidden="true">' +
          '<span class="day unavailable">S</span><span class="day unavailable">M</span>' +
          '<span class="day unavailable">T</span><span class="day unavailable">W</span>' +
          '<span class="day unavailable">T</span><span class="day available">F</span><span class="day available">S</span>' +
          "</div>" +
          '<div class="demo-fields">' +
          '<select aria-label="Service"><option>Full Showroom Detail — from $199</option><option>Express Shine — from $99</option><option>Interior Detail — from $150</option><option>Ceramic Coating — from $650</option></select>' +
          '<input type="text" placeholder="Vehicle year / make / model" aria-label="Vehicle">' +
          '<input type="text" placeholder="Your name" aria-label="Name">' +
          '<input type="tel" placeholder="Phone number" aria-label="Phone">' +
          '<button class="btn btn--primary btn--block">Confirm demo booking</button>' +
          "</div>" +
          '<p class="modal-note">Your customers will book themselves, 24/7, with automatic text reminders.</p>';
      }
      if (content) content.innerHTML = html;
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  }
  document.querySelectorAll("body").forEach(initDemoModal);

  /* ---------- Active nav highlight (lightweight) ---------- */
  var here = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.main a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === here || (here === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });
})();
