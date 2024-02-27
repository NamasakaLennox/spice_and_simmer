import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import new_recipe from "../Assets/new";
import favourite from "../Assets/favourite";
import hero from "../Assets/Rectangle-313.webp";
import parse from "html-react-parser";
import icon1 from "../Assets/icon1.png";
import icon2 from "../Assets/icon2.png";
import icon3 from "../Assets/icon3.png";

export const Hero = () => {
  function addDefaultSrc(ev) {
    ev.target.src = "./img/Group-697.webp";
    ev.target.style = { width: "50%" };
  }

  return (
    <div>
      <div className="right-layer animate__animated animate__fadeIn"></div>

      <div className="container mt-4" style={{ height: "600px" }}>
        <div className="row flex-column-reverse gap-5 flex-lg-row py-5">
          <div className="col-8 col-lg-4 align-self-center animate__animated animate__fadeInLeft">
            <h1
              className="text-center text-lg-start fw-bolder fs-1 mb-4"
              style={{ color: "#2e266f" }}
            >
              Discover Awesome Recipe & Delicious Food
            </h1>
            <button className="form-control form-control-lg">
              <Link
                to={"/search"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Search Recipe
              </Link>
            </button>
          </div>

          <div className="col text-center text-lg-end animate__animated animate__fadeInRight">
            <img src={hero} alt="food" style={{ width: "55%" }} />
          </div>
        </div>
      </div>

      <div
        className="container d-flex align-items-center mt-3 mb-5 animate__animated animate__flipInX"
        style={{ height: "80px" }}
      >
        <div
          className="vr"
          style={{ width: "15px", backgroundColor: "#efc81a", opacity: "100%" }}
        ></div>
        <p className="m-0 ms-3 fs-1 fw-semibold" style={{ color: "#3f3a3a" }}>
          Popular Recipe!
        </p>
      </div>

      <div className="container" style={{ marginBottom: "100px" }}>
        <div className="row flex-column gap-5 flex-lg-row py-5">
          <div className="col text-center text-lg-start animate__animated animate__fadeInLeft">
            <img src={favourite.image} alt="food" style={{ width: "80%" }} />
          </div>
          <div className="col-8 col-lg-4 d-flex flex-column d-lg-block justify-content-center align-self-center animate__animated animate__fadeInRight">
            <h2
              className="text-center text-lg-start fs-1"
              style={{ color: "#3f3a3a" }}
            >
              {favourite.title}
            </h2>
            <hr className="opacity-100" />
            <p
              style={{ color: "#3f3a3a" }}
              className="text-center text-lg-start"
            >
              {parse(favourite.summary)}
            </p>
            <Link
              to={`/recipe/${favourite.id}`}
              className="btn btn-lg"
              style={{ backgroundColor: "#efc81a", color: "#fff" }}
            >
              View Recipe
            </Link>
          </div>
        </div>
      </div>

      <div
        className="container d-flex align-items-center my-5 animate__animated animate__flipInX"
        style={{ height: "80px" }}
      >
        <div
          className="vr"
          style={{ width: "15px", backgroundColor: "#efc81a", opacity: "100%" }}
        ></div>
        <p className="m-0 ms-3 fs-1 fw-semibold" style={{ color: "#3f3a3a" }}>
          New Recipe
        </p>
      </div>

      <div className="left-layer animate__animated animate__fadeIn"></div>

      <div className="container" style={{ marginBottom: "150px" }}>
        <div className="row flex-column gap-5 flex-lg-row py-5">
          <div className="col text-center text-lg-start animate__animated animate__fadeInLeft">
            <img
              src={new_recipe.image}
              onError={addDefaultSrc}
              alt="food"
              style={{ width: "80%" }}
            />
          </div>
          <div className="col-8 col-lg-4 d-flex flex-column d-lg-block justify-content-center align-self-center animate__animated animate__fadeInRight">
            <h2
              className="text-center text-lg-start fs-1"
              style={{ color: "#3f3a3a" }}
            >
              {new_recipe.title}
            </h2>
            <hr className="opacity-100" style={{ width: "25% !important" }} />
            <p
              style={{ color: "#3f3a3a" }}
              className="text-center text-lg-start"
            >
              {parse(new_recipe.summary)}
            </p>
            <Link
              to={`/recipe/${new_recipe.id}`}
              className="btn btn-lg"
              style={{ backgroundColor: "#efc81a", color: "#fff" }}
            >
              View Recipe
            </Link>
          </div>
        </div>
      </div>

      {/* service */}
      <div className="services_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="services_taital">Services</h1>
              <p className="services_text">
                Providing you with recipes from all over the world in one place
              </p>
            </div>
          </div>
          <div className="services_section_2">
            <div className="row">
              <div className="col-lg-4 col-sm-12 col-md-4">
                <div className="box_main active">
                  <div className="house_icon">
                    <img src={icon1} className="image_1" alt="" />
                    <img src={icon1} className="image_2" alt="" />
                  </div>
                  <h3 className="decorate_text">Nutritional Value</h3>
                  <p className="tation_text">
                    Provides you with the best nutritional contents for every
                    meal.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 col-md-4">
                <div className="box_main">
                  <div className="house_icon">
                    <img src={icon2} className="image_1" alt="" />
                    <img src={icon2} className="image_2" alt="" />
                  </div>
                  <h3 className="decorate_text">Customized Search</h3>
                  <p className="tation_text">
                    Be able to specify a diverse selection of recipes all at
                    your disposal.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 col-md-4">
                <div className="box_main">
                  <div className="house_icon">
                    <img src={icon3} className="image_1" alt="" />
                    <img src={icon3} className="image_2" alt="" />
                  </div>
                  <h3 className="decorate_text">Save Your Recipes</h3>
                  <p className="tation_text">
                    Get your favourite recipes in one click and not have to
                    search every minute.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>&nbsp;</div>

      {/* <div
        className="container d-flex align-items-center my-5 animate__animated animate__flipInX"
        style={{ height: "80px" }}
      >
        <div
          className="vr"
          style={{ width: "15px", backgroundColor: "#efc81a", opacity: "100%" }}
        ></div>
        <p className="m-0 ms-3 fs-1 fw-semibold" style={{ color: "#3f3a3a" }}>
          All Recipe
        </p>
      </div> */}

      {/* <div
        className="container px-4 px-md-4 py-5 mb-5 container-popular-recipe"
        id="popular-recipe"
      >
        <div className="row justify-content-center gap-1 gap-sm-2 gap-md-4">
          {listRecipes.map((item, index) => {
            return (
              <RecipeCard
                title={item?.title}
                image={item?.recipePicture}
                id={item?.id}
                key={index}
              />
            );
          })}
        </div>
      </div> */}
    </div>
  );
};
