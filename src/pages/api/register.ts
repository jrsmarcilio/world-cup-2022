// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ErrorRequest, UserRequest } from '../../interfaces/User';

export const BASE_URL = 'http://api.cup2022.ir/api/v1'

export default function register(req: NextApiRequest, res: NextApiResponse<UserRequest | ErrorRequest>) {
  const { email, name, password, passwordConfirm } = JSON.parse(req.body);
  fetch(`${BASE_URL}/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, name, password, passwordConfirm })
  })
    .then(response => response.json())
    .then(data => {
      res.status(200).json(data)
    })
    .catch(error => {
      res.status(500).json({ status: 'error', message: error.message })
    });
}