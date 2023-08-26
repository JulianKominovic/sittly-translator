import { BsClipboard } from 'react-icons/bs'
import {
  type ExtensionItems,
  type ExtensionMetadata
} from 'sittly-devtools/dist/types'
import { translate } from './forked-google-translate-api'
import {
  langEmojis,
  type LangKey
} from './forked-google-translate-api/languages'
const { register, api, hooks } = window.SittlyDevtools
const pasteToCurrentWindow = api.clipboard.pasteToCurrentWindow
const notifyAsyncOperationStatus = api.indicators.notifyAsyncOperationStatus
const copyToClipboard = api.clipboard.copyToClipboard
const getSelectedText = api.shell.getSelectedText
const useServices = hooks.useServices

async function getTranslation(text: string, lang: LangKey) {
  const res = await translate(text, { to: lang }).catch((err) => {
    console.log(err)
    errorNotification()
    return {
      text: ''
    }
  })
  return res.text
}

const languages = Object.entries(langEmojis).slice(1)

function startNotification() {
  notifyAsyncOperationStatus({
    title: 'Translating...',
    description: 'Please wait while we translate your text',
    status: 'IN_PROGRESS'
  })
}
function successNotification() {
  notifyAsyncOperationStatus({
    title: 'Translated',
    description: 'Your text has been translated',
    status: 'SUCCESS'
  })
}

function errorNotification() {
  notifyAsyncOperationStatus({
    title: 'Error',
    description: 'An error has occurred',
    status: 'ERROR'
  })
}

const items: ExtensionItems = () => {
  const setContextMenuOptions = useServices(
    (state) => state.setContextMenuOptions
  )

  return languages.map(([key, value]) => {
    const [flag, lang] = value.split(' ')

    return {
      title: 'Translate to ' + lang,
      description: 'Translate and paste selected text to ' + lang,
      icon: <>{flag}</>,
      mainActionLabel: 'Translate and paste',
      async onClick() {
        startNotification()
        const selectedText = await getSelectedText()
        const translated = await getTranslation(selectedText, key as LangKey)
        if (translated === '') {
          errorNotification()
          return
        }
        await pasteToCurrentWindow(translated)
        successNotification()
      },
      onHighlight() {
        setContextMenuOptions([
          {
            title: 'Copy',
            icon: <BsClipboard />,
            description: 'Copy translated text to clipboard',
            mainActionLabel: 'Copy',
            async onClick() {
              startNotification()
              const selectedText = await getSelectedText()
              const translated = await getTranslation(
                selectedText,
                key as LangKey
              )
              if (translated === '') {
                errorNotification()
                return
              }
              await copyToClipboard(translated)
              successNotification()
            }
          }
        ])
      }
    }
  })
}
/**
 * Metadata is really important, it's used to display your extension in the app.
 * @see docs.com
 */
const metadata: ExtensionMetadata = {
  name: 'Translate',
  description: 'Translate selected text to any language with a few moves',
  icon: <>🌐</>,
  repoUrl: 'https://github.com/JulianKominovic/sittly-translator'
}

register({
  items,
  metadata
})
