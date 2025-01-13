import type { Tokens, SemanticTokens } from '@pandacss/types'
const defineTokens = <T extends Tokens>(v: T) => v;
const defineSemanticTokens = <T extends SemanticTokens>(v: T) => v;
export const tokens = defineTokens({
    colors: {
        base: {
            50:  { value: '#F2F0E5' },
            100: { value: '#E6E4D9' },
            150: { value: '#DAD8CE' },
            200: { value: '#CECDC3' },
            300: { value: '#B7B5AC' },
            400: { value: '#9F9D96' },
            500: { value: '#878580' },
            600: { value: '#6F6E69' },
            700: { value: '#575653' },
            800: { value: '#403E3C' },
            850: { value: '#343331' },
            900: { value: '#282726' },
            950: { value: '#1C1B1A' }
          },
          red: {

              50:   { value: '#FFE1D5' },
              100:  { value: '#FFCABB' },
              150:  { value: '#FDB2A2' },
              200:  { value: '#F89A8A' },
              300:  { value: '#E8705F' },
              400:  { value: '#D14D41' },
              500:  { value: '#C03E35' },
              600:  { value: '#AF3029' },
              700:  { value: '#942822' },
              800:  { value: '#6C201C' },
              850:  { value: '#551B18' },
              900:  { value: '#3E1715' },
              950:  { value: '#261312' }
          },
          orange: {
                        50:       { value: '#FFE7CE' },
                        100:      { value: '#FED3AF' },
                        150:      { value: '#FCC192' },
                        200:      { value: '#F9AE77' },
                        300:      { value: '#EC8B49' },
                        400:      { value: '#DA702C' },
                        500:      { value: '#CB6120' },
                        600:      { value: '#BC5215' },
                        700:      { value: '#9D4310' },
                        800:      { value: '#71320D' },
                        850:      { value: '#59290D' },
                        900:      { value: '#40200D' },
                        950:      { value: '#27180E' }
          },
          yellow: {
                        50:       { value: '#FAEEC6' },
                        100:      { value: '#F6E2A0' },
                        150:      { value: '#F1D67E' },
                        200:      { value: '#ECCB60' },
                        300:      { value: '#DFB431' },
                        400:      { value: '#D0A215' },
                        500:      { value: '#BE9207' },
                        600:      { value: '#AD8301' },
                        700:      { value: '#8E6B01' },
                        800:      { value: '#664D01' },
                        850:      { value: '#503D02' },
                        900:      { value: '#3A2D04' },
                        950:      { value: '#241E08' }
          },
          green: {
                        50:       { value: '#EDEECF' },
                        100:      { value: '#DDE2B2' },
                        150:      { value: '#CDD597' },
                        200:      { value: '#BEC97E' },
                        300:      { value: '#A0AF54' },
                        400:      { value: '#879A39' },
                        500:      { value: '#768D21' },
                        600:      { value: '#66800B' },
                        700:      { value: '#536907' },
                        800:      { value: '#3D4C07' },
                        850:      { value: '#313D07' },
                        900:      { value: '#252D09' },
                        950:      { value: '#1A1E0C' }
          },
          cyan: {
                        50:       { value: '#DDF1E4' },
                        100:      { value: '#BFE8D9' },
                        150:      { value: '#A2DECE' },
                        200:      { value: '#87D3C3' },
                        300:      { value: '#5ABDAC' },
                        400:      { value: '#3AA99F' },
                        500:      { value: '#2F968D' },
                        600:      { value: '#24837B' },
                        700:      { value: '#1C6C66' },
                        800:      { value: '#164F4A' },
                        850:      { value: '#143F3C' },
                        900:      { value: '#122F2C' },
                        950:      { value: '#101F1D' }
                },
          blue: {
                        50:       { value: '#E1ECEB' },
                        100:      { value: '#C6DDE8' },
                        150:      { value: '#ABCFE2' },
                        200:      { value: '#92BFDB' },
                        300:      { value: '#66A0C8' },
                        400:      { value: '#4385BE' },
                        500:      { value: '#3171B2' },
                        600:      { value: '#205EA6' },
                        700:      { value: '#1A4F8C' },
                        800:      { value: '#163B66' },
                        850:      { value: '#133051' },
                        900:      { value: '#12253B' },
                        950:      { value: '#101A24' }
          },
          purple: {
                        50:       { value: '#F0EAEC' },
                        100:      { value: '#E2D9E9' },
                        150:      { value: '#D3CAE6' },
                        200:      { value: '#C4B9E0' },
                        300:      { value: '#A699D0' },
                        400:      { value: '#8B7EC8' },
                        500:      { value: '#735EB5' },
                        600:      { value: '#5E409D' },
                        700:      { value: '#4F3685' },
                        800:      { value: '#3C2A62' },
                        850:      { value: '#31234E' },
                        900:      { value: '#261C39' },
                        950:      { value: '#1A1623' }
          },
          magenta: {
                        50:       { value: '#FEE4E5' },
                        100:      { value: '#FCCFDA' },
                        150:      { value: '#F9B9CF' },
                        200:      { value: '#F4A4C2' },
                        300:      { value: '#E47DA8' },
                        400:      { value: '#CE5D97' },
                        500:      { value: '#B74583' },
                        600:      { value: '#A02F6F' },
                        700:      { value: '#87285E' },
                        800:      { value: '#641F46' },
                        850:      { value: '#4F1B39' },
                        900:      { value: '#39172B' },
                        950:      { value: '#24131D' }
        }
    }
});

export const semanticTokens = defineSemanticTokens({
    
})