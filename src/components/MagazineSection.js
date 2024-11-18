export function MagazineSection() {
  const section = document.createElement("section");
  section.className = "magazine-section py-4 bg-light";

  section.innerHTML = `
    <div class="container-fluid px-md-5" style="max-width: 1400px;">
      <div class="row align-items-center justify-content-center g-4">
        <div class="col-md-5">
          <img src="https://placehold.co/500x650/333/fff?text=Magazine" class="w-100 magazine-cover" alt="Magazine cover">
        </div>
        <div class="col-md-5 text-center text-md-start">
          <h2 class="h2 mb-3">Subscribe to National Geographic</h2>
          <p class="lead mb-4">Get access to our unique storytelling and photography.</p>
          <a href="#" class="btn btn-warning px-4">Subscribe Now</a>
        </div>
      </div>
    </div>
  `;

  return section;
}
