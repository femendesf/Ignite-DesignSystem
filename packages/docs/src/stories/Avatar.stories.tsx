import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  tags:['autodocs'],
  component: Avatar,
  args: {
    src: 'https://github.com/femendesf.png',
    alt: 'Felipe Mendes Fonseca'
  }
  
} as Meta<AvatarProps>


export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args:{
        src: undefined
    }
}