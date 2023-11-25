
const api = "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";
const inp = document.getElementById("inp");
const images = document.querySelector('.images');

const getImage = async () => {
    // request to openAi
    const method = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body: JSON.stringify(
            {
                "prompt": inp.value,
                "n": 3,
                "size": "256x256"
            }
        )
    }
    const imagesContainer = document.querySelector('.images');
    imagesContainer.classList.add('show-cards');
    const res = await fetch("https://api.openai.com/v1/images/generations", method);

    // response json
    const data = await res.json()
    const listImages = data.data;
    
    // Clear existing images
    images.innerHTML = "";

    // Add new images to the container
    listImages.map(photo => {
        const container = document.createElement("div");
        images.appendChild(container);
        const img = document.createElement("img");
        container.appendChild(img);
        img.src = photo.url;
        img.classList.add("addimg")
    });
}

// window.addEventListener("load", () => {
//     const loader = document.querySelector(".loader");
  
//     loader.classList.add("loader--hidden");
  
//     loader.addEventListener("transitionend", () => {
//       document.body.removeChild(loader);
//     });
//   });

