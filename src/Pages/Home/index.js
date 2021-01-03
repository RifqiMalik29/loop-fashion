import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarComponent from "../../Components/Navbar";
import FooterComponent from "../../Components/Footer";
import CartImage from "../../Images/cart.svg";
import ChairImage from "../../Images/chair.svg";
import BagImage from "../../Images/bag-image.svg";
import BigCircle from "../../Images/big-circle.svg";
import SmallCircle from "../../Images/small-circle.svg";
import BigCircle2 from "../../Images/big-circle2.svg";
import ShoesImage from "../../Images/shoes.svg";
import BagHome3 from "../../Images/bag-home3.svg";
import Accessories from "../../Images/accessories.svg";
import JaneDoe from "../../Images/jane-doe.svg";
import SusanDoe from "../../Images/susan-doe.svg";
import RebeccaDoe from "../../Images/rebecca-doe.svg";
import SubmitButton from "../../Images/submit.svg";
import { useState } from "react";

const Home = () => {
  const [black, setBlack] = useState(true);
  const [black2, setBlack2] = useState(true);
  const [black3, setBlack3] = useState(true);
  const [bagBlack, setBagBlack] = useState(true);
  const [bagBlack2, setBagBlack2] = useState(true);
  const [bagBlack3, setBagBlack3] = useState(true);
  const [accBlack, setAccBlack] = useState(true);
  const [accBlack2, setAccBlack2] = useState(true);
  const [accBlack3, setAccBlack3] = useState(true);

  function clickBlack() {
    setBlack(true);
    setBlack2(false);
    setBlack3(false);
  }

  const clickBlack2 = () => {
    setBlack(false);
    setBlack2(true);
    setBlack3(false);
  };

  function clickBlack3() {
    setBlack(false);
    setBlack2(false);
    setBlack3(true);
  }

  function clickBag() {
    setBagBlack(true);
    setBagBlack2(false);
    setBagBlack3(false);
  }

  function clickBag2() {
    setBagBlack(false);
    setBagBlack2(true);
    setBagBlack3(false);
  }

  function clickBag3() {
    setBagBlack(false);
    setBagBlack2(false);
    setBagBlack3(true);
  }

  function clickAcc() {
    setAccBlack(true);
    setAccBlack2(false);
    setAccBlack3(false);
  }

  function clickAcc2() {
    setAccBlack(false);
    setAccBlack2(true);
    setAccBlack3(false);
  }

  function clickAcc3() {
    setAccBlack(false);
    setAccBlack2(false);
    setAccBlack3(true);
  }

  return (
    <>
      <NavbarComponent />
      {/* <img src={BigCircle} className="big-circle" /> */}
      <div className="home-1 d-flex flex-row">
        <Container>
          <div className="home-1-group mr-auto">
            <div className="loop-text">
              Loop <br /> Fashion
            </div>
            <div className="anonymous">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              in blandit nisi, in finibus lacus. Duis aliquet, nunc tempor
              vestibulum vestibulum, sem felis cursus metus, ac pulvinar metus
              odio ac ipsum. Aliquam imperdiet imperdiet justo, ac lacinia velit
              congue non. Nulla vel lacus hendrerit, egestas diam eget,
              malesuada neque.
              <br /> <br />
              Mauris quam eros, mattis viverra cursus a, dapibus at magna. Morbi
              dui metus, gravida eget libero non, eleifend scelerisque metus.
              Mauris at condimentum metus, vel pharetra purus. Nunc sit amet
              nisi metus. Sed suscipit porttitor consectetur. Morbi nunc nisl,
              pretium ac metus quis.
            </div>
            <div className="order-group">
              <Link to="/" className="order-link d-flex flex-row">
                <img
                  src={CartImage}
                  alt="order now cart"
                  width="52.55px"
                  height="52.55px"
                  className="cart-image"
                />
                Order now
              </Link>
            </div>
          </div>
        </Container>
        <div>
          <img src={ChairImage} className="chair-image" alt="chair" />
        </div>
      </div>

      {/* Home Part 2 */}
      <div className="home-2">
        <p className="collection-title d-flex justify-content-center pt-4">
          New Collection
        </p>
        <p className="collection-text d-flex justify-content-center">
          Who are in extremely love with eco friendly system
        </p>
        <div className="card-core d-flex justify-content-evenly">
          <div className="card-groups my-5 ml-4">
            <img src={BagImage} className="bag-image" alt="bag" />
            <p className=" card-title d-flex justify-content-center pt-4 my-2">
              New Collection
            </p>
            <p className="card-desc d-flex justify-content-center pb-5 px-3 text-center">
              Mauris sollicitudin, libero sit amet blandit pellentesque, est
              diam iaculis arcu, eget egestas eros mauris de ralia id libero.
            </p>
          </div>
          <div className="card-groups my-5 ml-4">
            <img src={BagImage} className="bag-image" alt="bag" />
            <p className=" card-title d-flex justify-content-center pt-4 my-2">
              New Collection
            </p>
            <p className="card-desc d-flex justify-content-center pb-5 px-3 text-center">
              Mauris sollicitudin, libero sit amet blandit pellentesque, est
              diam iaculis arcu, eget egestas eros mauris de ralia id libero.
            </p>
          </div>
          <div className="card-groups my-5 ml-4">
            <img src={BagImage} className="bag-image" alt="bag" />
            <p className=" card-title d-flex justify-content-center pt-4 my-2">
              New Collection
            </p>
            <p className="card-desc d-flex justify-content-center pb-5 px-3 text-center">
              Mauris sollicitudin, libero sit amet blandit pellentesque, est
              diam iaculis arcu, eget egestas eros mauris de ralia id libero.
            </p>
          </div>
        </div>
        <div className="offer-bg d-flex justify-content-center mx-auto mt-5">
          <Link to="/" className="offer-link py-2 px-5 text-center">
            Click here to get the best offer
          </Link>
        </div>
      </div>

      {/* Home Part 3 */}
      <div className="home-3">
        <p className="collection-title d-flex justify-content-center pt-4">
          Shop For Different Categories
        </p>
        <p className="collection-text d-flex justify-content-center">
          Who are in extremly love with eco friendly system.
        </p>
        <div className="categories d-flex flex-row mx-auto">
          <div className="imageContainer">
            <img src={ShoesImage} alt="shoes" className="shoes" />
            <div className="d-flex justify-content-center">
              <button
                onClick={clickBlack}
                disabled={black ? true : false}
                className={black ? "black-button" : "slide-button"}
              >
                111
              </button>
              <button
                onClick={clickBlack2}
                disabled={black2 ? true : false}
                className={black2 ? "black-button mx-4" : "slide-button mx-4"}
              >
                111
              </button>
              <button
                onClick={clickBlack3}
                disabled={black3 ? true : false}
                className={black3 ? "black-button" : "slide-button"}
              >
                111
              </button>
            </div>
          </div>
          <div className="categories-desc my-auto">
            <p className="cat-title pb-3">Shoes</p>
            <p className="cat-details">
              Donec sit amet orci purus. Quisque vel massa urna. Nullam feugiat
              accumsan enim ut fermentum. Nunc purus libero, convallis et
              posuere eu, tincidunt eu tortor. Nam id egestas neque. Etiamulla
              mcorper, tortor ut tristique auctor.
            </p>
            <Link to="/" className="order-link d-flex flex-row">
              <img
                src={CartImage}
                alt="order now cart"
                width="52.55px"
                height="52.55px"
                className="cart-image"
              />
              Order now
            </Link>
          </div>
        </div>
        <div className="categories d-flex flex-row mx-auto">
          <div className="imageContainer">
            <img src={BagHome3} alt="shoes" className="shoes" />
            <div className="d-flex justify-content-center">
              <button
                onClick={clickBag}
                disabled={bagBlack ? true : false}
                className={bagBlack ? "black-button" : "slide-button"}
              >
                111
              </button>
              <button
                onClick={clickBag2}
                disabled={bagBlack2 ? true : false}
                className={
                  bagBlack2 ? "black-button mx-4" : "slide-button mx-4"
                }
              >
                111
              </button>
              <button
                onClick={clickBag3}
                disabled={bagBlack3 ? true : false}
                className={bagBlack3 ? "black-button" : "slide-button"}
              >
                111
              </button>
            </div>
          </div>
          <div className="categories-desc my-auto">
            <p className="cat-title pb-3">Bag</p>
            <p className="cat-details">
              Donec sit amet orci purus. Quisque vel massa urna. Nullam feugiat
              accumsan enim ut fermentum. Nunc purus libero, convallis et
              posuere eu, tincidunt eu tortor. Nam id egestas neque. Etiamulla
              mcorper, tortor ut tristique auctor.
            </p>
            <Link to="/" className="order-link d-flex flex-row">
              <img
                src={CartImage}
                alt="order now cart"
                width="52.55px"
                height="52.55px"
                className="cart-image"
              />
              Order now
            </Link>
          </div>
        </div>
        <div className="categories d-flex flex-row mx-auto">
          <div className="imageContainer">
            <img src={Accessories} alt="shoes" className="shoes" />
            <div className="d-flex justify-content-center">
              <button
                onClick={clickAcc}
                disabled={accBlack ? true : false}
                className={accBlack ? "black-button" : "slide-button"}
              >
                111
              </button>
              <button
                onClick={clickAcc2}
                disabled={accBlack2 ? true : false}
                className={
                  accBlack2 ? "black-button mx-4" : "slide-button mx-4"
                }
              >
                111
              </button>
              <button
                onClick={clickAcc3}
                disabled={accBlack3 ? true : false}
                className={accBlack3 ? "black-button" : "slide-button"}
              >
                111
              </button>
            </div>
          </div>
          <div className="categories-desc my-auto">
            <p className="cat-title pb-3">Accessories</p>
            <p className="cat-details">
              Donec sit amet orci purus. Quisque vel massa urna. Nullam feugiat
              accumsan enim ut fermentum. Nunc purus libero, convallis et
              posuere eu, tincidunt eu tortor. Nam id egestas neque. Etiamulla
              mcorper, tortor ut tristique auctor.
            </p>
            <Link to="/" className="order-link d-flex flex-row">
              <img
                src={CartImage}
                alt="order now cart"
                width="52.55px"
                height="52.55px"
                className="cart-image"
              />
              Order now
            </Link>
          </div>
        </div>
      </div>

      {/* Home Part 4 */}
      <div className="home-4">
        <p className="collection-title d-flex justify-content-center pt-4">
          Our Reviewer
        </p>

        <div className="d-flex justify-content-evenly pt-2">
          <div className="profileContainer my-5 ml-4">
            <img
              src={JaneDoe}
              className="profile-picture mx-auto"
              alt="profile"
            />
            <p className="review d-flex justify-content-center pt-4 my-2">
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit. par keruna.
            </p>
            <p className="reviewer d-flex justify-content-center pb-5 px-3 text-center">
              Jane Doe
            </p>
          </div>
          <div className="profileContainer my-5 ml-4">
            <img
              src={SusanDoe}
              className="profile-picture mx-auto"
              alt="profile"
            />
            <p className="review d-flex justify-content-center pt-4 my-2">
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit. par keruna.
            </p>
            <p className="reviewer d-flex justify-content-center pb-5 px-3 text-center">
              Susan Doe
            </p>
          </div>
          <div className="profileContainer my-5 ml-4">
            <img
              src={RebeccaDoe}
              className="profile-picture mx-auto"
              alt="profile"
            />
            <p className="review d-flex justify-content-center pt-4 my-2">
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit. par keruna.
            </p>
            <p className="reviewer d-flex justify-content-center pb-5 px-3 text-center">
              Rebecca Doe
            </p>
          </div>
        </div>
      </div>

      {/* Home Part 5 */}
      <div className="home-5 d-flex pb-5">
        <div className="first">
          <p className="loop-footer">
            LOOP
            <br />
            FASHION
          </p>
          <p className="loop-footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in
            blandit nisi, in finibus lacus. Duis aliquet, nunc tempor vestibulum
            vestibulum, sem felis cursus metus, ac pulvinar metus odio ac ipsum.
          </p>
        </div>

        <div className="">
          <div className="d-flex">
            <div className="infoContainer">
              <p className="information">Information</p>
              <Link className="link-footer">About</Link> <br />
              <Link className="link-footer">Pricing</Link> <br />
              <Link className="link-footer">Home</Link> <br />
              <Link className="link-footer">Features</Link> <br />
            </div>
            <div className="footer-input">
              <p className="information">Subscribe</p>
              <div className="d-flex submitContainer">
                <input placeholder="Email Addres" className="email-input" />
                <Link to="/">
                  <img src={SubmitButton} alt="submit" className="submit" />
                </Link>
              </div>
              <p className="link-footer">
                Get digital marketing update in your mailbox.
              </p>
            </div>
          </div>
          <div>
            <div className="address">
              <p className="information">Addres</p>
              <p className="link-footer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                in blandit nisi, in finibus lacus. Duis aliquet, nunc tempor
                vestibulum vestibulum, sem felis cursus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Home;
