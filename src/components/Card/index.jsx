/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { StyledCard, InfoContainer, ImgContainer, RatingContainer, BtnContainer, StyledButton, DiscountedPrice } from "./index.styles";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  let { title, price, imageUrl, rating, id, discountedPrice } = data;
  return (
    <StyledCard>
      <ImgContainer>
        <img src={imageUrl} alt={title} />
      </ImgContainer>
      <InfoContainer>
        <h2>{title}</h2>
        <RatingContainer>
          <FaStar />
          <p>{rating}</p>
        </RatingContainer>
        <div>
          {discountedPrice !== price ? (
            <DiscountedPrice>
              <p>NOK {price}</p> <p>NOK {discountedPrice}</p>
            </DiscountedPrice>
          ) : (
            <p>NOK {price}</p>
          )}
        </div>
        <BtnContainer>
          <FaCartShopping
            onClick={() => {
              console.log("working");
            }}
          />
          <Link to={`/products/${id}`}>
            <StyledButton>View</StyledButton>
          </Link>
        </BtnContainer>
      </InfoContainer>
    </StyledCard>
  );
};

export default Card;
