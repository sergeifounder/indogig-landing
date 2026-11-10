"""Build the static marketing pages with Python 3. No dependencies."""

import json
from html import escape
from pathlib import Path
from urllib.parse import quote
from xml.etree import ElementTree as ET

from content import PAGES
from icons import SECTION_ICONS, icon

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = "https://indogig.com"
PHONE = "6281315935800"
UPDATED = "2026-11-08"

NAV = {
    "/companies/": ("For companies", "Untuk perusahaan"),
    "/pilot/": ("Pilot", "Uji coba"),
    "/services/hire-staff/": ("External cover", "Tenaga tambahan"),
    "/services/find-work/": ("For workers", "Untuk pekerja"),
    "/pricing/": ("Pricing", "Biaya"),
    "/industries/": ("Industries", "Jenis usaha"),
    "/locations/": ("Locations", "Area"),
    "/about/": ("About", "Tentang kami"),
    "/contact/": ("Contact", "Kontak"),
}
MESSAGES = {
    "pilot": (
        "Discuss a pilot", "Diskusikan uji coba",
        "Hi IndoGig, I’d like to discuss a scheduling pilot for our venue.",
        "Halo IndoGig, saya ingin membahas uji coba penjadwalan untuk usaha kami.",
    ),
    "cover": (
        "Discuss external cover", "Diskusikan tenaga tambahan",
        "Hi IndoGig, I’d like to discuss external cover for a shift.",
        "Halo IndoGig, saya ingin membahas kebutuhan tenaga tambahan untuk satu shift.",
    ),
    "help": (
        "Ask a worker question", "Ajukan pertanyaan pekerja",
        "Hi IndoGig, I have a question about a hospitality shift.",
        "Halo IndoGig, saya ingin bertanya tentang shift hospitality.",
    ),
    "worker": (
        "Ask about opportunities", "Tanya tentang peluang",
        "Hi IndoGig, I’m interested in hospitality shift opportunities in Bali.",
        "Halo IndoGig, saya tertarik dengan peluang shift hospitality di Bali.",
    ),
}
IMAGES = {
    "/companies/": ("hotel-lobby.webp", "Hospitality venue interior", "Interior tempat hospitality"),
    "/contact/": ("contact-hero.webp", "Hospitality venue in Bali", "Tempat hospitality di Bali"),
    "/pilot/": ("hotel-lobby.webp", "Hospitality venue interior", "Interior tempat hospitality"),
    "/services/hire-staff/": ("restaurant.webp", "Restaurant service area", "Area layanan restoran"),
    "/services/find-work/": ("for-workers.webp", "Illustration of hospitality workers", "Ilustrasi pekerja hospitality"),
    "/industries/": ("beach-club.webp", "Beach club setting", "Suasana beach club"),
    "/locations/": ("locations-hero.webp", "Bali landscape", "Pemandangan Bali"),
    "/about/": ("about-hero.webp", "Bali hospitality setting", "Suasana hospitality di Bali"),
}


def local(path, language):
    return ("/id" if language else "") + path


def link(path, label, css="", extra=""):
    return f'<a href="{escape(path, quote=True)}" class="{css}"{extra}>{escape(label)}</a>'


def action(kind, language, secondary=False):
    message = MESSAGES[kind]
    return link(f"https://wa.me/{PHONE}?text={quote(message[2 + language])}",
                message[language], "button secondary" if secondary else "button")


def roster(language):
    en = ("Weekly coverage", "Sample venue · Saturday", "Shift", "Coverage", "Source",
          "Confirmed", "Pending", "Gap", "Regular staff", "Own flex pool", "Review cover",
          "Illustrative schedule", "2 of 4 confirmed", "Service", "Bar", "Kitchen")
    idn = ("Keterisian jadwal mingguan", "Contoh lokasi · Sabtu", "Shift", "Keterisian", "Sumber",
           "Terkonfirmasi", "Menunggu", "Kosong", "Staf tetap", "Pool internal", "Tinjau kebutuhan",
           "Contoh jadwal", "2 dari 4 terkonfirmasi", "Layanan", "Bar", "Dapur")
    t = idn if language else en
    rows = [(t[13], "16:00–22:00", "2/2", t[5], t[8], "good"),
            (t[14], "17:00–23:00", "0/1", t[6], t[9], "pending"),
            (t[15], "17:00–22:00", "0/1", t[7], t[10], "gap")]
    status_icons = {"good": "check", "pending": "clock", "gap": "gap"}
    body = "\n".join(
        f'<tr><th scope="row">{role}<small>{hours}</small></th>'
        f'<td><strong>{count}</strong><small class="status {state}">{icon(status_icons[state])}{status}</small></td>'
        f'<td>{source}</td></tr>' for role, hours, count, status, source, state in rows
    )
    return f'''<figure class="board">
      <figcaption><span class="example">{t[11]}</span><strong>{t[0]}</strong><span>{t[1]}</span></figcaption>
      <table aria-label="{t[0]}">
        <thead><tr><th scope="col">{t[2]}</th><th scope="col">{t[3]}</th><th scope="col">{t[4]}</th></tr></thead>
        <tbody>{body}</tbody>
      </table>
      <div class="board-note"><span aria-hidden="true"></span>{t[12]}</div>
    </figure>'''


def navigation(path, language):
    def nav_item(destination):
        current = ' aria-current="page"' if path == destination else ""
        return link(local(destination, language), NAV[destination][language], extra=current)

    primary = "".join(nav_item(destination) for destination in ("/companies/", "/services/find-work/"))
    labels = ("Main navigation", "Navigasi utama")
    alternate = 1 - language
    switch = link(local(path if path in PAGES else "/", alternate),
                  ("EN", "ID")[alternate], "language",
                  f' lang="{("en", "id")[alternate]}" hreflang="{("en", "id")[alternate]}" aria-label="{("English", "Bahasa Indonesia")[alternate]}"')
    return f'''<header class="site-header"><div class="wrap header-inner">
      <a class="brand" href="{local("/", language)}"><img src="/favicon.svg" width="34" height="34" alt=""><span>Indo<span class="brand-accent">Gig</span></span></a>
      <nav class="audience-nav" aria-label="{labels[language]}">{primary}</nav>
      {switch}
    </div></header>'''


def footer(language):
    suffix = "#content-id" if language else ""
    legal = link("/privacy-policy.html" + suffix, ("Privacy", "Privasi")[language])
    terms = link("/user-agreement.html" + suffix, ("Terms", "Ketentuan")[language])
    links = "".join(link(local(path, language), labels[language]) for path, labels in NAV.items())
    return f'''<footer class="site-footer"><div class="wrap footer-grid">
      <div><strong>IndoGig</strong><p>PT INDOGIG HRTECH INDONESIA<br>Jl. Sunset Road Tengah Building No. 9<br>Seminyak, Bali 80361</p>
      <a href="mailto:info@indogig.com">info@indogig.com</a></div>
      <nav aria-label="{("Explore IndoGig", "Jelajahi IndoGig")[language]}">{links}</nav>
      <div class="legal-links">{legal}{terms}</div>
    </div></footer>'''


INDUSTRY_PHOTOS = {
    "hotels": "hotel-lobby", "restaurants": "restaurant", "beach-clubs": "beach-club",
    "events": "event-mice", "weddings": "wedding", "retail": "retail-promo",
}


def industry_photo(slug):
    return (f'<img class="industry-photo" src="/images/optimized/{INDUSTRY_PHOTOS[slug]}.webp" '
            'width="720" height="420" loading="lazy" alt="">')


def section(slug, heading, cards, language):
    items = []
    for index, card in enumerate(cards):
        anchor = f' id="{card[4]}"' if len(card) == 5 else ""
        contact = ""
        if slug == "contact-paths":
            contact = (action(("pilot", "cover")[index], language, secondary=True)
                       if index < 2 else action("help", language, secondary=True))
        if slug == "worker-paths" and index == 1:
            contact = action("worker", language, secondary=True)
        photo = industry_photo(card[4]) if len(card) == 5 and card[4] in INDUSTRY_PHOTOS else ""
        icons = SECTION_ICONS.get(slug)
        symbol = icon("pin" if slug == "areas" else icons[index], "feature-icon") if icons or slug == "areas" else ""
        items.append(f'<article{anchor}>{photo}{symbol}<h3>{escape(card[language])}</h3>'
                     f'<p>{escape(card[2 + language])}</p>{contact}</article>')
    return (f'<section class="content-section wrap" id="{slug}">'
            f'<h2>{escape(heading[language])}</h2><div class="cards">{"".join(items)}</div></section>')


def faq(questions, language):
    items = "\n".join(f'<details><summary>{escape(q[language])}</summary>'
                      f'<p>{escape(q[2 + language])}</p></details>' for q in questions)
    return (f'<section class="faq wrap"><h2>{("Common questions", "Pertanyaan umum")[language]}</h2>'
            f'<div>{items}</div></section>')


def page_actions(path, language):
    pilot = link(local("/pilot/", language), ("Explore the pilot", "Lihat uji coba")[language], "button secondary")
    cover = link(local("/services/hire-staff/", language),
                 ("I need extra staff", "Saya butuh tenaga tambahan")[language], "button secondary")
    if path == "/":
        return (link(local("/companies/", language), NAV["/companies/"][language] + " →", "button")
                + link(local("/services/find-work/", language), NAV["/services/find-work/"][language] + " →", "button dark"))
    if path == "/companies/":
        return link("#example", ("See how it works", "Lihat cara kerja")[language], "button") + cover
    if path == "/services/hire-staff/":
        return action("cover", language) + link(local("/pricing/", language), NAV["/pricing/"][language], "button secondary")
    if path == "/services/find-work/":
        return link("#worker-paths", ("See your options", "Lihat pilihan Anda")[language], "button")
    if path == "/contact/":
        return link("#contact-paths", ("Choose an enquiry", "Pilih kebutuhan")[language], "button")
    if path == "/pilot/":
        return action("pilot", language) + link("#setup", ("See the scope", "Lihat cakupan")[language], "button secondary")
    return action("pilot", language) + (cover if path == "/pricing/" else pilot)


def audiences(language):
    entries = (
        ("/companies/", ("Run your venue’s shifts", "Atur shift tempat usaha"),
         ("See who’s confirmed, fill gaps with people you trust and review hours before handing them to finance.",
          "Lihat siapa yang sudah konfirmasi, isi shift dengan pekerja tepercaya, dan periksa jam kerja sebelum diserahkan ke keuangan."),
         ("See how it works for companies", "Lihat cara kerja untuk perusahaan")),
        ("/services/find-work/", ("Check invitations or find shifts", "Periksa undangan atau cari shift"),
         ("Find out where and when you’d work, the rate and who pays before you accept a shift.",
          "Ketahui lokasi, jadwal, upah, dan siapa yang membayar sebelum menerima shift."),
         ("See your options as a worker", "Lihat pilihan untuk pekerja")),
    )
    cards = []
    for (path, heading, detail, button), image in zip(entries, ("for-business", "for-workers")):
        style = "path-business" if path == "/companies/" else "path-workers"
        photo = f'<img src="/images/optimized/{image}.webp" width="720" height="420" loading="lazy" alt="">'
        symbol = icon("building" if path == "/companies/" else "person")
        cards.append(f'<article class="path-card {style}"><div class="path-img">{photo}</div>'
                     f'<div class="path-content"><p class="eyebrow audience-label">{symbol}{NAV[path][language]}</p>'
                     f'<h2>{escape(heading[language])}</h2><p>{escape(detail[language])}</p>'
                     f'{link(local(path, language), button[language] + " →", "button")}</div></article>')
    return f'<section class="wrap audience-cards" aria-label="{("Choose your path", "Pilih jalur Anda")[language]}">{"".join(cards)}</section>'


def animated_phone(language):
    label = ("Illustrative WhatsApp exchange", "Contoh percakapan WhatsApp")[language]
    msgs = (
        ("out", "Saturday dinner still needs one server. I’ll invite someone from our own team.",
         "Makan malam Sabtu masih butuh satu pramusaji. Saya akan mengundang anggota tim sendiri."),
        ("in", "Shift invitation · Saturday, 17:00–22:00. Review the venue, rate and payment terms.",
         "Undangan shift · Sabtu, 17.00–22.00. Periksa lokasi, upah, dan ketentuan pembayaran."),
        ("out", "I’ve checked the details. I can take this shift.",
         "Saya sudah memeriksa detailnya. Saya bisa mengambil shift ini."),
        ("in", "Confirmed · Saturday dinner now has four of four servers.",
         "Terkonfirmasi · Empat dari empat pramusaji siap untuk Sabtu malam."),
    )
    bubbles = "".join(f'<li class="hp-msg {direction}" style="--step:{i}">{escape(idn if language else en)}</li>'
                      for i, (direction, en, idn) in enumerate(msgs))
    badges = (("One roster", "Satu jadwal"), ("Your own team", "Tim Anda"), ("Shift confirmed", "Shift terkonfirmasi"))
    tags = "".join(f'<span class="hero-fbadge demo-badge badge-{i}" aria-hidden="true">{pair[language]}</span>'
                   for i, pair in enumerate(badges))
    return f'''<figure class="hero-phone" aria-label="{label}">
      <div class="hero-phone-glow" aria-hidden="true"></div>{tags}
      <div class="hp"><div class="hp-notch" aria-hidden="true"></div>
        <div class="hp-screen">
          <div class="hp-wa-hdr"><span class="av" aria-hidden="true">IG</span>
          <span><strong class="nm">IndoGig</strong><small class="st">{label}</small></span></div>
          <ol class="hp-wa-body">{bubbles}</ol>
        </div><div class="hp-home" aria-hidden="true"></div>
      </div>
    </figure>'''


def use_cases(language):
    cards = []
    for key, title, detail, symbol in (
        ("hotels", ("Hotels & resorts", "Hotel dan resor"),
         ("Coordinate housekeeping and banquet coverage around guest arrivals and events.",
          "Atur petugas housekeeping dan banquet sesuai kedatangan tamu dan jadwal acara."), "building"),
        ("restaurants", ("Restaurants & cafés", "Restoran dan kafe"),
         ("See who’s confirmed for dinner service and who can cover the next busy shift.",
          "Lihat siapa yang sudah terkonfirmasi untuk makan malam dan siapa yang bisa mengisi shift ramai berikutnya."), "dining"),
        ("beach-clubs", ("Beach clubs", "Beach club"),
         ("Plan bar, floor and guest service shifts before weekends and scheduled events.",
          "Susun shift bar, area layanan, dan layanan tamu sebelum akhir pekan dan acara."), "sun"),
    ):
        label = ("See this use case", "Lihat contohnya")[language]
        destination = local("/industries/", language) + "#" + ("hotel-workflow" if key == "hotels" else key)
        accessible = f' aria-label="{label}: {escape(title[language], quote=True)}"'
        cards.append(f'<article>{industry_photo(key)}{icon(symbol, "feature-icon")}<h3>{escape(title[language])}</h3>'
                     f'<p>{escape(detail[language])}</p>{link(destination, label, "text-link", accessible)}</article>')
    return f'''<section class="content-section wrap" aria-labelledby="use-case-heading">
      <h2 id="use-case-heading">{("Built around hospitality in Bali", "Sesuai kebutuhan hospitality di Bali")[language]}</h2>
      <div class="cards">{''.join(cards)}</div></section>'''


def coverage_story(language):
    title = ("A Saturday shift, from gap to plan", "Shift Sabtu, dari kosong hingga terencana")[language]
    intro = ("Here’s what the proposed workflow looks like for a restaurant manager.",
             "Begini contoh alur yang direncanakan untuk pengelola restoran.")[language]
    steps = [
        ("See the gap", "Lihat kekosongan", "Dinner service needs four people. Two are confirmed for service, while bar and kitchen still need coverage.",
         "Layanan makan malam membutuhkan empat orang. Dua staf layanan sudah terkonfirmasi, sementara bar dan dapur masih perlu diisi."),
        ("Ask the people you know", "Hubungi pekerja yang dikenal", "Send an invitation to a daily worker and see whether they confirm. For the remaining gap, discuss outside help if needed.",
         "Kirim undangan kepada pekerja harian dan lihat apakah mereka mengonfirmasi. Untuk kekosongan yang tersisa, diskusikan bantuan dari luar bila perlu."),
        ("Close the shift", "Tutup shift", "After service, review the hours and pass the approved record to finance.",
         "Setelah layanan, periksa jam kerja dan serahkan rekap yang disetujui ke keuangan."),
    ]
    items = "".join(f'<li><strong>{escape(step[language])}</strong><p>{escape(step[language + 2])}</p></li>' for step in steps)
    return f'''<section class="wrap coverage-preview" aria-labelledby="coverage-heading"><div>
      <h2 id="coverage-heading">{title}</h2><p>{intro}</p><ol>{items}</ol>
    </div>{roster(language)}</section>'''


def page(path, language):
    data = PAGES[path]
    title, heading, lead = [escape(data[key][language], quote=True) for key in ("title", "heading", "lead")]
    lang = ("en", "id")[language]
    canonical = ORIGIN + local(path, language)
    english, indonesian = ORIGIN + path, ORIGIN + local(path, 1)
    visual = ""
    if path == "/":
        visual = animated_phone(language)
    elif path in IMAGES:
        image = IMAGES[path]
        visual = f'<img class="hero-photo" src="/images/optimized/{image[0]}" alt="{escape(image[1 + language])}" width="800" height="520">'
    buttons = page_actions(path, language)
    actions = f'<div class="actions">{buttons}</div>' if buttons else ""
    hero = f'''<section class="hero{" home-hero" if path == "/" else ""}"><div class="wrap hero-grid{" split" if visual else ""}">
      <div class="hero-copy"><p class="eyebrow">{escape(data["eyebrow"][language])}</p>
      <h1>{heading}</h1><p class="lead">{lead}</p>
      {actions}</div>{visual}
    </div></section>'''
    sections = "".join(section(*item, language) for item in data["sections"])
    if path == "/":
        sections = audiences(language) + coverage_story(language) + sections + use_cases(language)
        pilot_heading = ("One venue. One real roster.", "Satu lokasi. Satu jadwal nyata.")[language]
        pilot_text = ("The proposed 30-day pilot is for hospitality teams with a manager and an existing roster to bring. We’ll agree the scope and setup before you start.",
                      "Uji coba 30 hari dirancang untuk tim hospitality yang sudah memiliki pengelola dan jadwal kerja. Cakupan dan persiapan disepakati sebelum mulai.")[language]
        sections += f'''<section class="wrap pilot-panel" id="about"><div><p class="eyebrow">{("Founding pilot", "Uji coba awal")[language]}</p>
          <h2>{pilot_heading}</h2><p>{pilot_text}</p></div>
          <div class="actions">{link(local("/pilot/", language), ("See the pilot", "Lihat uji coba")[language], "button")}
          {link(local("/industries/", language), NAV["/industries/"][language], "button secondary", ' id="industries"')}
          {link(local("/locations/", language), NAV["/locations/"][language], "button secondary", ' id="locations"')}</div></section>'''
    if "faq" in data:
        sections += faq(data["faq"], language)
    if path not in ("/services/find-work/", "/contact/"):
        copy = ("Could this work for your venue?", "Apakah ini cocok untuk tempat Anda?")
        sections += f'''<section class="wrap close-section"><div><h2>{copy[language]}</h2>
          <div class="actions">{action("cover", language) if path == "/services/hire-staff/" else link(local("/pilot/", language), ("Explore the 30-day pilot", "Lihat uji coba 30 hari")[language], "button") if path == "/companies/" else action("pilot", language)}
          {link(local("/contact/", language), NAV["/contact/"][language], "button secondary")}</div></div></section>'''
    organization = json.dumps({
        "@context": "https://schema.org", "@type": "Organization", "@id": ORIGIN + "/#organization",
        "name": "IndoGig", "legalName": "PT INDOGIG HRTECH INDONESIA", "url": ORIGIN + "/",
        "email": "info@indogig.com", "logo": ORIGIN + "/favicon.svg",
    })
    schema = f'<script type="application/ld+json">{organization}</script>' if path in ("/", "/about/") else ""
    return f'''<!doctype html>
<html lang="{lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title}</title>
  <meta name="description" content="{lead}">
  <link rel="canonical" href="{canonical}">
  <link rel="alternate" hreflang="en" href="{english}">
  <link rel="alternate" hreflang="id" href="{indonesian}">
  <link rel="alternate" hreflang="x-default" href="{english}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="{("en_US", "id_ID")[language]}">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{lead}">
  <meta property="og:url" content="{canonical}">
  <meta property="og:image" content="{ORIGIN}/social-preview.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="{("IndoGig Bali with an illustrated shift roster", "IndoGig Bali dengan ilustrasi jadwal shift")[language]}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="{ORIGIN}/social-preview.jpg">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap">
  <link rel="stylesheet" href="/css/legacy-visuals.css">
  <link rel="stylesheet" href="/css/site.css">
  <script src="/js/site-motion.js" defer></script>
{schema}
</head>
<body>
  {link("#main", ("Skip to content", "Langsung ke isi")[language], "skip")}
  {navigation(path, language)}
  <main id="main">
    {hero}
    {sections}
  </main>
  {footer(language)}
</body>
</html>
'''


def build():
    for route in PAGES:
        for language in (0, 1):
            target = ROOT / local(route, language).strip("/") / "index.html"
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text(page(route, language), encoding="utf-8")

    sitemap = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    routes = [local(route, language) for route in PAGES for language in (0, 1)]
    routes += ["/privacy-policy.html", "/user-agreement.html"]
    for route in routes:
        url = ET.SubElement(sitemap, "url")
        ET.SubElement(url, "loc").text = ORIGIN + route
        ET.SubElement(url, "lastmod").text = UPDATED
    ET.indent(sitemap, space="  ")
    ET.ElementTree(sitemap).write(ROOT / "sitemap.xml", encoding="utf-8", xml_declaration=True)

    (ROOT / "404.html").write_text(f'''<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex"><title>Page not found | IndoGig</title>
  <link rel="icon" href="/favicon.svg"><link rel="stylesheet" href="/css/site.css">
  <script src="/js/site-motion.js" defer></script>
</head>
<body>
  {link("#main", "Skip to content", "skip")}
  {navigation("", 0)}
  <main id="main"><section class="hero"><div class="wrap hero-grid">
    <p class="eyebrow">404</p><h1>Page not found</h1>
    <p class="lead">This address may have changed. Start from the home page or contact us.</p>
    <div class="actions">{link("/", "Back to IndoGig", "button")}
    {link("/contact/", "Contact", "button secondary")}</div>
  </div></section></main>
  {footer(0)}
</body>
</html>
''', encoding="utf-8")


if __name__ == "__main__":
    build()
