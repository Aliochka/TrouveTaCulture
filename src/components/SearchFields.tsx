import React, { useState } from 'react'
import styles from './SearchFields.module.scss'
import Fuse from 'fuse.js'
import Tag from './Tag'

interface Option {
  value: string
  label: string
}

interface MultiSelectProps {
  options: Option[]
}

const SearchFields: React.FC<MultiSelectProps> = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options)
  const [isOpen, setIsOpen] = useState(false)
  const fuzeOptions: Fuse.IFuseOptions<Option> = {
    keys: ['label'],
    threshold: 0.4,
  }

  const matchOptions = (query: string) => {
    const fuse = new Fuse(options, fuzeOptions)
    setFilteredOptions(fuse.search(query).map(result => result.item))
  }

  const handleOptionToggle = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter(option => option !== value))
    } else {
      setSelectedOptions([...selectedOptions, value])
    }
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(true)
    if (event.target.value === '') {
      setIsOpen(false)
    }
    matchOptions(event.target.value)
  }

  return (
    <div className={styles['searchfields']}>
      <p>
        je recherche
        <span className={styles['multiselect']}>
          <input
            type="text"
            placeholder="une librairie, un disquaire, un musée..."
            onChange={handleSearchChange}
          />
          {isOpen && (
            <div className={styles['options']}>
              {filteredOptions.map(option => (
                <label key={option.value}>
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={selectedOptions.includes(option.value)}
                    onChange={() => handleOptionToggle(option.value)}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          )}
        </span>
      </p>
      {options.map(option => {
        return (
          <Tag
            label={option.label}
            onClick={() => handleOptionToggle(option.value)}
            isSelected={selectedOptions.includes(option.value)}
            key={option.value}
          />
        )
      })}
    </div>
  )
}

export default SearchFields
