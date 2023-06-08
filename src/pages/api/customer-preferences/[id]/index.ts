import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { customerPreferenceValidationSchema } from 'validationSchema/customer-preferences';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.customer_preference
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getCustomerPreferenceById();
    case 'PUT':
      return updateCustomerPreferenceById();
    case 'DELETE':
      return deleteCustomerPreferenceById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getCustomerPreferenceById() {
    const data = await prisma.customer_preference.findFirst(convertQueryToPrismaUtil(req.query, 'customer_preference'));
    return res.status(200).json(data);
  }

  async function updateCustomerPreferenceById() {
    await customerPreferenceValidationSchema.validate(req.body);
    const data = await prisma.customer_preference.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });
    return res.status(200).json(data);
  }
  async function deleteCustomerPreferenceById() {
    const data = await prisma.customer_preference.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
