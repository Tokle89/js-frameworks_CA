import { FaStar } from "react-icons/fa";
import { StyledButton } from "../Button/index.styles";
import { ProductContainer, InfoContainer, HeaderContainer, DiscountedPrice, ReviewCards, ReviewContainer } from "./index.styles";

/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  // console.log(product);
  const { title, imageUrl, rating, discountedPrice, price, description, reviews } = product;
  if (reviews) {
    console.log(reviews);
  }
  return (
    <ProductContainer>
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
        <StyledButton>Add to cart</StyledButton>
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
