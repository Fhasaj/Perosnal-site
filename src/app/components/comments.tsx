import Button from "@/app/components/buttons";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";

interface CommentProps {
    id: number;
    commentID: number;
    replayID: number;
    name: string;
    comment: string;
    replies?: string[];
  }
  

export default function Comments({ props }: CommentProps): JSX.Element {
  console.log(" Test" + props.name);

  return (
    <div className="relative w-full items-center justify-center text-center px-10 lg:px-[50vh]">
      <div className="flex text-start mt-5 ">
        <Button text="Leave a Comment" link="#" target="_self" />
      </div>

      <div className="flex text-start mt-5 ml-2 ">
        <p className="font-FiraSans-Medium underline underline-offset-8 decoration-4 decoration-accentColour text-textColour text-lg md:text-lg lg:text-xl ">
          Comments
        </p>
      </div>

      <div className="flex text-start mt-5 ml-2 font-FiraSans-Regular text-textColour">
        NO COMMENTS YET
    </div>

    <div className="flex text-start mt-5 ml-2 font-FiraSans-Regular text-textColour">
      <div className="bg-SecondaryColour p-5 rounded-md">
        <div className="flex gap-4">
          <div className="text-6xl">
            <BsPersonCircle />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold underline underline-offset-8 decoration-4 decoration-accentColour">
                NAME
              </div>
              <div className="flex items-center gap-2">
                <AiFillLike 
                className="hover:text-accentColour hover:cursor-pointer"
                />
                |  <span className="hover:text-accentColour hover:cursor-pointer">Replay</span>
              </div>
            </div>
            <div className="mt-2">
              Some comment here that looks like it is working but in fact it is not
            </div>
          </div>
        </div>
      </div>
    </div>



    </div>
  );
}


/**
 *  Comments section from a backend point of view
 * 
 * There will be one table that will hold the comments
 * 
 * BlogID will be used to identify the blog post
 * Comment ID will hold the value in which the comment is posted which will link to said blog post
 * ReplyID will be used which will hold the information of the comment ID to show which comment is being replied to
 * Name - Name of the person who commented
 * comment - The comment itself
 * Number of likes - Number of likes the comment has
 * 
 * There will be checks to make sure the names are not rude or offensive as well as the ability to anonymise these names
 * Comments will also have the ability to be checked for spam, offensive language and other checks
 */