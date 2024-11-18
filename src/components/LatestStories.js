export function LatestStories() {
  const section = document.createElement("section");
  section.className = "latest-stories bg-black text-white py-5";

  section.innerHTML = `
    <div class="container-fluid px-4">
      <h1 class="display-2 text-center mb-4">LATEST STORIES</h1>
      <p class="text-center mb-5">
        <a href="#" class="text-warning text-decoration-none">Subscribe</a>
        for full access to read stories from National Geographic.
      </p>
      
      <div class="row">
        <div class="col-12 col-lg-3">
          <h2 class="h3 text-warning border-warning border-bottom pb-3 mb-4">TODAY'S PICKS</h2>
          <!-- Today's picks list -->
          <div class="picks-list">
            ${generatePicksList()}
          </div>
          <a href="#" class="btn btn-link text-white text-decoration-none p-0 mt-4">SEE MORE</a>
        </div>
        
        <div class="col-12 col-lg-9">
          <!-- Featured articles grid -->
          <div class="row g-4">
            ${generateFeaturedArticles()}
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}

function generatePicksList() {
  const picks = [
    {
      category: "ENVIRONMENT",
      title:
        "Why more natural disasters could trigger a rise in paranormal beliefs",
    },
    {
      category: "LIFESTYLE",
      title: "These are the 7 best rain jackets for men",
    },
  ];

  return picks
    .map(
      (pick) => `
    <div class="d-flex mb-4">
      <img src="placeholder.jpg" class="me-3" style="width: 80px; height: 80px; object-fit: cover;">
      <div>
        <span class="text-warning small">${pick.category}</span>
        <h3 class="h6 mt-1">${pick.title}</h3>
      </div>
    </div>
  `
    )
    .join("");
}

function generateFeaturedArticles() {
  // Implementation for featured articles grid
}
