import { StyleSheet } from "@react-pdf/renderer";
import i18n from 'i18next';
import {
  Mjml,
  MjmlBody,
  MjmlColumn, MjmlHead, MjmlSection,
  MjmlSpacer, MjmlText, MjmlTitle
} from "mjml-react";
import { useTheme } from "@mui/material/styles";
import MailHeader from "../MailHeader";
import MailFooter from "../MailFooter";
import { OrderType } from "@/pages/api/mails/order-received/email";

type Props = {
  order?: OrderType;
}

const OrderReceivedMail = ({ order }: Props) => {
  const theme = useTheme()

  const styles = StyleSheet.create({
    primary: {
      color: theme.palette.primary.dark,
      fontWeight: 500,
    },
  })

  const title = order?.attributes?.customer
    ? `Order #${order?.id} received by ${order.attributes?.customer?.firstName} ${order.attributes?.customer?.lastName}`
    : `Order #${order?.id} received`

  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>{title}</MjmlTitle>
      </MjmlHead>
      <MjmlBody>
        <MailHeader />
        <MjmlSection paddingBottom={15}>
          <MjmlColumn>
            <MjmlText paddingLeft={15}>
              {order?.attributes?.customer?.firstName ? `${order?.attributes?.customer.firstName},` : ""}
            </MjmlText>

            <MjmlText paddingLeft={15} lineHeight="15px">
              {'Your order'}&nbsp;
              <MjmlText>
                <a style={styles.primary}>#{order?.id}</a>
              </MjmlText>.
              <br />
              {'was received'}
            </MjmlText>

            <MjmlText paddingBottom={0} paddingLeft={15} lineHeight="15px">
              {'Best regards,'}
              <br />
              {'Localshop'}
            </MjmlText>

            <MjmlSpacer height={20} />
          </MjmlColumn>
        </MjmlSection>
        <MailFooter />
      </MjmlBody>
    </Mjml>
  )
}

export default OrderReceivedMail
