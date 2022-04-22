const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const makeImageMarkup = ({ url, alt }) => {
  return `<li class="gallery__item"><img src="${url}" alt = "${alt}"></li>`;
};

const galleryEl = document.querySelector(".gallery");
const makeImageColection = images.map(makeImageMarkup).join(" ");

console.log(galleryEl);
galleryEl.insertAdjacentHTML("beforeend", makeImageColection);


// const createImageСarg = ({url, alt}) => {
//   const itemEl = document.createElement("li");
//   itemEl.classList.add("gallery__item")
//     const imgEl = document.createElement("img");
//     imgEl.src = url;
//     imgEl.alt = alt;
//     itemEl.append(imgEl);
//   return itemEl;
// };
//  const imagesColecton = images.map(createImageСarg);
// const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl);
// galleryEl.append(...imagesColecton);