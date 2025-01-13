import type { Preset } from '@pandacss/types'

import { tokens, semanticTokens } from './tokens'

const definePreset = <T extends Preset>(config: T) => config

export const preset = definePreset({
  name: 'flexoki',
  theme: {
    tokens,
    semanticTokens
  }
})

export default preset