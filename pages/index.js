import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function Index() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {siteMetadata.author}
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <div className="pt-4 text-gray-500 dark:text-gray-400">
              Tech Lead & Developer at MeteorJS
            </div>
            <div className="text-gray-500 dark:text-gray-400">Co-Founder at A Gestoria</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="devTo" href={siteMetadata.devTo} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="github" href={siteMetadata.github} />
            </div>
          </div>
          <div className="text-lg pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Software developer since 2008, Tech Lead and Developer at{' '}
              <a href="https://meteorjs.com" target="_blank" rel="noreferrer">
                MeteorJS
              </a>
              . Co-founder and Technology Specialist at{' '}
              <a href="https://agestoria.com" target="_blank" rel="noreferrer">
                A Gestoria
              </a>
              .
            </p>
            <p>
              Brazilian, lived in Ireland for more than 3 years, in Portugal for about 1 year and
              today lives the dream of being a digital nomad.
            </p>
            <p>
              Worked in amazing Brazilian companies such as Caelum, TecSinapse, and Petrobras, as
              well as multinationals such as Equifax and LeasePlan in Ireland. Has extensive
              experience in Java, JavaScript, and TypeScript.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
