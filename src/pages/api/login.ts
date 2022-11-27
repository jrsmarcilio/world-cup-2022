// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ErrorRequest, Login } from '../../interfaces/User';
import { BASE_URL } from './register';

export default function login(req: NextApiRequest, res: NextApiResponse<Login | ErrorRequest>) {
  const { email, password } = JSON.parse(req.body);
  console.log("🚀 ~ file: login.ts ~ line 8 ~ { email, password }", { email, password })
  fetch(`${BASE_URL}/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
    .then(response => response.json())
    .then(data => {
      res.status(200).json(data)
    })
    .catch(error => {
      res.status(500).json({ status: 'error', message: error.message })
    });
}