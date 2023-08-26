import { generateRequestUrl, type TranslateOptions } from './generateRequestUrl'
import { normaliseResponse, type TranslationResult } from './normaliseResponse'
const powerfetch = window.SittlyDevtools.api.network.powerfulFetch
const ResponseType = window.SittlyDevtools.api.network.ResponseType
let CORSUrl: string = ''

export const setCORS = (CORSURL: string) => {
  CORSUrl = CORSURL
  return translate
}

export async function translate(
  text: string,
  options: Partial<TranslateOptions> = {}
): Promise<TranslationResult> {
  const translateUrl = generateRequestUrl(text, options)

  const body = await powerfetch(`${CORSUrl}${translateUrl}`, {
    method: 'GET',
    responseType: ResponseType.JSON,
    headers: {
      origin: 'https://translate.google.com'
    }
  })

  return normaliseResponse(body.data, options.raw)
}
