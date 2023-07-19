import PageBannerComponent from "../components/PageBanner.component";
import TeamCardComponent from "../components/TeamCard.component";

const MeetTheTeamPage = () => {
  return (
    <div className="MeetTheTeamPage">
      <PageBannerComponent
        contentLeft="Get To Know The"
        image="https://i.assetzen.net/i/JPlzqpfxRxey/w:1920/h:600/q:70.webp"
      >
        sacred Yetis
      </PageBannerComponent>

      <section>
        <div className="wrapper">
          <div className="teams-area">
            <div className="title-part">
              <div className="name">our team in the UK</div>
            </div>

            <div className="all-teams-list">
              <TeamCardComponent data="https://i.assetzen.net/i/OUaS828fDnDA/w:500/h:500/q:70.webp" />
              <TeamCardComponent data="https://i.assetzen.net/i/QQv7PqXMevQp/w:500/h:500/q:70.webp" />
              <TeamCardComponent data="https://i.assetzen.net/i/lLiQZKG7N8Jz/w:500/h:500/q:70.webp" />
              <TeamCardComponent data="https://i.assetzen.net/i/6SWrvLJC5nDZ/w:500/h:500/q:70.webp" />
              <TeamCardComponent data="https://i.assetzen.net/i/LP4cCd6FNMW7/w:500/h:500/q:100.webp" />
              <TeamCardComponent data="https://i.assetzen.net/i/JYWnOJPUNQYw/w:500/h:500/q:70.webp" />
              <TeamCardComponent data="https://i.assetzen.net/i/HEQ2F1Secobt/w:500/h:500/q:100.webp" />
              <TeamCardComponent data="https://i.assetzen.net/i/QO8vIwYq1vMQ/w:500/h:500/q:70.webp" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper">
          <div className="teams-area">
            <div className="title-part">
              <div className="name">our team in Nepal</div>
            </div>

            <div className="all-teams-list">
              <TeamCardComponent data="https://i.assetzen.net/i/UjsjutoJXkZl/w:500/h:500/q:70.webp" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetTheTeamPage;
