import React from 'react'
import { FooterCardContainer , FooterIconContainer , FooterDescCard ,LocationIcon ,FooterDescCardParagraph, TelIcon, CorreoIcon ,FooterSocial, GhIcon, GhSocialContainer, IgContainer, IgIcon, LnContainer, LnIcon  } from './FooterCardsStyles'
const FooterCards = () => {
  return (
   <>
     <FooterCardContainer>
        <FooterIconContainer>
            <LocationIcon/>
        </FooterIconContainer>
        <FooterDescCard>
        <FooterDescCardParagraph>AV. somos campeones entre Croacia y Francia al 2022.</FooterDescCardParagraph>
        </FooterDescCard>
        </FooterCardContainer>
       
        <FooterCardContainer>
        <FooterIconContainer>
            <TelIcon/>
        </FooterIconContainer>
        <FooterDescCard>
        <FooterDescCardParagraph> tel : 1118122022</FooterDescCardParagraph>
        </FooterDescCard>
        </FooterCardContainer>
        <FooterCardContainer>
        <FooterIconContainer>
            <CorreoIcon/>
        </FooterIconContainer>
        <FooterDescCard>
        <FooterDescCardParagraph> fernandezagustin98@hotmail.com</FooterDescCardParagraph>
        </FooterDescCard>
        </FooterCardContainer>
        <FooterSocial>
        <IgContainer href='https://www.instagram.com/frz.aguss/' target={'_blank'}>
            <IgIcon/>
        </IgContainer>
        <GhSocialContainer href='https://github.com/carniiga' target={'_blank'}>
            <GhIcon/>
        </GhSocialContainer>
        <LnContainer href='https://www.linkedin.com/in/agustin-fernandez-48907b25b/' target={'_blank'}>
            <LnIcon/>
        </LnContainer>
    </FooterSocial>
        
        
        
   </>
  )
}

export default FooterCards