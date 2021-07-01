import React from "react";
import { FooterStyled, FooterContainer, FooterTitle } from "./Footer.style";
import { Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterTitle>Quem somos</FooterTitle>
        <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
          beatae! Ipsam, omnis. Labore in ducimus culpa ratione nemo consectetur
          ad quas sed, cumque mollitia incidunt, nisi veritatis unde debitis
          expedita.
        </Typography>
        <FooterTitle>Baixe nosso aplicativos</FooterTitle>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
