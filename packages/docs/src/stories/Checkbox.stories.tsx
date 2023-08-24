import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@femendesf-ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags:['autodocs'],
  args: {},
  decorators: [
    (Story) =>{
        return(
            <Box as='label' css={{display: 'flex', flexDirection: 'row', gap: '$2'}}>
                {Story()}
                 <Text>Accept terms of use</Text>
            </Box>
        )
    }
  ]
  
} as Meta<CheckboxProps>


export const Primary: StoryObj<CheckboxProps> = {
}
