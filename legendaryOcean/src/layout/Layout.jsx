import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text, Flex, Button, Avatar } from '@chakra-ui/react';

function PublicNavigation() {
    return (
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={NavLink} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    );
}

export default function Layout() {

  return (
    <div className="layout">
      <Flex margin="20px" justifyContent="space-between" alignItems="center">
        <Text alignSelf={'center'} width="17%" fontSize="xl">Welcome!</Text>
      </Flex>
      <Flex>
        <PublicNavigation />
      </Flex>
      <main>
        <Outlet />
      </main>
    </div>
  );
}