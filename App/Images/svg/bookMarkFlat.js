import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            aria-hidden="true"
            data-prefix="far"
            data-icon="bookmark"
            className="prefix__svg-inline--fa prefix__fa-bookmark prefix__fa-w-12"
            viewBox="0 0 384 512"
            {...props}
        >
            <Path
                fill="currentColor"
                d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 016-6h276c3.314 0 6 2.683 6 5.996V428.43z"
            />
        </Svg>
    )
}

export default SvgComponent
