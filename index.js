
const { createApp, ref, onMounted, defineAsyncComponent } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

const getHTML = async (urlPath) => {
  try {
    const response = await fetch(urlPath);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const html = await response.text();
    return html;
  } catch (err) {
    console.error("Failed to fetch HTML:", err);
    return `<p>Error loading template.</p>`;
  }
}

