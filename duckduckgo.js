export default async function handler(req, res) {
  const query = req.query.q;
  const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_redirect=1&no_html=1`;
  const response = await fetch(url);
  const data = await response.json();
  res.status(200).json(data);
}
