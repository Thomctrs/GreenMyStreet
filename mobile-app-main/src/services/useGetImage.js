const useGetImage = async (imageUri, sliderValue) => {
  const percentage = Math.round(sliderValue * 100);
  try {
    const form = new FormData();
    form.append("percentage", percentage);
    form.append("fileBlob", { uri: imageUri, name: "image.png", type: "image/png" });

    const options = {
      method: "POST",
      headers: {
        "Content-type": "multipart/form-data",
      },
      body: form,
    };

    const response = await fetch("https://mobile-api-zslu.onrender.com/image/getimage", options);

    if (!response.ok) {
      console.log(response.status);
      throw new Error("Failed to fetch configuration");
    }

    console.log(response.status);
    const imageBlob = await response.blob();
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new window.FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(imageBlob);
    });
    return dataUrl;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default useGetImage;
