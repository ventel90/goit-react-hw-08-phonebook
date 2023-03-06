// import Contact from "components/Contact/Contact";
import Contact from "components/Contact/Contact";
import Filter from "components/Filter/Filter";
import Form from "components/Form/Form";
import { useState } from "react";
import { Container } from "./Contacts.styled";





const Contacts = () => {
     const [filter, setFilter] = useState('');
    return (
      <>
        <Container>
          {<Form />}
          {<Contact filter={filter} />}
          {<Filter value={filter} onChange={e => setFilter(e.target.value)} />}
        </Container>
      </>
    );
};
export default Contacts;