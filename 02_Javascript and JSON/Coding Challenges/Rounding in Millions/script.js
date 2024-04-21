function millionsRounding(array) {
    return array.map(([cityName, population]) => [cityName, Math.round(population / 1_000_000) * 1_000_000]);
}

console.log(millionsRounding([
    ["Nice", 942208],
    ["Abu Dhabi", 1482816],
    ["Naples", 2186853],
    ["Vatican City", 572]
]))