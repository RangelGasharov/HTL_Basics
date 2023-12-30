console.log("%cIntl Date Time Format", "font-size: 1.5em;");

const formatterFull = new Intl.DateTimeFormat(undefined, { dateStyle: "full" });
console.log(formatterFull.format(new Date()));

const formatterFullGerman = new Intl.DateTimeFormat("de", { dateStyle: "full" });
console.log(formatterFullGerman.format(new Date()));

const formatterFullSpanish = new Intl.DateTimeFormat("es", { dateStyle: "full" });
console.log(formatterFullSpanish.format(new Date()));

const formatterFullFrench = new Intl.DateTimeFormat("fr", { dateStyle: "full" });
console.log(formatterFullFrench.format(new Date()));

console.log("%cIntl Relative Time Format", "font-size: 1.5em;");

const formatterRelative = new Intl.RelativeTimeFormat(undefined);
console.log(formatterRelative.format(-20, "minutes"));
console.log(formatterRelative.format(30, "minutes"));

const formatterRelativeShort = new Intl.RelativeTimeFormat(undefined, { style: "short" });
console.log(formatterRelativeShort.format(-20, "minutes"));

console.log("%cNumber Format", "font-size: 1.5em;");

const formatterCurrency = new Intl.NumberFormat(undefined, { currency: "EUR", style: "currency" });
console.log(formatterCurrency.format(991234));

const formatterUnit = new Intl.NumberFormat(undefined, { style: "unit", unit: "liter" });
console.log(formatterUnit.format(1200));

const formatterNotationCompact = new Intl.NumberFormat(undefined, { notation: "compact" });
console.log(formatterNotationCompact.format(1000000));
console.log(formatterNotationCompact.format(3000000000));

const formatterDecimal = new Intl.NumberFormat(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 1 });
console.log(formatterDecimal.format(9.565));

const formatterPluralRules = new Intl.PluralRules(undefined);
console.log(formatterPluralRules.select(1));
console.log(formatterPluralRules.select(2));