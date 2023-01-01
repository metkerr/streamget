import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

type Data = {
  error?: string;
  msg?: string;
};

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function Login(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await runMiddleware(req, res, cors);

  // try {
  res.status(200).json({ msg: "yoshha" });
  // } catch {
  //   res.status(500).json({ error: "request error" });
  // }
}
