import "./styles/custom.scss";
import * as bootstrap from "bootstrap";

import { Header } from "./components/Header.js";
import { LatestContent } from "./components/LatestContent.js";
import { OceanXplorers } from "./components/OceanXplorers.js";
import { TravelSection } from "./components/TravelSection.js";
import { NatGeoTV } from "./components/NatGeoTV.js";
import { Footer } from "./components/Footer.js";

const app = document.getElementById("app");

const titleSection = document.createElement("section");
titleSection.className = "bg-black text-white text-center py-5";
titleSection.innerHTML = `
  <h1 class="display-2 mb-3">LATEST STORIES</h1>
  <p>
    <a href="https://mnglei0124.github.io/lab7/subscribe" class="text-warning text-decoration-none">Subscribe</a>
    for full access to read stories from National Geographic.
  </p>
`;

app.appendChild(Header());
app.appendChild(titleSection);
app.appendChild(LatestContent());
app.appendChild(OceanXplorers());
app.appendChild(TravelSection());
app.appendChild(NatGeoTV());
app.appendChild(Footer());

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
