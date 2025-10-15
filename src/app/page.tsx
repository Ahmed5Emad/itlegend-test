
import Links from "./ui/links";
import Player from "./ui/player";
import IconLinks from "./ui/iconlinks";
import CourseTopics from "./ui/coursecontent";
import ProgressBar from "./ui/progressbar";
import CourseMaterial from "./ui/coursematerials";
import Comments from "./ui/comments";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen ">
      <div className="px-5 py-4 ">
        <div className="flex flex-col max-w-[1320] mx-auto ">
          <Links></Links>
          <h1 className="text-5xl font-semibold w-full mt-6 mb-2 ">
            Starting SEO as your Home
          </h1>
        </div>
      </div>

      <div className="bg-white flex md:flex-row flex-col  ">
        <div className="grid grid-cols-1 md:grid-cols-(--grid-template-columns) max-w-[1320] mx-auto gap-[70px]  px-5 py-4 ">
          <div className=" flex flex-col gap-4">
            <Player src="videos/sample.mp4" poster="images/thumb.jpg" />
            <IconLinks></IconLinks>
            <h2 className="text-4xl font-medium my-5 ">Course Materials</h2>
            <CourseMaterial></CourseMaterial>
            <h2 className="text-4xl font-medium my-5 ">Comments</h2>
            <Comments/>
          </div>
          <div className=" flex flex-col gap-4">
            <h2 className="text-4xl font-medium mb-5 ">Topics for This Course</h2>
            <ProgressBar></ProgressBar>
            <div className="flex flex-col mt-10">
              <CourseTopics></CourseTopics>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
