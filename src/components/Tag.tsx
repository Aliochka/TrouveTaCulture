import cn from 'classnames'
import React from 'react'

import styles from './Tag.module.scss'

interface TagProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  label: string
  isSelected: boolean
}

const Tag = ({ label, onClick, isSelected }: TagProps): JSX.Element => {
  console.log(label)
  return (
    <span
      className={cn(styles['tag'], styles['closeable'], {
        [styles['is-selected']]: isSelected,
      })}
    >
      <button
        className={styles['tag-close-button']}
        onClick={onClick}
        type="button"
      >
        {label}
      </button>
    </span>
  )
}

export default Tag
