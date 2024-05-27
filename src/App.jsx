import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Testimonial from "./components/Testimonial/Testimonial";

export default function App() {
  return (
    <div className="flex flex-col items-center p-20">
      <h1 className="text-gray-200 font-bold text-4xl mt-4 mb-16">
        Component Library Project
      </h1>
      {/* <div className="flex gap-4 items-center">
        <Badge badgeColors="red" pill={true}>
          Badge
        </Badge>
        <Badge badgeColors="yellow" pill={true}>
          Badge
        </Badge>
        <Badge badgeColors="green" pill={true}>
          Badge
        </Badge>
        <Badge badgeColors="blue" pill={true}>
          Badge
        </Badge>
        <Badge badgeColors="indigo" pill={true}>
          Badge
        </Badge>
        <Badge badgeColors="purple" pill={true}>
          Badge
        </Badge>
        <Badge badgeColors="pink" pill={true}>
          Badge
        </Badge>
      </div>
      <div className="flex gap-4 items-center mt-4">
        <Badge badgeColors="red" pill={false}>
          Badge
        </Badge>
        <Badge badgeColors="yellow" pill={false}>
          Badge
        </Badge>
        <Badge badgeColors="green" pill={false}>
          Badge
        </Badge>
        <Badge badgeColors="blue" pill={false}>
          Badge
        </Badge>
        <Badge badgeColors="indigo" pill={false}>
          Badge
        </Badge>
        <Badge badgeColors="purple" pill={false}>
          Badge
        </Badge>
        <Badge badgeColors="pink" pill={false}>
          Badge
        </Badge>
      </div> */}
      {/* <div className="max-w-4/5">
        <Banner status="update" isMultiLine={true} />
      </div> */}
      {/* <div>
        <Card cardTitle="Easy Deployement" />
      </div> */}
      <Testimonial />
    </div>
  );
}
