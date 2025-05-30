async function searchWeb() {
  const query = document.getElementById("query").value;
  const res = await fetch(`/api/duckduckgo?q=${encodeURIComponent(query)}`);
  const data = await res.json();
  displayResults(data.RelatedTopics);
}

async function searchImages() {
  const query = document.getElementById("query").value;
  window.open(`https://duckduckgo.com/?q=${encodeURIComponent(query)}&iax=images&ia=images`, "_blank");
}

async function searchMaps() {
  const query = document.getElementById("query").value;
  window.open(`https://duckduckgo.com/?q=${encodeURIComponent(query)}&ia=maps`, "_blank");
}

function displayResults(results) {
  const container = document.getElementById("results");
  container.innerHTML = "";
  results.forEach(item => {
    if (item.Text && item.FirstURL) {
      container.innerHTML += `
        <div class="result">
          <a href="${item.FirstURL}" target="_blank">
            <h3>${item.Text}</h3>
          </a>
        </div>
      `;
    }
  });
}
