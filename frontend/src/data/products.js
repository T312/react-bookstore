const products = [
  {
    // _id: id sản phẩm
    // name: tên sản phẩm
    // image: ảnh sản phẩm
    // description: mô tả
    // rating: xếp hạng
    // numReviews: số lượng review
    // price: giá
    // countInStock: số lượng trong kho
    // author: tác giả
    // reviews: bình luận
    // createdAt:
    // updatedAt:
    // __v:
    _id: "6344c42701b9fd659c31507f",
    name: "Bach Da Hanh 4",
    image:
      "http://books.google.com/books/content?id=RRLmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 0,
    numReviews: 0,
    price: 169000,
    countInStock: 10,
    author: [],
    reviews: [],
    createdAt: "2022-10-11T01:17:27.309Z",
    updatedAt: "2022-10-11T01:17:27.309Z",
    __v: 0,
  },
  {
    _id: "6344c3b4cfd41438d6002c3c",
    name: "bach da hanh1",
    image:
      "http://books.google.com/books/content?id=RRLmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 0,
    numReviews: 0,
    price: 169000,
    countInStock: 10,
    author: [],
    reviews: [],
    createdAt: "2022-10-11T01:15:32.114Z",
    updatedAt: "2022-10-11T01:16:56.824Z",
    __v: 0,
  },
  {
    _id: "6344c225cfd41438d6002c39",
    name: "bach da hanh1",
    image:
      "http://books.google.com/books/content?id=RRLmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 0,
    numReviews: 0,
    price: 0,
    countInStock: 0,
    author: [],
    reviews: [],
    createdAt: "2022-10-11T01:08:53.412Z",
    updatedAt: "2022-10-11T01:08:53.412Z",
    __v: 0,
  },
  {
    _id: "6344c16c80b7f8895f3f2ad5",
    name: "Bach Da Hanh",
    image:
      "http://books.google.com/books/content?id=RRLmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 0,
    numReviews: 0,
    price: 169000,
    countInStock: 10,
    author: [],
    reviews: [],
    createdAt: "2022-10-11T01:05:48.219Z",
    updatedAt: "2022-10-11T01:05:48.219Z",
    __v: 0,
  },
  {
    _id: "6343c006d561264c71837371",
    name: "Nha gia kim",
    image:
      "http://books.google.com/books/content?id=RRLmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 0,
    numReviews: 0,
    price: 169000,
    countInStock: 10,
    author: [],
    reviews: [],
    createdAt: "2022-10-10T06:47:34.601Z",
    updatedAt: "2022-10-10T06:47:34.601Z",
    __v: 0,
  },
];

const getAllProducts = () => products;

const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const getProductBySlug = (slug) => products.find((e) => e.slug === slug);

const getCartItemsInfo = (cartItems) => {
  let res = [];
  if (cartItems.length > 0) {
    cartItems.forEach((e) => {
      let product = getProductBySlug(e.slug);
      res.push({
        ...e,
        product: product,
      });
    });
  }
  // console.log(res)
  // console.log('sorted')
  // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
  return res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
};

const productData = {
  getAllProducts,
  getProducts,
  getProductBySlug,
  getCartItemsInfo,
};

export default productData;
