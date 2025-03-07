import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/integration/**/*.spec.{js,jsx,ts,tsx}',
  },
  projectId: 'e3zwoh',
})
