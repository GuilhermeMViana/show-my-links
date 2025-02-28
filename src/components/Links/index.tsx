interface linksProps {
    textStyle: React.CSSProperties,
    colorProps: React.CSSProperties,
    title: string,
    url: string
}

export function Links({ textStyle, colorProps, title, url } : linksProps) {

    return(
        <section className="w-11/12 mb-4 mt-6 py-2 select-none transition:transform duration-300 hover:scale-105 cursor-pointer" style={colorProps}>
            <a href={url}>
                <p className="text-base text-center md:text-lg rounded-lg py-2" style={textStyle}>
                    {title}
                </p>
            </a>
        </section>
    )
}