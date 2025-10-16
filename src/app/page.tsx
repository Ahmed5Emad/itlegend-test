import Links from "./ui/links";
import Player from "./ui/player";
import IconLinks from "./ui/iconlinks";
import CourseTopics from "./ui/coursecontent";
import ProgressBar from "./ui/progressbar";
import CourseMaterial from "./ui/coursematerials";
import Comments from "./ui/comments";
import Submit from "./ui/commentsubmit";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen ">
      <div className="px-5 py-4 ">
        <div className="flex flex-col 2xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[720px] sm:max-w-[540px] mx-auto ">
          <Links />
          <h1 className="text-5xl font-semibold w-full mt-6 mb-2 ">
            Starting SEO as your Home
          </h1>
        </div>
      </div>

      <div className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-(--grid-template-columns) 2xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[720px] sm:max-w-[540px] mx-auto gap-[70px] px-5 py-4">
          <div className="flex flex-col lg:order-1">
            <Player src="videos/sample.mp4" poster="images/thumb.jpg" />
            <IconLinks />
            <h2 className="text-4xl font-medium my-5 mb-[40px]">
              Course Materials
            </h2>
            <CourseMaterial />
          </div>
          <div id="list" className="flex flex-col gap-4 lg:order-2 lg:row-span-2">
            <h2 className="text-4xl font-medium mb-5">
              Topics for This Course
            </h2>
            <ProgressBar />
            <div className="flex flex-col mt-10">
              <CourseTopics />
            </div>
          </div>

          <div id="comments" className="flex flex-col lg:order-3">
            <h2 className="text-4xl font-medium my-5 ">Comments</h2>
            <Comments />
            <Submit />
          </div>
        </div>
      </div>
    </div>
  );
}
