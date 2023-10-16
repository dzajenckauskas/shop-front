// import returnMail from "@/components/shared/api/returnMail";
// import setLocale from "@/components/shared/api/setLocale";
// import getTheme from "@/components/shared/layout/getTheme";
// import { getBaseUrl, getHost, getOrder, getSettings } from "@idcms/store";
import { ThemeProvider } from "@mui/material/styles";
import { NextApiRequest, NextApiResponse } from "next";
// import OrderReceivedMail from "../../../../components/mails/orders/order-received/OrderReceivedMail";
import axios from "axios";
import returnMail from "../../../../../components/shared/api/returnMail";
import { getTheme } from "../../../../../components/layout/Theme";
import OrderReceivedMail from "../../../../../components/mails/order-received/OrderReceivedMail";
import { getParam } from "../../apiFunctions";

export type OrderType = {
  id: number;
  attributes: {
    orderTotal: number;
    customer: {
      id: number;
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
    }
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await returnMail(res, async () => {
    const theme = getTheme()
    const id = getParam(req, 'id')

    const order = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/orders/${id}?populate=deep`
    )

    return (
      <ThemeProvider theme={theme}>
        <OrderReceivedMail order={order.data.data} />
      </ThemeProvider>
    )
  })
}
