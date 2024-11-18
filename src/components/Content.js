export function Content() {
  const main = document.createElement("main");
  main.className = "container mt-4";

  const row = document.createElement("div");
  row.className = "row";

  const colMain = document.createElement("div");
  colMain.className = "col-md-8";
  colMain.innerHTML = "<h2>Latest Stories</h2><p>Content goes here...</p>";

  const colSidebar = document.createElement("div");
  colSidebar.className = "col-md-4";
  colSidebar.innerHTML = "<h2>Sidebar</h2><p>Sidebar content...</p>";

  row.appendChild(colMain);
  row.appendChild(colSidebar);
  main.appendChild(row);

  return main;
}
