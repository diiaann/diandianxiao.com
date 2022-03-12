import Image from 'next/image'

export default function ImageWithCaption({alt, path, width, height, caption, priority}) {
    return (
    <figure>
			<Image
					src={path}
					alt={caption || alt}
					priority={priority}
					width={width}
					height={height}
					className="pb-2"
					layout="responsive"
				/>
        {caption && <figcaption className="block mb-4 italic text-gray-600 text-base">{caption}</figcaption>}
    </figure>)
}
