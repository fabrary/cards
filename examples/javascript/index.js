const { Class: Clazz, Release, Subtype } = require("@flesh-and-blood/types");
const { cards } = require("@flesh-and-blood/cards");
const chalk = require("chalk");

const wizardCards = cards.filter(({ classes }) =>
  classes.includes(Clazz.Wizard)
);
const firstWizardCard = wizardCards[0];

const brightLightsCards = cards.filter(({ sets }) =>
  sets.includes(Release.BrightLights)
);
const firstBrightLightsCard = brightLightsCards[0];

const popperCards = cards.filter(({ classes, power, subtypes }) => {
  const isNotIllusionist = !classes.includes(Clazz.Illusionist);
  const isSixPlusPower = !!power && power >= 6;
  const isAttackAction = subtypes.includes(Subtype.Attack);

  return isNotIllusionist && isSixPlusPower && isAttackAction;
});
const firstPopperCard = popperCards[0];

// This is just formatting text in the console, not important for using the library just trying to make the console more readable
const orange = chalk.hex(`#F28100`);
console.log(orange.bold`${wizardCards.length} Wizard cards found.`);
console.log(orange`First Wizard card found: ${firstWizardCard.name}`);
console.log(orange`${JSON.stringify(firstWizardCard, null, 2)}
`);

const green = chalk.green;
console.log(green.bold`${brightLightsCards.length} Bright Lights cards found.`);
console.log(
  green`First Bright Lights card found: ${firstBrightLightsCard.name}`
);
console.log(green`${JSON.stringify(firstBrightLightsCard, null, 2)}
`);

const red = chalk.red;
console.log(red.bold`${popperCards.length} Popper cards found.`);
console.log(red`First Popper card found: ${firstPopperCard.name}`);
console.log(red`${JSON.stringify(firstPopperCard, null, 2)}
`);
