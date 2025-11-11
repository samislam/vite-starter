import { PagesDefs } from '@/types/pagedef.types'

export const pageDefs = {
  home: {
    href: '/',
    title: '@t<home-title>',
    description: '@t<home-description>',
    icon: 'mdi:mdiHome',
  },
} as const satisfies PagesDefs
