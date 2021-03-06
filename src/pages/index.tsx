import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@material-ui/core";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "@styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.page";

export default function Home() {
  const { cep, setCep } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheças os profissionais"}
        subtitle={
          "Preencha com seu endereço e conheça os profissionais da sua área"
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          {cep}

          <Typography color={"error"}>Cep inválido</Typography>

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfissionaisPaper>
          <ProfissionaisPaper>
            <ProfissionaisContainer>
              <UserInformation
                name={"Akira Cleyton"}
                picture={"http://github.com/CleytonPinheiro.png"}
                rating={4}
                description={"São Paulo"}
              />
              <UserInformation
                name={"Akira Cleyton"}
                picture={"http://github.com/CleytonPinheiro.png"}
                rating={4}
                description={"São Paulo"}
              />
              <UserInformation
                name={"Akira Cleyton"}
                picture={"http://github.com/CleytonPinheiro.png"}
                rating={4}
                description={"São Paulo"}
              />
              <UserInformation
                name={"Akira Cleyton"}
                picture={"http://github.com/CleytonPinheiro.png"}
                rating={4}
                description={"São Paulo"}
              />
              <UserInformation
                name={"Akira Cleyton"}
                picture={"http://github.com/CleytonPinheiro2.png"}
                rating={4}
                description={"São Paulo"}
              />
            </ProfissionaisContainer>
          </ProfissionaisPaper>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
}
