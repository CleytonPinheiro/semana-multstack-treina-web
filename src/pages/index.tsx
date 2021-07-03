import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";

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

      <TextFieldMask label={"Digite seu CEP"} fullWidth />

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
