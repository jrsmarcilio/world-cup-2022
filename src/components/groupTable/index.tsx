import { useEffect, useState } from "react";
import { TGroups } from "../../interfaces/Teams";
import Bandeira from "../bandeira";

type Props = { group: TGroups };

const GroupTable: React.FC<Props> = ({ group }) => {

  const [flags, setFlags] = useState<string[]>([]);

  useEffect(() => {
    const flags: string[] = [];
    console.log("🚀 ~ file: index.tsx ~ line 13 ~ flags", flags)
    group.teams?.forEach((team) => {
      flags.push(team.flag);
    });
    setFlags(flags);
  }, [group]);


  return (
    <div className="">
      <div className="flex justify-between py-4 flex-wrap">
        {flags && flags.map((url, index) => (
          <div key={index} className="shadow-md bg-white mb-3">
            <Bandeira url={url} borderRadius={false} width={50} height={50} />
          </div>
        ))}
      </div>
      <hr />
      {group.maths && group.maths.map((match) => {
        const localDate = new Date(match.local_date).toLocaleDateString('pt-BR');
        const hourTime = new Date(match.local_date).toLocaleTimeString('pt-BR');

        return (
          <div
            className="mb-2 flex rounded overflow-hidden shadow"
            key={match.id}
          >
            <div className="flex items-center p-3 bg-lime-600 text-white whitespace-nowrap flex-col">
              <p className="font-black">
                {localDate}
              </p>

              <p className="font-black">{hourTime}</p>
            </div>

            <div className="w-full px-3 flex justify-between flex-col p-1 rounded-r bg-gray-200">
              <div className="flex items-center justify-between ">
                <div className="flex items-center ">
                  <div className="overflow-hidden p-1">
                    <Bandeira
                      url={match.home_flag}
                      width={20}
                      height={20}
                      borderRadius={true}
                    ></Bandeira>{" "}
                    {/* <img src={match.home_flag} width={50} height={50} /> */}
                  </div>
                  <div className="ml-3 font-black">{match.home_team_en}</div>
                </div>
                <div className="font-black">{match.home_score}</div>
              </div>

              <div className="flex items-center justify-between ">
                <div className="flex items-center ">
                  <div className="overflow-hidden p-1">
                    <Bandeira
                      url={match.away_flag}
                      width={20}
                      height={20}
                      borderRadius={true}
                    />

                    {/* <img src={match.away_flag} width={50} height={50} /> */}
                  </div>
                  <div className="ml-3 font-black">{match.away_team_en}</div>
                </div>
                <div className="font-black">{match.away_score}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GroupTable;
