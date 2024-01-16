import { Button } from '@chakra-ui/react'
import React from 'react'
import ThemeToggle from '../../components/setting/settings';
import Auth from '../../layout/Auth';



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
