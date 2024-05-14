import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import moment from "moment";
import { toast } from "react-toastify";
import OneComment from "./OneComment";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Details = () => {
  const vewDetails = useLoaderData();
  // console.log(vewDetails);
  const { user } = useAuth();

  const {
    title,
    category,
    short_description,
    long_description,
    image_url,
    email,
    _id,
  } = vewDetails;

  const date = moment().format("YYYYMMDDHHmmss");
  const postComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    const userComment = {
      comment,
      name: user?.displayName,
      email: user?.email,
      img: user?.photoURL,
      date,
      id: _id,
    };
    console.log(userComment);

    fetch("http://localhost:5000/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userComment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("comment added successfully");
          form.reset();
        }
      });
  };

  // comment section
  // const [comments, setComments] = useState([]);
  // console.log("ccccccccccccc", comments);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/comments?id=${_id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setComments(data);
  //     });
  // }, [_id]);

  // Tanstack query for comment:
  const { data: comments ,isPending } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/comments?id=${_id}`);
      
      return res.json();
    },
  }) 


  if(isPending){
    return <p>Loading...</p>
  }



  return (
    <div className="">
      <section className="dark:bg-gray-100 dark:text-gray-800 md:ml-20 md:mr-20 mt-10 rounded-2xl">
        <div className="container gap-5 md:gap-0 flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
          <div className="flex md:pt-36 items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={image_url}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <span className="-mt-16 mb-5 text-lg font-bold uppercase dark:text-gray-600">
              {" "}
              {category}{" "}
            </span>
            <h1 className="text-5xl font-bold leading-none sm:text-4xl">
              {title}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-2 font-bold">
              {short_description}
            </p>
            <p className="mt-2  text-lg ">{long_description}</p>
            {/* update button */}

            {email === user?.email ? (
              <Link to={`/update/${_id}`}>
                <button className="btn mt-8 w-1/2 btn-info">Update</button>
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      {/* Comments */}

      <div className="mt-10 md:ml-20 md:mr-20 p-3">
        <div>
          <h1 className="text-3xl font-bold  mb-8 ml-20">C O M M E N T</h1>
        </div>
        <div className=" flex  justify-start gap-3">
          <div>
            <img src={user.photoURL} alt="" className="rounded-full w-16 h-16" />
          </div>
          <div className="w-full">
            <form onSubmit={postComment}>
              {email !== user?.email ? (
                <textarea
                  name="comment"
                  id=""
                  cols="30"
                  rows="10"
                  required
                  placeholder="Write a comment...."
                  className="w-full h-40 border-2 text-xl pt-5 textarea textarea-bordered rounded-xl"
                ></textarea>
              ) : (
                <p className="text-xl">Your are not allowed to comments</p>
              )}
              <input
                type="submit"
                value="Post Comment"
                className="btn mt-2 w-1/2 md:w-1/4 btn-info"
              />
            </form>
          </div>
        </div>
      </div>

      {/* comments card Show */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10  md:ml-20 md:mr-10 mt-8">
        {comments.map((comment) => (
          <OneComment key={comment._id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Details;
