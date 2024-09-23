import Button from "../components/buttons";
import Image from 'next/image';

interface ServiceCardProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: any;
    title: string;
    buttonText: string;
    description: string;
    tags?: string;
    link?: string;
    onClick?: () => void;
    target?: string;
}

export default function ServiceCard(props: ServiceCardProps) {
    return(
        <div className="w-[40vh] h-[70vh]">
            <div className="bg-SecondaryColour w-full h-full rounded-lg flex flex-col">
                <div className="flex-shrink-0">
                    <Image
                        src={props.image}
                        alt={props.title}
                        layout="responsive"
                        width={100}
                        height={100}
                        className="w-full h-auto rounded-t-lg"
                    />
                </div>
                <div className="flex-grow flex flex-col justify-center items-center p-4 ">
                    <h1 className="text-3xl underline underline-offset-4 decoration-4 decoration-accentColour font-FireSans-ExtraBold">
                        {props.title}
                    </h1>
                    <p className="text-center text-sm mt-2">
                        {props.description}
                    </p>
                    <p className="mt-5 text-center">
                        {props.tags}
                    </p>
                </div>
                <div className="flex-shrink-0 p-4">
                    <Button 
                        text={props.buttonText}
                        link={props.link}
                        target={props.target}
                        onClick={props.onClick}
                    />
                </div>
            </div>
        </div>
    )
}