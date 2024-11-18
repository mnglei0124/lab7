export function LatestStories() {
  const section = document.createElement("section");
  section.className = "latest-stories bg-black text-white py-5";

  section.innerHTML = `
    <div class="container-fluid px-4">
      <h1 class="display-2 text-center mb-4">Latest Stories</h1>
      <p class="text-center mb-5">
        <a href="https://mnglei0124.github.io/lab7/subscribe" class="text-warning text-decoration-none" target="_blank">Subscribe</a>
        for full access to read stories from National Geographic.
      </p>
      
      <div class="row">
        <div class="col-12 col-lg-3">
          <h2 class="h3 text-warning border-warning border-bottom pb-3 mb-4">TODAY'S PICKS</h2>
          <div class="picks-list">
            ${generatePicksList()}
          </div>
          <a href="https://mnglei0124.github.io/lab7/latest-stories" class="btn btn-link text-white text-decoration-none p-0 mt-4">SEE MORE</a>
        </div>
        
        <div class="col-12 col-lg-9">
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
      link: "https://example.com/environment-article",
    },
    {
      category: "LIFESTYLE",
      title: "These are the 7 best rain jackets for men",
      link: "https://example.com/lifestyle-article",
    },
  ];

  return picks
    .map(
      (pick) => `
    <div class="d-flex mb-4">
      <img src="https://placehold.co/80x80/333/fff?text=Placeholder" class="me-3" style="width: 80px; height: 80px; object-fit: cover;">
      <div>
        <span class="text-warning small">${pick.category}</span>
        <h3 class="h6 mt-1"><a href="${pick.link}" target="_blank">${pick.title}</a></h3>
      </div>
    </div>
  `
    )
    .join("");
}

function generateFeaturedArticles() {
  // Implementation for featured articles grid
}
