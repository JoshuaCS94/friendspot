import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Tabs } from './Tabs'

const TABS = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4']
const CONTENTS = TABS.map(t => (
  <p key={t} role='tabpanel'>
    {t}
  </p>
))

describe('Components', () => {
  describe('Tabs', () => {
    it('should render all 4 tabs', () => {
      render(<Tabs tabs={TABS}>{CONTENTS}</Tabs>)

      const tablist = screen.getByRole('tablist')
      const tabs = screen.getAllByRole('tab')

      expect(tablist).toBeInTheDocument()
      expect(tabs).toHaveLength(4)
      tabs.forEach((el, i) => expect(el).toHaveTextContent(TABS[i]))
    })

    it('should highlight the 2nd tab', () => {
      render(
        <Tabs tabs={TABS} defaultSelected={2}>
          {CONTENTS}
        </Tabs>
      )

      const tabs = screen.getAllByRole('tab')

      tabs.forEach((t, i) =>
        expect(t).toHaveAttribute('aria-selected', String(i === 2))
      )
    })

    it('should show content of the 2nd tab and hide all others', () => {
      render(
        <Tabs tabs={TABS} defaultSelected={2}>
          {CONTENTS}
        </Tabs>
      )

      const contents = screen.getAllByRole('tabpanel')

      expect(contents).toHaveLength(1)
      expect(contents[0]).toHaveTextContent(TABS[2])
    })

    it('should trigger "onSelect" with "3" as argument when clicking the 4th tab', () => {
      const handleSelect = jest.fn()

      render(
        <Tabs tabs={TABS} onSelect={handleSelect}>
          {CONTENTS}
        </Tabs>
      )

      userEvent.click(screen.getAllByRole('tab')[3])

      expect(handleSelect).toHaveBeenCalledTimes(1)
      expect(handleSelect).toHaveBeenCalledWith(3)
    })

    it('should show content of 4th tab after clicking on it', () => {
      render(<Tabs tabs={TABS}>{CONTENTS}</Tabs>)

      userEvent.click(screen.getAllByRole('tab')[3])

      const contents = screen.getAllByRole('tabpanel')

      expect(contents).toHaveLength(1)
      expect(contents[0]).toBeVisible()
    })
  })
})
