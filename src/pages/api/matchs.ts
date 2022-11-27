import type { NextApiRequest, NextApiResponse } from 'next';
import { TMatch } from '../../interfaces/Match';
import { BASE_URL } from './register';

type MatchRequest = {
  status: string
  data?: TMatch[]
  message?: string
}

export default function matchs(req: NextApiRequest, res: NextApiResponse<MatchRequest>) {

  fetch(`${BASE_URL}/match`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${req.headers.authorization}`,
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log("🚀 ~ file: matchs.ts ~ line 23 ~ data", data)
      res.status(200).json(data)
    })
    .catch(error => {
      console.log("🚀 ~ file: matchs.ts ~ line 27 ~ error", error)
      res.status(500).json({ status: 'error', message: error.message })
    });
}