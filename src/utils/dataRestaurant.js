const restaurants = [
  {
    id: "01",
    name: "Restaurante",
    description: "Comida brasileira",
    image: "https://images.pexels.com/photos/9630341/pexels-photo-9630341.jpeg",
    avatar:
      "https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/4e5951f4-1e4f-48db-bdde-d3dd7c4c0391/202302131839_1umM_i.jpg",
    stars: "4.9",
    deliveryTime: "35min | 45min",
    deliveryPrice: "R$ 8,99",
    products: {
      pratos: [
        {
          id: "01",
          nameProduct: "Macarronada",
          descriptionPrato: "Macarrão ao molho branco",
          imageProduct:
            "https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg",
          priceProduct: "23,00",
        },
        {
          id: "02",
          nameProduct: "Marmita Fit",
          descriptionPrato: "Frango grelhado, brócolis e salada",
          imageProduct:
            "https://images.pexels.com/photos/12050951/pexels-photo-12050951.jpeg",
          priceProduct: "12,50",
        },
        {
          id: "03",
          nameProduct: "Torresmo",
          descriptionPrato: "Torresmo enrolado",
          imageProduct:
            "https://images.pexels.com/photos/15378097/pexels-photo-15378097.jpeg",
          priceProduct: "7,00",
        },
      ],
      bebidas: [
        {
          id: "01",
          nameProduct: "Água",
          imageProduct:
            "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg",
          priceProduct: "3,00",
        },
        {
          id: "02",
          nameProduct: "Refrigerante",
          imageProduct:
            "https://images.pexels.com/photos/4113618/pexels-photo-4113618.jpeg",
          priceProduct: "5,00",
        },
        {
          id: "03",
          nameProduct: "Suco",
          imageProduct:
            "https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg",
          priceProduct: "7,50",
        },
      ],
    },
  },
  {
    id: "02",
    name: "Sushi's",
    description: "Comida Japonesa",
    image: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg",
    avatar:
      "https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/ae535990-dc3b-4f72-be19-bbbbb8907648/201908291702_MEFg_i.jpg",
    stars: "4.3",
    deliveryTime: "20min | 25min",
    deliveryPrice: "R$ 5,99",
    products: {
      pratos: [
        {
          id: "01",
          nameProduct: "Lámen",
          descriptionPrato: "Macarrão, ovos, milho cozido e alga nori",
          imageProduct:
            "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg",
          priceProduct: "34,99",
        },
        {
          id: "02",
          nameProduct: "Salmão",
          descriptionPrato: "2 filés de salmão",
          imageProduct:
            "https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg",
          priceProduct: "45,50",
        },
        {
          id: "03",
          nameProduct: "Hot Roll",
          descriptionPrato: "Algas, arroz e peixe",
          imageProduct:
            "https://images.pexels.com/photos/3763635/pexels-photo-3763635.jpeg",
          priceProduct: "22,00",
        },
      ],
      bebidas: [
        {
          id: "01",
          nameProduct: "Água",
          imageProduct:
            "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg",
          priceProduct: "3,00",
        },
        {
          id: "02",
          nameProduct: "Refrigerante",
          imageProduct:
            "https://images.pexels.com/photos/4113618/pexels-photo-4113618.jpeg",
          priceProduct: "5,00",
        },
        {
          id: "03",
          nameProduct: "Suco",
          imageProduct:
            "https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg",
          priceProduct: "7,50",
        },
      ],
    },
  },
  {
    id: "03",
    name: "Pek's Burger",
    description: "Hamburgueria",
    image: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg",
    avatar:
      "https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/fb9115ab-aac4-47f3-8433-045b191ae827/202008011623_Lxz4_i.png",
    stars: "5.0",
    deliveryTime: "30min | 40min",
    deliveryPrice: "R$ 3,99",
    products: {
      pratos: [
        {
          id: "01",
          nameProduct: "Angus Prime",
          descriptionPrato: "2x Angus 180g, queijo cheder, bacon e catupiry",
          imageProduct:
            "https://images.pexels.com/photos/15141035/pexels-photo-15141035.jpeg",
          priceProduct: "31,99",
        },
        {
          id: "02",
          nameProduct: "Duplo Bacon",
          descriptionPrato: "Angus 180g, bacon + bacon e catupiry",
          imageProduct:
            "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg",
          priceProduct: "23,50",
        },
        {
          id: "03",
          nameProduct: "Hot Burger",
          descriptionPrato: "Angus 120g, bacon, alface e tomate",
          imageProduct:
            "https://images.pexels.com/photos/15344191/pexels-photo-15344191.jpeg",
          priceProduct: "19,99",
        },
      ],
      bebidas: [
        {
          id: "01",
          nameProduct: "Água",
          imageProduct:
            "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg",
          priceProduct: "3,00",
        },
        {
          id: "02",
          nameProduct: "Refrigerante",
          imageProduct:
            "https://images.pexels.com/photos/4113618/pexels-photo-4113618.jpeg",
          priceProduct: "5,00",
        },
        {
          id: "03",
          nameProduct: "Suco",

          imageProduct:
            "https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg",
          priceProduct: "7,50",
        },
      ],
    },
  },
];
export default restaurants;
