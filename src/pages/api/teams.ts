import type { NextApiRequest, NextApiResponse } from 'next';
import { TMatch } from '../../interfaces/Match';
import { ErrorRequest } from '../../interfaces/User';
import { BASE_URL } from './register';

export default function teams(req: NextApiRequest, res: NextApiResponse<TMatch | ErrorRequest>) {
  fetch(`${BASE_URL}/team`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${req.headers.authorization}`,
    }
  })
    .then(response => response.json())
    .then(data => {
      res.status(200).json(data)
    })
    .catch(error => {
      res.status(500).json({ status: 'error', message: error.message })
    });
}