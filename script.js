let contentGridElement = document.getElementById('contentGrid');

let artList = [
  {
    name: "Old Town Road",
    medium: "Medium: Acrylic paint on Canvas",
    date: "Date: January 2022",
    description: "Description: Photorealistic painting of a jokey on his horse with mountains in and trees in the background.",
    image: "horse.jpg"
  },
  {
    name: "Oranges",
    medium: "Medium: Digital art on Procreate",
    date: "Date: March 2023",
    description: "Description: Photorealistic artwork of oranges. I made this for a artist-writer collaboration for a magazine.",
    image: "orange.jpg"
  },
  {
    name: "NY State of Mind",
    medium: "Medium: Acrylic paint on Canvas",
    date: "Date: March 2021",
    description: "Description: Photorealistic painting of a NYC street. Some facts about this painting: I still haven't completed the painting because one side of the painting is not alligned with the other so I just cropped the painting. I painted this back in 2021 and in 2022 I was able to visit this street.",
    image: "nyc.png"
  },
];

for (var i = 0; i < artList.length; i++) {
  createElementArt(artList[i]);
}


function createElementArt(incomingJSON){

  let newContentElement = document.createElement("DIV");
    newContentElement.classList.add('contentItem');
    
    let newContentHeading = document.createElement("H3");
    newContentHeading.classList.add('contentTitle')
    newContentHeading.innerText = incomingJSON['name'];
    newContentElement.appendChild(newContentHeading);

    let newArtImage = document.createElement("IMG");
    newArtImage.classList.add("artImage");
    newArtImage.src = incomingJSON["image"];
    newContentElement.appendChild(newArtImage);

    let newArtMedium = document.createElement('p');
    newArtMedium.classList.add("artMedium");
    newArtMedium.innerText = incomingJSON["medium"];
    newContentElement.appendChild(newArtMedium);

    let newArtDate = document.createElement('p');
    newArtDate.classList.add("artDate");
    newArtDate.innerText = incomingJSON["date"];
    newContentElement.appendChild(newArtDate);

    let newContentDescription = document.createElement('p');
    newContentDescription.classList.add("artBlurb");
    newContentDescription.innerText = incomingJSON["description"];
    newContentElement.appendChild(newContentDescription);

    contentGridElement.appendChild(newContentElement);
}

AOS.init({
  duration: 1200,
})
