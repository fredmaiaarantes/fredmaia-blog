import Image from 'next/image'
import Link from '@/components/Link'

const ContentCard = ({ title, subtitle, description, imgSrc, href, date }) => (
  <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
    <div className="h-full border-2 border-gray-200 border-opacity-60 dark:border-gray-700 rounded-md overflow-hidden">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="lg:h-48 md:h-36 object-cover object-center"
            width={544}
            height={346}
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          className="lg:h-48 md:h-36 object-cover object-center"
          width={544}
          height={346}
        />
      )}
      <div className="p-6">
        <h2 className="text-xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <h3 className="text-base leading-8 tracking-tight mb-3">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {subtitle}
            </Link>
          ) : (
            subtitle
          )}
        </h3>
        <p className="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">{description}</p>
        <p className="prose text-sm text-gray-500 max-w-none dark:text-gray-400 mb-3">- {date}</p>
      </div>
    </div>
  </div>
)

export default ContentCard
