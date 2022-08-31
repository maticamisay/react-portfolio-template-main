import fs from "fs";
import { join } from "path";

export default function handler(req, res) {
  const portfolioDataEn = join(process.cwd(), "/data/portfolio.json");
  const portfolioDataEs = join(process.cwd(), "/data/portfolioEs.json");
  const Lang = req.body.language
  console.log(req.body);
  if (process.env.NODE_ENV === "development") {
    if (req.method === "POST") {
      console.log(Lang=='es');
      console.log(Lang);
      Lang=='es'?
      fs.writeFileSync(
        portfolioDataEs,
        JSON.stringify(req.body),
        "utf-8",
        (err) => console.log(err)
      )
      :
      fs.writeFileSync(
        portfolioDataEn,
        JSON.stringify(req.body),
        "utf-8",
        (err) => console.log(err)
      )
    } else {
      res
        .status(200)
        .json({ name: "This route works in development mode only" });
    }
  }
}
