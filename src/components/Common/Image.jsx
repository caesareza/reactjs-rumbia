export const Avatar = ({ src, name, size = 200 }) => {
    return (
        <>
            <img
                className="avatar"
                src={src}
                alt={name}
                width={size}
                height="auto"
            />
        </>
    )
}

const Image = ({ src, auto, cs, width }) => {
    // const imageUrl = `${src}?auto=${auto}&cs=${cs}&w=${width}`;
    const imageHost = 'https://images.pexels.com'
    const imageUrl = {
        auto,
        cs,
        w: width,
    }

    const searchParams = new URLSearchParams(imageUrl)
    const urlParams = imageHost + src + '?' + searchParams.toString()
    return <img src={urlParams} />
}

export default Image
