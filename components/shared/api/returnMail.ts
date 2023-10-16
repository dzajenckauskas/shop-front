import { render } from "mjml-react";
import { NextApiResponse } from "next/types";
import errorHandler from "./errorHandler";

const returnMail = async (res: NextApiResponse, component: () => Promise<JSX.Element>) => {
  try {
    const element = await component()

    const { html, errors } = render(element, {
      validationLevel: "soft",
    })

    if (errors?.length > 0)
      console.log('Render errors:', errors)

    res.status(200).send(html)
  } catch (e: any) {
    console.log(
      "Error occurred:", e
    );
    errorHandler(e, res);
  }
}

export default returnMail