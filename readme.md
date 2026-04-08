# GUMA-Tools

A web app for generating fictional Law Enforcement Agency documents and officer/firefighter cards - inspired by real LAPD/LSSD/CHP/LAFD formats used in FiveM roleplay servers.
Built with HTML, Tailwind CSS (CDN) and Vanilla JavaScript. No build tools required.

## Live Demo

[🔗 View on GitHub Pages](https://damijjj.github.io/GUMA-tools/)

## Available Generators

| Generator                       | File                            | Description                                                                   |
| ------------------------------- | ------------------------------- | ----------------------------------------------------------------------------- |
| Officer Card                    | `officer_generator.html`        | LSPD / LSSD / BCSO / SAHP / Custom officer profile card with faction switcher |
| Firefighter Card                | `firefighter_generator.html`    | LSCoFD / LSFD / Custom firefighter profile card with faction switcher         |
| Firearm Discharge Investigation | `firearm_discharge.html`        | LAPD-style Officer-Involved Firearm Discharge Investigation report            |
| Traffic Collision Report        | `traffic_collision_report.html` | CHP 555-style Traffic Collision Report with dynamic party rows                |

## Features

### Officer Card Generator

- Faction switcher - LSPD / LSSD / BCSO / SAHP + Custom
- Fill in officer details: name, rank, division, serial & badge number
- Custom faction: custom rank, division or email domain
- Upload a photo - auto-cropped to fit the card
- Ethnicity, gender, age, year hired, height & weight fields
- Randomize pay based on rank
- Live preview rendered on HTML Canvas
- Download the card as a PNG file

### Firefighter Card Generator

- Faction switcher - LSCoFD / LSFD + Custom
- Fill in firefighter details: name, rank, division, serial & badge number
- Custom faction: custom rank, division or email domain
- Upload a photo - auto-cropped to fit the card
- Ethnicity, gender, age, year hired, height & weight fields
- Randomize pay based on rank
- Live preview rendered on HTML Canvas
- Download the card as a PNG file

### Firearm Discharge Investigation

- Faction switcher with custom faction name input
- Incident type checkboxes (Tactical, Non-Tactical, Animal Shooting, Warning Shot)
- Section I - General Information (FID No., DR No., date, time, location, RD)
- Day of Week dropdown, datetime-local picker for report date/time
- Dynamic rows - add/remove Involved Officers and Witnessing Officers
- Dynamic civilian witness rows with full contact details
- Y/N fields as dropdowns (In Uniform, Vest, On Duty, Injured, IOD, Light Duty)
- Live preview updated instantly on canvas - proportioned to A4 format
- Download the report as a PNG file

### Traffic Collision Report

- Based on CHP 555 format
- Special Conditions: Hit & Run (Misdemeanor / Felony), number injured/killed
- Location section: street, intersection, date/time, day of week, Tow Away, State Hwy Related
- Dynamic party rows - add/remove parties (driver, pedestrian, parked vehicle, etc.)
- Each party: DL#, vehicle info (year/make/model/color/plate), name, address, insurance, physical description, phone numbers, vehicle damage
- Report footer: Preparer, Reviewer, Dispatch Notified, Date Reviewed
- Live preview rendered on HTML Canvas
- Download the report as a PNG file

## Usage

No build tools required. Open `index.html` in a browser or deploy to any static hosting (GitHub Pages, Netlify, etc.).

## Tech Stack

- **Tailwind CSS** (CDN) - utility-first styling with custom `guma-*` design tokens
- **HTML5 Canvas** - document & card rendering, PNG export
- **Vanilla JS** - zero runtime dependencies
- **Web Components** - shared footer via `<guma-footer>`

---

_Built for FiveM roleplay use. All agencies, names and badge numbers are fictional._
