export function TodaysPicks() {
  const section = document.createElement("section");
  section.className = "todays-picks bg-black text-white py-5";

  const picks = [
    {
      image: "https://placehold.co/400x300/333/fff?text=Environment",
      category: "ENVIRONMENT",
      title:
        "Why more natural disasters could trigger a rise in paranormal beliefs",
      isLocked: true,
    },
    {
      image: "https://placehold.co/400x300/333/fff?text=Lifestyle",
      category: "LIFESTYLE",
      title: "These are the 7 best rain jackets for men",
      isLocked: false,
    },
    {
      image: "https://placehold.co/400x300/333/fff?text=Science",
      category: "SCIENCE",
      title:
        "Do you have a twin stranger? The surprising science behind doppelgängers",
      isLocked: true,
    },
    {
      image: "https://placehold.co/400x300/333/fff?text=Science",
      category: "SCIENCE",
      title:
        "Why did Neanderthals and humans bury their dead? Scientists have a new theory",
      isLocked: true,
    },
    {
      image: "https://placehold.co/400x300/333/fff?text=Science",
      category: "SCIENCE",
      title: "Why dark skies are actually good for your health",
      isLocked: true,
    },
  ];

  section.innerHTML = `
    <div class="container-fluid px-4">
      <div class="row">
        <div class="col-12 col-lg-3">
          <h2 class="border-bottom border-warning pb-3 mb-4">
            <span class="text-warning">TODAY'S PICKS</span>
          </h2>
          
          <div class="picks-list">
            ${picks
              .map(
                (pick, index) => `
              <div class="pick-item d-flex mb-4 position-relative">
                <a href="#" class="text-decoration-none text-white d-flex">
                  <div class="pick-image me-3">
                    <img src="${pick.image}" alt="${pick.title}" 
                         class="rounded" width="100" height="100" 
                         style="object-fit: cover;">
                  </div>
                  
                  <div class="pick-content">
                    <span class="text-warning small d-block mb-1">${
                      pick.category
                    }</span>
                    <h3 class="h6 mb-0 pe-4">${pick.title}</h3>
                  </div>
                  
                  ${
                    pick.isLocked
                      ? `
                    <div class="position-absolute top-0 end-0 p-2">
                      <i class="bi bi-lock-fill text-warning"></i>
                    </div>
                  `
                      : ""
                  }
                </a>
              </div>
            `
              )
              .join("")}
          </div>
          
          <button class="btn btn-link text-white text-decoration-none p-0 mt-3">
            <span class="me-2">SEE MORE</span>
            <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  // Add hover effects
  const pickItems = section.querySelectorAll(".pick-item");
  pickItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("pick-hover");
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("pick-hover");
    });
  });

  return section;
}
