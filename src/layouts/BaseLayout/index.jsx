import React from 'react'
import {Layout} from 'antd'

import {Navbar} from '@components'
import css from './styles.scss'

const menu = [
  {
    key: 'products',
    title: 'Products',
    submenu: [
      {title: 'Payments'},
      {title: 'Payouts'},
      {title: 'Financial Services'},
      {title: 'Bussiness Operations'},
    ],
  },
  {
    key: 'developers',
    title: 'Developers',
    submenu: [{title: 'Docs'}, {title: 'Components'}],
  },
  {
    key: 'company',
    title: 'Company',
    submenu: [
      {title: 'About'},
      {title: 'Jobs'},
      {title: 'Customers'},
      {title: 'Bussiness Operations'},
    ],
  },
  {
    key: 'Pricing',
    title: 'Pricing',
  },
]

export const BaseLayout = ({children}) => {
  return (
    <Layout className={css.baseLayout}>
      <Layout.Header>
        <Navbar menu={menu} />
      </Layout.Header>
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  )
}
