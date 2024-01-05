let instance = null;

const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

//++ Прослуховування натискання esc
function handleKeyDown(event) {
  if (event.code === 'Escape') {
    instance.close();
    document.removeEventListener('keydown', handleKeyDown);
  }
}
//--

//++Формування галереї
const gallery = document.querySelector(".gallery");
gallery.addEventListener('click', function (event) {
  event.preventDefault();

  if (event.target.classList.contains('gallery-image')) {
    const largeImageSource = event.target.getAttribute('data-source');
    
    //++Формування коду для віводу у бібліотеку
    const fragmentDiv  = document.createElement('div');
    fragmentDiv.classList.add('modal');

    const fragmentImg = document.createElement('img');
    fragmentImg.src  = largeImageSource;
    fragmentImg.width  = '1121';
    fragmentImg.height = '640';
    
    fragmentDiv.appendChild(fragmentImg);
    var htmlString = fragmentDiv.outerHTML;
    console.log(htmlString);
    //--

    //++Вивод зображення у модалку через бібліотеку
    instance = basicLightbox.create(htmlString, {
      onShow: () => {
        document.addEventListener('keydown', handleKeyDown);
      },
      onClose: () => {
        document.removeEventListener('keydown', handleKeyDown);
      }
    });
    instance.show();
    //--

  }
});
//--





//++вивід галереї
const fragment = document.createDocumentFragment();
for (let img of images) {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery-item');

  const listLink = document.createElement('a');
  listLink.classList.add('gallery-link');
  listLink.addEventListener('click', function (event) {
    event.preventDefault();
  }); 
  listLink.href = img.original;

  const imgElement = document.createElement('img');
  imgElement.classList.add('gallery-image');

  imgElement.src = img.preview;
  imgElement.setAttribute('data-source', img.original);
  imgElement.alt = img.description;

  listLink.appendChild(imgElement);
  listItem.appendChild(listLink);
  fragment.appendChild(listItem);
}

gallery.appendChild(fragment);
//--