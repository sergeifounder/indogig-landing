"""Decorative line icons. Each icon is paired with visible text."""

PATHS = {
    "calendar": '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-13 5h3m3 0h2"/>',
    "people": '<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-15a3 3 0 0 1 0 6m2 3a4 4 0 0 1 3 4v2"/>',
    "person": '<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2"/>',
    "clock": '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    "message": '<path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-1-2V6a2 2 0 0 1 2-2Zm2 5h10m-10 4h6"/>',
    "document": '<path d="M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10Zm0 0v7h7M8 14h8m-8 3h5"/>',
    "building": '<path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16M2 21h20M9 21v-5h6v5M8 7h2m4 0h2M8 11h2m4 0h2"/>',
    "dining": '<path d="M5 3v6a3 3 0 0 0 6 0V3M8 3v18m12-18c-4 2-5 6-5 11h5m0-11v18"/>',
    "sun": '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4m11.2-11.2L19 5"/>',
    "pin": '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    "check": '<path d="m5 12 4 4L19 6"/>',
    "gap": '<circle cx="12" cy="12" r="9"/><path d="M8 12h8"/>',
    "wallet": '<path d="M19 8V6a2 2 0 0 0-2-2H6a3 3 0 0 0 0 6h13a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3V7m18 7h-4"/>',
}

SECTION_ICONS = {
    "team": ("building", "people", "message"),
    "how-it-works": ("calendar", "message", "document"),
    "benefits": ("message", "calendar", "document"),
    "example": ("calendar", "people", "document"),
    "hotel-workflow": ("building", "people", "document"),
    "setup": ("people", "calendar", "clock"),
    "review": ("clock", "document"),
    "request": ("message", "document", "check"),
    "roles": ("dining", "building"),
    "worker-paths": ("message", "person"),
    "worker-steps": ("calendar", "check", "clock"),
    "pay": ("document", "wallet"),
    "fee-structure": ("calendar", "people", "wallet"),
    "core": ("building", "dining", "sun"),
    "other": ("calendar", "dining", "people"),
    "approach": ("people", "message", "document"),
    "why-bali": ("pin", "calendar"),
    "contact-paths": ("calendar", "people", "message"),
}


def icon(name, css=""):
    return (f'<svg class="icon {css}" aria-hidden="true" focusable="false" viewBox="0 0 24 24" '
            f'fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" '
            f'stroke-linejoin="round">{PATHS[name]}</svg>')
