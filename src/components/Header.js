export function Header() {
  const header = document.createElement("header");
  header.className = "fixed-top";

  header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-2" role="navigation" aria-label="Main Navigation">
      <div class="container-fluid px-4" style="max-width: 1400px;">
        <a class="navbar-brand" href="https://mnglei0124.github.io/lab7/" aria-label="National Geographic Home">
          <img src="https://i.natgeofe.com/n/4da26b5c-18ee-413f-96dd-4cf3fb4a68a0/2fl-white.png" 
               alt="National Geographic" 
               height="28">
        </a>
        <div class="d-flex align-items-center gap-4">
          <a href="https://mnglei0124.github.io/lab7/login" class="nav-link" aria-label="Login">LOGIN</a>
          <a href="https://mnglei0124.github.io/lab7/search" class="nav-link" aria-label="Search">
            <i class="bi bi-search"></i>
          </a>
          <a href="https://mnglei0124.github.io/lab7/newsletters" class="nav-link" aria-label="Newsletters">Newsletters</a>
          <a href="https://mnglei0124.github.io/lab7/subscribe" class="btn btn-dark px-3" aria-label="Subscribe">SUBSCRIBE</a>
          <button class="btn nav-link d-flex align-items-center" aria-haspopup="true" aria-expanded="false">
            MENU
            <i class="bi bi-chevron-down ms-2"></i>
          </button>
        </div>
      </div>
    </nav>
  `;
  return header;
}
