/* eslint-disable react/jsx-no-target-blank */

interface ButtonProps {
    text: string;
    link?: string;
    onClick?: () => void;
    target?: string;
    type?: string;
    id?: string;
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
        className="w-full font-FireSans-SemiBold text-SecondaryColour  bg-accentColourGR hover:shadow-2xl hover:shadow-indigo-500  hover:bg-SecondaryColour transition duration-300 ease-in-out hover:text-textColour rounded-md pl-6 pr-6 pt-2 pb-2" 
        onClick={ props.onClick }
        >
            {props.text}
        </button>
        </a>
    )

}