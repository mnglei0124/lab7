export function LatestContent() {
  const section = document.createElement("section");
  section.className = "latest-content bg-black text-white py-5";

  section.innerHTML = `
    <div class="container-fluid px-md-5">
      <div class="row justify-content-center" role="region" aria-labelledby="latest-content-heading">
        <h1 id="latest-content-heading" class="visually-hidden">Latest Content</h1>
        <div class="col-12 col-lg-3" aria-labelledby="todays-picks-heading">
          <h2 class="d-flex align-items-center mb-4" id="todays-picks-heading">
            <span class="yellow-bar me-2"></span>
            <span class="text-white">TODAY'S PICKS</span>
          </h2>
          <!-- Picks List -->
          <div class="picks-list" role="list" aria-label="Today's Picks">
            <div class="pick-item d-flex mb-4" role="listitem" aria-labelledby="environment-article">
              <img src="https://placehold.co/100x100/333/fff?text=Environment" 
                   class="pick-image me-3" alt="Natural disasters">
              <div class="pick-content">
                <span class="category">ENVIRONMENT</span>
                <h3 class="pick-title" id="environment-article">
                  <a href="https://example.com/environment-article" target="_blank">Why more natural disasters could trigger a rise in paranormal beliefs</a>
                </h3>
              </div>
            </div>
            <div class="pick-item d-flex mb-4" role="listitem" aria-labelledby="lifestyle-article">
              <img src="https://placehold.co/100x100/333/fff?text=Lifestyle" 
                   class="pick-image me-3" alt="Rain jackets">
              <div>
                <span class="category">LIFESTYLE</span>
                <h3 class="pick-title" id="lifestyle-article">
                  <a href="https://example.com/lifestyle-article" target="_blank">These are the 7 best rain jackets for men</a>
                </h3>
              </div>
            </div>
            <div class="pick-item d-flex mb-4" role="listitem" aria-labelledby="science-article-1">
              <img src="https://placehold.co/100x100/333/fff?text=Science" 
                   class="pick-image me-3" alt="Twin stranger">
              <div>
                <span class="category">SCIENCE</span>
                <h3 class="pick-title" id="science-article-1">
                  <a href="https://example.com/science-article-1" target="_blank">Do you have a twin stranger? The surprising science behind doppelgängers</a>
                </h3>
              </div>
            </div>
            <div class="pick-item d-flex mb-4" role="listitem" aria-labelledby="science-article-2">
              <img src="https://placehold.co/100x100/333/fff?text=Science" 
                   class="pick-image me-3" alt="Neanderthals">
              <div>
                <span class="category">SCIENCE</span>
                <h3 class="pick-title" id="science-article-2">
                  <a href="https://example.com/science-article-2" target="_blank">Why did Neanderthals and humans bury their dead? Scientists have a new theory</a>
                </h3>
              </div>
            </div>
            <div class="pick-item d-flex mb-4" role="listitem" aria-labelledby="travel-article">
              <img src="https://placehold.co/100x100/333/fff?text=Travel" 
                   class="pick-image me-3" alt="Pet travel">
              <div>
                <span class="category">TRAVEL</span>
                <h3 class="pick-title" id="travel-article">
                  <a href="https://example.com/travel-article" target="_blank">Traveling with your pet for the holidays? Here are some helpful tips.</a>
                </h3>
              </div>
            </div>
          </div>
          <a href="https://example.com/more-picks" class="see-more" aria-label="See more picks" target="_blank">SEE MORE</a>
        </div>
        <div class="col-12 col-lg-7" aria-labelledby="featured-articles-heading">
          <h2 id="featured-articles-heading" class="visually-hidden">Featured Articles</h2>
          <div class="row g-4">
            <div class="col-12">
              <div class="featured-article main-feature position-relative" role="article" aria-labelledby="main-feature-article">
                <img src="https://placehold.co/1200x600/333/fff?text=Daylight+Saving" 
                     class="w-100" alt="Daylight saving time">
                <div class="article-content">
                  <span class="category">HISTORY & CULTURE</span>
                  <h2 class="h1" id="main-feature-article">
                    <a href="https://example.com/daylight-saving" target="_blank">Why daylight saving time exists— at least for now</a>
                  </h2>
                  <button class="btn btn-read" aria-label="Read more about daylight saving time">
                    <a href="https://example.com/daylight-saving" target="_blank">READ</a>
                  </button>
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
