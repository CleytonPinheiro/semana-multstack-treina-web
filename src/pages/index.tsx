import Head from "next/head";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";

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
    </div>
  );
}
