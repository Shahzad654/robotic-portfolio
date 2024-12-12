export const generateSlug = (title) => {
  return title
    .toLowerCase() 
    .replace(/[^a-z0-9\s-]/g, "") 
    .trim() 
    .replace(/\s+/g, "-") 
    .replace(/-+/g, "-")
    .replace(/[\(\)]/g, "-")
};
