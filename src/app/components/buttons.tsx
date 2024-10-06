/* eslint-disable react/jsx-no-target-blank */

interface ButtonProps {
    text: string;
    link?: string;
    onClick?: () => void;
    target?: string;
    type?: string;
    id?: string;
    extra?: string;
}

export default function Buttons(props: ButtonProps) {

    return(
        <a 
        href={props.link} 
        target={props.target ? props.target : "_blank"}
        id={props.id}
        type={props.type} 
        >
        <button
        className={`w-full font-FireSans-SemiBold text-textColour  bg-backgroundColour border border-SecondaryColour hover:bg-accentColourGR transition duration-300 ease-in-out hover:text-SecondaryColour rounded-md pl-6 pr-6 pt-2 pb-2 ${props.extra}`} 
        onClick={ props.onClick }
        >
            {props.text}
        </button>
        </a>
    )

}