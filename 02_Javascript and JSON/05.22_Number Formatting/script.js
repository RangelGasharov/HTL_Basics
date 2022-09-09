console.log("%cCurrency Formatting", "font-weight: bold; font-size: 1.5rem")

const euroFormatterGermany = Intl.NumberFormat("de-DE", {
    notation: "standard",
    style: "currency",
    currency: "EUR"
})

const euroFormatterAustria = Intl.NumberFormat("de-AT", {
    notation: "standard",
    style: "currency",
    currency: "EUR"
})

const chfFormatter = Intl.NumberFormat("ch-CH", {
    notation: "standard",
    style: "currency",
    currency: "CHF"
})

const usdFormatter = Intl.NumberFormat("en-US", {
    notation: "standard",
    style: "currency",
    currency: "USD"
})

const yenFormatter = Intl.NumberFormat("jp-JP", {
    notation: "standard",
    style: "currency",
    currency: "YEN"
})

let euro = euroFormatterGermany.format(93_532)
console.log(`Euro in German formatting: ${euro}`)
euro = euroFormatterAustria.format(93_532)
console.log(`Euro in Austrian formatting: ${euro}`)
let chf = chfFormatter.format(93_532)
console.log(`CHF in Swiss formatting: ${chf}`);
let usd = usdFormatter.format(93_532)
console.log(`USD in US-american formatting: ${usd}`)
let yen = yenFormatter.format(93_532)
console.log(`YEN in Japanese formatting: ${yen}`)

console.log("")
console.log("%cFormatting in Social Media", "font-weight: bold; font-size: 1.5rem")

const englishFormatter = Intl.NumberFormat("en", { notation: "compact" })
const frenchFormatter = Intl.NumberFormat("fr", { notation: "compact" })
const spanishFormatter = Intl.NumberFormat("es", { notation: "compact" })
const germanFormatter = Intl.NumberFormat("de", { notation: "compact" })
const italianFormatter = Intl.NumberFormat("it", { notation: "compact" })
const russianFormatter = Intl.NumberFormat("ru", { notation: "compact" })
const japaneseFormatter = Intl.NumberFormat("ja", { notation: "compact" })
const chineseFormatter = Intl.NumberFormat("zh", { notation: "compact" })
const koreanFormatter = Intl.NumberFormat("ko", { notation: "compact" })
let n;

console.log("%cEnglish", "font-weight: light; font-size: 1rem")
n = englishFormatter.format(1_675)
console.log(`Thousand: ${n}`)
n = englishFormatter.format(67_400_509)
console.log(`Million: ${n}`)
n = englishFormatter.format(12_921_012_164)
console.log(`Billion: ${n}`)
console.log("")

console.log("%cFrench", "font-weight: light; font-size: 1rem")
n = frenchFormatter.format(1_675)
console.log(`Thousand: ${n}`)
n = frenchFormatter.format(67_400_509)
console.log(`Million: ${n}`)
n = frenchFormatter.format(12_921_012_164)
console.log(`Billion: ${n}`)
console.log("")

console.log("%cSpanish", "font-weight: light; font-size: 1rem")
n = spanishFormatter.format(1_675)
console.log(`Thousand: ${n}`)
n = spanishFormatter.format(67_400_509)
console.log(`Million: ${n}`)
n = spanishFormatter.format(12_921_012_164)
console.log(`Billion: ${n}`)
console.log("")

console.log("%cGerman", "font-weight: light; font-size: 1rem")
n = germanFormatter.format(1_675)
console.log(`Thousand: ${n}`)
n = germanFormatter.format(67_400_509)
console.log(`Million: ${n}`)
n = germanFormatter.format(12_921_012_164)
console.log(`Billion: ${n}`)
console.log("")

console.log("%cItalian", "font-weight: light; font-size: 1rem")
n = italianFormatter.format(1_675)
console.log(`Thousand: ${n}`)
n = italianFormatter.format(67_400_509)
console.log(`Million: ${n}`)
n = italianFormatter.format(12_921_012_164)
console.log(`Billion: ${n}`)
console.log("")

console.log("%cRussian", "font-weight: light; font-size: 1rem")
n = russianFormatter.format(1_675)
console.log(`Thousand: ${n}`)
n = russianFormatter.format(67_400_509)
console.log(`Million: ${n}`)
n = russianFormatter.format(12_921_012_164)
console.log(`Billion: ${n}`)
console.log("")

console.log("%cJapanese", "font-weight: light; font-size: 1rem")
n = japaneseFormatter.format(1_675)
console.log(`Thousand: ${n}`)
n = japaneseFormatter.format(67_400_509)
console.log(`Million: ${n}`)
n = japaneseFormatter.format(12_921_012_164)
console.log(`Billion: ${n}`)
console.log("")

console.log("%cChinese", "font-weight: light; font-size: 1rem")
n = chineseFormatter.format(1_675)
console.log(`Thousand: ${n}`)
n = chineseFormatter.format(67_400_509)
console.log(`Million: ${n}`)
n = chineseFormatter.format(12_921_012_164)
console.log(`Billion: ${n}`)
console.log("")

console.log("%cKorean", "font-weight: light; font-size: 1rem")
n = koreanFormatter.format(1_675)
console.log(`Thousand: ${n}`)
n = koreanFormatter.format(67_400_509)
console.log(`Million: ${n}`)
n = koreanFormatter.format(12_921_012_164)
console.log(`Billion: ${n}`)