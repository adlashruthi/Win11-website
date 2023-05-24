import Image from "next/image";
import RightImg from "/public/assets/fantacyimg/Group 41837.png";
import CupImage from "/public/assets/Group (2).png";
// {/* <Image src={RightImg} alt="/" className="w-[25px] h-[25px]" /> */}

export default function Tips() {
  return (
    <div className="sm:pb-24  lg:pb-0">
      <div className="bg-[url('/assets/fantacyimg/Group42293.svg')] lg:h-[500vh] sm:h-[300vh] h-[540vh]  bg-no-repeat bg-cover">
        {/* //............cup image............... */}
        <div className="flex justify-around">
          <div className="pt-72">
            <Image
              src={CupImage}
              alt="/"
              className="lg:h-[220px] sm:h-[150px] lg:w-[240px] sm:w-[180px] pl-9 hidden sm:block "
            />
          </div>

          <div className="lg:pt-52 sm:pt-52 pt-64">
            <h1 className=" text-[#00A547] font-bold font-mono text-[16px] sm:text-[20px] lg:text-[24px]  pb-4 text-center">
              Tips{" "}
              <span className="text-[#0169B6] font-bold font-mono text-[16px] sm:text-[24px] lg:text-[24px]">
                For Fantasy Cricket
              </span>
            </h1>

            <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[12px] lg:text-[14px] px-5 sm:px-20 lg:px-28 text-center  pb-2 ">
              This section will be divided into two sections: before the toss
              and after the toss.
            </p>
            <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[12px] lg:text-[14px] px-5 sm:px-20 lg:px-28 text-center  pb-2   ">
              Before the toss, you should do the following:
            </p>
            <div className="flex justify-center pt-2">
              <Image
                src={RightImg}
                alt="/"
                className="w-[20px] h-[20px] ml-6 lg:ml-0"
              />
              <p className="text-[12px] text-[#0B592A] text-center font-mono lg:pl-3 lg:w-[410px] sm:w-[330px] w-[290px]">
                Play only the games you are reasonably knowledgeable about.
              </p>
            </div>

            <div className="flex justify-center pt-2 ">
              <Image
                src={RightImg}
                alt="/"
                className="w-[20px] h-[20px] ml-6 lg:ml-0"
              />
              <p className="text-[12px] text-[#0B592A] text-center font-mono lg:pl-3 lg:w-[410px] sm:w-[330px] w-[290px] sm:pl-4 pl-2">
                Check the weather forecast, pitch report, probable 11 score,
                average score on the field, strike rates, economy rates, and
                other information prior to the game.
              </p>
            </div>

            <div className="flex justify-center pt-2 ">
              <Image
                src={RightImg}
                alt="/"
                className="w-[20px] h-[20px] ml-6 lg:ml-0"
              />
              <p className="text-[12px] text-[#0B592A] text-center font-mono lg:pl-3 lg:w-[410px] sm:w-[330px] w-[290px] sm:pl-4 pl-2">
                The Win11 app itself has comprehensive statistics that can be
                examined.
              </p>
            </div>

            <div className="flex justify-center pt-2 ">
              <Image
                src={RightImg}
                alt="/"
                className="w-[20px] h-[20px] ml-6 lg:ml-0"
              />
              <p className="text-[12px] text-[#0B592A] text-center font-mono lg:pl-3 lg:w-[410px] sm:w-[330px] w-[290px] sm:pl-4 pl-2">
                Read through any team-related news stories, such as player
                injuries or rest periods, that may have an effect on the teams'
                balance.
              </p>
            </div>

            <div className="flex justify-center pt-2 ">
              <Image
                src={RightImg}
                alt="/"
                className="w-[20px] h-[20px] ml-6 lg:ml-0"
              />
              <p className="text-[12px] text-[#0B592A] text-center font-mono lg:pl-3 lg:w-[410px] sm:w-[330px] w-[290px] sm:pl-4 pl-2">
                Since the spots fill up quickly, enter the mega contest as soon
                as it becomes available on the app (typically 48 hours before
                the game is played).
              </p>
            </div>

            <div className="flex justify-center pt-2 ">
              <Image
                src={RightImg}
                alt="/"
                className="w-[20px] h-[20px] ml-6 lg:ml-0"
              />
              <p className="text-[12px] text-[#0B592A] text-center font-mono lg:pl-3 lg:w-[410px] sm:w-[330px] w-[290px] sm:pl-4 pl-2">
                Explore the 'Winners' section of the Win11 app to learn about
                the types of teams that various winners are forming.
              </p>
            </div>
            <p className="text-[13px] text-[#0B592A] text-center font-mono pl-44 w-[580px] pt-1 hidden sm:block">
              After the coin toss (and team announcements), what to do:
            </p>

            <div className="flex justify-center pt-2 ">
              <Image
                src={RightImg}
                alt="/"
                className="w-[20px] h-[20px] ml-6 lg:ml-0"
              />
              <p className="text-[12px] text-[#0B592A] text-center font-mono lg:pl-3 lg:w-[410px] sm:w-[330px] w-[290px] sm:pl-4 pl-2">
                Despite being obvious, you should only choose players who are in
                the starting eleven.
              </p>
            </div>

            <div className="flex justify-center pt-2 ">
              <Image
                src={RightImg}
                alt="/"
                className="w-[20px] h-[20px] ml-6 lg:ml-0"
              />
              <p className="text-[12px] text-[#0B592A] text-center font-mono lg:pl-3 lg:w-[410px] sm:w-[330px] w-[290px] sm:pl-4 pl-2">
                Conduct a comprehensive analysis in accordance with your
                knowledge and abilities to make your Win11
              </p>
            </div>

            <div className="flex justify-center pt-2 ">
              <Image
                src={RightImg}
                alt="/"
                className="w-[20px] h-[20px] ml-6 lg:ml-0"
              />
              <p className="text-[12px] text-[#0B592A] text-center font-mono lg:pl-3 lg:w-[410px] sm:w-[330px] w-[290px] sm:pl-4 pl-2">
                Try to sign up with several teams.
              </p>
            </div>

            <div className="flex justify-center pt-2 ">
              <Image
                src={RightImg}
                alt="/"
                className="w-[20px] h-[20px] ml-6 lg:ml-0"
              />
              <p className="text-[12px] text-[#0B592A] text-center font-mono lg:pl-3 lg:w-[410px] sm:w-[330px] w-[290px] sm:pl-4 pl-2">
                When building your team, avoid using tutorials or other content
                from websites you can't trust. Utilize your understanding of
                cricket.
              </p>
            </div>
          </div>

          {/*..................cupimage ................*/}
          <div className="pt-72">
            <Image
              src={CupImage}
              alt="/"
              className="lg:h-[220px] sm:h-[150px] lg:w-[240px] sm:w-[180px] pr-9  hidden sm:block"
            />
          </div>
        </div>
        <p className="text-[12px] text-[#0B592A] text-center font-mono  lg:w-[790px] sm:w-[650px] w-[320px] sm:pl-32 lg:pl-96  pl-12">
          You will learn more the more you play. You do gain a better
          understanding of the Fantasy cricket format as you play more.
          <br />{" "}
          <span className="text-[#333333] font-semibold">
            {" "}
            Visit Fantasy cricket tips{" "}
          </span>{" "}
          if you're looking for more in-depth advice.
        </p>

        <h1 className="text-[#0169B6] font-bold font-mono text-[16px] sm:text-[24px] lg:text-[26px] pl-4 pt-6 text-center pb-2">
          Types of
          <span className="text-[#00A547]"> Contests </span> in Fantasy Cricket
        </h1>
        <p className="text-[#0B592A]  font-mono text-[14px] text-center pb-2 font-semibold">
          There are primarily four types of contests in fantasy cricket:
        </p>

        <p className="text-[14px] text-[#0B592A] text-center font-mono lg:pl-0 sm:pl-4 px-8 sm:pr-0">
          {" "}
          . Every cricket team you build on Win 11 must have 11 players
        </p>
        <p className="text-[#0B592A]  font-mono text-[14px] text-center pb-2 ">
          {" "}
          . Every cricket team you build on Win 11 must have 11 players
        </p>
        <p className="text-[#0B592A]  font-mono text-[14px] text-center pb-2 ">
          . Every cricket team you build on Win 11 must have 11 players
        </p>

        <h1 className=" text-[#00A547] font-bold font-mono text-[18px] sm:text-[24px] lg:text-[28px]   pb-4 text-center pt-3">
          Winning Money{" "}
          <span className="text-[#0169B6] font-bold font-mono text-[18px] sm:text-[24px] lg:text-[28px] ">
            Playing Fantasy Cricket
          </span>
        </h1>

        <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] px-5 sm:px-20 lg:px-28 text-center  pb-2 sm:pb-5 lg:pb-8 ">
          Winning money via playing daily fantasy cricket online requires the
          ability to inspect the team and build a solid team. To know how to win
          in Fantasy Cricket, it is important to understand the Fantasy Cricket
          game first. As we have discussed how you can plan to build a winning
          team on the fantasy app, you’ll be able to amplify your fantasy team
          to make sure the players get you the points you need to win the game.
          Winning money on Fantasy Cricket apps such as Win 11 is now easier due
          to the accumulated knowledge of players from worldwide. Here’s how you
          can start your winning streak by playing Fantasy Cricket, wisely!
        </p>
        <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] px-5 sm:px-20 lg:px-28 text-center  pb-2 sm:pb-5 lg:pb-8 ">
          Winning money via playing daily fantasy cricket online requires the
          ability to inspect the team and build a solid team. To know how to win
          in Fantasy Cricket, it is important to understand the Fantasy Cricket
          game first. As we have discussed how you can plan to build a winning
          team on the fantasy app, you’ll be able to amplify your fantasy team
          to make sure the players get you the points you need to win the game.
          Winning money on Fantasy Cricket apps such as Win 11 is now easier due
          to the accumulated knowledge of players from worldwide. Here’s how you
          can start your winning streak by playing Fantasy Cricket, wisely!
        </p>

        <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] px-5 sm:px-20 lg:px-28 text-center  pb-2 sm:pb-5 lg:pb-8 ">
          Winning money via playing daily fantasy cricket online requires the
          ability to inspect the team and build a solid team. To know how to win
          in Fantasy Cricket, it is important to understand the Fantasy Cricket
          game first. As we have discussed how you can plan to build a winning
          team on the fantasy app, you’ll be able to amplify your fantasy team
          to make sure the players get you the points you need to win the game.
          Winning money on Fantasy Cricket apps such as Win 11 is now easier due
          to the accumulated knowledge of players from worldwide. Here’s how you
          can start your winning streak by playing Fantasy Cricket, wisely!
        </p>

        <h1 className=" text-[#0169B6] font-bold font-mono text-[18px] sm:text-[24px] lg:text-[30px]  pb-4 text-center pt-3">
          How much can you{" "}
          <span className="text-[#00A547] font-bold font-mono text-[18px] sm:text-[24px] lg:text-[30px]">
            win on Fantasy Cricket?
          </span>
        </h1>
        <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] px-5 sm:px-20 lg:px-28 text-center  pb-2 sm:pb-5 lg:pb-8 ">
          There are opportunities to play fantasy cricket daily and win crores.
          As you would have seen above in the list of winners, you can win
          anywhere from thousands, lakhs to crores if the Win 11 team created by
          you features in the winning list.
        </p>
        <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] px-5 sm:px-20 lg:px-28 text-center  pb-2 sm:pb-5 lg:pb-8 ">
          There are opportunities to play fantasy cricket daily and win crores.
          As you would have seen above in the list of winners, you can win
          anywhere from thousands, lakhs to crores if the Win 11 team created by
          you features in the winning list.
        </p>

        {/* {/.........  How much can you............../} */}

        <h1 className=" text-[#00A547] font-bold font-mono  text-[18px] sm:text-[24px] lg:text-[30px]  pb-4 text-center pt-3">
          How much can you{" "}
          <span className="text-[#0169B6] font-bold font-mono text-[18px] sm:text-[24px] lg:text-[30px]">
            win on Fantasy Cricket?
          </span>
        </h1>
        <div className="flex justify-between">
          <div className="pt-16 pl-14">
            <Image src={CupImage} alt="/" height={280} width={250} />
          </div>
          <div>
            <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] text-center  pb-2 sm:pb-5 lg:w-[1000px] sm:w-[900px] w-[600px] lg:pl-36 sm:pl-20 lg:pr-20  pr-80">
              If you are new to the world of Fantasy sports, worry not. There is
              a way you can still compete with participants by creating a team
              of your own without paying an entry fee. Please note, that you
              will not be eligible to win any prize amount as these are
              ‘Practice Contests’. So, how do you participate in free Fantasy
              cricket contests? Here are the steps:
            </p>
            <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] text-center  pb-2 sm:pb-5 lg:w-[1000px] sm:w-[900px] w-[600px] lg:pl-16 sm:pl-20 lg:pr-20  pr-80">
              {" "}
              . Every cricket team you build on Win 11 must have 11 players
            </p>

            <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] text-center  pb-2 sm:pb-5 lg:w-[1000px] sm:w-[900px] w-[600px] lg:pl-16 sm:pl-20 lg:pr-20  pr-80">
              {" "}
              . Every cricket team you build on Win 11 must have 11 players
            </p>

            <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] text-center  pb-2 sm:pb-5 lg:w-[1000px] sm:w-[900px] w-[600px] lg:pl-16 sm:pl-20 lg:pr-20  pr-80">
              {" "}
              . Every cricket team you build on Win 11 must have 11 players
            </p>

            <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] text-center  pb-2 sm:pb-5 lg:w-[1000px] sm:w-[900px] w-[600px] lg:pl-16 sm:pl-20 lg:pr-20  pr-80">
              {" "}
              . Every cricket team you build on Win 11 must have 11 players
            </p>
            <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] text-center  pb-2 sm:pb-5 lg:w-[1000px] sm:w-[900px] w-[600px] lg:pl-36 sm:pl-20 lg:pr-20  pr-80">
              There are opportunities to play fantasy cricket daily and win
              crores. As you would have seen above in the list of winners, you
              can win anywhere from thousands, lakhs to crores if the Win 11
              team created by you features in the winning list.
            </p>

            {/* //............Changing Team Names in Fantasy Cricket...................... */}

            <h1 className="text-[#0169B6] font-bold font-mono  text-[16px] sm:text-[24px] lg:text-[26px]  pt-6 text-center pb-2 sm:pr-48  lg:w-[700px] sm:w-[700px] w-[200px] lg:pl-36 sm:pl-36 lg:pr-0">
              Changing
              <span className="text-[#00A547]"> Team Names </span> in Fantasy
              Cricket
            </h1>

            <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] text-center  pb-2 sm:pb-5 lg:w-[1000px] sm:w-[900px] w-[600px] lg:pl-36 sm:pl-20 lg:pr-20  pr-80">
              Want to change your team name while playing IPL T20 Fantasy
              Cricket or any other cricket tournament fantasy league? Here’s how
              to do it:
            </p>
            <div className="flex flex-col justify-center items-center pb-4  ">
              <button className="text-white text-center bg-[#00A547] rounded-md lg:h-[52px] sm:h-[52px] lg:w-[760px] sm:w-[450px] h-[120px] w-[280px] ml-2 pl-3 pr-3  sm:mr-64 lg:mr-36 mr-96">
                PS: If you've changed your team name after registration, you
                Follow Win 11 For Today’s Fantasy Cricket Match Prediction
              </button>
            </div>
            {/* <div className="flex flex-col justify-start items-start  mr-[900px]">
              <button className="text-white text-center bg-[#00A547] rounded-md lg:h-[30px] lg:w-[532px] sm:w-[400px] w-[320px]  ">
                Follow Win 11 For Today’s Fantasy Cricket Match Prediction
              </button>
            </div> */}

            <p className="text-[#0B592A]  font-mono text-[11px] sm:text-[13px] lg:text-[14px] text-center  pb-2 sm:pb-5 lg:w-[1000px] sm:w-[900px] w-[600px] lg:pl-36 sm:pl-20 lg:pr-20  pr-80">
              There are opportunities to play fantasy cricket daily and win
              crores. As you would have seen above in the list of winners, you
              can win anywhere from thousands, lakhs to crores if the Win 11
              team created by you features in the winning list.
            </p>

            <h1 className="text-[#0169B6] font-bold font-mono  text-[14px] sm:text-[24px] lg:text-[24px]  pt-6 text-center pb-2 sm:pr-48  lg:w-[700px] sm:w-[800px] w-[400px] lg:pl-36 sm:pl-36 pr-28  lg:pr-0">
              What to remember while changing your team name in Fantasy Cricket:
            </h1>

            {/* <div className="flex justify-center "> */}
            <div className="grid lg:grid-cols-2 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-4 mr-[400px] lg:mr-0 sm:mr-36">
              <div className="flex justify-center pt-2 lg:pl-24  sm:pr-56 sm:pl-0 sm:ml-0 ml-4">
                <Image src={RightImg} alt="/" className="w-[20px] h-[20px]" />
                <p className="text-[13px] text-[#0B592A] text-center font-mono  w-[310px]">
                  Check the players’{" "}
                  <span className="text-[#0169b6]"> recent performances </span>
                </p>
              </div>

              <div className="flex justify-center pt-2 pl-3 sm:pr-56 lg:pr-80 sm:ml-0 ml-4">
                <Image src={RightImg} alt="/" className="w-[20px] h-[20px]" />
                <p className="text-[13px] text-[#0B592A] text-center font-mono  w-[310px]">
                  Check the players’{" "}
                  <span className="text-[#0169b6]"> recent performances </span>
                </p>
              </div>

              {/* <div className="flex justify-center  pt-5 "> */}
              <div className="flex justify-center pt-2 lg:pl-24  sm:pr-56 sm:pl-0 sm:ml-0 ml-4">
                <Image src={RightImg} alt="/" className="w-[20px] h-[20px]" />
                <p className="text-[13px] text-[#0B592A] text-center font-mono  w-[310px]">
                  Check the players’{" "}
                  <span className="text-[#0169b6]"> recent performances </span>
                </p>
              </div>

              <div className="flex justify-center pt-2 pl-3 sm:pr-56 lg:pr-80 sm:ml-0 ml-4">
                <Image src={RightImg} alt="/" className="w-[20px] h-[20px]" />
                <p className="text-[13px] text-[#0B592A] text-center font-mono  w-[310px]">
                  Check the players’{" "}
                  <span className="text-[#0169b6]"> recent performances </span>
                </p>
              </div>
            </div>

            {/* ......................................................................... */}
            <div className="flex flex-col justify-center items-center pb-4 pt-10">
              <button className="text-white text-center bg-[#00A547] rounded-md lg:h-[52px] sm:h-[52px] lg:w-[760px] sm:w-[450px] h-[120px] w-[280px] ml-2 pl-3 pr-3  sm:mr-64 lg:mr-36 mr-96">
                PS: If you've changed your team name after registration, you
                won't see the pencil icon next to your team name and won't be
                able to change it again!
              </button>
            </div>
          </div>

          <div className="pt-16 pr-14">
            <Image src={CupImage} alt="/" height={280} width={250} />
          </div>
        </div>
      </div>
    </div>
  );
}
