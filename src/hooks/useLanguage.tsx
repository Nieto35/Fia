'use client'
import { useIntl } from 'react-intl'

/**
 *
 * @param {*} object gets an id and a defaultMessage
 * @param {*} values object with specified formatterJS variables in languages
 * @returns
 */
const useLanguage = ({ id, defaultMessage = 'Not defined' }: { id: string, defaultMessage?: string}, values = {}) => {
  const intl = useIntl()

  return intl.formatMessage({
    id,
    defaultMessage
  }, values)
}

export { useLanguage }
