import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="stream"
            className="prefix__svg-inline--fa prefix__fa-stream prefix__fa-w-16"
            viewBox="0 0 512 512"
            {...props}
        >
            <Path
                fill="currentColor"
                d="M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z"
            />
        </Svg>
    )
}

export default SvgComponent
