import {
  Release,
  setIdentifierToSetMappings,
  setToSetIdentifierMappings,
} from "@flesh-and-blood/types";

/**
 * Copies a lookup table onto a null prototype so that a key can only ever match
 * a real entry. Keys here come from raw search text, and a plain object literal
 * answers `constructor`, `__proto__` and the rest of `Object.prototype` with an
 * inherited member, handing the caller a function where it expects a value.
 *
 * Deliberately not re-exported from the package barrel: it guards an internal
 * invariant rather than serving consumers.
 */
export const getLookupWithoutInheritedKeys = <T>(entries: {
  [key: string]: T;
}): { [key: string]: T } => Object.assign(Object.create(null), entries);

export const releasesBySetIdentifier = getLookupWithoutInheritedKeys<Release>(
  setIdentifierToSetMappings,
);
// Annotated with the miss case the sort path branches on, which the mapping's
// own type hides by claiming every release resolves.
export const setIdentifiersByRelease: { [key: string]: string[] | undefined } =
  getLookupWithoutInheritedKeys<string[]>(setToSetIdentifierMappings);
