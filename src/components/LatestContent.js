export function LatestContent() {
  const section = document.createElement("section");
  section.className = "latest-content bg-black text-white py-5";

  section.innerHTML = `
    <div class="container-fluid px-md-5">
      <div class="row justify-content-center" role="region" aria-labelledby="latest-content-heading">
        <h2 id="latest-content-heading" class="visually-hidden">Latest Content</h2>
        <div class="col-12 col-lg-3" aria-labelledby="todays-picks-heading">
          <h2 class="d-flex align-items-center mb-4" id="todays-picks-heading">
            <span class="yellow-bar me-2"></span>
            <span class="text-white">TODAY'S PICKS</span>
          </h2>
          <!-- Picks List -->
          <div class="picks-list" role="list" aria-label="Today's Picks">
            <!-- Environment Article -->
            <div class="pick-item d-flex mb-4" role="listitem" aria-labelledby="environment-article">
              <img src="https://placehold.co/100x100/333/fff?text=Environment" 
                   class="pick-image me-3" alt="Natural disasters">
              <div class="pick-content">
                <span class="category">ENVIRONMENT</span>
                <h3 class="pick-title" id="environment-article">Why more natural disasters could trigger a rise in paranormal beliefs</h3>
              </div>
            </div>
            <!-- Lifestyle Article -->
            <div class="pick-item d-flex mb-4" role="listitem" aria-labelledby="lifestyle-article">
              <img src="https://placehold.co/100x100/333/fff?text=Lifestyle" 
                   class="pick-image me-3" alt="Rain jackets">
              <div>
                <span class="category">LIFESTYLE</span>
                <h3 class="pick-title" id="lifestyle-article">These are the 7 best rain jackets for men</h3>
              </div>
            </div>
            <!-- Science Articles -->
            <div class="pick-item d-flex mb-4" role="listitem" aria-labelledby="science-article-1">
              <img src="https://placehold.co/100x100/333/fff?text=Science" 
                   class="pick-image me-3" alt="Twin stranger">
              <div>
                <span class="category">SCIENCE</span>
                <h3 class="pick-title" id="science-article-1">Do you have a twin stranger? The surprising science behind doppelgängers</h3>
              </div>
            </div>
            <!-- More Science Articles -->
            <div class="pick-item d-flex mb-4" role="listitem" aria-labelledby="science-article-2">
              <img src="https://placehold.co/100x100/333/fff?text=Science" 
                   class="pick-image me-3" alt="Neanderthals">
              <div>
                <span class="category">SCIENCE</span>
                <h3 class="pick-title" id="science-article-2">Why did Neanderthals and humans bury their dead? Scientists have a new theory</h3>
              </div>
            </div>
            <!-- Travel Article -->
            <div class="pick-item d-flex mb-4" role="listitem" aria-labelledby="travel-article">
              <img src="https://placehold.co/100x100/333/fff?text=Travel" 
                   class="pick-image me-3" alt="Pet travel">
              <div>
                <span class="category">TRAVEL</span>
                <h3 class="pick-title" id="travel-article">Traveling with your pet for the holidays? Here are some helpful tips.</h3>
              </div>
            </div>
            <!-- More articles... -->
          </div>
          <a href="#" class="see-more" aria-label="See more picks">SEE MORE</a>
        </div>
        <!-- Featured Articles Grid -->
        <div class="col-12 col-lg-7" aria-labelledby="featured-articles-heading">
          <h2 id="featured-articles-heading" class="visually-hidden">Featured Articles</h2>
          <div class="row g-4">
            <!-- Main Featured Article -->
            <div class="col-12">
              <div class="featured-article main-feature position-relative" role="article" aria-labelledby="main-feature-article">
                <img src="https://placehold.co/1200x600/333/fff?text=Daylight+Saving" 
                     class="w-100" alt="Daylight saving time">
                <div class="article-content">
                  <span class="category">HISTORY & CULTURE</span>
                  <h2 class="h1" id="main-feature-article">Why daylight saving time exists— at least for now</h2>
                  <button class="btn btn-read" aria-label="Read more about daylight saving time">READ</button>
                </div>
              </div>
            </div>
            <!-- Secondary Featured Articles -->
            <!-- More articles... -->
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
