export function NatGeoTV() {
  const section = document.createElement("section");
  section.className = "nat-geo-tv bg-black text-white py-5";

  section.innerHTML = `
    <div class="container-fluid px-md-5" role="region" aria-labelledby="nat-geo-tv-heading">
      <h2 id="nat-geo-tv-heading" class="visually-hidden">Discover More on Disney+</h2>
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="h3 mb-0">DISCOVER MORE ON DISNEY+</h2>
        <a href="https://www.disneyplus.com" class="text-white text-decoration-none" aria-label="See shows on Disney+">SEE SHOWS</a>
      </div>
      <div class="shows-wrapper position-relative" role="group" aria-label="TV Shows">
        <div class="row g-3">
          <!-- Show Card 1 -->
          <div class="col-6 col-md-4 col-lg" role="article">
            <div class="show-card">
              <img src="https://placehold.co/600x900/0a3d62/fff?text=OceanXplorer" 
                   class="w-100 rounded" 
                   alt="OceanXplorer">
            </div>
          </div>
          
          <!-- Show Card 2 -->
          <div class="col-6 col-md-4 col-lg">
            <div class="show-card">
              <img src="https://placehold.co/600x900/0a3d62/fff?text=Sharkfest" 
                   class="w-100 rounded" 
                   alt="Sharkfest">
            </div>
          </div>
          
          <!-- Show Card 3 -->
          <div class="col-6 col-md-4 col-lg">
            <div class="show-card">
              <img src="https://placehold.co/600x900/0a3d62/fff?text=Secrets+of+the+Octopus" 
                   class="w-100 rounded" 
                   alt="Secrets of the Octopus">
            </div>
          </div>
          
          <!-- Show Card 4 -->
          <div class="col-6 col-md-4 col-lg">
            <div class="show-card">
              <img src="https://placehold.co/600x900/0a3d62/fff?text=Photographer" 
                   class="w-100 rounded" 
                   alt="Photographer">
            </div>
          </div>
          
          <!-- Show Card 5 -->
          <div class="col-6 col-md-4 col-lg">
            <div class="show-card">
              <img src="https://placehold.co/600x900/0a3d62/fff?text=Queens" 
                   class="w-100 rounded" 
                   alt="Queens">
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button class="nav-arrow prev" aria-label="Previous" role="button">
          <i class="bi bi-chevron-left"></i>
        </button>
        <button class="nav-arrow next" aria-label="Next" role="button">
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  `;

  return section;
}
