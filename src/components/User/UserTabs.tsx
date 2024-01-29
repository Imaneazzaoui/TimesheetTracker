import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  ThemeProvider,
} from "@material-tailwind/react";
import Projets from "./Projets";
import Contrat from "./Contrat";
import Mdp from "./Mdp";
import './UserTabs.css';
import { Box } from "@mui/material";
import Profile from "./Profile";

export function UserTabs() {
  const data = [
    {
      label: "Profil",
      value: "html",
      desc: <Profile/>
    },
    {
      label: "Mot de passe",
      value: "react",
      desc: <Mdp/>,
    },
    {
      label: "Contrat",
      value: "vue",
      desc: <Contrat/>,
    },
    {
      label: "Projets",
      value: "angular",
      desc: <Projets/>,
    },
  ];

  const theme = {
    tabsHeader: {
      styles: {
        base: {
          bg: "bg-indigo-500",
        },
      },
    },
  };

  return (
    <Tabs>
      <TabsHeader className="Tab-header">
        {data.map(({ label, value }) => (
          <Tab className="Tab" key={value} value={value}>
            <div className="Tab-content">{label}</div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>

    
  );
}

