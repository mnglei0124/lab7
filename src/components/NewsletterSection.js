export function NewsletterSection() {
  const section = document.createElement("section");
  section.className = "newsletter-section py-5 bg-dark text-white";

  section.innerHTML = `
    <div class="container-fluid px-md-5 text-center">
      <h2 class="h3 mb-4">Sign up for more inspiring photos, stories, and special offers from National Geographic</h2>
      <form class="newsletter-form mx-auto" style="max-width: 500px;">
        <div class="input-group mb-3">
          <input type="email" class="form-control" placeholder="Enter your email">
          <button class="btn btn-warning" type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  `;

  return section;
}
