//% color=45 weight=15
namespace images {
    /**
     * Creates an image that fits on the LED screen.
     */
    //% weight=80
    //% blockId=device_build_image block="create image" imageLiteral
    export function createImage(leds: string): Image {
        return null;
    }
    
    export class Image {
        /**
         * Shows an frame from the image at offset ``x offset``.
         * @param xOffset TODO
         */
        //% help=functions/show-image weight=69 shim=micro_bit::showImage
        //% blockId=device_show_image_offset block="show image %sprite|at offset %offset" blockGap=8
        public showImage(xOffset: number): void {}
        
        /**
         * Scrolls an image .
         * @param frameOffset x offset moved on each animation step, eg: 5, 1, -1
         * @param interval time between each animation step in milli seconds, eg: 200
         */
        //% help=functions/show-image weight=69 shim=micro_bit::showImage
        //% blockId=device_scroll_image block="scroll image %sprite|with offset %frameoffset|and interval (ms) %delay" blockGap=8
        public scrollImage(frameOffset: number, interval : number = 200) {            
        }

        public plotImage(xOffset: number): void {}

        public clear(): void {}

        public setPixelBrightness(x: number, y: number, v: number): void {}

        public pixelBrightness(x: number, y: number): number {
            return 0;
        }
    }
}