export function AnimalsSection() {
  const section = document.createElement("section");
  section.className = "animals-section bg-black text-white py-4";

  section.innerHTML = `
    <div class="container-fluid px-md-5" style="max-width: 1400px;">
      <h2 class="h2 text-center mb-4">Explore Animals in Nature and Wildlife</h2>
      <div class="row g-4 justify-content-center">
        <!-- Main Feature -->
        <div class="col-12 col-md-6">
          <div class="featured-article position-relative">
            <img src="https://placehold.co/800x500/333/fff?text=Animals" 
                 class="w-100 object-fit-cover animal-main-img" 
                 alt="Featured animal">
            <div class="article-content p-3">
              <span class="category">WILDLIFE WATCH</span>
              <h3 class="h4 my-2"><a href="https://mnglei0124.github.io/lab7/animal-article" class="text-white">Why this owl is raising a duckling as its own</a></h3>
              <button class="btn btn-read">READ Wildlife Stories</button>
            </div>
          </div>
        </div>

        <!-- Side Articles -->
        <div class="col-12 col-md-5">
          <div class="row g-3">
            <!-- First Card -->
            <div class="col-12">
              <div class="article-card d-flex align-items-center bg-dark p-2 rounded">
                <img src="https://placehold.co/160x160/333/fff?text=Wildlife" 
                     class="me-3 rounded" 
                     alt="Wildlife"
                     style="width: 160px; height: 160px;">
                <div>
                  <span class="category small">WILDLIFE</span>
                  <h4 class="h6 mb-0 mt-1"><a href="https://mnglei0124.github.io/lab7/wildlife-article" class="text-white">These birds form lifelong bonds—here's why</a></h4>
                </div>
              </div>
            </div>
            
            <!-- Second Card -->
            <div class="col-12">
              <div class="article-card d-flex align-items-center bg-dark p-2 rounded">
                <img src="https://placehold.co/160x160/333/fff?text=Endangered" 
                     class="me-3 rounded" 
                     alt="Endangered Species"
                     style="width: 160px; height: 160px;">
                <div>
                  <span class="category small">ENDANGERED SPECIES</span>
                  <h4 class="h6 mb-0 mt-1"><a href="https://mnglei0124.github.io/lab7/endangered-article" class="text-white">How scientists are saving rare fish in the Colorado River</a></h4>
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
