import {
    Button,
    ButtonContainer,
    CategoryBox,
    CategoryContainer,
    CategoryImage,
    Container,
    Form,
    FormTitle,
    MapContainer,
    Section,
  } from "./styles";

import { Input } from '../../components/Input/'  

export function New(){
    return (
        <Container>
            <Form>
                <FormTitle>
                    Cadastro do Comercio Local
                </FormTitle>
                <Section>
                    Dados
                </Section>
                <Input />
            </Form>
        </Container>
    )
}