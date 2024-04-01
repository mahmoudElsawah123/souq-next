"use client"
import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const LastofOffersProducts = () => {

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
         className={`${styles.Arrow} ${styles.NextArrow}`}
        onClick={onClick}
      >
        <MdKeyboardArrowRight />
      </div>
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className={`${styles.Arrow} ${styles.PrevArrow}`} onClick={onClick}>
        <MdKeyboardArrowLeft />
      </div>
    );
  };
  
  const { MostViewedArr } = useSelector((state) => state.CategoriesSlice);

  const OfferSlick =
    MostViewedArr &&
    MostViewedArr.offers.map((ele, idx) => {
      const pathName = ele.name.replace(/\s/g, " ").substring(0, 20) + '...';
      const imageID = ele.images[0];
      return (
        <Link key={ele.id} href={`/product/${ele.id}/${ele.name.replace(/\s/g, "-")}`}   >
          <div className="  card_lasted">
            <Image src={`https://souq.deltawy.com/imag?id=${imageID}`} alt={pathName} width={250} height={250} />
            <div className="div" >
              <h1 >{pathName}</h1>
              <p>{ele.catName}</p>
              <Link key={ele.id} href={`/matgar/${ele.matgarId}/${ele.matgarName.replace(/\s/g, "-")}`} className="card_lasted_img_logo">
                <Image src={`https://souq.deltawy.com/imag?id=${ele.matgarLogo}`} alt={pathName} width={40} height={40} />
              </Link>
            </div>
          </div>
        </Link>
      );
    });



  // const ShopData =
  //   MostViewedArr &&
  //   MostViewedArr.offers.slice(5, 9).map((ele, idx) => {
  //     const pathName = ele.name.replace(/\s/g, " ").substring(0, 20) + '...';
  //     const imageID = ele.images[0];
  //     return (
  //       <Link key={ele.id} href={`/product/${ele.id}/${ele.name.replace(/\s/g, "-")}`}   >
  //         <div className="  card_lasted">
  //           <Image src={`https://souq.deltawy.com/imag?id=${imageID}`} alt={pathName} width={250} height={250} />
  //           <div className="div" >
  //             <h1 >{pathName}</h1>
  //             <p>{ele.catName}</p>
  //             <Link key={ele.id} href={`/matgar/${ele.matgarId}/${ele.matgarName.replace(/\s/g, "-")}`} className="card_lasted_img_logo">
  //               <Image src={`https://souq.deltawy.com/imag?id=${ele.matgarLogo}`} alt={pathName} width={40} height={40} />
  //             </Link>
  //           </div>
  //         </div>
  //       </Link>
  //     );
  //   });



  // const Mostview =
  //   MostViewedArr &&
  //   MostViewedArr.offers.slice(0, 4).map((ele, idx) => {
  //     const pathName = ele.name.replace(/\s/g, " ").substring(0, 20) + '...';
  //     const imageID = ele.images[0];
  //     return (
  //       <Link key={ele.id} href={`/product/${ele.id}/${ele.name.replace(/\s/g, "-")}`}   >
  //         <div className="  card_lasted">
  //           <Image src={`https://souq.deltawy.com/imag?id=${imageID}`} alt={pathName} width={250} height={250} />
  //           <div className="div" >
  //             <h1 >{pathName}</h1>
  //             <p>{ele.catName}</p>
  //             <Link key={ele.id} href={`/matgar/${ele.matgarId}/${ele.matgarName.replace(/\s/g, "-")}`} className="card_lasted_img_logo">
  //               <Image src={`https://souq.deltawy.com/imag?id=${ele.matgarLogo}`} alt={pathName} width={40} height={40} />
  //             </Link>
  //           </div>
  //         </div>
  //       </Link>
  //     );
  //   });

  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    speed: 200,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    swipeToSlide: true,
    initialSlide: 0,
          slidesToShow: 6,
          rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
     <Container>
      <div className="col-md-12 col-12">
       <div  style={{backgroundColor : '#f9f9f9', padding : '20px 0px', margin : '50px 0px', display : 'flex', justifyContent : 'space-between'}} className="mb-3">
          الاكثر مشاهده
       </div>
        <Slider {...settings}>{OfferSlick}</Slider>

    </div>
     </Container>
  );
};

export default LastofOffersProducts;
