import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next'
import Head from 'next/head'

import Content from "../components/content";
import Container from "../components/container";

import Expand from "../components/expand";
import GroupTable from "../components/groupTable";
import Navbar from "../components/navbar";
import Table from "../components/table";
import { TGroups, TTeams } from '../interfaces/Teams';
import { TMatch } from '../interfaces/Match';

const TablePage: NextPage = () => {
  const [groups, setGroups] = useState<TGroups[]>();

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.clear();
      router.push('/');
    }

    fetch('/api/teams', { headers: { Authorization: `${token}` } }).then((res) => res.json()).then((result) => {
      const data: TTeams[] = result.data;
      
      const groups: TGroups[] = data.reduce((acc: TGroups[], team: TTeams) => {
        const group = acc.find((g) => g.name === team.groups);
        if (group && group.teams) group.teams.push(team);
        else acc.push({ name: team.groups, teams: [team] });
        return acc;
      }, []).sort((a, b) => a.name.localeCompare(b.name));
      setGroups(groups);
    }).catch((err) => {
      console.error(err);
    });

    fetch('/api/matchs', { headers: { Authorization: `${token}` } }).then((res) => res.json()).then((result) => {
      const data: TMatch[] = result.data;

      setGroups((groups) => {
        if (groups) {
          return groups.map((group) => {
            group.maths = data.filter((match) => match.group === group.name);
            return group;
          });
        }
        return groups;
      });
      console.log("🚀 ~ file: table.tsx ~ line 58 ~ groups", groups)
    }).catch((err) => {
      console.log(err);
    });

  }, []);

  return (
    <Container>
      <Head>
        <title>Home | World Cup 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Content className="p-4 flex flex-col justify-between gap-3">
        <Table></Table>
      </Content>

      <Content className="p-4 flex flex-col justify-between gap-3">
        {groups?.map((group, index: number) => (
          <Expand key={index} title={group.name}>
            <GroupTable group={group}></GroupTable>
          </Expand>
        ), [])}
      </Content>

    </Container>

  )
}

export default TablePage
