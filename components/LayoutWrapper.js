import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Logo = ({ theme }) => (
  <img
    src={`/static/images/logo-${theme}.png`}
    alt={siteMetadata.headerTitle}
    title={siteMetadata.headerTitle}
  />
)

const LayoutWrapper = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  const darkMode = mounted && (theme === 'dark' || resolvedTheme === 'dark')

  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo theme={darkMode ? 'dark' : 'light'} />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
