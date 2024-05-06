// getAddress.js

const getAddress = async (latitude, longitude, apiKey) => {
  try {
    const apiUrl = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=66353d27e11e7540026121jfi958e26`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === "OK") {
      const address = data.address;
      return address;
    } else {
      throw new Error(`Error retrieving address: ${data.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw the error for handling in the calling code
  }
};

export default getAddress;

//https://geocode.maps.co/reverse?lat=latitude&lon=longitude&api_key=66353d27e11e7540026121jfi958e26
