import { titleBuilder, fromTemplate } from '../../../.storybook/utils'
import { LoadingAnimation } from './index'

const conf = {
  title: titleBuilder.atoms('LoadingAnimation'),
  component: LoadingAnimation,
}

const Template = () => <LoadingAnimation />

export const Success = fromTemplate(Template, {
  title: 'Completed',
})

export default conf
