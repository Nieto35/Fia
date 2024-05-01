'use client'
import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'
import spanish_messages from '@/language/es-ES.json'
import english_messages from '@/language/en-GB.json'
import { useLocalStorage } from '../hooks/useLocalStorage'

const langContext = React.createContext({} as {
  changeLanguage: (lang: any) => any
  flagCode: string
})

/**
 * LangProvider component handles multilanguage using localStorage and flags
 *
 * @param Children to be rendered
 * @returns Context language and setLanguage function
 */
interface props {
  children: React.ReactNode
}
const LangProvider = ({ children }: props) => {
  // handle persistance
  let DEFAULT_LOCALE, DEFAULT_MESSAGES, DEFAULT_FLAG
  const [langStorage, setLangStorage] = useLocalStorage('lang', 'en-GB')

  switch (langStorage) {
    case 'es-ES':
      DEFAULT_MESSAGES = spanish_messages
      DEFAULT_LOCALE = 'es-ES'
      DEFAULT_FLAG = 'es'
      break
    case 'en-GB':
      DEFAULT_MESSAGES = english_messages
      DEFAULT_LOCALE = 'en-GB'
      DEFAULT_FLAG = 'gb'
      break
    default:
      DEFAULT_MESSAGES = english_messages
      DEFAULT_LOCALE = 'en-GB'
      DEFAULT_FLAG = 'gb'
      break

  }

  const [locale, setLocale] = useState<string>(DEFAULT_LOCALE)
  const [flagCode, setFlagCode] = useState<string>(DEFAULT_FLAG)
  const [messages, setMessages] = useState(DEFAULT_MESSAGES)

  const changeLanguage = (lang) => {
    switch (lang) {
      case 'en-GB':
        setLocale('en-GB')
        setFlagCode('gb')
        setMessages(english_messages)
        break
      case 'es-ES': // es as default
        setLocale('es-ES')
        setFlagCode('es')
        setMessages(spanish_messages)
        
        break
      default:
        setLocale('en-GB')
        setFlagCode('gb')
        setMessages(english_messages)
        break
    }
  }

  return (
    <langContext.Provider
      value={{ changeLanguage, flagCode }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  )
}

export { langContext, LangProvider }
