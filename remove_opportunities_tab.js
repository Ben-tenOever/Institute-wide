
(function () {
  function removeOpportunitiesLinks(root) {
    const links = (root || document).querySelectorAll("a");
    for (const a of links) {
      const label = (a.textContent || "").trim().toLowerCase();
      if (label === "opportunities" || label === "opportunity" || label.endsWith("opportunities")) {
        const li = a.closest("li");
        if (li) li.remove();
        else a.remove();
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    removeOpportunitiesLinks(document);

    // If something injects the nav later, remove again
    const obs = new MutationObserver(function () {
      removeOpportunitiesLinks(document);
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
  });
})();
