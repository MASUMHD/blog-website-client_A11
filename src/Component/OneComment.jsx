import moment from "moment";

const OneComment = ({comment}) => {

const timestamp = comment.date; 
const timePart = timestamp.slice(8, 14); 
const relativeTime = moment(timePart, "HHmmss").fromNow();

  return (
    <div>
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y dark:divide-gray-300 dark:bg-gray-100 border-2 rounded-2xl dark:text-gray-800">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src={comment.img}
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">{comment.name}</h4>
              <span className="text-xs dark:text-gray-600">{relativeTime}</span>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-600">
          <p>
            {comment.comment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OneComment;
