import React, {useState, useCallback} from 'react'
import cx from 'classnames'
import {Link} from 'react-router-dom'
import {Button} from 'antd'
import {RightOutlined, CaretUpOutlined} from '@ant-design/icons'
import Icon from '@ant-design/icons/lib/components/Icon'

import {useMediaQuery} from '@hooks'
import {Logo as LogoIcon} from '@assets'
import {Burger} from '../Burger'
import css from './styles.scss'

export const Navbar = ({menu}) => {
  const [open, setOpen] = useState(false)
  // const isMobile = useMediaQuery('(min-width: 766px)')
  const [activeItem, setActiveItem] = useState('')
  const [arrowStyle, setArrowStyle] = useState({opacity: 0})
  const [menuStyle, setMenuStyle] = useState({opacity: 0})
  const isMobile = useMediaQuery('(max-width: 766px)')

  const closeMenu = useCallback(() => {
    setOpen(false)
    setActiveItem('')
    setArrowStyle((prev) => ({
      ...prev,
      opacity: 0,
    }))
    setMenuStyle((prev) => ({
      ...prev,
      opacity: 0,
    }))
  }, [])

  const openButtonMenu = useCallback(
    (e, item, idx) => {
      if (item.submenu) {
        const arrowWidth = 14
        const {offsetWidth, offsetLeft} = e.currentTarget
        setOpen(true)
        setActiveItem(item.key)
        setArrowStyle({
          transform: `translateX(${
            offsetLeft + (offsetWidth / 2 - arrowWidth / 2)
          }px)`,
          opacity: 1,
        })
        setMenuStyle({
          transform: `translateX(-${idx * 70}%)`,
          opacity: 1,
        })
      } else {
        closeMenu()
      }
    },
    [closeMenu],
  )

  const buttonClick = useCallback(() => {
    setOpen((prev) => !prev)
    setArrowStyle((prev) => ({
      ...prev,
      opacity: open ? 0 : 1,
    }))
  }, [open])

  const buttonLeave = useCallback(
    (e, idx) => {
      if (idx === 0 && e.clientX < e.target.offsetLeft) {
        closeMenu()
      }
    },
    [closeMenu],
  )

  const menuLeave = useCallback(
    ({clientY, clientX, currentTarget}) => {
      const {offsetLeft, offsetWidth} =
        document.querySelector(`[data-role="menu-triggers"]`) ?? {}

      if (clientY >= currentTarget.offsetTop + currentTarget.offsetHeight) {
        closeMenu()
      }
      if (clientX <= offsetLeft || clientX >= offsetLeft + offsetWidth) {
        closeMenu()
      }
    },
    [closeMenu],
  )

  return (
    <>
      <div className={css.navbar}>
        <Icon component={LogoIcon} className={css.navbarLogo} />
        {!isMobile && (
          <div data-role="menu-triggers">
            {menu.map((item, idx) => (
              <Button
                key={item.key}
                type="link"
                size="large"
                onClick={buttonClick}
                onMouseEnter={(e) => openButtonMenu(e, item, idx)}
                onMouseLeave={(e) => buttonLeave(e, idx)}
              >
                {item.title}
              </Button>
            ))}
            <CaretUpOutlined
              style={arrowStyle}
              className={css.navbarMenuArrow}
            />
          </div>
        )}
        {isMobile && <Burger menu={menu} />}
        {!isMobile && (
          <Button size="large" type="link">
            Sign in <RightOutlined />
          </Button>
        )}
      </div>
      {!isMobile && (
        <div
          className={cx(css.navbarMenu, {
            [css.navbarMenuOpen]: open,
          })}
          onMouseLeave={menuLeave}
        >
          <div className={css.navbarMenuContent} style={menuStyle}>
            {menu.map(({key, submenu = []}) => (
              <div
                key={key}
                className={cx(css.navbarMenuItem, {
                  [css.navbarMenuItemActive]: key === activeItem,
                })}
              >
                <div className={css.navbarMenuSubItem}>
                  {submenu.map(({title}) => (
                    <Link key={title} to="/">
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
