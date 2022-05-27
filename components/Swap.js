import { Form } from 'web3uikit'

export default function Swap() {
  return (
    <Form
      buttonConfig={{
        onClick: function noRefCheck() {},
        theme: 'primary',
      }}
      data={[
        {
          name: 'Best pie',
          selectOptions: [
            {
              id: 'apple',
              label: 'Apple Pie',
            },
            {
              id: 'black',
              label: 'Blackberry Pie',
            },
            {
              id: 'pump',
              label: 'Pumpkin Pie',
            },
          ],
          type: 'select',
          value: '',
        },
        {
          name: 'Best Zelda',
          selectOptions: [
            {
              id: 'oot',
              label: 'Ocarina of Time',
            },
            {
              id: 'ww',
              label: 'Wind Waker',
            },
            {
              id: 'botw',
              label: 'Breath of the Wild',
            },
          ],
          type: 'select',
          value: '',
        },
      ]}
      onSubmit={function noRefCheck() {}}
      title="Select thing"
    />
  )
}
