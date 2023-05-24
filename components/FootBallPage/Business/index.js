import Image from "next/image";
import rulesimg from "/public/assets/footballimg/Group 41809.png";
import CupImage from "/public/assets/Group (2).png";
import PointSystem from "/public/assets/footballimg/Group 42360.png";
import Defence from "/public/assets/footballimg/Group 42124.png";
import Card from "/public/assets/footballimg/Group 42125.png";

export default function Business() {
  return (
    <div className="">
      <div className="bg-[url('/assets/footballimg/bg1.svg')] lg:h-[480vh] sm:h-[270vh] h-[370vh]  bg-no-repeat bg-cover ">
        <div className="bg-[url('/assets/footballimg/bg1(1).svg')] h-[370vh]  sm:h-[270vh] lg:h-[520vh] bg-no-repeat bg-cover ">
          <h1 className="text-[#0169B6] font-bold font-mono text-[14px] sm:text-[20px] lg:text-[24px] pl-4 pt-60 sm:pt-72 lg:pt-72 text-center pb-8">
            Business in{" "}
            <span className="text-[#00A547]"> Fantasy Football:</span> An
            Overview
          </h1>

          <p className="text-[#0B592A]  font-mono text-[12px] sm:text-[13px] lg:text-[14px] px-5 sm:px-20 lg:px-28 text-center pb-2 sm:pb-5 lg:pb-8">
            While fantasy football has yet to reach the same level of popularity
            in India as fantasy cricket, it is gaining ground thanks to the
            country's fervent support of a number of major international
            football leagues. The English Premier League, the Spanish La Liga,
            the Italian Serie A, and the German Bundesliga are some of the most
            watched football leagues in the world.
          </p>
          <p className="text-[#0B592A]  font-mono text-[12px] sm:text-[13px] lg:text-[14px] px-5 sm:px-20 lg:px-28 text-center pb-2 sm:pb-5 lg:pb-8 ">
            {" "}
            Many Indian sports fans have taken up following the English Premier
            League with renewed fervor since Manchester United and Arsenal both
            established themselves in the league. Currently, everyone can play
            fantasy football without paying a dime.
          </p>
          <p className="text-[#0B592A]  font-mono text-[12px] sm:text-[13px] lg:text-[14px] px-5 sm:px-20 lg:px-28 text-center pb-2 sm:pb-5 lg:pb-8 ">
            Plus, there's a chance for you to win cash prizes. The only Indian
            states where fantasy cricket and fantasy football are illegal are
            Assam, Andhra Pradesh, Odisha, Sikkim, Nagaland, and Telangana.
          </p>

          {/* {//........second heading ................//} */}

          <h1 className="text-[#0169B6] font-bold font-mono text-[14px] sm:text-[20px] lg:text-[24px] pl-4 pt-5 text-center pb-2 sm:pb-5 lg:pb-8">
            Whenever it comes to{" "}
            <span className="text-[#00A547]"> Fantasy Football,</span> You must
            follow the rules
          </h1>
          <p className="text-[#0B592A]  font-mono text-[10px] sm:text-[13px] lg:text-[14px] px-5 sm:px-20 lg:px-28 text-center pb-2 sm:pb-5 lg:pb-8 ">
            Some guidelines for playing fantasy football are listed below:
            assembling your crew Win11's football teams all have 11 players on
            them. A maximum of 7 players from any one team may make up the
            remaining 11 players. of players There are a variety of combinations
            that can be used in the Win11 fantasy football teams, provided they
            fall within the credit limit of 100 and meet the eligibility
            requirements.
          </p>
          <div className="flex justify-center">
            <Image
              src={rulesimg}
              alt="/"
              className="h-[120px] w-[200px] sm:h-[190px] sm:w-[300px] lg:h-[200px] lg:w-[320px]"
            />
          </div>
          <p className="text-[#0B592A]  font-mono text-[10px] sm:text-[13px] lg:text-[14px] px-5 sm:px-20 lg:px-32 text-center pt-4 pb-4 ">
            It's time to choose the captain and vice-captain after you've chosen
            the team's eleven players. You receive 1.5 times as many points from
            the vice captain as from the captain. Therefore, selecting the most
            seasoned player as the captain and vice-captain is crucial because
            their choice can affect the outcome.
          </p>

          <h1 className=" text-[#00A547] font-bold font-mono text-[14px] sm:text-[20px] lg:text-[24px]  pt-4 text-center">
            Fantasy <span className="text-[#0169B6]"> Point System</span>
          </h1>
          <p className="text-[#0B592A]  font-mono text-[14px] pl-32 pr-32 text-center ">
            Attack
          </p>

          <div className="flex justify-around">
            <div className="pt-32 pl-10 hidden lg:block ">
              <Image src={CupImage} alt="/" className="h-[120px] w-[120px]" />
            </div>
            <div>
              <Image
                src={PointSystem}
                alt="/"
                className="h-[380px] w-[780px] sm:h-[380px] sm:w-[500px] lg:h-[400px] lg:w-[600px]"
              />
            </div>
            <div className="pt-32 pr-10 hidden lg:block">
              <Image src={CupImage} alt="/" className="h-[120px] w-[120px]" />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <div className="h-[30px] sm:h-[40px] lg:h-[40px]   w-[300px] sm:w-[540px] lg:w-[614px] ">
              <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] text-center  ">
                . The phrase "direct assist" refers to the final touch, cross,
                pass, and other touches that enable a goal to be scored during a
                game.
              </p>
              <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] text-center">
                . Here is a list of the additional fantasy football assist
                categories, in addition to direct assists:
              </p>
              <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] text-center ">
                . When a defender blocks a shot that the goalkeeper saves, the
                ball strikes the goalpost.
              </p>
              <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] text-center  ">
                . When a defender blocks a shot that the goalkeeper saves, the
                ball strikes the goalpost.
              </p>
              <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] text-center ">
                . if a pass, shot, or cross from a member of the opposing team
                results in an own goal.
              </p>
              <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] text-center ">
                . The final touch is considered to be the chance that was
                created, also known as the "key pass" (cross, pass, or other
                touch). It results in a shot, whether it hits the intended
                target or not.
              </p>
              <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] text-center  ">
                . Suppose a player in a fantasy football league receives the
                fantasy assist
              </p>
            </div>
          </div>
          {/* [//.............Defence...................//] */}

          <div className="flex justify-around pt-60 ">
            <div className="pt-32 pl-10 hidden lg:block">
              <Image src={CupImage} alt="/" height={110} width={120} />
            </div>
            <div>
              <p className="text-[#0B592A]  font-mono  text-center pt-10 pb-4 ">
                Defence
              </p>
              <Image
                src={Defence}
                alt="/"
                className="h-[140px] w-[280px] sm:h-[180px] sm:w-[300px] lg:h-[200px] lg:w-[320px] pl-8"
              />

              <p className="text-[#0B592A]  font-mono text-[12px] sm:text-[13px] lg:text-[14px] text-center pt-16 ">
                Cards along with other penalties
              </p>

              <div className="pt-4 pr-10 pb-8">
                <Image
                  src={Card}
                  alt="/"
                  className="h-[140px] w-[280px] sm:h-[180px] sm:w-[300px] lg:h-[200px] lg:w-[320px] pl-8"
                />
              </div>
            </div>

            <div className="pt-32 pl-10 hidden lg:block">
              <Image src={CupImage} alt="/" height={110} width={120} />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center pt-8">
            <div className="h-[30px] sm:h-[50px] lg:h-[60px] w-[240px] sm:w-[600px] lg:w-[740px] lg:pt-10 sm:pt-4 pb-16 sm:pb-10 lg:pb-0 ">
              <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] text-center  ">
                . The goals allowed are determined for players who are on the
                field at the time of the goal, regardless of their overall
                playing time.
              </p>
            </div>
            <div className="h-[40px] sm:h-[50px] lg:h-[60px] w-[230px] sm:w-[600px] lg:w-[740px] lg:pt-10 sm:pt-4 pb-16 sm:pb-10 lg:pb-0 ">
              <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] text-center  ">
                . When a player is sent off, they always receive a penalty
                whenever their team scores, even if the goals come after they
                leave the field.
              </p>
            </div>
            <div className="h-[40px] sm:h-[50px] lg:h-[60px] w-[230px] sm:w-[600px] lg:w-[740px] lg:pt-10 sm:pt-4  ">
              <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] text-center ">
                . The player only receives negative points for the red card if
                they receive two consecutive yellow cards or even one straight
                red card.
              </p>
            </div>
            <div className="h-[40px] sm:h-[50px] lg:h-[60px] w-[240px] sm:w-[600px] lg:w-[740px] lg:pt-10 sm:pt-5  pt-16 pb-4 sm:pb-10">
              <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] text-center ">
                . Total Fantasy football points will be affected if a player
                receives a red or yellow card for any behaviour that occurs off
                the field if they have already participated in the game and were
                substituted or if they enter the game as a substitute after
                receiving a yellow card.
              </p>
            </div>

            <div className="h-[40px] sm:h-[50px] lg:h-[60px] w-[240px] sm:w-[600px] lg:w-[740px] lg:pt-10 sm:pt-10 pt-28 ">
              <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px]text-center ">
                . Here is a list of recommendations for winning fantasy football
                games. Several club matches are regularly played prior to the
                start of any football tournament or season. You can select
                better players by keeping a close eye on these games. The bonus
                point system is the same across all fantasy sports websites.
                Choose players who can actually help your team score more
                points. Keep a close eye on each player's prior accomplishments.
                The Win11 app's comprehensive player statistics let you easily
                analyse every player. Planning is a key component of fantasy
                football. Continue strategizing and be prepared to switch
                players in the event of an injury or unexpected team change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
