function determineTemperatureCategory(currentTemp) {
  if (currentTemp < 50) {
    return "cold";
  } else if (currentTemp < 70) {
    return "medium";
  } else {
    return "hot";
  }
}

function getOutfit(currentTemp, unit) {
  // Convert temperature if necessary
  let tempInFahrenheit =
    unit === "metric" ? (currentTemp * 9) / 5 + 32 : currentTemp;

  const category = determineTemperatureCategory(tempInFahrenheit);
  const outfits = {
    cold: {
      tops: ["sweater", "hoodie", "coat"],
      bottoms: ["jeans", "leggings", "sweatpants"],
      shoes: ["boots", "sneakers"],
      accessories: ["scarf", "hat", "gloves"],
    },
    medium: {
      tops: ["t-shirt", "long-sleeve shirt", "sweater"],
      bottoms: ["jeans", "skirt", "dress pants"],
      shoes: ["sneakers", "flats", "boots"],
      accessories: ["jacket", "scarf"],
    },
    hot: {
      tops: ["tank top", "t-shirt", "dress"],
      bottoms: ["shorts", "skirt"],
      shoes: ["sandals", "flip-flops"],
      accessories: ["hat", "sunglasses"],
    },
  };

  return {
    top: outfits[category].tops[
      Math.floor(Math.random() * outfits[category].tops.length)
    ],
    bottom:
      outfits[category].bottoms[
        Math.floor(Math.random() * outfits[category].bottoms.length)
      ],
    shoes:
      outfits[category].shoes[
        Math.floor(Math.random() * outfits[category].shoes.length)
      ],
    accessory:
      outfits[category].accessories[
        Math.floor(Math.random() * outfits[category].accessories.length)
      ] || null,
  };
}

// function getOutfit(temp) {
//   const outfits = {
//     cold: {
//       tops: ["sweater", "hoodie", "coat"],
//       bottoms: ["jeans", "leggings", "sweatpants"],
//       shoes: ["boots", "sneakers"],
//       accessories: ["scarf", "hat", "gloves"],
//     },
//     medium: {
//       tops: ["t-shirt", "long-sleeve shirt", "sweater"],
//       bottoms: ["jeans", "skirt", "dress pants"],
//       shoes: ["sneakers", "flats", "boots"],
//       accessories: ["jacket", "scarf"],
//     },
//     hot: {
//       tops: ["tank top", "t-shirt", "dress"],
//       bottoms: ["shorts", "skirt"],
//       shoes: ["sandals", "flip-flops"],
//       accessories: ["hat", "sunglasses"],
//     },
//   };

//   const category = determineTemperatureCategory(temp);
//   const outfit = outfits[category];

//   return {
//     top: random.choice(outfit.tops),
//     bottom: random.choice(outfit.bottoms),
//     shoes: random.choice(outfit.shoes),
//     accessory: random.choice(outfit.accessories) || null, // Handle optional accessories
//   };
// }

// function determineTemperatureCategory(temp) {
//   if (temp < 50) {
//     return "cold";
//   } else if (temp < 70) {
//     return "medium";
//   } else {
//     return "hot";
//   }
// }
