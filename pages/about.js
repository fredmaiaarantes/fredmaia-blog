import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">
              Tech Lead & Senior Software Developer
            </div>
            <div className="text-gray-500 dark:text-gray-400">Quave / Pathable</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              I've been working with software development since 2008, today working at Quave (a
              Brazilian company), working at the services division leading a team and developing
              software for Pathable (an American company). I'm Brazilian, lived in Ireland for more
              than 3 years, and now in Portugal but living my dream of being a digital nomad.
            </p>

            <p>
              I worked in amazing Brazilian companies such as Caelum, TecSinapse, and Petrobras, as
              well as multinationals such as Equifax and LeasePlan in Ireland. I have extensive
              experience in Java, JavaScript, and TypeScript. Today, in addition to continuing my
              development studies, I'm also dedicated to learning about digital marketing and
              entrepreneurship.
            </p>
            <p>
              Created the group{' '}
              <a href="https://linktr.ee/nerdsnaeuropa" target="blank">
                Nerds na Europa
              </a>
              , creating content on my{' '}
              <a href="https://www.youtube.com/user/fredericomaia10/" target="blank">
                Youtube channel
              </a>{' '}
              about development and career abroad. With my wife, I also produce videos on{' '}"
              <a href="https://www.youtube.com/GoianosnaIrlanda" target="blank">
                Goianos na Irlanda
              </a>
              ", where they do interviews and share their own experiences about life abroad. He
              trained more than 50 students on his course "
              <a href="https://devnairlanda.com" target="blank">
                Dev na Irlanda
              </a>
              ", created for developers looking for a career in Ireland.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
