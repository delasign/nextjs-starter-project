// MARK: NPM Modules
import NextImage from "next/image";
// MARK: Types
import Props from "types/common/image";

// MARK: React Component
const Image = (props: Props) => {
    return (<NextImage
        src={"https:"+ props.url}
        alt={props.altText}
        width={props.width}
        height={props.height}
    />)
};

export default Image