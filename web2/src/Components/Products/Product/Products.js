//rfc
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton"; //npm install react-loading-skeleton
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
export default function Product() {
  const [data] = useState([
    {
      id: 1,
      title: "GUCCI SS20 LOGO 598861XJBZ8-1082",
      price: 1516.0,
      description:
        "MODEL NO : 598861XJBZ8-1082 / RELEASE DATE : 2021-01-31 / SIZE REPORT : 1. TRUE TO SIZE: 37.5%, 2. RUNS LARGE: 56.3%, 3. RUNS SMALL: 6.3%, 4. NO. OF REVIEW: 16 / STYLE: HIGH STREET / SEASON : SPRING, AUTUMN / VERSION : LOOSE",
      category: "Gucci",
      image:
        "https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_6b1d4320-ee3c-47a0-8b34-d215a87c2f49_1512x.jpg?v=1649217234",
      rating: {
        rate: 3.9,
        count: 120,
      },
      count: 1,
    },
    {
      id: 2,
      title: "GUCCI SS21 475532-XJCRR-4535 ",
      price: 775.0,
      description:
        "MODEL NO : 475532-XJCRR-4535 / RELEASE DATE : 2021-10-03 / STYLE: HIGH STREET / SEASON : SPRING, AUTUMN / VERSION : LOOSE",
      category: "Gucci",
      image:
        "https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_49fa3d8b-f665-4835-adc9-72aef6d222b8_1512x.jpg?v=1649314734",
      rating: {
        rate: 4.1,
        count: 259,
      },
      count: 1,
    },
    {
      id: 3,
      title: "GUCCI OTG GG 644992-H9HON-1000",
      price: 1651.0,
      description:
        "MODEL NO : 644992-H9HON-1000 / RELEASE DATE : 2021-07-27 / SEASON : ALL SEASON",
      category: "Gucci",
      image:
        "https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_d208b138-eb76-4954-b0af-880157a83a24_1512x.jpg?v=1649298925",
      rating: {
        rate: 4.7,
        count: 500,
      },
      count: 1,
    },
    {
      id: 4,
      title: "GUCCI FW21 660292-XJDHD-2109",
      price: 1465.0,
      description:
        "MODEL NO : 660292-XJDHD-2109 / RELEASE DATE : 2021-07-13 / STYLE: HIGH STREET / SEASON : SPRING, AUTUMN, WINTER",
      category: "Gucci",
      image:
        "https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_e46db31c-66c7-4523-a6ae-de8588e556a8_1512x.jpg?v=1649299127",
      rating: {
        rate: 4.1,
        count: 430,
      },
      count: 1,
    },
    {
      id: 5,
      title: "113J688A0531-C984",
      price: 1339.0,
      description:
        "MODEL NO : 113J688A0531-C984 / RELEASE DATE : 2021-01-01 / SEASON : SPRING, AUTUMN, WINTER / VERSION : LOOSE",
      category: "Dior",
      image:
        "https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_6f52f02c-e5c1-40b2-b55b-e8c02ac49be2_1512x.jpg?v=1649244015",
      rating: {
        rate: 4.6,
        count: 400,
      },
      count: 1,
    },
    {
      id: 6,
      title: "933J635B0555-880",
      price: 1139.0,
      description:
        "MODEL NO : 933J635B0555-880 / RELEASE DATE : 2021-01-01 / STYLE: HIGH STREET / SEASON : SPRING, AUTUMN",
      category: "Dior",
      image:
        "https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_6bbbc295-a4c8-48fb-87f8-de8ce353129e_1512x.jpg?v=1649258121",
      rating: {
        rate: 3.9,
        count: 70,
      },
      count: 1,
    },
    {
      id: 7,
      title: "DIOR WOMEN'S 113S06A4022-X0890",
      price: 1379.0,
      description:
        "MODEL NO : 113S06A4022-X0890 / RELEASE DATE : 2021-01-01 / STYLE: HIGH STREET / SEASON : SUMMER",
      category: "Dior",
      image:
        "https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_569b96b0-202e-4524-8dd3-c07c4a10b697_1512x.jpg?v=1649282884",
      rating: {
        rate: 4.0,
        count: 400,
      },
      count: 1,
    },
    {
      id: 8,
      title: "DIOR X KENNY SCHARF T MEN'S WHITE 193M636AT329-C089",
      price: 1833.0,
      description:
        "MODEL NO : 193M636AT329-C089 / RELEASE DATE : 2021-01-01 / STYLE: HIGH STREET / SEASON : SUMMER",
      category: "Dior",
      image:
        "https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_ae649f10-5233-4251-a41f-75f46c41c3dd_1512x.jpg?v=1649262580",
      rating: {
        rate: 5.0,
        count: 100,
      },
      count: 1,
    },
    {
      id: 9,
      title: "Burberry Check Print Shirt ",
      price: 415.23,
      description:
        "100% Cotton / Made in Thailand / Designer Model Number: 8020863SLIMFIT / Designer Colour: ARCHIBEBEIGE",
      category: "Buberry",
      image:
        "https://img.mytheresa.com/2176/2176/90/jpeg/catalog/product/c9/P00433481.jpg",
      rating: {
        rate: 4.3,
        count: 203,
      },
      count: 1,
    },
    {
      id: 10,
      title: "Burberry Vintage Check Backpack",
      price: 109,
      description:
        "Dimensions: Width: 27cm, Height: 47cm, Depth: 17cm, Strap: 25cm, Handle: 10.5cm / 100% Calf Leather, 100% Polyamide / Made in Italy / Designer Model Number: 8005516 / Designer Colour: ANTIQUEYELLOW",
      category: "Buberry",
      image:
        "https://img-static.tradesy.com/item/29193772/burberry-men-s-vintage-check-antique-yellow-polyamide-backpack-0-0-650-650.jpg",
      rating: {
        rate: 4.9,
        count: 470,
      },
      count: 1,
    },
    {
      id: 11,
      title: "Burberry Hackberry Shoulder Bag",
      price: 1038.09,
      description:
        "Dimensions: Width: 18cm, Height: 12cm, Depth: 8cm / 100% Cotton, Lining: 71% Cotton, 29% Polyamide / Made in Italy / Designer Model Number: 8026608 / Designer Colour: A1363",
      category: "Buberry",
      image:
        "https://statics-cdn.fashionette.de/b/d/7/c/bd7ca3f32e6c9bd0caac52a04d449cafe4075867_A0161977_Burberry_1_pdp.jpeg",
      rating: {
        rate: 4.8,
        count: 319,
      },
      count: 1,
    },
    {
      id: 12,
      title: "Burberry Graphic Printed T-Shirt",
      price: 439.66,
      description:
        "100% Cotton / Made in Portugal / Designer Model Number: 8048289 ",
      category: "Buberry",
      image:
        "https://thewebster.us/media/catalog/product/8/0/8048289-2509-01.jpg?quality=100&fit=bounds&height=587&width=440",
      rating: {
        rate: 4.8,
        count: 400,
      },
      count: 1,
    },
    {
      id: 13,
      title: "Burberry Belted Trench Coat",
      price: 2421.19,
      description:
        "2100% Cotton, 100% Leather / Made in Italy / Designer Model Number: 8038931 / Designer Colour: A9168",
      category: "Buberry",
      image:
        "https://cdna.lystit.com/520/650/n/photos/coltortiboutique/f9f0fdac/burberry-BeigeBrown-Dockray-Trench-Coat-With-Leather-Finishes-6-Cottonleather.jpeg",
      rating: {
        rate: 4.9,
        count: 250,
      },
      count: 1,
    },
    {
      id: 14,
      title: "Burberry Graphic Printed Crewneck T-Shirt ",
      price: 366.39,
      description:
        "100% Cotton / Made in Portugal / Designer Model Number: 8042723 / Designer Colour: WHITE",
      category: "Buberry",
      image: "https://cdn.modesens.com/media/113368428?w=400&",
      rating: {
        rate: 2.2,
        count: 140,
      },
      count: 1,
    },
    {
      id: 15,
      title:
        "ADIDAS PRADA X SUPERSTAR 'CORE WHITE' ADIDAS RELEASE CORE WHITE/CORE WHITE/CORE WHITE FW6683",
      price: 8691.0,
      description:
        "MODEL NO : FW6683 / RELEASE DATE : 2019-12-04 / SERIES : CORE WHITE/CORE WHITE/CORE WHITE / STYLE: SPORTS / SEASON : ALL SEASON / CLOSURE : LACING / FUNCTIONALITY : SLIP-RESISTANT, LIGHTWEIGHT / SOLE MATERIAL : RUBBER SOLE / UPPER : LOW CUT / TOE TYPE : ROUND TOE / HEEL TYPE : FLAT HEEL",
      category: "Prada",
      image:
        "https://cdn.shopify.com/s/files/1/0603/3031/1875/products/main-square_1e3010ed-5197-44b4-baa1-e4e6a5cfe5ae_1512x.jpg?v=1649041810",
      rating: {
        rate: 4.6,
        count: 235,
      },
      count: 1,
    },
    {
      id: 16,
      title: "Prada logo plaque panelled jacket",
      price: 4600,
      description:
        "Comfort is key but a little style never hurt anyone. Crafted in a panelled design, this jacket from Prada is detailed with the brand's signature enamelled triangle logo and it's the perfect choice for a relaxed yet put-together look. Best of both worlds.",
      category: "Prada",
      image:
        "https://cdn-images.farfetch-contents.com/15/30/35/29/15303529_26704883_1000.jpg",
      rating: {
        rate: 3.9,
        count: 340,
      },
      count: 1,
    },
    {
      id: 17,
      title: "Prada logo-print T-shirt",
      price: 1070,
      description:
        "A mermaid print adds a playful touch to this Prada T-shirt. Appearing alongside the signature triangle logo, it stands out against the white cotton construction in a contrasting black tone.",
      category: "Prada",
      image:
        "https://cdn-images.farfetch-contents.com/17/50/57/03/17505703_36301086_1000.jpg",
      rating: {
        rate: 4.4,
        count: 679,
      },
      count: 1,
    },
    {
      id: 18,
      title: "Prada Double Match graphic-print shirt ",
      price: 1660,
      description:
        "That's one way to make a statement. Prada's shirt is punctuated with a distinctive graphic print not to mention a eye-catching two-tone colourway. Be bold.",
      category: "Prada",
      image:
        "https://cdn-images.farfetch-contents.com/16/25/50/29/16255029_31052326_1000.jpg",
      rating: {
        rate: 4.7,
        count: 130,
      },
      count: 1,
    },
    {
      id: 19,
      title: "Prada motif-print cotton hoodie",
      price: 1580,
      description:
        "Tattoo-inspired nautical motifs prevail on Prada's SS22 collection, printed on the brand's ready-to-wear pieces. They accent the sleeves of this oversized hoodie, complemented by the brand's Triangle logo on the chest.",
      category: "Prada",
      image:
        "https://cdn-images.farfetch-contents.com/17/50/48/47/17504847_37250345_1000.jpg",
      rating: {
        rate: 4.5,
        count: 146,
      },
      count: 1,
    },
    {
      id: 20,
      title: "Prada Double Match panelled shirt",
      price: 1660,
      description:
        "Consider yourself a risk taker? Dare to make heads turn in this Prada shirt and let its vibrant panelled design grab attention wherever you go. Be ready for the stares.",
      category: "Prada",
      image:
        "https://cdn-images.farfetch-contents.com/16/22/34/29/16223429_31076195_1000.jpg",
      rating: {
        rate: 4.6,
        count: 145,
      },
      count: 1,
    },
  ]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  const [visible, setVisible] = useState(4);
  console.log(filter);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      // const response = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        // setData(await response.clone().json());
        // setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const showMore = () => {
    setVisible((preValue) => preValue + 4);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pd-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Gucci")}
          >
            Gucci
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Dior")}
          >
            Dior
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Prada")}
          >
            Prada
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Buberry")}
          >
            Buberry
          </button>
        </div>
        {filter.slice(0, visible).map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink
                      to={`/product/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      DETAIL
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <div className="buttons d-flex justify-content-center mb-5 pd-5">
          <button
            className="btn btn-outline-dark me-2 "
            onClick={() => showMore()}
          >
            See More
          </button>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center"> ITEMS </h1>
            <hr />
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  );
}
