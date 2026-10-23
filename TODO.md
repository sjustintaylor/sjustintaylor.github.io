# Site content and graphics checklist

Based on the current single-page site: introduction, About, Now, and Contact.
Descriptive copy is currently placeholder text; the email and social links carry
over from the previous site. Existing graphics can be retained, so replacement
artwork is a choice rather than a launch requirement.

## Content to write

### Main copy — `src/data/site.ts`

- [ ] **Introduction:** write 1–2 sentences explaining the focus of the site and
      what visitors can expect. Suggested length: 25–40 words.
- [ ] **About:** write two short paragraphs covering background, current work,
      interests, and perspective. Suggested total: 80–140 words.
- [ ] **Interests:** choose three specific subjects for the “Drawn to” line.
      Keep each phrase short enough to scan.
- [ ] **Now / Making:** describe a current project or experiment, including its
      purpose and present stage. Suggested length: 20–35 words.
- [ ] **Now / Exploring:** describe a current question, subject, or skill being
      explored. Suggested length: 20–35 words.
- [ ] **Now / Enjoying:** name a few current books, places, activities, or
      discoveries. Suggested length: 20–35 words.
- [ ] **Contact:** write a short invitation explaining which conversations or
      enquiries are welcome. Suggested length: 25–45 words.
- [ ] **Page title:** confirm or replace “Justin Taylor — A personal collection”.
- [ ] **Search and sharing description:** write a concise description matching
      the finished site. This is also used in link previews.
- [ ] **Contact details:** confirm the published email address and the GitHub,
      LinkedIn, and Bluesky destinations; remove any unwanted links.

### Headings and small copy — `src/pages/index.astro`

Review these once the main copy is written. Keep wording that fits; replace the
rest with language that matches the final content.

- [ ] **Main headline:** “A curious mind. A considered life.”
- [ ] **Site straplines:** “A personal collection” and “Ideas, work & everyday life”.
- [ ] **Desktop photo caption:** “A wider perspective.”
- [ ] **Desktop photo footer:** “Stay curious. Look closer.”
- [ ] **Navigation note:** “Always a work in progress.”
- [ ] **Introduction label and link:** “A few words to begin” and “A little more
      about me”.
- [ ] **Margin note:** replace “A few things in progress. A little space for what
      comes next.” with a specific personal note, or remove it.
- [ ] **Section headings and subtitles:** review About, Now, and Contact wording,
      including “Drawn to”, “Making”, “Exploring”, “Enjoying”, and “Elsewhere”.
- [ ] **Edition marker:** decide whether “01” has a meaningful purpose.
- [ ] **Footer:** confirm or replace “Made with care. Best read slowly.”

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
      `src/components/Curiosity.astro` with a `480 × 320` viewBox. If creating new
      artwork, use a similarly simple composition that works on ivory and at
      small sizes. Supply a caption, accessible title, and description alongside
      the finished artwork. Current caption: “A study in staying curious.”
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
- [ ] Check the main headline and introduction together for a clear, consistent message.
- [ ] Check that the social sharing image matches the final page title and copy.
- [ ] Check image rights, credits, and accessible descriptions for any new artwork.
- [ ] Review the finished copy and graphics on mobile and desktop for awkward wraps,
      cropping, and readable text over the photograph.
- [ ] Set a reminder or routine to keep the Now section current.
