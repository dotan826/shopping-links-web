import React from 'react';
import { motion } from 'framer-motion';

const MyDrawTest = () => {
    return (
        <div>
            <motion.svg viewBox="0 0 225 240" xmlns="http://www.w3.org/2000/svg" strokeWidth="8">
                {/* <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ --> */}
                <defs>
                    <filter id="svg_4_blur">
                        <feGaussianBlur stdDeviation="0" in="SourceGraphic" />
                    </filter>
                    <filter id="svg_6_blur">
                        <feGaussianBlur stdDeviation="0" in="SourceGraphic" />
                    </filter>
                </defs>
                <g>
                    <title>background</title>
                    <rect fill="rgba(255, 255, 255, 0)" id="canvas_background" height="251" width="231" y="-1" x="-1" />
                    <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                        <rect fill="url(#gridpattern)" strokeWidth="0" y="0" x="0" height="100%" width="100%" />
                    </g>
                </g>
                <g>
                    <title>Layer 1</title>

                    <path stroke="#000000" id="svg_24" d="m57.38341,95.07595c122.11383,-193.0766 109.71165,0 109.71164,-1.10327" fillOpacity="null" strokeOpacity="null" strokeWidth="5.5" fill="none" />
                    <path id="svg_1" d="m-4.50457,188.45091" opacity="0.5" strokeWidth="1.5" stroke="#000" fill="#fff" />
                    <path id="svg_3" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="#fff" />

                    {/* <rect transform="translate(-344.005615234375,-192.0031280517578) translate(179.0029296875,83.00135803222656) rotate(-27 258.57049560546875,182.6134338378906) " rx="1" stroke="#000" id="svg_5" height="82" width="67.50804" y="141.61343" x="224.81647" stroke-opacity="null" stroke-width="5.5" fill="#2a8ee6" />
                    <rect transform="translate(-344.005615234375,-192.0031280517578) translate(179.0029296875,83.00135803222656) rotate(-6 262.9981079101567,223.95268249511707) " rx="1" filter="url(#svg_6_blur)" stroke="#000" id="svg_6" height="89" width="27" y="179.45268" x="249.49812" stroke-opacity="null" stroke-width="5.5" fill="#ed5481" />
                    <rect transform="translate(-344.005615234375,-192.0031280517578) translate(179.0029296875,83.00135803222656) rotate(15 305.2570800781251,210.25415039062494) " rx="1" stroke="#000" id="svg_7" height="91.28032" width="43.19067" y="164.61396" x="283.66176" stroke-opacity="null" stroke-width="5.5" fill="#83d816" /> */}

                    <motion.svg initial={{ fill: "rgba(255, 255, 255, 1)" }} animate={{ fill: "rgba(42, 142, 230, 1)" }} transition={{ duration: 6 }} style={{}}>
                        <rect transform="translate(-344.005615234375,-192.0031280517578) translate(179.0029296875,83.00135803222656) rotate(-27 258.57049560546875,182.6134338378906) " rx="1" stroke="#000" id="svg_5" height="82" width="67.50804" y="141.61343" x="224.81647" strokeOpacity="null" strokeWidth="5.5" />
                    </motion.svg>
                    <motion.svg initial={{ fill: "rgba(255, 255, 255, 1)" }} animate={{ fill: "rgba(237, 84, 129, 1)" }} transition={{ duration: 5 }}>
                        <rect transform="translate(-344.005615234375,-192.0031280517578) translate(179.0029296875,83.00135803222656) rotate(-6 262.9981079101567,223.95268249511707) " rx="1" filter="url(#svg_6_blur)" stroke="#000" id="svg_6" height="89" width="27" y="179.45268" x="249.49812" strokeOpacity="null" strokeWidth="5.5" />
                    </motion.svg>
                    <motion.svg initial={{ fill: "rgba(255, 255, 255, 1)" }} animate={{ fill: "rgba(131, 216, 22, 1)" }} transition={{ duration: 4 }}>
                        <rect transform="translate(-344.005615234375,-192.0031280517578) translate(179.0029296875,83.00135803222656) rotate(15 305.2570800781251,210.25415039062494) " rx="1" stroke="#000" id="svg_7" height="91.28032" width="43.19067" y="164.61396" x="283.66176" strokeOpacity="null" strokeWidth="5.5" />
                    </motion.svg>

                    {/* Bag */}
                    <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1, fill: [ "#FFFFFF", "#fbad4a"] }} transition={{ duration: 3 }} transform="translate(179.0029296875,83.00135803222656)" filter="url(#svg_4_blur)" stroke="#000" id="svg_4" d="m35.49847,149.44956c-0.34416,0 -201.33389,0 -201.50597,-0.16384c0.17208,0.16384 25.63996,-140.12545 25.46788,-140.28929c0.17208,0.16384 148.16109,0.52541 147.98901,0.36157c0.17208,0.52541 28.39324,140.09156 28.04908,140.09156z" strokeOpacity="null" stroke-width="5.5" />

                    <ellipse transform="translate(-344.005615234375,-192.0031280517578) translate(179.0029296875,83.00135803222656) " stroke="#000" ry="6.25425" rx="6.58342" id="svg_9" cy="232.38643" cx="239.83215" strokeOpacity="null" strokeWidth="5.5" fill="#fbad4a" />
                    <ellipse transform="translate(-344.005615234375,-192.0031280517578) translate(179.0029296875,83.00135803222656) " stroke="#000" ry="6.25425" rx="6.58342" id="svg_13" cy="231.39892" cx="321.46661" strokeOpacity="null" strokeWidth="5.5" fill="#fbad4a" />

                    {/* Lightning */}
                    <path transform="translate(-344.005615234375,-192.0031280517578) " stroke="#000" id="svg_17" d="m493.08182,263.106l-5.25077,4.33126l5.18586,1.48799l-4.79324,4.64998l-1.93523,-0.78522l1.37259,4.48207l5.4548,-1.9555l-2.3031,-0.81739l6.25394,-6.67887l-5.7168,-1.2105l5.5205,-4.51324l-3.149,-0.67764l3.42973,-2.8684l-1.25994,-0.04122l-5.32226,3.93513l2.51293,0.66155l0,0z" fillOpacity="null" strokeOpacity="null" strokeWidth="1" fill="#fbad4a" />

                    <path transform="translate(-344.005615234375,-192.0031280517578) translate(179.0029296875,83.00135803222656) " stroke="#000000" id="svg_21" d="m237.19879,227.44887c61.32185,74.9765 86.57203,0.31371 86.57203,0.00001" strokeWidth="5.5" fill="none" />
                    <path transform="translate(-344.005615234375,-192.0031280517578) translate(179.0029296875,83.00135803222656) translate(137.0022430419922,92.00150299072266) " id="svg_23" fillOpacity="null" strokeOpacity="null" strokeWidth="5.5" stroke="#000000" fill="none" />
                </g>
            </motion.svg>
        </div>
    );
}


export default MyDrawTest;


