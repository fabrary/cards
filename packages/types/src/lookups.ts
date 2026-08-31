/**
 * Copies a lookup table onto a null prototype so that a key can only ever match
 * a real entry. Set identifiers reach these tables as raw user text (search
 * filters, shared deck URLs), and a plain object literal answers `constructor`,
 * `__proto__` and the rest of `Object.prototype` with an inherited member,
 * handing the caller a function where it expects a value.
 *
 * Deliberately not re-exported from the package barrel: it guards an internal
 * invariant rather than serving consumers.
 */
export const getLookupWithoutInheritedKeys = <T>(entries: {
  [key: string]: T;
}): { [key: string]: T } => Object.assign(Object.create(null), entries);
