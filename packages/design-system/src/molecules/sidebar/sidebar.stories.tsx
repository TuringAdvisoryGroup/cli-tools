import { fromTemplate, titleBuilder } from '../../../.storybook/utils'
import MintingLogo from '../../assets/svg/minting-logo.svg'
import SimpleLogo from '../../assets/svg/logoSimple.svg'
import { TypographyV2 } from '../../atoms/typographyV2'
import { JoinBanner } from '../joinBanner'
import { TokenAppearance } from '../tokenAppearance'
import {
  discordInviteUrl,
  faqUrl,
  instaUrl,
  resourceCenterUrl,
  stakingTermsUrl,
  twitterUrl,
} from '../../constants'
import { SidebarProps } from './types'
import { Sidebar } from '.'

const storyConfig = {
  title: titleBuilder.molecules('Sidebar'),
  component: Sidebar,
}

const footerOptions = [
  {
    title: 'Twitter',
    link: twitterUrl,
  },
  {
    title: 'Discord',
    link: discordInviteUrl,
  },
  {
    title: 'Instagram',
    link: instaUrl,
  },
  {
    title: 'FAQ',
    link: faqUrl,
  },
  {
    title: 'Resourse Center',
    link: resourceCenterUrl,
  },
  {
    title: 'Protocol Terms',
    link: stakingTermsUrl,
  },
]

const Template = (props: SidebarProps) => (
  <Sidebar {...props}>
    <TypographyV2 variant="h1">Hello world</TypographyV2>
    <TypographyV2 variant="h1">Hello world</TypographyV2>
    <TypographyV2 variant="h1">Hello world</TypographyV2>
    <TypographyV2 variant="h1">Hello world</TypographyV2>
    <TypographyV2 variant="h1">Hello world</TypographyV2>
    <TypographyV2 variant="h1">Hello world</TypographyV2>
    <TypographyV2 variant="h1">Hello world</TypographyV2>
    <TypographyV2 variant="h1">Hello world</TypographyV2>
    <TypographyV2 variant="h1">Hello world</TypographyV2>
    <TypographyV2 variant="h1">Hello world</TypographyV2>
    <TypographyV2 variant="h1">Hello world</TypographyV2>
    <TypographyV2 variant="h1">Hello world</TypographyV2>
    <TypographyV2 variant="h1">Hello world</TypographyV2>
    <TypographyV2 variant="h1">Hello world</TypographyV2>
    <TypographyV2 variant="h1">Hello world</TypographyV2>
    <TypographyV2 variant="h1">Hello world</TypographyV2>
    <TypographyV2 variant="h1">Hello world</TypographyV2>
    <TypographyV2 variant="h1">Hello world</TypographyV2>
  </Sidebar>
)

export const withWalletConnect = fromTemplate(Template, {
  withConnectWallet: true,
  selectedOptionId: 'tokenHolders',
  header: (
    <TokenAppearance
      logo=""
      name="Harrison First"
      symbol="FIRST"
      action={{
        title: 'Change Token',
        onPress: () => null,
      }}
    />
  ),
  logo: {
    desktop: <MintingLogo width={111} height={32} />,
    mobileHeader: <SimpleLogo width={32} height={32} />,
    mobileSidebar: <MintingLogo width={111} height={32} />,
  },
  footerOnDesktop: (
    <JoinBanner
      title="Join Roll Discord!"
      description="We welcome your feedback. We're passionate about connecting with creators and communities."
      action={{
        title: 'Join Discord Now',
        onPress: () => null,
      }}
    />
  ),
  sections: [
    {
      id: 'firstSection',
      options: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          iconVariant: 'home',
          onPress: () => null,
        },
        {
          id: 'tokenManagement',
          title: 'Token Management',
          iconVariant: 'coin',
          onPress: () => null,
          nestedOptions: [
            {
              id: 'vesting',
              title: 'Vesting',
              onPress: () => null,
            },
            {
              id: 'tokenHolders',
              title: 'Token Holders',
              onPress: () => null,
            },
            {
              id: 'sendTokens',
              title: 'Send Tokens',
              onPress: () => null,
            },
          ],
        },
      ],
    },
    {
      id: 'secondSection',
      options: [
        {
          id: 'staking',
          title: 'Staking',
          iconVariant: 'coin2',
          onPress: () => null,
        },
        {
          id: 'memberships',
          title: 'Memberships',
          iconVariant: 'award',
          onPress: () => null,
        },
        {
          id: 'learnAndResources',
          title: 'Learn & Resources',
          iconVariant: 'note',
          onPress: () => null,
        },
      ],
    },
  ],
  footerOptionsOnMobile: footerOptions,
})

// export const withoutWalletConnect = fromTemplate(Template, {
//   logo: <LogoSimple />,
//   options: [
//     {
//       title: 'Explore Communities',
//       onPress: () => null,
//     },
//     {
//       title: 'Mint Token',
//       onPress: () => null,
//     },
//   ],
// })

export default storyConfig
