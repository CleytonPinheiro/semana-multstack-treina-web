import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography } from "@material-ui/core";
import { FormElementsContainer } from "@styles/pages/index.style";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheças os profissionais"}
        subtitle={
          "Preencha com seu endereço e conheça os profissionais da sua área"
        }
      />
      <FormElementsContainer>
        <TextFieldMask
          mask={"99.999-999"}
          label={"Digite seu CEP"}
          fullWidth
          variant={"outlined"}
        />

        <Typography color={"error"}>Cep inválido</Typography>

        <Button
          variant={"contained"}
          color={"secondary"}
          sx={{ width: "220px" }}
        >
          Buscar
        </Button>
      </FormElementsContainer>

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
    </div>
  );
}
