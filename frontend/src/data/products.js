const imgbook_1 = require("../assets/images/books/bach-da-hanh.png");
const imgbook_2 = require("../assets/images/books/nha-gia-kim.png");
const imgbook_3 = require("../assets/images/books/cha-giau-cha-ngheo.png");
const imgbook_4 = require("../assets/images/books/tu-duy-nhanh-va-cham.png");
const imgbook_5 = require("../assets/images/books/an-mang-11-chu.png");
const imgbook_6 = require("../assets/images/books/kheo-an-kheo-noi-se-co-duoc-thien-ha.png");

const products = [
  {
    _id: "634cd18c788ccbd74cc2a1cc",
    name: "Bạch dạ hành",
    image: imgbook_1,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    category: "sach-trinh-tham",
    author: "Higashino-Keigo",
    rating: 10,
    numReviews: 1,
    price: 169000,
    countInStock: 10,
    reviews: [
      {
        name: "admin",
        rating: 10,
        comment: "hay nhất",
        user: "634cd264788ccbd74cc2a1d1",
        _id: "634cd3c3788ccbd74cc2a1d8",
        createdAt: "2022-10-17T04:02:11.792Z",
        updatedAt: "2022-10-17T04:02:11.792Z",
      },
    ],
    createdAt: "2022-10-17T03:52:44.015Z",
    updatedAt: "2022-10-17T04:09:42.687Z",
    __v: 1,
  },
  {
    _id: "634cd18c788ccbd74cc2a1cc",
    name: "Nhà giả kim",
    image: imgbook_2,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    category: "sach-tieu-thuyet",
    author: "Paulo Coelho",
    rating: 10,
    numReviews: 1,
    price: 169000,
    countInStock: 10,
    reviews: [
      {
        name: "admin",
        rating: 10,
        comment: "hay nhất",
        user: "634cd264788ccbd74cc2a1d1",
        _id: "634cd3c3788ccbd74cc2a1d8",
        createdAt: "2022-10-17T04:02:11.792Z",
        updatedAt: "2022-10-17T04:02:11.792Z",
      },
    ],
    createdAt: "2022-10-17T03:52:44.015Z",
    updatedAt: "2022-10-17T04:09:42.687Z",
    __v: 1,
  },
  {
    _id: "634cd18c788ccbd74cc2a1cc",
    name: "Cha giàu cha nghèo",
    image: imgbook_3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    category: "sach-kinh-te-chinh-tri",
    author: "Robert Kiyosaki",
    rating: 10,
    numReviews: 1,
    price: 169000,
    countInStock: 10,
    reviews: [
      {
        name: "admin",
        rating: 10,
        comment: "hay nhất",
        user: "634cd264788ccbd74cc2a1d1",
        _id: "634cd3c3788ccbd74cc2a1d8",
        createdAt: "2022-10-17T04:02:11.792Z",
        updatedAt: "2022-10-17T04:02:11.792Z",
      },
    ],
    createdAt: "2022-10-17T03:52:44.015Z",
    updatedAt: "2022-10-17T04:09:42.687Z",
    __v: 1,
  },
  {
    _id: "634cd18c788ccbd74cc2a1cc",
    name: "Tư duy nhanh và chậm",
    image: imgbook_4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    category: "sach-ky-nang",
    author: "Daniel Kahneman",
    rating: 10,
    numReviews: 1,
    price: 169000,
    countInStock: 10,
    reviews: [
      {
        name: "admin",
        rating: 10,
        comment: "hay nhất",
        user: "634cd264788ccbd74cc2a1d1",
        _id: "634cd3c3788ccbd74cc2a1d8",
        createdAt: "2022-10-17T04:02:11.792Z",
        updatedAt: "2022-10-17T04:02:11.792Z",
      },
    ],
    createdAt: "2022-10-17T03:52:44.015Z",
    updatedAt: "2022-10-17T04:09:42.687Z",
    __v: 1,
  },
  {
    _id: "634cd18c788ccbd74cc2a1cc",
    name: "Án mạng mười một chữ",
    image: imgbook_5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    category: "sach-trinh-tham",
    author: "Higashino Keigo",
    rating: 10,
    numReviews: 1,
    price: 169000,
    countInStock: 10,
    reviews: [
      {
        name: "admin",
        rating: 10,
        comment: "hay nhất",
        user: "634cd264788ccbd74cc2a1d1",
        _id: "634cd3c3788ccbd74cc2a1d8",
        createdAt: "2022-10-17T04:02:11.792Z",
        updatedAt: "2022-10-17T04:02:11.792Z",
      },
    ],
    createdAt: "2022-10-17T03:52:44.015Z",
    updatedAt: "2022-10-17T04:09:42.687Z",
    __v: 1,
  },
  {
    _id: "634cd18c788ccbd74cc2a1cc",
    name: "Khéo ăn khéo nói sẽ có được thiên hạ",
    image: imgbook_6,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    category: "sach-ky-nang",
    author: "Trác Nhã",
    rating: 10,
    numReviews: 1,
    price: 169000,
    countInStock: 10,
    reviews: [
      {
        name: "admin",
        rating: 10,
        comment: "hay nhất",
        user: "634cd264788ccbd74cc2a1d1",
        _id: "634cd3c3788ccbd74cc2a1d8",
        createdAt: "2022-10-17T04:02:11.792Z",
        updatedAt: "2022-10-17T04:02:11.792Z",
      },
    ],
    createdAt: "2022-10-17T03:52:44.015Z",
    updatedAt: "2022-10-17T04:09:42.687Z",
    __v: 1,
  },
  {
    _id: "634cd18c788ccbd74cc2a1cc",
    name: "Bạch dạ hành",
    image: imgbook_1,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    category: "sach-trinh-tham",
    author: "Higashino Keigo",
    rating: 10,
    numReviews: 1,
    price: 169000,
    countInStock: 10,
    reviews: [
      {
        name: "admin",
        rating: 10,
        comment: "hay nhất",
        user: "634cd264788ccbd74cc2a1d1",
        _id: "634cd3c3788ccbd74cc2a1d8",
        createdAt: "2022-10-17T04:02:11.792Z",
        updatedAt: "2022-10-17T04:02:11.792Z",
      },
    ],
    createdAt: "2022-10-17T03:52:44.015Z",
    updatedAt: "2022-10-17T04:09:42.687Z",
    __v: 1,
  },
  {
    _id: "634cd18c788ccbd74cc2a1cc",
    name: "Nhà giả kim",
    image: imgbook_2,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    category: "sach-tieu-thuyet",
    author: "Paulo Coelho",
    rating: 10,
    numReviews: 1,
    price: 169000,
    countInStock: 10,
    reviews: [
      {
        name: "admin",
        rating: 10,
        comment: "hay nhất",
        user: "634cd264788ccbd74cc2a1d1",
        _id: "634cd3c3788ccbd74cc2a1d8",
        createdAt: "2022-10-17T04:02:11.792Z",
        updatedAt: "2022-10-17T04:02:11.792Z",
      },
    ],
    createdAt: "2022-10-17T03:52:44.015Z",
    updatedAt: "2022-10-17T04:09:42.687Z",
    __v: 1,
  },
  {
    _id: "634cd18c788ccbd74cc2a1cc",
    name: "Cha giàu cha nghèo",
    image: imgbook_3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    category: "sach-kinh-te-chinh-tri",
    author: "Robert Kiyosaki",
    rating: 10,
    numReviews: 1,
    price: 169000,
    countInStock: 10,
    reviews: [
      {
        name: "admin",
        rating: 10,
        comment: "hay nhất",
        user: "634cd264788ccbd74cc2a1d1",
        _id: "634cd3c3788ccbd74cc2a1d8",
        createdAt: "2022-10-17T04:02:11.792Z",
        updatedAt: "2022-10-17T04:02:11.792Z",
      },
    ],
    createdAt: "2022-10-17T03:52:44.015Z",
    updatedAt: "2022-10-17T04:09:42.687Z",
    __v: 1,
  },
  {
    _id: "634cd18c788ccbd74cc2a1cc",
    name: "Tư duy nhanh và chậm",
    image: imgbook_4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    category: "sach-ky-nang",
    author: "Daniel Kahneman",
    rating: 10,
    numReviews: 1,
    price: 169000,
    countInStock: 10,
    reviews: [
      {
        name: "admin",
        rating: 10,
        comment: "hay nhất",
        user: "634cd264788ccbd74cc2a1d1",
        _id: "634cd3c3788ccbd74cc2a1d8",
        createdAt: "2022-10-17T04:02:11.792Z",
        updatedAt: "2022-10-17T04:02:11.792Z",
      },
    ],
    createdAt: "2022-10-17T03:52:44.015Z",
    updatedAt: "2022-10-17T04:09:42.687Z",
    __v: 1,
  },
  {
    _id: "634cd18c788ccbd74cc2a1cc",
    name: "Án mạng mười một chữ",
    image: imgbook_5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    category: "sach-trinh-tham",
    author: "Higashino Keigo",
    rating: 10,
    numReviews: 1,
    price: 169000,
    countInStock: 10,
    reviews: [
      {
        name: "admin",
        rating: 10,
        comment: "hay nhất",
        user: "634cd264788ccbd74cc2a1d1",
        _id: "634cd3c3788ccbd74cc2a1d8",
        createdAt: "2022-10-17T04:02:11.792Z",
        updatedAt: "2022-10-17T04:02:11.792Z",
      },
    ],
    createdAt: "2022-10-17T03:52:44.015Z",
    updatedAt: "2022-10-17T04:09:42.687Z",
    __v: 1,
  },
  {
    _id: "634cd18c788ccbd74cc2a1cc",
    name: "Khéo ăn khéo nói sẽ có được thiên hạ",
    image: imgbook_6,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    category: "sach-ky-nang",
    author: "Trác Nhã",
    rating: 10,
    numReviews: 1,
    price: 169000,
    countInStock: 10,
    reviews: [
      {
        name: "admin",
        rating: 10,
        comment: "hay nhất",
        user: "634cd264788ccbd74cc2a1d1",
        _id: "634cd3c3788ccbd74cc2a1d8",
        createdAt: "2022-10-17T04:02:11.792Z",
        updatedAt: "2022-10-17T04:02:11.792Z",
      },
    ],
    createdAt: "2022-10-17T03:52:44.015Z",
    updatedAt: "2022-10-17T04:09:42.687Z",
    __v: 1,
  },
  {
    _id: "634cd18c788ccbd74cc2a1cc",
    name: "Bạch dạ hành",
    image: imgbook_1,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    category: "sach-trinh-tham",
    author: "Higashino Keigo",
    rating: 10,
    numReviews: 1,
    price: 169000,
    countInStock: 10,
    reviews: [
      {
        name: "admin",
        rating: 10,
        comment: "hay nhất",
        user: "634cd264788ccbd74cc2a1d1",
        _id: "634cd3c3788ccbd74cc2a1d8",
        createdAt: "2022-10-17T04:02:11.792Z",
        updatedAt: "2022-10-17T04:02:11.792Z",
      },
    ],
    createdAt: "2022-10-17T03:52:44.015Z",
    updatedAt: "2022-10-17T04:09:42.687Z",
    __v: 1,
  },
  {
    _id: "634cd18c788ccbd74cc2a1cc",
    name: "Nhà giả kim",
    image: imgbook_2,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    category: "sach-tieu-thuyet",
    author: "Paulo Coelho",
    rating: 10,
    numReviews: 1,
    price: 169000,
    countInStock: 10,
    reviews: [
      {
        name: "admin",
        rating: 10,
        comment: "hay nhất",
        user: "634cd264788ccbd74cc2a1d1",
        _id: "634cd3c3788ccbd74cc2a1d8",
        createdAt: "2022-10-17T04:02:11.792Z",
        updatedAt: "2022-10-17T04:02:11.792Z",
      },
    ],
    createdAt: "2022-10-17T03:52:44.015Z",
    updatedAt: "2022-10-17T04:09:42.687Z",
    __v: 1,
  },
  {
    _id: "634cd18c788ccbd74cc2a1cc",
    name: "Cha giàu cha nghèo",
    image: imgbook_3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    category: "sach-kinh-te-chinh-tri",
    author: "Robert Kiyosaki",
    rating: 10,
    numReviews: 1,
    price: 169000,
    countInStock: 10,
    reviews: [
      {
        name: "admin",
        rating: 10,
        comment: "hay nhất",
        user: "634cd264788ccbd74cc2a1d1",
        _id: "634cd3c3788ccbd74cc2a1d8",
        createdAt: "2022-10-17T04:02:11.792Z",
        updatedAt: "2022-10-17T04:02:11.792Z",
      },
    ],
    createdAt: "2022-10-17T03:52:44.015Z",
    updatedAt: "2022-10-17T04:09:42.687Z",
    __v: 1,
  },
  {
    _id: "634cd18c788ccbd74cc2a1cc",
    name: "Tư duy nhanh và chậm",
    image: imgbook_4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    category: "sach-ky-nang",
    author: "Daniel Kahneman",
    rating: 10,
    numReviews: 1,
    price: 169000,
    countInStock: 10,
    reviews: [
      {
        name: "admin",
        rating: 10,
        comment: "hay nhất",
        user: "634cd264788ccbd74cc2a1d1",
        _id: "634cd3c3788ccbd74cc2a1d8",
        createdAt: "2022-10-17T04:02:11.792Z",
        updatedAt: "2022-10-17T04:02:11.792Z",
      },
    ],
    createdAt: "2022-10-17T03:52:44.015Z",
    updatedAt: "2022-10-17T04:09:42.687Z",
    __v: 1,
  },
  {
    _id: "634cd18c788ccbd74cc2a1cc",
    name: "Án mạng mười một chữ",
    image: imgbook_5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    category: "sach-trinh-tham",
    author: "Higashino Keigo",
    rating: 10,
    numReviews: 1,
    price: 169000,
    countInStock: 10,
    reviews: [
      {
        name: "admin",
        rating: 10,
        comment: "hay nhất",
        user: "634cd264788ccbd74cc2a1d1",
        _id: "634cd3c3788ccbd74cc2a1d8",
        createdAt: "2022-10-17T04:02:11.792Z",
        updatedAt: "2022-10-17T04:02:11.792Z",
      },
    ],
    createdAt: "2022-10-17T03:52:44.015Z",
    updatedAt: "2022-10-17T04:09:42.687Z",
    __v: 1,
  },
  {
    _id: "634cd18c788ccbd74cc2a1cc",
    name: "Khéo ăn khéo nói sẽ có được thiên hạ",
    image: imgbook_6,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    category: "sach-ky-nang",
    author: "Trác Nhã",
    rating: 10,
    numReviews: 1,
    price: 169000,
    countInStock: 10,
    reviews: [
      {
        name: "admin",
        rating: 10,
        comment: "hay nhất",
        user: "634cd264788ccbd74cc2a1d1",
        _id: "634cd3c3788ccbd74cc2a1d8",
        createdAt: "2022-10-17T04:02:11.792Z",
        updatedAt: "2022-10-17T04:02:11.792Z",
      },
    ],
    createdAt: "2022-10-17T03:52:44.015Z",
    updatedAt: "2022-10-17T04:09:42.687Z",
    __v: 1,
  },
];

const getAllProducts = () => products;

const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const getProductById = (_id) => products.find((e) => e._id === _id);

const getCartItemsInfo = (cartItems) => {
  let res = [];
  if (cartItems.length > 0) {
    cartItems.forEach((e) => {
      let product = getProductById(e._id);
      res.push({
        ...e,
        product: product,
      });
    });
  }

  return res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
};

const productData = {
  getAllProducts,
  getProducts,
  getProductById,
  getCartItemsInfo,
};

export default productData;
