export function FeaturedStories() {
  const section = document.createElement("section");
  section.className = "featured-stories py-4";

  section.innerHTML = `
    <div class="container">
      <h2 class="section-title mb-4">Latest Stories</h2>
      <div class="row g-4">
        <div class="col-md-8">
          <div class="featured-main position-relative">
            <img src="path-to-main-image.jpg" class="img-fluid" alt="Main story">
            <div class="featured-content position-absolute bottom-0 p-4 text-white">
              <span class="category">Environment</span>
              <h3 class="h2">Why more natural disasters could trigger a rise in paranormal beliefs</h3>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="featured-secondary mb-4">
            <img src="path-to-secondary-image.jpg" class="img-fluid" alt="Secondary story">
            <div class="mt-2">
              <span class="category">Science</span>
              <h4>Do you have a twin stranger? The surprising science behind doppelgängers</h4>
            </div>
          </div>
          <!-- Add more secondary stories as needed -->
        </div>
      </div>
    </div>
  `;

  return section;
}
