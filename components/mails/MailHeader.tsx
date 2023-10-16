import { MjmlHero, MjmlText } from "mjml-react";
import { getTheme } from "../layout/Theme";

type Props = {
  baseUrl?: string;
}

const MailHeader = ({ baseUrl }: Props) => {
  return (
    <MjmlHero>
      <MjmlText>
        Localshop
      </MjmlText>
    </MjmlHero>
  )
}

export default MailHeader
