import { Release, releases, Type } from "@flesh-and-blood/types";
import { cards } from "../dist/index";

const heroes = cards.filter(({ types }) => types.includes(Type.Hero));

describe("Sets have accurate draft heroes", () => {
  it.each(Object.values(Release))("%s", (release) => {
    const releaseInfo = releases.find(
      (releaseInfo) => releaseInfo.release === release
    );

    if (releaseInfo?.draft) {
      for (const heroIdentifier of releaseInfo.draft?.heroIdentifiers) {
        const hero = heroes.find(
          ({ cardIdentifier }) => cardIdentifier === heroIdentifier
        );
        if (!hero) {
          console.error("No hero found for", heroIdentifier);
        }
        expect(hero).toBeTruthy();
      }
    }
  });
});
