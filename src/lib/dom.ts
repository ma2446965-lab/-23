/**
 * Tiny DOM helper for client-side tool scripts.
 *
 * Returns `any` on purpose: these small, single-page scripts read a known set
 * of inputs by id and the extra type ceremony is not worth it here. The build
 * (esbuild) still transpiles strictly; this only relaxes the editor/checker.
 */
export const $ = (id: string): any => document.getElementById(id);
