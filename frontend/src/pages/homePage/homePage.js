import { Button } from '@chakra-ui/react'
import React from 'react'
import ThemeToggle from '../../components/setting/settings';
import Auth from '../../components/setting/auth/login';

const homePage = () => {
  return (
    <div>
      <Button>homeP</Button>
      <ThemeToggle/>
      <Auth/>
    </div>
  )
}

export default homePage;
