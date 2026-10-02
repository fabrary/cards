import type { PreliminaryCard } from "./preliminary-card.ts";
import nicknamesFile from "./nicknames.json" with { type: "json" };

// Card name -> the names players call it by. Keyed by name so every pitch of
// the card carries them.
const nicknamesByName = new Map(
  Object.entries(nicknamesFile as { [name: string]: string[] }),
);

export const getNicknames = ({ name }: PreliminaryCard): string[] | undefined =>
  nicknamesByName.get(name);

// A nickname keyed by a name no card carries would be silently dropped, so a
// renamed card or a typo stops the transform instead.
export const assertEveryNicknameNamesACard = (
  cards: readonly PreliminaryCard[],
): void => {
  const cardNames = new Set(cards.map(({ name }) => name));
  const strandedNames = [...nicknamesByName.keys()].filter(
    (name) => !cardNames.has(name),
  );

  if (strandedNames.length > 0) {
    throw new Error(
      `Nicknames name no card: ${strandedNames.join(", ")}. Fix nicknames.json.`,
    );
  }
};
