// Founder name on the site. Hidden for now; set SHOW_FOUNDER = true to bring it back everywhere.
// Only imported by server components, so the name isn't shipped in client JS while hidden.
export const SHOW_FOUNDER = false;
export const FOUNDER_NAME = SHOW_FOUNDER ? "Akash Kottil" : "";
/** Who the site names as maker / owner: the founder when shown, otherwise the brand. */
export const MAKER = SHOW_FOUNDER ? FOUNDER_NAME : "Zelcodes";
