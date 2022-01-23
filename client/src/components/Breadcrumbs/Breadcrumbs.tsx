import React from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

export const NAME = 'Breadcrumbs'

export type BreadCrumb = {
  to?: string
  text: string
}

interface BreadcrumbsProps {
  breadcrumbs: BreadCrumb[]
  className?: string
  style?: React.CSSProperties
}

export const testIdDictionary = {
  root: `${NAME}Root`,
  link: `${NAME}Link`,
  text: `${NAME}Text`,
}

export default function Breadcrumbs(props: BreadcrumbsProps) {
  const { breadcrumbs, className } = props
  return (
    <Breadcrumb
      style={{ margin: '14px' }}
      data-testid={testIdDictionary.root}
      className={clsx(NAME, className)}
    >
      {breadcrumbs.map(({ to, text }, key) => (
        <Breadcrumb.Item key={key}>
          {to ? (
            <Link data-testid={`${testIdDictionary.link}${text}`} to={to}>
              <span> {text}</span>
            </Link>
          ) : (
            <span
              data-testid={`${testIdDictionary.text}${text}`}
              className={clsx({
                lastBreadCrumb: key === breadcrumbs.length - 1,
              })}
            >
              {text}
            </span>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}
