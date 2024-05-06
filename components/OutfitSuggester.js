import React from "react";
import styles from "./outfitsuggester.module.scss";

// Define outfit suggestions for cold and warm temperatures
const coldOutfits = [
  "Winter coat, scarf, and gloves",
  "Thick sweater and jeans",
  "Heavy jacket and beanie",
];

const warmOutfits = [
  "T-shirt and shorts",
  "Tank top and flip-flops",
  "Summer dress and sandals",
];

// Function to get a random outfit from a list
const getRandomOutfit = (outfits) => {
  const randomIndex = Math.floor(Math.random() * outfits.length);
  return outfits[randomIndex];
};

const OutfitSuggester = ({ temperature }) => {
  if (typeof temperature !== "number") {
    return <p>Error: Invalid temperature data.</p>;
  }

  const outfit =
    temperature < 60
      ? getRandomOutfit(coldOutfits)
      : getRandomOutfit(warmOutfits);

  return (
    <div className={styles["outfit-suggester"]}>
      <h3>Suggested Outfit</h3>
      <p className={styles.temperature}>
        Temperature: {temperature.toFixed(1)}°F
      </p>
      <p className={styles["outfit-suggestion"]}>We suggest: {outfit}</p>
    </div>
  );
};

export default OutfitSuggester;
