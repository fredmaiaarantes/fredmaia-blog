import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { PageSeo } from '@/components/SEO'
import ContentCard from '@/components/ContentCard'

export default function Content() {
  return (
    <>
      <PageSeo
        title={`Conteúdos - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/content`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Conteúdos Online
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Vídeos, Lives e Podcasts
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {projectsData.map((d) => (
              <ContentCard
                key={d.title}
                title={d.title}
                subtitle={d.subtitle}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                date={d.date}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
