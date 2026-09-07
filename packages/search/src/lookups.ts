import {
  setIdentifierToSetMappings,
  setToSetIdentifierMappings,
} from "@flesh-and-blood/types";

/**
 * Copies a lookup table onto a null prototype so that a key can only ever match
 * a real entry. Search keys arrive as raw user text; what goes wrong without
 * this is spelled out on the same helper in `@flesh-and-blood/types`.
 *
 * Deliberately not re-exported from the package barrel: it guards an internal
 * invariant rather than serving consumers.
 */
export const getLookupWithoutInheritedKeys = <T>(entries: {
  [key: string]: T;
}): { [key: string]: T } => Object.assign(Object.create(null), entries);

// Search-side names for the set tables, which arrive prototype-free already.
export const releasesBySetIdentifier = setIdentifierToSetMappings;
export const setIdentifiersByRelease = setToSetIdentifierMappings;
