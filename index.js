/**
 * Host half of the Appearance Studio bundle.
 *
 * The bundle owns no Host state: the palette is applied in the browser through
 * the Client `theme` service's token-override layer and persisted in the page's
 * local storage. An empty apply is intentional.
 */
export function apply() {}
