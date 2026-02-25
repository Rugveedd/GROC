// toggle active state for size / package
function setupToggleGroup(groupSelector, activeClass) {
  const group = document.querySelector(groupSelector);
  if (!group) return;

  group.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-value]");
    if (!btn || !group.contains(btn)) return;

    group.querySelectorAll("[data-value]").forEach((el) =>
      el.classList.remove(activeClass)
    );
    btn.classList.add(activeClass);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupToggleGroup('[data-toggle="size"]', "pill-active");
  setupToggleGroup('[data-toggle="package"]', "package-active");

  const list = document.getElementById("extras-list");
  const prev = document.querySelector(".arrow-btn.prev");
  const next = document.querySelector(".arrow-btn.next");

  if (list && prev && next) {
    const step = 170;
    prev.addEventListener("click", () =>
      list.scrollBy({ left: -step, behavior: "smooth" })
    );
    next.addEventListener("click", () =>
      list.scrollBy({ left: step, behavior: "smooth" })
    );
  }
});