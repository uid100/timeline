export function renderTimeline(startDate, endDate, containerId = "timeline") {
    const container = document.getElementById(containerId);
    if (!container) return;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const now = new Date();

    const total = end - start;
    const elapsed = now - start;
    const pct = Math.min(Math.max(elapsed / total, 0), 1);

    const startMarker = container.querySelector("#start-marker");
    const endMarker = container.querySelector("#end-marker");
    const currentMarker = container.querySelector("#current-marker");

    startMarker.style.left = "0%";
    endMarker.style.left = "100%";
    currentMarker.style.left = (pct * 100) + "%";

    container.querySelector("#start-label").textContent = start.toLocaleDateString();
    container.querySelector("#end-label").textContent = end.toLocaleDateString();
    container.querySelector("#current-label").textContent = now.toLocaleDateString();
}

// Make it available globally
window.renderTimeline = renderTimeline;