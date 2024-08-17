import Image from './Common/Image'
import { numberFormat, abbreviateNumber } from '../utils/number-utils'

const MainPage = () => (
    <>
        <h1>Explore Bali</h1>

        <Image
            src="/photos/2711640/pexels-photo-2711640.jpeg"
            auto="compress"
            cs="tinysrgb"
            width={300}
        />

        <ul>
            <li>Kuta {abbreviateNumber(10000)}</li>
            <li>Seminyak {numberFormat(50000)}</li>
            <li>Denpasar {numberFormat(5000)}</li>
        </ul>
    </>
)

export default MainPage
