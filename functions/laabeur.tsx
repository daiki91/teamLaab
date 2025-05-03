export function getLaabeurId(url: string): number | null {
  if (!url) return null;
  const parts = url.split("/").filter(Boolean); // filtre les vides
  const idStr = parts.at(-1) || parts.at(-2); // au cas où l'URL se termine par '/'
  const id = parseInt(idStr || "", 10);
  return isNaN(id) ? null : id;
}
