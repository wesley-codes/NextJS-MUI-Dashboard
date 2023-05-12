"use client";
import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "../lib/mui";
import { tokens } from "./Theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Link from "next/link";

export default function SideBar() {
  const { collapseSidebar, collapsed } = useProSidebar();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    //fixes hydration
    setMounted(true);
  }, []);

  return (
    <Box
      sx={{
        "& .ps-menu-root": {
          background: `${colors.primary[400]} !important`,
        },

        "& .ps-menu-button:hover ": {
          color: "#868dfb !important",
          backgroundColor: "transparent !important",
        },
        "& .ps-active": {
          color: "#6870fa !important",
        },
      }}
    >
      {mounted && (
        <Sidebar>
          <Menu>
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => collapseSidebar()}
              icon={collapsed ? <MenuOutlinedIcon /> : undefined}
            >
              {!collapsed && (
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                  ml="15px"
                >
                  <IconButton>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {!collapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src="https://res.cloudinary.com/drh4lw1m7/image/upload/v1683640343/IMG_0747_jmrmd5.jpg"
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Eze Nnaemeka
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    Front-end Engineer
                  </Typography>
                </Box>
              </Box>
            )}
            {/* Menu */}
            <Box paddingLeft={collapsed ? undefined : "10%"}>
              <Item
                title="Dashboard"
                icon={<HomeOutlinedIcon />}
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Data
              </Typography>
              <Item
                title="Manage Team"
                icon={<PeopleOutlinedIcon />}
                to="/team"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Contacts Information"
                icon={<ContactsOutlinedIcon />}
                to="/contacts"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Invoices Balances"
                icon={<ReceiptOutlinedIcon />}
                to="/invoices"
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Pages
              </Typography>
              <Item
                title="Profile Form"
                icon={<PersonOutlinedIcon />}
                to="/form"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Calendar"
                icon={<CalendarTodayOutlinedIcon />}
                to="/calendar"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="FAQ"
                icon={<HelpOutlinedIcon />}
                to="/faq"
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Charts
              </Typography>
              <Item
                title="Bar Chart"
                icon={<BarChartOutlinedIcon />}
                to="/bar"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pie Chart"
                icon={<PieChartOutlineOutlinedIcon />}
                to="/pie"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Line Chart"
                icon={<TimelineOutlinedIcon />}
                to="/line"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Geography"
                icon={<MapOutlinedIcon />}
                to="/geography"
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </Sidebar>
      )}
    </Box>
  );
}

interface ItemType {
  title: string;
  to: string;
  selected: string;
  icon: JSX.Element;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Item = ({ title, to, icon, selected, setSelected }: ItemType) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // useEffect(() => {
  //   setSelected(selected);
  // }, [selected, to]);

  console.log(selected);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link href={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};
