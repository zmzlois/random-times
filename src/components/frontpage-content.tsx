import MediumCard from "./medium-card";
import RightSideCard from "./rightside-card";
import SmallCard from "./small-card";

export default function FrontpageContent() {
  return (
    <>
      <div className="min-h-screen">
        <div className=" flex flex-col md:grid grid-flow-col md:grid-cols-7 grid-cols-3">
          <div className=" md:col-span-5 flex-1">
            <SmallCard
              title="How College-Educated Republicans Learned to Love Trump Again"
              description="Blue-collar white voters make up Donald Trump’s base. But his political resurgence has been fueled largely by Republicans from the other end of the socioeconomic scale."
              image="https://static01.nyt.com/images/2024/01/14/multimedia/14pol-gop-voters-4-kwzl/14pol-gop-voters-4-kwzl-superJumbo.jpg"
              link="the link"
            />
          </div>
          <div className="md:col-span-2"></div>
        </div>
      </div>
    </>
  );
}
