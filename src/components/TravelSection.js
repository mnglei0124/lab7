export function TravelSection() {
  const section = document.createElement("section");
  section.className = "travel-section bg-black text-white py-5";

  section.innerHTML = `
    <div class="container-fluid px-md-5" style="max-width: 1600px; margin: 0 auto;">
      <div class="row justify-content-center" role="region" aria-labelledby="travel-heading">
        <h2 id="travel-heading" class="visually-hidden">Travel Section</h2>
        <div class="col-10">
          <div class="px-md-4">
            <h2 class="text-center display-3 mb-5">TRAVEL</h2>
            <div class="row g-4">
              <!-- Main Feature -->
              <div class="col-12 col-lg-8" role="article">
                <div class="featured-destination position-relative">
                  <img src="https://placehold.co/1200x800/333/fff?text=Japan" 
                       class="w-100 rounded" 
                       alt="Kinkaku-ji Temple">
                  <div class="content-overlay">
                    <h3 class="display-4 mb-3">Experience Legendary Places</h3>
                    <button class="btn btn-outline-light text-uppercase px-4" aria-label="View trips to Japan">View Trips</button>
                  </div>
                </div>
              </div>
              <!-- Side Stories -->
              <div class="col-12 col-lg-4" aria-labelledby="latest-stories-heading">
                <h4 class="border-start border-warning border-4 ps-3 mb-4" id="latest-stories-heading">LATEST STORIES</h4>
                <!-- Story Item 1 -->
                <div class="story-item d-flex mb-3" role="article">
                  <img src="https://placehold.co/120x120/333/fff?text=Estonia" 
                       class="rounded me-3" 
                       alt="Estonia">
                  <div>
                    <span class="text-uppercase small">TRAVEL</span>
                    <h5 class="mb-0">Why you should go island-hopping through Estonia's western isles</h5>
                  </div>
                </div>
                <!-- More story items... -->
                <a href="#" class="text-white text-decoration-none small text-uppercase" aria-label="See more travel stories">See More</a>
              </div>
              <!-- Bottom Cards -->
              <div class="col-12 col-md-6" role="article">
                <div class="destination-card position-relative">
                  <img src="https://placehold.co/800x500/333/fff?text=Ocean" 
                       class="w-100 rounded" 
                       alt="Ocean Expedition">
                  <div class="content-overlay">
                    <h3 class="h4 mb-3">Discover the Wonders of the Ocean</h3>
                    <button class="btn btn-outline-light text-uppercase px-4" aria-label="View expedition cruises">View Expedition Cruises</button>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6" role="article">
                <div class="destination-card position-relative">
                  <img src="https://placehold.co/800x500/333/fff?text=Europe" 
                       class="w-100 rounded" 
                       alt="River Cruise">
                  <div class="content-overlay">
                    <h3 class="h4 mb-3">See Europe from a New Perspective</h3>
                    <button class="btn btn-outline-light text-uppercase px-4" aria-label="View river cruises">View River Cruises</button>
                  </div>
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
