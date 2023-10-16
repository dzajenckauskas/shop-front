import ReactPDF from "@react-pdf/renderer"
import { NextApiResponse } from "next/types"
import errorHandler from "./errorHandler";

const returnPdf = async (res: NextApiResponse, component: () => Promise<JSX.Element>) => {
  try {
    const readStream = await ReactPDF.renderToStream(await component());
    res.setHeader("Content-Type", "application/pdf");
    readStream.pipe(res);
  } catch (e: any) {
    console.log(
      `Error occurred while rendering:`, e
    );
    errorHandler(e, res);
  }
}

export default returnPdf