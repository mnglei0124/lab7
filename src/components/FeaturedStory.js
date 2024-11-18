export function FeaturedStory() {
  const section = document.createElement("section");
  section.className = "featured-stories py-3 py-md-4";

  section.innerHTML = `
    <div class="container">
      <!-- Featured Story Grid -->
      <div class="row g-3">
        <!-- Main Feature -->
        <div class="col-12 col-lg-8">
          <div class="position-relative featured-card h-100">
            <div class="ratio ratio-16x9 img-zoom-container">
              <img src="path-to-image.jpg" class="object-fit-cover" alt="Main story">
            </div>
            <div class="featured-content p-3 p-md-4">
              <span class="badge bg-warning text-dark mb-2">Latest Story</span>
              <h2 class="h3 h1-md text-white mb-2">Main Featured Story Title Goes Here</h2>
              <p class="text-white d-none d-md-block">Brief description of the story that only shows on larger screens...</p>
            </div>
          </div>
        </div>

        <!-- Secondary Features -->
        <div class="col-12 col-lg-4">
          <div class="row g-3">
            <!-- Secondary Story 1 -->
            <div class="col-12 col-sm-6 col-lg-12">
              <div class="position-relative featured-card h-100">
                <div class="ratio ratio-16x9 img-zoom-container">
                  <img src="path-to-image.jpg" class="object-fit-cover" alt="Secondary story">
                </div>
                <div class="featured-content p-3">
                  <span class="badge bg-warning text-dark mb-2">Science</span>
                  <h3 class="h5 text-white mb-0">Secondary Story Title</h3>
                </div>
              </div>
            </div>

            <!-- Secondary Story 2 -->
            <div class="col-12 col-sm-6 col-lg-12">
              <div class="position-relative featured-card h-100">
                <div class="ratio ratio-16x9 img-zoom-container">
                  <img src="path-to-image.jpg" class="object-fit-cover" alt="Secondary story">
                </div>
                <div class="featured-content p-3">
                  <span class="badge bg-warning text-dark mb-2">Travel</span>
                  <h3 class="h5 text-white mb-0">Another Secondary Story</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
