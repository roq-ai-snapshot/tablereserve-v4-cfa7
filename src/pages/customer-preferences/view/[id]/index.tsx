import AppLayout from 'layout/app-layout';
import NextLink from 'next/link';
import React, { useState } from 'react';
import { Text, Box, Spinner, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Button, Link } from '@chakra-ui/react';
import { UserSelect } from 'components/user-select';
import { getCustomerPreferenceById } from 'apiSdk/customer-preferences';
import { Error } from 'components/error';
import { CustomerPreferenceInterface } from 'interfaces/customer-preference';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { AccessOperationEnum, AccessServiceEnum, useAuthorizationApi, withAuthorization } from '@roq/nextjs';

function CustomerPreferenceViewPage() {
  const { hasAccess } = useAuthorizationApi();
  const router = useRouter();
  const id = router.query.id as string;
  const { data, error, isLoading, mutate } = useSWR<CustomerPreferenceInterface>(
    () => (id ? `/customer-preferences/${id}` : null),
    () =>
      getCustomerPreferenceById(id, {
        relations: ['reservation'],
      }),
  );

  const [deleteError, setDeleteError] = useState(null);
  const [createError, setCreateError] = useState(null);

  return (
    <AppLayout>
      <Text as="h1" fontSize="2xl" fontWeight="bold">
        Customer Preference Detail View
      </Text>
      <Box bg="white" p={4} rounded="md" shadow="md">
        {error && <Error error={error} />}
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Text fontSize="lg" fontWeight="bold" as="span">
              Dietary Restriction:
            </Text>
            <Text fontSize="md" as="span" ml={3}>
              {data?.dietary_restriction}
            </Text>
            <br />
            <Text fontSize="lg" fontWeight="bold" as="span">
              Special Request:
            </Text>
            <Text fontSize="md" as="span" ml={3}>
              {data?.special_request}
            </Text>
            <br />
            {hasAccess('reservation', AccessOperationEnum.READ, AccessServiceEnum.PROJECT) && (
              <>
                <Text fontSize="lg" fontWeight="bold" as="span">
                  Reservation:
                </Text>
                <Text fontSize="md" as="span" ml={3}>
                  <Link as={NextLink} href={`/reservations/view/${data?.reservation?.id}`}>
                    {data?.reservation?.customer_id}
                  </Link>
                </Text>
              </>
            )}
          </>
        )}
      </Box>
    </AppLayout>
  );
}

export default withAuthorization({
  service: AccessServiceEnum.PROJECT,
  entity: 'customer_preference',
  operation: AccessOperationEnum.READ,
})(CustomerPreferenceViewPage);
