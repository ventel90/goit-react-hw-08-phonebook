import {
  Logos,
  StyledLink,
  Img,
} from 'components/SharedLayout/SharedLayout.styled';


export const Logo = () => {
  return (
    <Logos>
      <div>
        <StyledLink to="contacts">
          <span role="img" aria-label="telephone icon">
            <Img/>
          </span>
          Phonebook
        </StyledLink>
      </div>
    </Logos>
  );
};
