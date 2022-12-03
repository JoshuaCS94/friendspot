import { Router } from 'next/router'
import { render } from '@testing-library/react'

import App from '../_app.page'

const TestComponent = () => null

describe('Pages', () => {
  describe('App', () => {
    it('should render without crashing', () => {
      render(
        <App
          Component={TestComponent}
          pageProps={{}}
          router={null as unknown as Router}
        />
      )
    })
  })
})
