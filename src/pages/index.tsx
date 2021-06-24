import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

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
