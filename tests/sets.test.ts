import { Release, setToSetIdentifierMappings } from "../dist";

describe("Check for set identifiers", () => {
  it.each(Object.values(Release))("%s has set identifiers", (release) => {
    const setIdentifiers = setToSetIdentifierMappings[release.toLowerCase()];
    expect(setIdentifiers).toBeTruthy();
    expect(setIdentifiers.length).toBeGreaterThan(0);
  });
});
