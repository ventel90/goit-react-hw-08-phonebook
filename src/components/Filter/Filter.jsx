import { InputContainer } from 'components/RegisterForm/RegisterForm.styled';
import { Filters, FineContainer, Search } from './Filter.styled';
import { Label } from 'components/Form/Form.styled';

const Filter = ({ onChange, value }) => {
  return (
    <FineContainer>
      <Filters>
        <InputContainer>
          <Label>
            Find contacts by name
            <input
              className="input__form-input"
              type="text"
              onChange={onChange}
              name="filter"
              value={value}
            ></input>
            <span className="span__icon-container">
              <Search className="icon"/>
            </span>
          </Label>
        </InputContainer>
      </Filters>
    </FineContainer>
  );
};

export default Filter;
