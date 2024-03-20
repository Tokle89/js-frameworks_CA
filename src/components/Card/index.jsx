/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { StyledCard, InfoContainer, ImgContainer, RatingContainer, BtnContainer, DiscountedPrice } from "./index.styles";
import { StyledButton } from "../Button/index.styles";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store";

const Card = ({ data }) => {
  let { title, price, imageUrl, rating, id, discountedPrice } = data;
  const addProduct = useCartStore((state) => state.addProduct);

  return (
    <StyledCard>
      <ImgContainer>
        <img src={imageUrl} alt={title} />
      </ImgContainer>
      <InfoContainer>
        <h3>{title}</h3>
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
              addProduct(data);
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
