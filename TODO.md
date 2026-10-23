# Site content and graphics checklist

Based on the current single-page, two-column editorial layout:

- Masthead: name and edition number.
- Left content column: Now facts box, introduction, pull quote, interests, and margin note.
- Right content column: About, illustration, and compact Contact section.
- Desktop photo panel: monogram, strapline, caption, and photo credit.

The two content columns remain side by side on small screens.
Descriptive copy is currently placeholder text; the email and social links carry
over from the previous site. Existing graphics can be retained, so replacement
artwork is a choice rather than a launch requirement.

## Content to write

### Left column — Now and personal notes

Edit `src/data/site.ts`, except the pull quote and margin note, which are in
`src/pages/index.astro`. Keep copy concise for the narrow columns.

- [ ] **Now / Making:** describe a current project or experiment, including its
      purpose or present stage. Suggested length: 15–25 words.
- [ ] **Now / Exploring:** describe a current question, subject, or skill being
      explored. Suggested length: 15–25 words.
- [ ] **Now / Enjoying:** name a few current books, places, activities, or
      discoveries. Suggested length: 15–25 words.
- [ ] **Introduction:** write 1–2 sentences for the “A few words to begin” margin
      row, explaining the focus of the site. Suggested length: 25–40 words.
- [ ] **Pull quote / main heading:** confirm or replace “A curious mind.
      A considered life.” Keep it short enough for the large orange type.
- [ ] **Interests:** choose three short, specific subjects for the “Drawn to” row.
- [ ] **Margin note:** replace “A few things in progress. A little space for what
      comes next.” with a brief personal note. Suggested length: 10–20 words.

### Right column — About and Contact

Edit `src/data/site.ts`. The illustration sits between About and Contact.

- [ ] **About:** write two short paragraphs covering background, current work,
      interests, and perspective. Suggested total: 60–100 words, suited to the
      narrow text area beside “The person behind the page”.
- [ ] **Contact:** write a short invitation explaining which conversations or
      enquiries are welcome. Suggested length: 20–30 words; this sits beside
      the email and social links in a compact caption-style section.
- [ ] **Contact details:** confirm the published email address and the GitHub,
      LinkedIn, and Bluesky destinations; remove any unwanted links.

### Metadata — `src/data/site.ts`

- [ ] **Page title:** confirm or replace “Justin Taylor — A personal collection”.
- [ ] **Search and sharing description:** write a concise description matching
      the finished site. This is also used in link previews.

### Headings and small copy — `src/pages/index.astro`

Review these once the main copy is written. Keep wording that fits; replace the
rest with language that matches the final content.

- [ ] **Masthead:** confirm the displayed name and whether the large “01” edition
      marker has a meaningful purpose; update its accessible label if changed.
- [ ] **Desktop photo branding:** confirm “JT” and “A personal collection”.
- [ ] **Desktop photo caption:** “A wider perspective.”
- [ ] **Desktop photo footer:** “Stay curious. Look closer.”
- [ ] **Column headings:** review “In the here & now” and “A little about me”.
- [ ] **Facts-box legend and labels:** review “A small snapshot of the present”,
      “Making”, “Exploring”, and “Enjoying”.
- [ ] **Margin labels:** review “A few words to begin”, “Drawn to”,
      “A note in the margin”, and “The person behind the page”.
- [ ] **Contact heading:** confirm or replace “Keep in touch”.

The former navigation, introduction link, masthead strapline row, and “Elsewhere”
label are absent from the current layout. The footer phrase “Made with care.
Best read slowly.” remains in the source but is hidden by CSS.

## Graphics and images to create or approve

- [ ] **Desktop feature photograph — keep or replace.** The current ocean photo
      is `public/images/ocean.webp`. If replacing it, choose a high-resolution
      image that works in a tall crop and leaves clear areas behind the text.
      The panel occupies 34% of the screen above 1100px and is hidden on smaller
      screens. Check the crop at several desktop sizes, optimise the image as
      WebP, and update the photo credit, accessible label, attribution file, and
      README credit as needed.
- [ ] **Main illustration — keep, personalise, or replace.** The current green
      arch, orange sun, orbital lines, and branch are inline SVG in
      `src/components/Curiosity.astro` with a `480 × 320` viewBox. It appears in
      the right column below About, in a display area with a CSS aspect ratio of
      `0.85`. If creating new artwork, compose it for that tall space and check
      its scale within the column. Use a simple composition that works on the
      textured ivory background and at small sizes. Supply a caption, accessible
      title, and description alongside
      the finished artwork. Current caption: “A study in staying curious.”
- [ ] **Paper texture — approve or replace.** The active background uses
      `public/textures/paper-grain-transparent.png`, repeated at `500 × 500` CSS
      pixels under an ivory overlay. Check that the grain stays subtle behind
      small text and tiles without visible seams. Record its source and usage
      rights in `public/textures/ATTRIBUTION.txt`; the existing attribution only
      documents the older EP Natural White texture.
- [ ] **Social sharing image — finalise after the copy.** Update
      `src/assets/social-card.svg` with the final name, strapline, and domain,
      then export the matching `public/social-card.png` at `1200 × 630`.
      The page currently serves the PNG, so changing the SVG alone is insufficient.
- [ ] **Favicon — approve or create a replacement.** The current
      `public/favicon.svg` uses a stylised J and orange dot on green in a
      `64 × 64` viewBox. Confirm the mark matches the finished site and remains
      recognisable at browser-tab size.

No portrait, project thumbnails, or blog illustrations are required by the
current layout. Add these to the checklist only if those sections are introduced.

## Final content review

- [ ] Check that all placeholder prose has been replaced or deliberately retained.
- [ ] Check the pull quote, introduction, and About copy together for a clear,
      consistent message.
- [ ] Check that the social sharing image matches the final page title and copy.
- [ ] Check image rights, credits, and accessible descriptions for any new artwork.
- [ ] Review the finished copy and graphics on mobile and desktop for awkward wraps,
      cropping, and readable text over the photograph and paper texture. Pay
      particular attention to the side-by-side columns, Now facts box, margin
      labels, and compact Contact section at narrow widths.
- [ ] Set a reminder or routine to keep the Now section current.
