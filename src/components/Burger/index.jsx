import React, {useState, useCallback} from 'react'
import cx from 'classnames'
import {Link} from 'react-router-dom'
import {Button, Row, Col} from 'antd'
import {MenuOutlined, RightOutlined, CloseOutlined} from '@ant-design/icons'

import css from './styles.module.scss'

export const Burger = ({menu}) => {
  const [open, setOpen] = useState(false)
  const openMenu = useCallback(() => setOpen(true), [])
  const closeMenu = useCallback(() => setOpen(false), [])

  return (
    <>
      <Button
        shape="round"
        type="primary"
        icon={<MenuOutlined />}
        onClick={openMenu}
      />
      <div
        className={cx(css.burgerMenu, {
          [css.burgerMenuOpen]: open,
        })}
        onClick={closeMenu}
      >
        <CloseOutlined className={css.burgerMenuCloseX} />
        <div className={css.burgerMenuBody}>
          <Row>
            {menu.map(
              ({key, title, submenu = []}) =>
                submenu.length > 0 && (
                  <Col key={key} span={12} className={css.burgerMenuSection}>
                    <h2>{title}</h2>
                    <section>
                      {submenu.map((subItem) => (
                        <Link key={subItem.title} to="/">
                          {subItem.title}
                        </Link>
                      ))}
                    </section>
                  </Col>
                ),
            )}
          </Row>
        </div>
        <Row justify="center" className={css.burgerMenuFooter}>
          <Col>
            <Button shape="round" type="primary">
              Sign in <RightOutlined />
            </Button>
          </Col>
        </Row>
      </div>
    </>
  )
}
