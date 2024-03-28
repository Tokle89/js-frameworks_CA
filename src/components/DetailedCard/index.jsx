import { FaStar } from "react-icons/fa";
import { StyledButton } from "../Button/index.styles";
import { ProductContainer, InfoContainer, HeaderContainer, DiscountedPrice, ReviewCards, ReviewContainer } from "./index.styles";
import { useState } from "react";
import ScreenMsg from "../ScreenMsg";
import { useCartStore } from "../../store";

/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  const addProduct = useCartStore((state) => state.addProduct);
  const [displayMsg, setDisplayMsg] = useState(false);
  const HandleMsgState = () => {
    setDisplayMsg(true);
    setTimeout(() => {
      setDisplayMsg(false);
    }, 2000);
  };
  const { title, imageUrl, rating, discountedPrice, price, description, reviews } = product;
  return (
    <ProductContainer>
      {displayMsg && <ScreenMsg msg={`${title} added to cart!`} state={setDisplayMsg} />}
      <div>
        <img src={imageUrl} alt={title}></img>
      </div>
      <InfoContainer>
        <HeaderContainer>
          <h1>{title}</h1>
          <div>
            <FaStar />
            <p>{rating}</p>
          </div>
        </HeaderContainer>
        <p>{description}</p>
        <div>
          {discountedPrice !== price ? (
            <DiscountedPrice>
              <p>NOK {price}</p> <p>NOK {discountedPrice}</p>
            </DiscountedPrice>
          ) : (
            <p>NOK {price}</p>
          )}
        </div>
        <StyledButton
          onClick={() => {
            addProduct(product);
            HandleMsgState();
          }}
        >
          Add to cart
        </StyledButton>
        <ReviewContainer>
          <p>Reviews:</p>

          {reviews &&
            reviews.map((review) => (
              <ReviewCards key={review.id}>
                <HeaderContainer>
                  <h3>{review.username}</h3>
                  <div>
                    <FaStar />
                    <p>{review.rating}</p>
                  </div>
                </HeaderContainer>
                <p>{review.description}</p>
              </ReviewCards>
            ))}
        </ReviewContainer>
      </InfoContainer>
    </ProductContainer>
  );
};

export default Product;
