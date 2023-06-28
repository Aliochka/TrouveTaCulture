import cn from 'classnames'
import React from 'react'

import styles from './Tag.module.scss'

interface TagProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  label: string
  isSelected: boolean
}

const Tag = ({ label, onClick, isSelected }: TagProps): JSX.Element => {
  return (
    <button
      className={cn(styles['tag'], styles['closeable'], {
        [styles['is-selected']]: isSelected,
      })}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  )
}

export default Tag
